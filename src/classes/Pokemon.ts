import { PokemonInterface } from './../interfaces/PokemonInterface';
export class Pokemon implements PokemonInterface {
  name: string;
  type: string;
  image: string;
  base_experience: string;
  height: string;
  weight: string;
  order: string;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  constructor(
    name: string,
    type: string,
    image: string,
    base_experience: string,
    height: string,
    weight: string,
    order: string,
    abilities: [{ ability: { name: string; url: string } }]
  ) {
    this.name = name;
    this.type = type;
    this.image = image;
    this.base_experience = base_experience;
    this.height = height;
    this.weight = weight;
    this.order = order;
    this.abilities = abilities;
  }
}
