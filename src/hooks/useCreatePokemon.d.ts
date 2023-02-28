import { Pokemon } from '../classes/Pokemon';

export const useCreatePokemon = (pokemon) => {
  const pokemonCreated: Pokemon = new Pokemon(
    pokemon.name,
    pokemon.types[0].type.name,
    pokemon.sprites.other.dream_world.front_default,
    pokemon.base_experience,
    pokemon.height,
    pokemon.weight,
    pokemon.order,
    pokemon.abilities
  );

  return pokemonCreated;
};
