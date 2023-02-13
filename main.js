import { Producto } from './src/clases/producto';
import './src/css/style.css';

// const contenido = document.querySelector('.datos');
//   contenido.innerHTML = `
//   <tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>
//   `;
 

 
  const btnGuardar = document.querySelector('#btnGuardar');
  btnGuardar.addEventListener('click', () => {

    const nombre = document.querySelector('#nombre').value;
    const valor = document.querySelector('#valor').value;
    const cantidad = document.querySelector('#cantidad').value;

    if(!nombre){
        alert('Ingrese el nombre');
        if(!valor){
            alert('Ingrese el valor');
            if(!cantidad){
                alert('Ingrese la cantidad');
                
            }
        }
    }

    // console.log( 'Deberia imprimir esto: '+ nombre, valor, cantidad);

    let producto = new Producto();
    producto.guardar(nombre, valor, cantidad);
   
  });
  

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
