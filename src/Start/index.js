import React from "react"

import { NestedContainer } from "../core/NestedContainer"
import { Welcome } from "./Welcome"
import { Process } from "./Process"
import { Technology } from "./Technology"
import { Header } from "./Header"
// import { Definition } from "Definition"
import { Team } from "./Team"
import { RoadMap } from "./RoadMap"
import { Footer } from "./Footer"

export const Start = () => (
  <div>
    <NestedContainer className="ch" innerClassName="ch">
      <Header />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Welcome />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Process />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Technology />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <RoadMap />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Team />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Footer />
    </NestedContainer>
  </div>
)
