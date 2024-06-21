import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

  return (
    <>
      <header className='flex max-w-full max-h-full m-5 bg-slate-500 place-content-center'>
      <div className="flex flex-col items-center w-full md:justify-between md:flex-row">
        <Link to='/' className='logo'>
          <img className='w-full md:w-[60%]'
              src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' 
              alt='Logo Pokedex' 
          />
        </Link>

        <form className='flex gap-2' onSubmit={onSearchSubmit}>
            <div className='form-group flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg' 
                fill='none' 
                viewBox='0 0 24 24' 
                strokeWidth='1.5' 
                stroke='currentColor' 
                className='icon-search w-3 relative left-5'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' 
                />
              </svg>
              <input className='border-2 border-[#656565] rounded-full pl-5 outline-transparent md:h-[40px] md:w-[250px]'
                type='search' 
                name='valueSearch' 
                id='' 
                value={valueSearch} 
                onChange={onInputChange} 
                placeholder='Buscar nombre de pokemon' 
              />
            </div>

            <button className='btn-search bg-[#006d72] text-white px-2 py-1 rounded-full md:px-4'>Buscar</button>
        </form>
      </div>
      </header>
      <Outlet />
    </>
  )
}
