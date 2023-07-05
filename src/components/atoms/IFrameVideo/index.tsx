import React from 'react'

import * as S from './styled'
interface IFrameVideoProps{
    embedId: string
}
const IFrameVideo = ({embedId}:IFrameVideoProps) => {
    

  return (
    <S.ContainerVideo>
    <S.Iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </S.ContainerVideo>
  )
}

export default IFrameVideo