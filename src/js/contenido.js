import { Producto } from "../clases/producto";

export const contenidoHtml = () =>{
  const contenido = document.querySelector('.datos');
  contenido.innerHTML = `
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  `;
} 
