import AirVehicle from './AirVehicle.js';
import LandVehicle from './LandVehicle.js';
import WaterVehicle from './WaterVehicle.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle(
    {
      tires: ['Pirelli'],
    },
    {
      brand: 'Toyota',
      model: 'Land Cruiser',
      year: 2002,
    }
  ),
  new AirVehicle(
    {
      maxAltitude: 900,
    },
    {
      brand: 'Boeing',
      model: '747',
      year: 2010,
    }
  ),
  new WaterVehicle(
    {
      maxDepth: 10,
    },
    {
      brand: 'Suzuki',
      model: 'Land ModelGood',
      year: 2006,
    }
  ),
];

vehicles.forEach((v) => console.log(v.toString()));
