import React from "react"
import { Header } from "./Header"
import { Hero } from "./Hero"
import { News } from "./News"
import { Video } from "./Video"
import { Team } from "./Team"
import { Footer } from "./Footer"

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <News />
      <Video />
      <Team />
      <Footer />
    </div>
  )
}
