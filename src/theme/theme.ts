export interface ThemeInterface {
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly bodyColor: string;
  readonly whiteColor: string;
  readonly fontFamily: string;
  readonly lineHeight: number;
}

const theme: ThemeInterface = {
  primaryColor: '#fe2d5b',
  secondaryColor: '#e7e7e7',
  whiteColor: '#fff',
  bodyColor: '#000f48',
  fontFamily: `"CircularStd", Helvetica, Arial, sans-serif;`,
  lineHeight: 1.5,
};

export default theme;
