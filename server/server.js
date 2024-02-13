const express = require('express'); 
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'../index.html'));
})












// express global error handler

const defaultObj = {
    log: 'Express error handler caught unknown error',
    status: 500, 
    message: {err: 'An error occurred'}
};

app.use((err, req, res, next) => {
    const errorObj = Object.assign({}, defaultObj, err);
    console.log('ERROR:', errorObj.log);
    const errorStatus = errorObj.status || 500; 
    return res.status(errorStatus).json({status: errorStatus, data: errorObj.message});
});


// start server on port 3000
app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`)
});

module.exports = app; 