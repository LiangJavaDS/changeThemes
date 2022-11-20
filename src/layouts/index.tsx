import { useEffect } from 'react';
import styles from './index.less';
import { ThemeKey } from './themeConfig';
import { changeTheme, getThemeConfig, getThemeKey, initTheme, setThemeKey } from './utils';

export default function Layout() {

  useEffect(() => initTheme(), [])

  const onClick = () => {
    const themeKey = getThemeKey();
    const newKey = themeKey === ThemeKey.themeA ? ThemeKey.themeB : ThemeKey.themeA
    setThemeKey(newKey)
    changeTheme(newKey, getThemeConfig(newKey))
  }

  return (
    <button className={styles.btn} onClick={onClick}>换肤</button>
  );
}
