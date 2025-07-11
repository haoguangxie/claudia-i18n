import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import i18n from 'i18next';
import './i18n';
import App from "./App";
import { TranslatedErrorBoundary } from "./components/ErrorBoundary";
import "./assets/shimmer.css";
import "./styles.css";

// I18nLoader组件，确保i18n初始化完成后再渲染应用
const I18nLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(i18n.isInitialized);
  
  useEffect(() => {
    if (i18n.isInitialized) {
      setIsInitialized(true);
      return;
    }
    
    const checkInitialized = () => {
      console.log("Checking i18n initialization status:", i18n.isInitialized);
      if (i18n.isInitialized) {
        setIsInitialized(true);
        return;
      }
      setTimeout(checkInitialized, 50); // 每50ms检查一次
    };
    
    checkInitialized();
    
    // 另一种方式：监听初始化完成事件
    const initHandler = () => {
      console.log("i18n initialized via event");
      setIsInitialized(true);
    };
    
    i18n.on('initialized', initHandler);
    return () => {
      i18n.off('initialized', initHandler);
    };
  }, []);
  
  if (!isInitialized) {
    // 显示加载中状态
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem',
        backgroundColor: '#000',
        color: '#fff'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Claudia
        </div>
        <div style={{ fontSize: '16px' }}>
          正在加载...
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

// 确保在DOM加载完成后再渲染应用
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <I18nLoader>
        <TranslatedErrorBoundary>
          <App />
        </TranslatedErrorBoundary>
      </I18nLoader>
    </React.StrictMode>,
  );
});
