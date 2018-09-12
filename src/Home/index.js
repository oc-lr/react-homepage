import React from "react"
import { Header } from "Header"
import { Hero } from "./Hero"
import { News } from "./News"
import { Video } from "./Video"
import { People } from "./People"
import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"
import { Timeline } from "./Timeline"
import { Footer } from "./Footer/Alt"
import { Technology } from "./Technology"

import { team } from "data/team"
import { advisors } from "data/advisors"

export function Home() {
  return (
    <div>
      <div className="vh-100 fv bg-green">
        <Header />
        <Technology />
      </div>
      <Hero />
      <News />
      <Video />
      <LeftSection />
      <RightSection shade />
      <Timeline />
      <People title="Advisors" members={advisors} shade />
      <People title="Team" members={team} />
      <Footer />
    </div>
  )
}
