/* eslint-disable @typescript-eslint/no-unused-vars */
import Theme from '@yfill/theme';
declare class AntDesignColors {
  static getColorGroup(color: string, isLight = true): string[]
  static install(): void
  static uninstall(theme: Theme): void
}
declare module '@yfill/theme' {
  interface Theme {
    setMainColor(color: string): Theme
  }
}
export default AntDesignColors;
