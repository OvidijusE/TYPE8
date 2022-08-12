import Vehicle, { VehicleProps } from './Vehicle.js';

export type WaterVehicleProps = {
  maxDepth: number;
};

class WaterVehicle extends Vehicle {
  private maxDepth: number;

  constructor({ maxDepth }: WaterVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);
    this.maxDepth = maxDepth;
  }
  public override toString(): string {
    return `${super.getString()} Max Depth: ${this.maxDepth}`;
  }
}

export default WaterVehicle;
