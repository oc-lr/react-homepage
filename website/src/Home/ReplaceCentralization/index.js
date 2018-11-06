import React from "react"
import { RightSection } from "../RightSection"
import { Text } from "./sc"

export function ReplaceCentralization() {
  return (
    <RightSection
      backgroundImage="wave_up.svg"
      MediaBlock={() => <MB />}
      TextBlock={() => <TB />}
    />
  )
}

const MB = () => <div className="mb5 mb0-ns" />

const TB = () => (
  <div className="pl5-ns pb6">
    <div className="f1 fw2 tracked mb4">
      It's time to replace centralized record keeping of vital assets
    </div>
    <div className="f4 black-70 measure lh-copy">
      <Text>
        Titles and deeds are managed on the Ethereum blockchain creating a
        secure and transparent system to track the origin and history of an
        asset, while keeping the owners details private. Buyer and sellers
        interact on decentralized system making the transaction process and
        record management more time and cost effective for governments.
      </Text>
    </div>
  </div>
)
