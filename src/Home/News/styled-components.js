import styled from "styled-components"

export const Wrapper = styled.div.attrs({
  className: "f w-100 bg-black-10 ca",
})``

export const Container = styled.div.attrs({
  className: "pv4 f w-80 justify-between f3 black-80 cv",
})`
  @media (max-width: 30rem) {
    flex-direction: column;
    align-content: between;
    text-align: center;
    height: 32rem;
  }
`
