import Human from './Human.js';

// Employee praplecia Human class
export default class Employee extends Human {
  constructor(argAge, argName, argHourly) {
    super(argAge, argName);
    this.hourly = argHourly;
  }
}
// sukurdami Employee valadinis (sk )
