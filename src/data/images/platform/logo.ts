import ouistitiPrint_logo_original from "./ouistitiPrint_logo-ghostwhite.png"
import ouistitiPrint_logo_yellow from "./ouistitiPrint_logo-yellow.png"
import ouistitiPrint_logo_gray from "./ouistitiPrint_logo-gray.png"

export interface ILogoData {
    original: string,
    yellow: string,
    gray: string,
}

export const logo: ILogoData = {
    original: ouistitiPrint_logo_original,
    yellow: ouistitiPrint_logo_yellow,
    gray: ouistitiPrint_logo_gray,
}