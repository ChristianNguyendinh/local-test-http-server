import express from 'express';

const app = express();
const port = 3000;
const router = express.Router();

router.use((req, res) => {
	res.status(200).send('hello world');
});

app.use('/', router);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

