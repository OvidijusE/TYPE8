## uzd1

1. sukurti funkcija echo
2. ima viena argumenta : string ir atspausdina consoleje ir grazina
3. panaudojam ta funkcija
4. padaryti kad funkcija veiktu su bet kokiu tipu (generic tipas)
5. apriboti kad funkcija galetu priimti tik skaiciu, stringa, boolena

## uzd2

```
interface Permition {
  status: 'granted' | 'denied';
  requestedBy: string;
}
```

1. sukurti funkcija kuria priima argumentu Permition tipo objekta ir grazina ir ataspausdina
   1.1 "Owner James permition granted" arba
   1.2 "Owner Severijus permition denied"
2. funkcija turi argumentu priimta generic tipo argumenta kuris turi sias savybes

```
  {
    status: 'granted' | 'denied';
    requestedBy: string;
  }
```

3. Typescript turetu mesti klaida jei bandysim paduoti sy objekta

```
interface Request {
  status: boolean;
  requestedBy: string;
  }
```
