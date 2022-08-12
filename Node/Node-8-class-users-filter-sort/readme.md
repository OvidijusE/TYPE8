# Node 8 sort filter

## steps

1. init git, github
2. npm init -y
3. npm i express morgan cors dotenv mongodb
4. .gitignore jam node_modules .env
5. npm i eslint --save-dev
6. npm init @eslint/config
7. src/server.js - aprasyti express aplikacija
8. .env - port
9. package json - surasom scripts :

"scripts": {
"start": "nodemon src/server.js",
"lint": " eslint src/",
"lintfix": "eslint src/ --fix"
},

eslint :

"rules": {
"no-console": "off",
"linebreak-style": ["off", "windows"]
}

10. http.rest - routes
11. src/api/ - sukurti resurso faila pvz userRoutes.js
12. src/api/userRoutes.js - sukuriam router express.Router() iseksportuojam
    su module.exports default exportu
13. sukurti ir exportuoti mongo client
