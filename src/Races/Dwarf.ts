import Race from './Race';

export default class Dwarf extends Race {
  private static _instance = 0;
  private _healthPoints = 80;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf._instance += 1;
  }

  get maxLifePoints(): number {
    return this._healthPoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instance;
  }
}