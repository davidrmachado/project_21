import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  public static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number { 
    Mage._instance += 1;
    return Mage._instance; 
  }

  public get energyType(): EnergyType { 
    return this._energyType; 
  }
}

export default Mage;