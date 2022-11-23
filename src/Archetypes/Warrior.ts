import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  public static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number { 
    Warrior._instance += 1;
    return Warrior._instance; 
  }

  public get energyType(): EnergyType { 
    return this._energyType; 
  }
}

export default Warrior;