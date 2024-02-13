const express = require('express'); 
const path = require('path');

const app = express();

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'../index.html'));
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`)
});