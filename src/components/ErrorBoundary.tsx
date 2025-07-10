import React, { Component, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { withTranslation, WithTranslation } from 'react-i18next';

interface ErrorBoundaryProps extends WithTranslation {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch and display React rendering errors
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to console
    console.error("Error caught by boundary:", error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { t } = this.props;
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.reset);
      }

      // Default error UI
      return (
        <div className="flex items-center justify-center min-h-[200px] p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-destructive flex-shrink-0 mt-0.5" />
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">{t('error_boundary.something_wrong')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('error_boundary.render_error')}
                  </p>
                  {this.state.error.message && (
                    <details className="mt-2">
                      <summary className="text-sm cursor-pointer text-muted-foreground hover:text-foreground">
                        {t('error_boundary.error_details')}
                      </summary>
                      <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                        {this.state.error.message}
                      </pre>
                    </details>
                  )}
                  <Button
                    onClick={this.reset}
                    size="sm"
                    className="mt-4"
                  >
                    {t('error_boundary.try_again')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export const TranslatedErrorBoundary = withTranslation()(ErrorBoundary); 