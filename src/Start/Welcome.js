import React from "react"
import styled from "styled-components"
import { Logo } from "../Logo"
import { Definition } from "./Definition.js"

export function Welcome() {
  return (
    <Container>
      <div className="pv5 flex-row w-100" style={{ maxWidth: "50rem" }}>
        <div className="flex cv justify-between">
          <Logo color="#11998e" scale={0.7} />
          <Nav
            navs={[
              { label: "Team", url: "", key: 0 },
              { label: "Contact", url: "", key: 1 },
            ]}
          />
        </div>
        <Definition />
      </div>
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "w-100 ch",
})`
  background: url(/farm.jpg);
  background-size: cover;
`

const Nav = ({ navs }) => (
  <div className="flex open-sans fw4">
    {navs.map(nav => <NavLink {...nav} />)}
  </div>
)

const NavLink = ({ label, url }) => (
  <div className="pointer f4 ml3 tr1 br2 hover-white-80 hover-bg-light-green hover-green black-70 b ttu open-sans fw1 bg-green pa3 white">
    {label}
  </div>
)
