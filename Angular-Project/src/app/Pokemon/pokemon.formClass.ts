export class PokemonClass {

  constructor(
    public id: number,
    public name: string,
    public damage: number,
    public captured: boolean,
    public date: Date,
  ) { }

}