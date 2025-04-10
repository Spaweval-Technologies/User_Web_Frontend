import "styled-components";
import type { Theme } from "./theme";

/*
  * styled-components.d.ts
  * This file is used to extend the default theme of styled-components.
  * You can add your own custom properties to the theme here.
  * For more information, see: https://styled-components.com/docs/api#typescript
*/
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: {
        [string:string]: string
    },
    fontWeights: {
      [string: string]: number
    },
    breakpoints: {
      [string: string]: string
    }
  }
}
