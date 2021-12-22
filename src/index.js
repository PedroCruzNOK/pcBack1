const express = require ('express');
const app = express();

app.use(
    cors({
      origin: ["http://frontend:5000","http://192.168.100.184:3001", "http://pedroprueba.local.com:5000/", "http://localhost:8081"],
    })
  );
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
