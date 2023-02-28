import { React, useEffect, useState } from 'react';
export const useGetPokemons = () => {
  const LIMIT = 20;
  const [pokemons, setPokemons] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }
    ).then((res) => res.json());
    setOffset(offset + LIMIT);
    await response.results.map(async (pokemon: { name: string; url: string }) => {
      const pokemonResponse = await fetch(pokemon.url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then((res) => res.json());
      setPokemons((pokemons) => [...pokemons, pokemonResponse]);
      setLoading(false);

      return pokemonResponse;
    });
  };

  return { pokemons, loading, getPokemons };
};
