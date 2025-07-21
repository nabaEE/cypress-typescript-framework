# install typescript

npm install typescript --save-dev or yarn add typescript --dev

# Create a tsconfig.json file then add the below content

{
"compilerOptions": {
"target": "es5",
"lib": ["es5", "dom"],
"sourceMap": true,
"types": ["cypress", "node"]
},
"include": ["**/*.ts"]
}

# install cypress

npm install cypress --save -dev

# open cypress

npx cypress open
Select the type of testing as end to end testing

# run prettier

yarn prettier --check cypress
yarn prettier -w <filename>
