const express = require('express');
const {cookRouter, mealRouter} = require('./routes')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const db = require('./dataBase').getInstance();

const app = express();
db.setModels();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Restaurant API",
            servers: ["http://localhost:5000"]
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

app.use('*', (err, req, res, next) => {
    res
        .status(err.code || 500)
        .json({
            message: err.message,
            ok: false
        });
});

app.listen(5000, () => {
    console.log('App listen 5000');
});