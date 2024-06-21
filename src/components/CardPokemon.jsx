import React from 'react'
import { Link } from 'react-router-dom'

export const CardPokemon = ({pokemon}) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
      <div className=' bg-slate-200'>
        <img className='w-[120px] h-[120px] md:w-[250px] md:h-[250px]' src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon.name}`} />
      </div>
      <div>
        <span className='text-sm text-slate-400'>Nº {pokemon.id}</span>
        <h3 className='font-bold'>{pokemon.name}</h3>
        <div className='bg-green-500 rounded-full text-white pl-3'>
          {pokemon.types.map(type => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
