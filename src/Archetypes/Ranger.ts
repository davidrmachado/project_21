import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  public static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number { 
    Ranger._instance += 1;
    return Ranger._instance; 
  }

  public get energyType(): EnergyType { 
    return this._energyType; 
  }
}

export default Ranger;