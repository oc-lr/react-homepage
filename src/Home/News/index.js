import React from "react"
import { TimesOfIndia } from "glyphs/TimesOfIndia"
import { Inc42 } from "glyphs/Inc42"
import { Bloomberg } from "glyphs/Bloomberg"
import { Hindu } from "glyphs/Hindu"
import { Outlook } from "glyphs/Outlook"
import { IndiaToday } from "glyphs/IndiaToday"
import { BusinessWorld } from "glyphs/BusinessWorld"
import { Container, Wrapper } from "./styled-components"

const color = "#696969"

export function News() {
  return (
    <Wrapper>
      <Container>
        <div className="">
          <Inc42 scale={0.35} color={color} />
        </div>
        <div className="">
          <TimesOfIndia scale={0.3} color={"#545454"} />
        </div>
        <div className="">
          <Bloomberg scale={0.27} color={color} />
        </div>
        <div className="">
          <Hindu scale={0.23} color={"#545454"} />
        </div>
        <div className="">
          <Outlook scale={0.23} color={color} />
        </div>
        <div className="">
          <IndiaToday scale={0.23} color={color} />
        </div>
        <div className="">
          <BusinessWorld scale={0.33} color={color} />
        </div>
      </Container>
    </Wrapper>
  )
}
