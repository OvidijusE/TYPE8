export type VehicleProps = {
  brand: string;
  model: string;
  year: number;
};

class Vehicle {
  protected brand: string;
  protected model: string;
  protected year: number;

  constructor({ brand, model, year }: VehicleProps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  protected getString(): string {
    return `Brand: ${this.brand} Model: ${this.model} Year: ${this.year}`;
  }
}

export default Vehicle;
