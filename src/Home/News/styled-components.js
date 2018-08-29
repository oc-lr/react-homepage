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

export const NewsItem = styled.a.attrs({
  className: "mr5 mt3",
  target: "_blank",
  href:
    "https://inc42.com/buzz/keralas-ajna-and-delhis-brun-health-ready-to-fly-to-singularity-university-after-winning-global-impact-challenge-india-2018/",
})`
  @media (max-width: 30rem) {
    margin-right: 0;
  }
`
