import React from "react"
import { TimesOfIndia } from "glyphs/TimesOfIndia"
import { Inc42 } from "glyphs/Inc42"
import { Bloomberg } from "glyphs/Bloomberg"
import { Hindu } from "glyphs/Hindu"
import { Outlook } from "glyphs/Outlook"
import { IndiaToday } from "glyphs/IndiaToday"
import { BusinessWorld } from "glyphs/BusinessWorld"
import { Container, Wrapper, NewsItem } from "./styled-components"
import { news } from "data/news"

const color = "#696969"

const mapping = {
  indiaToday: <IndiaToday scale={0.23} color={color} />,
  businessWorld: <BusinessWorld scale={0.33} color={color} />,
  outlook: <Outlook scale={0.23} color={color} />,
  hindu: <Hindu scale={0.23} color={"#545454"} />,
  bloomberg: <Bloomberg scale={0.27} color={color} />,
  timesOfIndia: <TimesOfIndia scale={0.3} color={"#444444"} />,
  inc42: <Inc42 scale={0.35} color={color} />,
}

const ajna =
  "Won Singularity University's Global Impact Challenge 2018 for using OrigoChain in asset tracking!"

export function News({ title = ajna }) {
  return (
    <Wrapper>
      <div
        className="f3 tc fw3 lh-copy tracked black-70 sans-serif pb4 ph4"
        style={{ maxWidth: "60rem" }}
      >
        {title}
      </div>
      <Container>
        {news.map(item => {
          return (
            <NewsItem key={item.key} href={item.link}>
              {mapping[item.network]}
            </NewsItem>
          )
        })}
      </Container>
    </Wrapper>
  )
}
