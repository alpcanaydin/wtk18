export interface ThemeInterface {
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly bodyColor: string;
  readonly fontFamily: string;
  readonly lineHeight: number;
}

const theme: ThemeInterface = {
  primaryColor: '#ff0000',
  secondaryColor: '#00ff00',
  bodyColor: '#000f48',
  fontFamily: `"CircularStd", Helvetica, Arial, sans-serif;`,
  lineHeight: 1.5,
};

export default theme;
