import React from "react"
import { Text } from "./sc"
import { LeftSection } from "../LeftSection"
import { OrigoPlatform } from "glyphs/OrigoPlatform"
import { blue } from "config"

export function Platform() {
  return <LeftSection shade TextBlock={() => <TB />} MediaBlock={MB} />
}

const TB = () => (
  <div className="">
    <div className="f1 fw2 tracked mb4">Origo Platform</div>
    <div className="f4 black-70 measure lh-copy mb5">
      <Text>
        We help organizations and governments build decentralized asset
        management systems on blockchain. Our protocol makes it easy to verify
        and manage the documentation for recording and transacting assets.
        Individuals and institutions can transact, crowdfund, sell shares, and
        fractionally own assets across borders.
      </Text>
    </div>
  </div>
)

const MB = () => (
  <div className="ml5-ns">
    <OrigoPlatform scale={4.3} color={blue} />
  </div>
)
