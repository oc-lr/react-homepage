import React from "react"
import { TimesOfIndia } from "glyphs/TimesOfIndia"
import { Inc42 } from "glyphs/Inc42"
import { Bloomberg } from "glyphs/Bloomberg"
import { Hindu } from "glyphs/Hindu"
import { Outlook } from "glyphs/Outlook"
import { IndiaToday } from "glyphs/IndiaToday"
import { BusinessWorld } from "glyphs/BusinessWorld"
import { Container, Wrapper, NewsItem } from "./styled-components"

const color = "#696969"

export function News({
  title = "Project Ajna — winner of Singularity University's Global Impact Challenge used OrigoChain to implement asset tracking!",
}) {
  return (
    <Wrapper>
      <div
        className="f3 tc fw3 lh-copy tracked black-70 sans-serif pb4"
        style={{ maxWidth: "60rem" }}
      >
        {title}
      </div>
      <Container>
        <NewsItem>
          <Inc42 scale={0.35} color={color} />
        </NewsItem>
        <NewsItem>
          <TimesOfIndia scale={0.3} color={"#444444"} />
        </NewsItem>
        <NewsItem>
          <Bloomberg scale={0.27} color={color} />
        </NewsItem>
        <NewsItem>
          <Hindu scale={0.23} color={"#545454"} />
        </NewsItem>
        <NewsItem>
          <Outlook scale={0.23} color={color} />
        </NewsItem>
        <NewsItem href="https://www.indiatoday.in/technology/features/story/meet-ajna-and-signnext-two-kerala-based-startups-that-are-showing-how-tech-can-work-for-masses-1283742-2018-07-12">
          <IndiaToday scale={0.23} color={color} />
        </NewsItem>
        <NewsItem>
          <BusinessWorld scale={0.33} color={color} />
        </NewsItem>
      </Container>
    </Wrapper>
  )
}
