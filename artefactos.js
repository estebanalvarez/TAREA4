// var express = require('express');
// var app = express();

// app.use('/static', express.static('public'));

// app.listen(3000);

// /*const port = process.env.PORT || 3000;

// const express = require('express')
// const app = express();

// console.log(__dirname);

// app.use('/static', express.static(__dirname + '\\public'));

// app.use(express.static('/public'));

// /*const express = require('express')
// const app = express()

// const port = process.env.PORT || 3000;


// app.use

// MIDDLEWARE
// app.use(express.static(__dirname + '/public'));


// app.get('/', (req, res) => {


//     res.render('home', {
//         nombre: 'David'
//     });

// });



// app.listen(port, () => {
//     console.log(`Escuchando peticiones en el puerto ${port}`);
// })*/
const port = process.env.PORT || 3000;

var express = require('express');
var app = express();

app.use('/tarea5', express.static(__dirname + "/public"))

app.get('/', (req, res) => {

    res.send('200');
});

app.listen(port, () => {
    console.log(`LISTENING PORT ${port}`);
});