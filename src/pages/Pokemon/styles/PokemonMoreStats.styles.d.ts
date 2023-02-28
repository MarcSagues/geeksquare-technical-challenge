import styled from 'styled-components';

const PokemonMoreStatsValueText = styled.span`
  color: ${(props) => props.theme.pokemon.details.data};
  width: max-content;
`;

const PokemonMoreStatsHabilitiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: 0px;
`;

const PokemonMoreStatsDetailsDiv = styled.div`
  background-color: ${(props) => props.theme.pokemon.details.background};
  color: ${(props) => props.theme.pokemon.details.title};
  width: 100%;
  max-width: 450px;
  padding: 15px 0 15px 15px;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 900px) {
    max-width: 600px;
  }
`;

const PokemonMoreStatsTitle = styled.span`
  font-size: 1.5rem;
`;

const PokemonMoreStatsSingleStatDiv = styled.div`
  max-width: 400px;
  width: 10px;
`;
const PokemonMoreStatsHabilitiesContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export {
  PokemonMoreStatsValueText,
  PokemonMoreStatsHabilitiesDiv,
  PokemonMoreStatsDetailsDiv,
  PokemonMoreStatsTitle,
  PokemonMoreStatsSingleStatDiv,
  PokemonMoreStatsHabilitiesContainerDiv
};
