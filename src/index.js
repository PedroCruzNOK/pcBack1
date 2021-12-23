const express = require ('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.options('*', cors())

//configuracion del servidor
app.set('port', process.env.PORT || 3000);
//seccion de middlewares
app.use(express.json());
//rutas url's
app.use(require('./routes/employees'));
//iniciar el servidor 
app.listen(app.get('port'), ()=>{
    console.log('servidor en el puerto', app.get('port'));
});
