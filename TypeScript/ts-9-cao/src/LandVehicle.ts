import Vehicle, { VehicleProps } from './Vehicle.js';

export type LandVehicleProps = {
  tires: string[];
};

class LandVehicle extends Vehicle {
  private tires: string[];

  constructor({ tires }: LandVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);
    this.tires = tires;
  }
  public override toString(): string {
    return `${this.getString()} Tires: ${this.tires}`;
  }
}
export default LandVehicle;
