# react-11-formik-customHook-authIntro

1. install react router @^5 `npm i react-router-dom@^5`
2. / HomePage
3. /about AboutPage

## auth context

1. sukurti store/authContext.js
2. {
   login()
   logou()
   token
   }
3. apjuosti su context.Provider App.js
4. paduoti value i context.Provider

## uzduotys

1. AboutPage yra tik registruotiem vartotojams
2. neregistruoti mato tik login ir register
3. prisiloginam matom about ir Logout
4. {/_ negeneruoti route /about jei nesam prisilogine _/}
   ` <Route path='/about'> <AboutPage /> </Route>`
5. pasidaryti RegisterPage ir vidue RegisterForm
   5.1 username, email, password, repeatPassword su validacijom
   5.2 isitikinam kad slaptazodziai sutampa ir siunciam i https://reqres.in/api/register (email. password.)
   6 Logout
6. Reidrect turetu vykti puslapio lygyje (Page)
