import React, { ComponentType, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { safeT } from '../i18n';

/**
 * 高阶组件，用于包装需要翻译的组件，确保它们始终能够安全使用t函数
 * 
 * @param WrappedComponent 需要包装的组件
 * @returns 包装后的组件
 */
export const withSafeTranslation = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithSafeTranslation = (props: P) => {
    // 尝试使用react-i18next的useTranslation钩子
    const { t: reactI18nT, ready: i18nReady } = useTranslation();
    const [useSafe, setUseSafe] = useState(!i18nReady);
    
    // 判断是否需要使用安全的t函数
    useEffect(() => {
      if (i18nReady && typeof reactI18nT === 'function') {
        setUseSafe(false);
      } else {
        setUseSafe(true);
        console.warn('Using safe translation function fallback in component:', 
          WrappedComponent.displayName || WrappedComponent.name || 'Component');
      }
    }, [i18nReady, reactI18nT]);
    
    // 提供一个包含t函数的props
    const enhancedProps = {
      ...props,
      t: useSafe ? safeT : reactI18nT, // 如果i18n未就绪，使用安全函数
      safeT // 始终提供safeT作为备选
    };
    
    return <WrappedComponent {...enhancedProps as P} />;
  };
  
  // 设置displayName以便于调试
  WithSafeTranslation.displayName = `WithSafeTranslation(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  
  return WithSafeTranslation;
};

// 导出一个更简单的版本，可以直接在组件中使用
export const useSafeTranslation = () => {
  const { t: reactI18nT, ready, ...rest } = useTranslation();
  
  return {
    t: ready ? reactI18nT : safeT,
    safeT,
    ready,
    ...rest
  };
}; 