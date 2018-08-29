import styled from "styled-components"

export const Wrapper = styled.div.attrs({
  className: "f w-100 bg-black-10 ca",
})``

export const Container = styled.div.attrs({
  className: "pv4 f f3 black-80 cv flex-wrap jc",
})`
  max-width: 60rem;

  @media (max-width: 30rem) {
    flex-direction: column;
    align-content: between;
    text-align: center;
    height: 32rem;
  }
`

export const NewsItem = styled.div.attrs({
  className: "mr5 mt3",
})`
  @media (max-width: 30rem) {
    margin-right: 0;
  }
`
