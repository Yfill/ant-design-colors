import Theme from '@yfill/theme';

type ColorDesc = {
    dark: {
        [color: string]: string[]
    },
    light: {
        [color: string]: string[]
    },
    neutralColors: string[]
}
const colorDesc: ColorDesc = {
    dark: {
        'red': ['#2a1215', '#431418', '#58181c', '#791a1f', '#a61d24', '#d32029', '#e84749', '#f37370', '#f89f9a', '#fac8c3'],
        'volcano': ['#2b1611', '#441d12', '#592716', '#7c3118', '#aa3e19', '#d84a1b', '#e87040', '#f3956a', '#f8b692', '#fad4bc'],
        'orange': ['#2b1d11', '#442a11', '#593815', '#7c4a15', '#aa6215', '#d87a16', '#e89a3c', '#f3b765', '#f8cf8d', '#fae3b7'],
        'gold': ['#2b2111', '#443111', '#594214', '#7c5914', '#aa7714', '#d89614', '#e8b339', '#f3cc62', '#f8df8b', '#faedb5'],
        'yellow': ['#2b2611', '#443b11', '#595014', '#7c6e14', '#aa9514', '#d8bd14', '#e8d639', '#f3ea62', '#f8f48b', '#fafab5'],
        'lime': ['#1f2611', '#2e3c10', '#3e4f13', '#536d13', '#6f9412', '#8bbb11', '#a9d134', '#c9e75d', '#e4f88b', '#f0fab5'],
        'green': ['#162312', '#1d3712', '#274916', '#306317', '#3c8618', '#49aa19', '#6abe39', '#8fd460', '#b2e58b', '#d5f2bb'],
        'cyan': ['#112123', '#113536', '#144848', '#146262', '#138585', '#13a8a8', '#33bcb7', '#58d1c9', '#84e2d8', '#b2f1e8'],
        'blue': ['#111d2c', '#112a45', '#15395b', '#164c7e', '#1765ad', '#177ddc', '#3c9ae8', '#65b7f3', '#8dcff8', '#b7e3fa'],
        'geekblue': ['#131629', '#161d40', '#1c2755', '#203175', '#263ea0', '#2b4acb', '#5273e0', '#7f9ef3', '#a8c1f8', '#d2e0fa'],
        'purple': ['#1a1325', '#24163a', '#301c4d', '#3e2069', '#51258f', '#642ab5', '#854eca', '#ab7ae0', '#cda8f0', '#ebd7fa'],
        'magenta': ['#291321', '#40162f', '#551c3b', '#75204f', '#a02669', '#cb2b83', '#e0529c', '#f37fb7', '#f8a8cc', '#fad2e3'],
        'grey': ['#151515', '#1f1f1f', '#2d2d2d', '#393939', '#494949', '#5a5a5a', '#6a6a6a', '#7b7b7b', '#888888', '#969696']
    },
    light: {
        'red': ['#fff1f0', '#ffccc7', '#ffa39e', '#ff7875', '#ff4d4f', '#f5222d', '#cf1322', '#a8071a', '#820014', '#5c0011'],
        'volcano': ['#fff2e8', '#ffd8bf', '#ffbb96', '#ff9c6e', '#ff7a45', '#fa541c', '#d4380d', '#ad2102', '#871400', '#610b00'],
        'orange': ['#fff7e6', '#ffe7ba', '#ffd591', '#ffc069', '#ffa940', '#fa8c16', '#d46b08', '#ad4e00', '#873800', '#612500'],
        'gold': ['#fffbe6', '#fff1b8', '#ffe58f', '#ffd666', '#ffc53d', '#faad14', '#d48806', '#ad6800', '#874d00', '#613400'],
        'yellow': ['#feffe6', '#ffffb8', '#fffb8f', '#fff566', '#ffec3d', '#fadb14', '#d4b106', '#ad8b00', '#876800', '#614700'],
        'lime': ['#fcffe6', '#f4ffb8', '#eaff8f', '#d3f261', '#bae637', '#a0d911', '#7cb305', '#5b8c00', '#3f6600', '#254000'],
        'green': ['#f6ffed', '#d9f7be', '#b7eb8f', '#95de64', '#73d13d', '#52c41a', '#389e0d', '#237804', '#135200', '#092b00'],
        'cyan': ['#e6fffb', '#b5f5ec', '#87e8de', '#5cdbd3', '#36cfc9', '#13c2c2', '#08979c', '#006d75', '#00474f', '#002329'],
        'blue': ['#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff', '#096dd9', '#0050b3', '#003a8c', '#002766'],
        'geekblue': ['#f0f5ff', '#d6e4ff', '#adc6ff', '#85a5ff', '#597ef7', '#2f54eb', '#1d39c4', '#10239e', '#061178', '#030852'],
        'purple': ['#f9f0ff', '#efdbff', '#d3adf7', '#b37feb', '#9254de', '#722ed1', '#531dab', '#391085', '#22075e', '#120338'],
        'magenta': ['#fff0f6', '#ffd6e7', '#ffadd2', '#ff85c0', '#f759ab', '#eb2f96', '#c41d7f', '#9e1068', '#780650', '#520339'],
        'grey': ['#a6a6a6', '#999999', '#8c8c8c', '#808080', '#737373', '#666666', '#404040', '#1a1a1a', '#000000', '#000000']
    },
    neutralColors: [
        '#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9',
        '#bfbfbf', '#8c8c8c', '#595959', '#434343', '#262626',
        '#1f1f1f', '#141414', '#000000'
    ]
};
const getStyleOptions = (theme: Theme, color: string, mark: string) => {
    const isLight = theme.mode === 'light';
    const colorMap = isLight ? colorDesc.light : colorDesc.dark;
    let colorGroup = colorMap[color];
    if (color === 'neutral') colorGroup = isLight ? colorDesc.neutralColors : [...colorDesc.neutralColors].reverse();
    if (!colorGroup) throw new Error('The color does not exist');
    const mainColor = colorGroup[5];
    colorGroup = [mainColor, ...colorGroup];
    return {
        mark,
        color: mainColor,
        backgroundColorGroup: colorGroup,
        borderColorGroup: colorGroup,
        fontColorGroup: colorGroup,
    };
};
type Handler = { (): void, [id: string]: number }
declare module '@yfill/theme/types/extentions' {
    interface Extentions {
        setMainColor(color: string): Theme
    }
}
const defaultHandler = <Handler>(() => { });
const changeHandlerMap: { neutral: Handler, main: Handler } = { neutral: defaultHandler, main: defaultHandler };
class AntDesignColors {
    static getColorGroup(color: string, isLight = true): string[] {
        return colorDesc[isLight ? 'light' : 'dark'][color] || [];
    }
    static install(theme: Theme, color: string): void {
        const getStyleOpt = () => getStyleOptions(theme, 'neutral', 'neutral');
        changeHandlerMap.neutral = <Handler>(() => { theme.update(getStyleOpt()); });
        theme.add(getStyleOpt()).on('change', changeHandlerMap.neutral);
        theme.setMainColor = (color: string) => {
            if (changeHandlerMap.main) theme.off('change', changeHandlerMap.main);
            const getStyleOpt = () => getStyleOptions(theme, color, 'main');
            changeHandlerMap.main = <Handler>(() => { theme.update(getStyleOpt()); });
            return theme.update(getStyleOpt()).on('change', changeHandlerMap.main);
        };
        theme.setMainColor(color);
    }
    static uninstall(theme: Theme): void {
        const initialMainOpt = theme.getStore().initialMainOpt;
        if (initialMainOpt) theme.update(initialMainOpt);
        theme
            .off('change', changeHandlerMap.main)
            .remove('neutral')
            .off('change', changeHandlerMap.neutral);
    }
}
export default AntDesignColors;

