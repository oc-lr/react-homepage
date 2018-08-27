import React from "react"
import { Header } from "./Header"
import { Hero } from "./Hero"
import { News } from "./News"

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <News />
    </div>
  )
}
