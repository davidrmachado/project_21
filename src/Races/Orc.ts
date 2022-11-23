import Race from './Race';

export default class Orc extends Race {
  private static _instance = 0;
  private _healthPoints = 74;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc._instance += 1;
  }

  get maxLifePoints(): number {
    return this._healthPoints;
  }

  static createdRacesInstances(): number {
    return Orc._instance;
  }
}