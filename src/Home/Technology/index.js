import React from "react"
import Particles from "react-particles-js"
import { Container, Wrapper, Tagline } from "./styled-components"

export function Technology() {
  return (
    <Wrapper>
      <Container>
        <div className="absolute ph4 pb5">
          <Tagline>Securing Investments without Intermediaries</Tagline>
          <div className="white-80 sans-serif lh-copy fw2">
            Protocol for standardized management of asset ownership using
            blockchain
          </div>
          <div className="w100 h3" />
        </div>
        <div>
          <PP />
          <PP />
          <PP />
          <PP />
          <PP />
          <PP />
        </div>
      </Container>
    </Wrapper>
  )
}

const PP = () => (
  <Particles
    height={"100%"}
    width="80%"
    params={{
      particles: {
        opacity: {
          anim: {
            enable: true,
            opacity_min: 0.05,
            speed: 2,
            sync: false,
          },
          value: 0.1,
        },
        number: {
          value: 10,
          density: {
            enable: false,
          },
        },
        line_linked: {
          shadow: {
            enable: true,
            color: "#000",
            blur: 0,
          },
        },
      },
    }}
    style={{ display: "absolute", width: "100%" }}
  />
)
