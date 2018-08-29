import styled from "styled-components"

export const Wrapper = styled.div.attrs({
  className: "bg-red f ca",
})``

export const Container = styled.div.attrs({
  className: "bg-yellow ph4 f",
})`
  width: 80%;

  @media (max-width: 30rem) {
    width: 100%;
    flex-direction: column;
  }
`
