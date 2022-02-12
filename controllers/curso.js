const { links } = require("express/lib/response");

let lista = [];
let nextId = 1;

function listar(){
    return lista;
}
function crear(datos){
    let curso = {
        id: nextId,
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        precio: datos.precio
    }
    lista.push(curso);
    nextId++;
    return curso;
}
function editar(id,datos){
    let curso = lista.find(elem=>elem.id==id);
    curso.nombre = datos.nombre;
    curso.descripcion = datos.descripcion;
    curso.precio = datos.precio;
    return curso;
}
function eliminar(id){
    lista = lista.filter(e => e.id!=id);
    return { mensaje: "Curso eliminado"};
}
function mostrar(id){
    elemento = lista.find(e => e.id = id);
    return elemento;
}
module.exports = { listar, crear, editar, eliminar, mostrar };