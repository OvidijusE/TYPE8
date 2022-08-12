# Rect Fetch

1. Sukuriam komponenta
2. sukuriam state kintamaji kuri prilyginam tusciai reiksmei
   `const [usersArray, setUsersArray] = useState([]);`
3. importuojma useEffect ir jame kvieciam funkcija kuri fetchina reikalinga informacija
4. Gavus informacija atnaujinam kintamji su setFunkcija
   `setUsersArray(dataInJs);
