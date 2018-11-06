import React from "react"
import YouTube from "react-youtube"

export function Video() {
  return (
    <YouTube
      videoId="SSo_EIwHSd4"
      className="soft-shadow1"
      containerClassName="pv6 f ca bg-blue-05"
      opts={{
        controls: 0,
        showinfo: 0,
      }}
    />
  )
}
