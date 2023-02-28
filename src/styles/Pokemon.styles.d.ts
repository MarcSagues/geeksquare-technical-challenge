import styled from 'styled-components';

export const PokemonContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px 15px 15px 15px;
  overflow-x: hidden;
  @media (max-width: 900px) {
    margin: 20px 20px 20px 20px;

    flex-direction: column;
    align-items: center;
  }
`;
export const PokemonImageDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PokemonImg = styled.img`
  background-color: ${(props) => props.theme.pokemon.image.background};
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
`;

export const PokemonDetailsDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 5px;
  flex-direction: column;
  margin-left: 20px;
  @media (max-width: 900px) {
    margin: 10px 0 0 0;

    width: 100%;
    max-width: 600px;
  }
`;
export const PokemonNameTypeDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  line-height: 2.7rem;
  margin-bottom: 1rem;
`;

export const PokemonNameText = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;
`;

export const PokemonTypeText = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.pokemon.type};
  font-weight: 600;
  font-size: 1.4rem;
`;
