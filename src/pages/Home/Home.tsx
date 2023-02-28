import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPokemons } from './../../hooks/useGetPokemons.d';
import {
  PokemonCardDiv,
  PokemonCardsDiv,
  GridPokemonCardsDiv,
  PokemonDescriptionCardDiv,
  PokemonNameText,
  PokemonTypeText,
  PokemonImageCard
} from './../../styles/Home.styles.d';
import InfiniteScroll from 'react-infinite-scroll-component';
import useWindowDimensions from '../../hooks/useWindowDimensions.d';

const PokemonsCard = ({ pokemon }: { pokemon: any }) => {
  return (
    <Link to={`pokemon/${pokemon.id}`}>
      <PokemonCardDiv>
        <PokemonImageCard
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <PokemonDescriptionCardDiv>
          <PokemonNameText>{pokemon.name}</PokemonNameText>
          <PokemonTypeText>{pokemon.types[0].type.name}</PokemonTypeText>
        </PokemonDescriptionCardDiv>
      </PokemonCardDiv>
    </Link>
  );
};

export default function Home() {
  const { pokemons, loading, getPokemons } = useGetPokemons();
  const { width } = useWindowDimensions();

  if (loading) return <h1>Loading...</h1>;
  console.log(pokemons);
  return (
    <PokemonCardsDiv>
      <h2>{width > 600 ? 'EN DIRECTO' : 'POKÉMONS'}</h2> 
      <InfiniteScroll
        next={() => getPokemons()}
        dataLength={pokemons.length}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>No more elements!</b>
          </p>
        }>
        <GridPokemonCardsDiv>
          {pokemons.map((pokemon: any, index: number) => (
            <PokemonsCard key={index} pokemon={pokemon} />
          ))}
        </GridPokemonCardsDiv>
      </InfiniteScroll>
    </PokemonCardsDiv>
  );
}
