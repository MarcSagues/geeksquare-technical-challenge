import styled from 'styled-components';

export const PokemonCardDiv = styled.div`
  color: ${(props) => props.theme.pokemon.image.background};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PokemonCardsDiv = styled.div`
  margin: 0 10% 0 10%;
`;

export const GridPokemonCardsDiv = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  }
`;

export const PokemonDescriptionCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: 10px;
`;

export const PokemonNameText = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const PokemonTypeText = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.pokemon.type};
  font-weight: 600;
  font-size: 1.1rem;
`;

export const PokemonImageCard = styled.img`
  width: 100%;
  height: 180px;
  background-size: contain;
  background-position: center center;
  border-radius: 5px;
  background-color: black;
`;
