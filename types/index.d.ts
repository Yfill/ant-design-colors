import Theme from '@yfill/theme';
declare module '@yfill/theme/types/extentions' {
    interface Extentions {
        setMainColor(color: string): Theme;
    }
}
declare class AntDesignColors {
    static getColorGroup(color: string, isLight?: boolean): string[];
    static install(theme: Theme, color: string): void;
    static uninstall(theme: Theme): void;
}
export default AntDesignColors;
