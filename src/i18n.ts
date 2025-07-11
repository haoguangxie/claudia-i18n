import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

console.log('Initializing i18n...');

// 创建一个全局安全的翻译函数
const safeTranslate = (key: string, options?: any): string | object => {
  // 如果i18n未初始化或t函数不可用，使用应急翻译
  if (!i18n.isInitialized || !i18n.t) {
    console.warn('Using fallback translation for:', key);
    
    // 定义常用翻译键的应急翻译
    const fallbackTranslations: Record<string, string> = {
      // 欢迎页面
      'welcome.title': '欢迎使用 Claudia',
      'welcome.agents': 'CC 智能体',
      'welcome.projects': 'CC 项目',
      
      // 顶部栏
      'topbar.usage_dashboard': '用量统计',
      'topbar.claude_md': 'CLAUDE.md',
      'topbar.mcp': 'MCP',
      'topbar.settings': '设置',
      'topbar.about': '关于',
      'topbar.checking': '正在检查...',
      'topbar.claude_code_version': 'Claude Code v1.0',
      'topbar.claude_code': 'Claude Code',
      
      // Claude会话
      'claude_code_session.title': 'Claude Code 会话',
      'claude_code_session.no_project': '未选择项目',
      'claude_code_session.project_directory': '项目目录',
      
      // 悬浮输入框
      'floating_prompt.input_placeholder': '输入提示词，/ 可用命令，@ 可选文件...',
      'floating_prompt.drag_placeholder': '拖拽文件到此处以附加...',
      'floating_prompt.stop': '停止',
      'floating_prompt.send_hint': '回车发送，/ 可用命令，@ 可选文件。',
      
      // 消息流
      'stream_message.tokens': '代币',
      
      // 错误边界
      'error_boundary.something_wrong': '出现了问题',
      'error_boundary.render_error': '渲染该组件时发生错误。',
      'error_boundary.error_details': '错误详情',
      'error_boundary.try_again': '重试'
    };
    
    // 尝试从fallback中获取翻译，如果没有则返回键名
    let result = fallbackTranslations[key] || key;
    
    // 处理简单的插值
    if (options) {
      Object.keys(options).forEach(optKey => {
        const pattern = new RegExp(`\\{\\{${optKey}\\}\\}`, 'g');
        result = result.replace(pattern, options[optKey]);
      });
    }
    
    return result;
  }
  
  // 如果i18n已初始化，正常使用t函数
  try {
    return i18n.t(key, options);
  } catch (err) {
    console.error('Translation error:', err);
    return key; // 出错时返回键名
  }
};

// 全局变量，使其在所有地方都可用
(window as any).t = safeTranslate;
(window as any).safeT = safeTranslate;

// 确保在React组件外也可使用t函数
if (typeof global !== 'undefined') {
  (global as any).t = safeTranslate;
}

try {
  // 同步初始化i18n，确保在应用启动前完成初始化
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslation },
        zh: { translation: zhTranslation }
      },
      lng: 'zh', // 默认语言为中文
      fallbackLng: 'zh', // 优先回退到中文
      interpolation: {
        escapeValue: false
      },
      initImmediate: false, // 同步初始化，不要使用异步
      debug: true // 启用调试日志
    });
  
  console.log('i18n initialized successfully:', i18n.isInitialized);
  console.log('Current language:', i18n.language);
  console.log('Sample translation test - welcome.title:', i18n.t('welcome.title'));
} catch (error) {
  console.error('Failed to initialize i18n:', error);
}

// 简单的安全检查  
if (!i18n.isInitialized) {
  console.error('i18n initialization failed!');
} else {
  console.log('i18n is ready to use');
}

// 导出安全翻译函数以便在组件中导入使用
export const safeT = safeTranslate;
export default i18n; 