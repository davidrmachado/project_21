import Race from './Race';

export default class Halfling extends Race {
  private static _instance = 0;
  private _healthPoints = 60;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling._instance += 1;
  }

  get maxLifePoints(): number {
    return this._healthPoints;
  }

  static createdRacesInstances(): number {
    return Halfling._instance;
  }
}