import React from "react"
import Particles from "react-particles-js"
import { Container, Wrapper, Tagline } from "./styled-components"

import { callOutHeight } from "config"

export function Technology() {
  return (
    <Wrapper>
      <Container>
        <Tagline>Securing Investments without Intermediaries</Tagline>
        <Particles
          width="100%"
          height={`${callOutHeight}rem`}
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
                value: 20,
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
          style={{ width: "100%" }}
        />
      </Container>
    </Wrapper>
  )
}
