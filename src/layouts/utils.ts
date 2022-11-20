import { updateCSS } from 'rc-util/es/Dom/dynamicCSS'
import themeConfig, { ThemeKey } from '@/layouts/themeConfig'

const THEME_LOCAL_KEY = 'THEME_LOCAL_KEY'
export function getThemeKey(): ThemeKey | null {
    return localStorage.getItem(THEME_LOCAL_KEY) as ThemeKey
}

export function setThemeKey(value: string) {
    localStorage.removeItem(THEME_LOCAL_KEY)
    localStorage.setItem(THEME_LOCAL_KEY, value)
}

export function getThemeConfig(key: ThemeKey) {
    return themeConfig[key] ?? {}
}

export function initTheme() {
    const themeKey = getThemeKey();
    if (!themeKey) setThemeKey(ThemeKey.themeA);
    changeTheme(themeKey!, getThemeConfig(themeKey!))
}

type ThemeConfig = Record<string, string>;
const dynamicStyleMark = `${Date.now()}-${Math.random()}-dynamic-theme`
export function changeTheme(themeKey: string, themeConfig: ThemeConfig) {
    if (!themeConfig) return;
    const customVariableColors: string[] = [];
    Object.entries(themeConfig).forEach(([key, value]) => {
        customVariableColors.push(`--${key}:${value};`);
    });
    const primaryColor = themeConfig["primary-color"];
    if (!primaryColor) throw Error('未配置primary-color变量');
    const allColors = [...customVariableColors];
    // :root这个css伪类匹配文档树的根元素，除了表示<html>元素外，除了优先级更高，和html选择器相同
    updateCSS(
        "\n :root{\n  ".concat(allColors.join("\n"), "\n }\n "),
        dynamicStyleMark
    );
    const html = document.getElementsByTagName('html')[0];
    if (html) html.className = themeKey
}

type Theme = {
    primaryColor: string;
    successColor: string,
    errorColor: string,
    warningColor: string,
    infoColor: string
}