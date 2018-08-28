import React from "react"
import { Header } from "./Header"
import { Hero } from "./Hero"
import { News } from "./News"
import { Video } from "./Video"
import { Footer } from "./Footer"

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <News />
      <Video />
      <Footer />
    </div>
  )
}
