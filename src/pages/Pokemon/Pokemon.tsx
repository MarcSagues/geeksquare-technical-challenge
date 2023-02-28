import React from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon as PokemonClass } from '../../classes/Pokemon';
import { useCreatePokemon } from '../../hooks/useCreatePokemon.d';
import { useFetchPokemon } from '../../hooks/useFetchPokemon.d';
import {
  PokemonContainerDiv,
  PokemonImageDiv,
  PokemonImg,
  PokemonDetailsDiv,
  PokemonNameTypeDiv,
  PokemonNameText,
  PokemonTypeText
} from '../../styles/Pokemon.styles.d';

import { PokemonMoreStats } from './components/PokemonMoreStats';

export default function Pokemon() {
  const { id } = useParams();
  const idPokemon = id || '1';
  const { pokemon, loading } = useFetchPokemon(idPokemon);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const pokemonCreated = useCreatePokemon(pokemon);
  return (
    <PokemonContainerDiv>
      <PokemonImageDiv>
        <PokemonImg src={pokemonCreated.image} />
      </PokemonImageDiv>
      <PokemonDetailsDiv>
        <PokemonNameText>{pokemonCreated.name}</PokemonNameText>
        <PokemonTypeText>{pokemonCreated.type}</PokemonTypeText>
        <PokemonMoreStats {...pokemonCreated} />
      </PokemonDetailsDiv>
    </PokemonContainerDiv>
  );
}
