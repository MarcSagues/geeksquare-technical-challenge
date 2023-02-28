import { useState, useEffect } from 'react';
export const useFetchPokemon = (id: string) => {
  const [pokemon, setPokemon] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      res.json()
    );

    setPokemon(response);
    setLoading(false);
  };

  return { pokemon, loading };
};
