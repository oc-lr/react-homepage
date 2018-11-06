import React from "react"
import { Wrapper, Container, Text } from "./styled-components"
import { urlPrefix } from "config"

const prefix = process.env["NODE_ENV"] === "production" ? urlPrefix : ""

export function RightSection({
  title = "",
  shade,
  MediaBlock = () => <MB />,
  TextBlock = () => <TB />,
  backgroundImage = null,
}) {
  return (
    <Wrapper shade={shade} backgroundImage={backgroundImage}>
      <Container>
        <MediaBlock />
        <TextBlock />
      </Container>
    </Wrapper>
  )
}

const MB = () => (
  <div className="mb5 mb0-ns">
    <img src={`${prefix}/images/feature-efficient.svg`} alt="secure" />
  </div>
)

const TB = () => (
  <div className="pl5-ns">
    <div className="f1 fw2 tracked mb4">Efficient Process</div>
    <Text className="black-70 measure lh-copy">
      <p>
        Redundant verification, validation & maintenance of duplicate documents
        are all mandated in current land registry system because they are
        inevitable to mitigate fraud.
      </p>
      <p>
        OrigoChain cuts out most of the redundant steps in land registry without
        compriomising security. With added advantages like:
      </p>
      <ul>
        <li>Faster Transaction Processing</li>
        <li>Reduction of Tax Fraud</li>
        <li>Automated Asset Tracking</li>
      </ul>
    </Text>
  </div>
)
