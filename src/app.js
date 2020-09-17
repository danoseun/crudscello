import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

 

dotenv.config();

const app = express();
app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5200;





// entry point of the application
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
export default app;