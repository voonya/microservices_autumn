import express from 'express';
import axios from 'axios';

const app = express()
const port = 8080

const PORT = 80;
const HOST = 'localhost';

app.get('/api/root-service/file-service/test', async (req, res) => {
    const result = await axios.get(`http://file-service/api/file-service/file/4b568892-9338-4c69-9dcd-dde183878727`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            console.log('Error');

            console.log(error);
            if (error?.response?.status === 404) {
                return { message: 'Success!' }
            }
        })
        .finally(function () {
            // always executed
        });
    console.log(result);


    return res.status(200).json(result);
})

app.get('/api/root-service/', (req, res) => {
    res.send('Service works!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})