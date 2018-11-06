import React from "react"

export const City = ({ hostRef, width = "25rem" }) => (
  <div ref={hostRef}>
    <img src="/city.png" style={{ width }} />
  </div>
)
