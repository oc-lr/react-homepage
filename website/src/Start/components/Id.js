import React from "react"

export function Id({ image, name, subtitle }) {
  return (
    <div className="flex flex-column cv open-sans" style={{ width: "12rem" }}>
      <img className="br-pill mb3 w4" src={image} alt="profile pic" />
      <div className="f4 mb2 b">{name}</div>
      <div className="f7 tc">{subtitle}</div>
    </div>
  )
}
