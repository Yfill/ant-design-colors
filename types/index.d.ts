/* eslint-disable @typescript-eslint/no-unused-vars */
import Theme from '@yfill/theme';
declare class AntDesignColors {
  static install(): void
}
declare module '@yfill/theme' {
  interface Theme {
    setMainColor(color: string): Theme
  }
}
export default AntDesignColors;
