let cursos = require('./controllers/curso'); 
let express = require("express");
let app = express();
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('<h3>Bienvenido</h3>');
});

app.get('/cursos/listar',(req, res)=>{
    let lista = cursos.listar();
    res.json(lista);
});

app.get('/cursos/mostrar/:id',(req, res)=>{
    let id = req.params.id;
    let e = cursos.mostrar(id);
    res.json(e);
});

app.post('/cursos/crear',(req, res)=>{
    let datos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    }
    let curso = cursos.crear(datos);
    res.json(curso);
});

app.put('/cursos/actualizar/:id',(req, res)=>{
    let id = req.params.id;
    let datos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    }
    let curso = cursos.editar(id,datos);
    return res.json(curso);
});

app.delete('/cursos/eliminar/:id',(req, res)=>{
    let id = req.params.id;
    let mensaje = cursos.eliminar(id);
    res.json(mensaje);
});

app.listen(3000,()=>console.log("Servidor en el puerto 3000"));