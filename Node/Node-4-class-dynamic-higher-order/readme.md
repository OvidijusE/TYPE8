# Node 4

1. susikuriam src/server.js
2. pridedam git
3. inicijuojam npm
4. instaliuojam express, cors, morgan
5. pakuriam serveri su port 3000
6. parasom GET / - grazina h1 "hello express"

# HOF - Higher order functions

map, forEach, filter, find, reduce, sort.

- map() - grazina nauja masyva, su tiek pat nariu visada(netinka filtravimui). Naudojamas pakeisti strukturai,
  atrinkti keleta reiksmiu is objekto. Tai kas grazinama arrow funkcijoj su return keliauj i nauja masyva.

- forEach() - atlikti kazka su kiekviena reiksme. (ideti i innerHTML reiksmes).

- filter(() => true) - naudojamas atrinti dali reiksmiu. Arrow funkcijoje grazinam true arba false.
  Jei true, tai reiksme atrenkama i nauja masyva.

- find(() => true ) veikia taip pat, kaip filtras tik grazina ta surasta masyva, objekta ar kintamaji,
  kuris atitiko salyga. Find rades reiksme toliau nebeiesko.
