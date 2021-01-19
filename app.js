const express = require('express');
const {cookRouter, mealRouter} = require('./routes')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const exprsHbs = require('express-handlebars');
const path = require('path');


const db = require('./dataBase').getInstance();

const app = express();
const PORT = process.env.PORT || 5000;
db.setModels();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Restaurant API",
            servers: ["http://localhost:5000", "https://restaurants-task.herokuapp.com/"]
        }
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/cook', cookRouter);
app.use('/menu', mealRouter);

app.set('view engine', '.hbs');
app.engine('.hbs', exprsHbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    res.render('home', );
})

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});