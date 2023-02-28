export interface PokemonInterface {
  name: string;
  type: string;
  image: string;
  base_experience: string;
  height: string;
  weight: string;
  order: string;
  abilities: [
    {
      ability: { name: string; url: string };
    }
  ];
}
