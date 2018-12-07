export interface ThemeInterface {
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly mutedColor: string;
  readonly bodyColor: string;
  readonly titleColor: string;
  readonly whiteColor: string;
  readonly primaryFontFamily: string;
  readonly secondaryFontFamily: string;
  readonly bodyFontSize: string;
  readonly lineHeight: number;
  readonly titleLineHeight: number;
}

const theme: ThemeInterface = {
  primaryColor: '#fe2d5b',
  secondaryColor: '#e7e7e7',
  mutedColor: '#afb6be',
  whiteColor: '#fff',
  bodyColor: '#717a85',
  titleColor: '#424242',
  primaryFontFamily: `SFUIText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif`,
  secondaryFontFamily: `"CircularStd", Helvetica, Arial, sans-serif`,
  bodyFontSize: '1.125rem',
  lineHeight: 1.55,
  titleLineHeight: 1.1,
};

export default theme;
