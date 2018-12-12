echo Welcome to Turnkey. 

echo Let\'s get started. What\'s the name of your project?

read varProjName

echo $varProjName > details/project-details.txt

echo What should we call your database?

read varDbName

varNewDbName="$(echo "${varDbName}" | tr -d '[:space:]')"

echo $varNewDbName >> details/project-details.txt

echo 'heroku create' $varNewDBName >> deploy.sh

echo Installing base dependencies...

npm install pg surge heroku

echo Creating postgreSQL database...
dropdb $varNewDbName'_dev'
createdb $varNewDbName'_dev'

cd frontend
echo Installing frontend dependencies...
npm install

cd ../backend
echo Installing backend dependencies
npm install
npm run knex migrate:rollback
npm run knex migrate:latest

echo Establishing secret
mv .env.example .env

Starting the party...

node app.js & live-server ../frontend/index.html


