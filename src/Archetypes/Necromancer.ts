import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  public static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number { 
    Necromancer._instance += 1;
    return Necromancer._instance; 
  }

  public get energyType(): EnergyType { 
    return this._energyType; 
  }
}

export default Necromancer;