import styled from "styled-components"

export const Wrapper = styled.div.attrs({
  className: "pv5 fv ca",
})`
  background: rgba(53, 126, 221, 0.01);
`

export const Container = styled.div.attrs({
  className: "ph4",
})`
  width: 80%;
  display: flex;

  @media (max-width: 30rem) {
    width: 100%;
    flex-direction: column;
  }
`
