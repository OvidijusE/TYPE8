/* eslint-disable class-methods-use-this */
interface UberInterface {
  start(): void;
  stop(): void;
}
class Uber implements UberInterface {
  // static savybe priklauso klasei o ne individualiems objektams
  private static _activeRides: number = 0;

  start(): void {
    console.log('ub start');
    Uber._activeRides += 1;
  }
  stop(): void {
    Uber._activeRides -= 1;
  }
  // static todel kad gautume iskviete Uber.activeRides
  static get activeRides() {
    return Uber._activeRides;
  }
}

const ubArr: UberInterface[] = [new Uber(), new Uber(), new Uber()];
ubArr.forEach((uObj) => uObj.start());
ubArr[1].stop();

// Uber.activeRides = 50;

console.log('Uber.activeRides ===', Uber.activeRides);
// ub1.activeRides;
// const ub15 = new Uber();

// ar ubArr[1] yra sukurtas pagal Uber klase ?
console.log(ubArr[1] instanceof Uber);
