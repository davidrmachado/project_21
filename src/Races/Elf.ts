import Race from './Race';

export default class Elf extends Race {
  private static _instance = 0;
  private _healthPoints = 99;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf._instance += 1;
  }

  get maxLifePoints(): number {
    return this._healthPoints;
  }

  static createdRacesInstances(): number {
    return Elf._instance;
  }
}