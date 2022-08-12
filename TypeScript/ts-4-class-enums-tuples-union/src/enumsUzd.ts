// 1. sukurti baltijos saliu enuma be string reiksmiu.
//    1.1 iskonsolinti viena is saliu.

enum BaltStates {
  Estonia = 10,
  Latvia,
  Lithuania,
}

console.log('BaltStates.Lithuania ===', BaltStates.Lithuania);

// 2. sukurti atskira baltijos saliu enuma su sostine issaugota kaip string reiksme.

enum BalticStatesCapitals {
  Lithuania = 'Vilnius',
  Estonia = 'Talinn',
  Latvia = 'Riga',
}

//    2.1 parasyti funkcija kuri priima argumentu priima 2prat aprasyta enuma ir atspausdina sakini priklausomai nuo to kuri salis gauta argumentu
//    pvz `aboutCountry('Vilnius') => 'Lietuvoje skanus saltibarsciai...'`

function aboutCountries(capital: BalticStatesCapitals): void {
  switch (capital) {
    case BalticStatesCapitals.Lithuania:
      console.log('Skanus saltibarsciai');
      break;
    case BalticStatesCapitals.Latvia:
      console.log('Saldainiu fabrikas');
      break;
    case BalticStatesCapitals.Estonia:
      console.log('Sestam rate, suprato, kad vaziuoja ziedu');
      break;
    default:
      console.log('not found');
      break;
  }
}

aboutCountries(BalticStatesCapitals.Lithuania);
aboutCountries(BalticStatesCapitals.Estonia);
