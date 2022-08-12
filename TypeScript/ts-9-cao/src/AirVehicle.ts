import Vehicle, { VehicleProps } from './Vehicle.js';

export type AirVehicleProps = {
  maxAltitude: number;
};

class AirVehicle extends Vehicle {
  private maxAltitude: number;

  constructor({ maxAltitude }: AirVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);

    this.maxAltitude = maxAltitude;
  }
  public override toString(): string {
    return `${super.getString()} Max Altitude: ${this.maxAltitude}`;
  }
}

export default AirVehicle;
