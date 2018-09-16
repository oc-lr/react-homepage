import React from "react"
import { Wrapper, Container, Text } from "./styled-components"
import { urlPrefix } from "config"

const prefix = process.env["NODE_ENV"] === "production" ? urlPrefix : ""

export function LeftSection({
  title = "",
  shade = null,
  TextBlock = () => <TB />,
  MediaBlock = () => <MB />,
}) {
  return (
    <Wrapper shade={shade}>
      <div className="f2 blue sans-serif pb5">{title}</div>
      <Container>
        <TextBlock />
        <MediaBlock />
      </Container>
    </Wrapper>
  )
}

const TB = () => (
  <div className="">
    <div className="f1 fw2 tracked mb4">Ownership Security</div>
    <Text className="black-70 measure lh-copy mb5">
      <p>
        Secure the most vital assets of the country to impart trust & confidence
        in investors.
      </p>
      <p>
        Protect land assets for citizens & investors alike using Blockchain:
      </p>
      <ul>
        <li>Independent Verification</li>
        <li>Tamper-proof Records</li>
        <li>Ease of Transaction</li>
      </ul>
    </Text>
  </div>
)

const MB = () => (
  <div className="float ml5-ns">
    <img src={`${prefix}/images/feature-secure.svg`} alt="secure" />
  </div>
)
