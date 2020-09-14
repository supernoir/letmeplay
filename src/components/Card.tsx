import React from "react"
import "./Card.css"

interface CardInterface {
  title: string,
  yearpublished: string,
  series: string,
  characters?: string[],
  genre: string
}

const getPlayableDescriptor = (playable: boolean, name: string) => {
  if (playable) {
    return <span>You could play as <span className="indicator">{name}</span>.</span>
  } else {
    return `There's ${name}, an NPC. `
  }
}


const assembleDescriptor = (character: any) => {
  return <span>
    {getPlayableDescriptor(character.playable, character.name)}
  </span>
}

const Card: React.FC<CardInterface> = ({
  title,
  yearpublished,
  series,
  characters,
  genre
}) => {
  return <div className="card">
    <div className="card-header">
      <span><span className='genre'>{`[${genre}]`}</span>{title}</span>
      <span>{yearpublished}</span>
    </div>
    <div className="card-body">
      {characters?.map((character: any) => {
        return <div className="descriptor">
          {assembleDescriptor(character)}
          <span>They are <span className="indicator">{character.orientation[0]}</span>.</span>
          <span>They define themselves as a <span className="indicator">{character.gender}</span>.</span>
        </div>
      })}
    </div>
  </div>
}
export default Card