import { memo } from "react"

import { EnText } from "../atoms/EnText"
import { ColorTheme } from "../../style/ColorTheme"
import { JaText } from "../atoms/JaText"

export const PageTitle = () => {
  return (
    <>
      <EnText fSize='92px' fWeight='300' fColor={ColorTheme.palette.purple}>
        Peyo Log!
      </EnText>
      <JaText fSize='22px' fWeight='400' fColor={ColorTheme.palette.gray}>
        Isono Tamaki’s portfolio site
      </JaText>
    </>
  )
}