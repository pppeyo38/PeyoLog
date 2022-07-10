import { memo } from "react"

import { BgImage } from "../templates/BgImage"
import { ScrollSnap } from "../templates/ScrollSnap"

export const Top = memo(() => {
  return (
    <>
      <BgImage>
        <ScrollSnap />
      </BgImage>
    </>
  )
})

