import { Pokemon as PokemonClass } from '../../../classes/Pokemon';
import {
  PokemonMoreStatsHabilitiesDiv,
  PokemonMoreStatsValueText,
  PokemonMoreStatsDetailsDiv,
  PokemonMoreStatsTitle,
  PokemonMoreStatsHabilitiesContainerDiv
} from '../styles/PokemonMoreStats.styles.d';

export const PokemonMoreStats = (pokemon: PokemonClass) => {
  return (
    <PokemonMoreStatsDetailsDiv>
      <PokemonMoreStatsTitle>More stats</PokemonMoreStatsTitle>

      <PokemonMoreStatsSingleStat name={'Base Experience'} value={pokemon.base_experience} />
      <PokemonMoreStatsSingleStat name={'Height'} value={pokemon.height} />
      <PokemonMoreStatsSingleStat name={'Order'} value={pokemon.order} />
      <PokemonMoreStatsSingleStat name={'Weight'} value={pokemon.weight} />
      <PokemonMoreStatsHabilities {...pokemon} />
    </PokemonMoreStatsDetailsDiv>
  );
};

const PokemonMoreStatsHabilities = (pokemon: PokemonClass) => {
  return (
    <PokemonMoreStatsHabilitiesContainerDiv>
      <span>Habilities: </span>
      <PokemonMoreStatsHabilitiesDiv>
        {pokemon.abilities.map((ability, index: number) => (
          <PokemonMoreStatsValueText key={index}>{ability.ability.name}</PokemonMoreStatsValueText>
        ))}
      </PokemonMoreStatsHabilitiesDiv>
    </PokemonMoreStatsHabilitiesContainerDiv>
  );
};

const PokemonMoreStatsSingleStat = ({ name, value }: { name: string; value: string }) => {
  return (
    <div>
      <span>{name}: </span>
      <PokemonMoreStatsValueText>{value}</PokemonMoreStatsValueText>
    </div>
  );
};
