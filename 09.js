/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function cuantosRepetidos(array, elemento) {
  // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
  // Cada subarray contiene strings.
  // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
  // Ej:
  // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
  // ya que 'manzana' se repite 2 veces.
  // Nota: Podes usar for loops anidados.

  // Tu código aca:

  var cantidad = 0

  for (const subArray of array) {
    for (const item of subArray) {
      if(item === elemento){
        cantidad ++
      }
    }
  }

  return cantidad

}

// No modifiques nada debajo de esta linea //

module.exports = cuantosRepetidos