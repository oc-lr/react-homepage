import React from "react"
import { Header } from "Header"
import { Wrapper, Container } from "./sc"

export function Post({ title, meta, content }) {
  return (
    <div>
      <Header />
      <Wrapper>
        <Container>
          <div className="f2">{title}</div>
          <div className="f f6 black-70 mv3">
            <div className="mr3">{meta.author}</div>
            <div className="">{meta.dateStamp}</div>
          </div>
          <div className="lh-copy">{content}</div>
        </Container>
      </Wrapper>
    </div>
  )
}
