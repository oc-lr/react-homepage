import styled from "styled-components"

export const Wrapper = styled.div.attrs({
  className: "w-100 bg-blue pv5 f ca",
})``

export const Container = styled.div.attrs({
  className: "ph4",
})`
  width: 80%;
  max-width: 60rem;

  @media (max-width: 30rem) {
    width: 100%;
  }
`
