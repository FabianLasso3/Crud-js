import { v4 as uuid } from "uuid";

export class Producto{
    
    nombre='';
    valor='';
    cantidad ='';

    constructor(nombre, valor, cantidad){
        this.id = uuid();
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    set setValor(valor){
        this.valor = valor;
    }

    set setCantidad(cantidad){
        this.cantidad = cantidad;
    }

    get getNombre(){
        return this.nombre;
    }

    get getValor(){
        return this.valor;
    }

    get getCantidad(){
        return this.cantidad;
    }

    guardar(nombre, valor, cantidad){
        if(nombre && valor && cantidad != null || ''){
            const contenido = document.querySelector('.datos');
            const crearFila = document.createElement('tr');
            const html = `
                <th scope="row">${this.id}</th>
                <td>${nombre}</td>
                <td>${valor}</td>
                <td>${cantidad}</td>
            `;    
            contenido.append(crearFila);
            contenido.innerHTML = html;
            this.limpiarFormulario();  
            return contenido;
        } else{
            alert('no me voy a ejecutar');
        }
    }
            
    modificar(){

    }

    eliminar(){
        
    }

    variablesIds(){
        const nombre = document.querySelector('#nombre');
        const valor = document.querySelector('#valor');
        const cantidad = document.querySelector('#cantidad');
    }

    limpiarFormulario(){
        this.variablesIds();
        nombre.value='';
        valor.value='';
        cantidad.value='';
    }

    validarFormulario(){
        this.variablesIds();
        if(this.nombre == '' || this.nombre == null){

        }
    }

    
}