import React from "react"
import { Header } from "./Header"
import { Hero } from "./Hero"
import { News } from "./News"
import { Video } from "./Video"
import { People } from "./People"
import { LeftSection } from "./LeftSection"
import { Footer } from "./Footer/Alt"

import { team } from "data/team"
import { advisors } from "data/advisors"

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <News />
      <Video />
      <LeftSection />
      <People title="Advisors" members={advisors} />
      <People title="Team" members={team} />
      <Footer />
    </div>
  )
}
