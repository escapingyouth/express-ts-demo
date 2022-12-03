import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import router from './routes/userRoutes';

const app = express();

// To parse incoming JSON in POST request body:
app.use(bodyParser.json());

//To parse form data in POST request body:
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

// Views folder and ejs setup:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(router);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
