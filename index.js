//const input = document.getElementById("");--->Ya esta ligado axios

//Obtener input y boton
const input = document.getElementById("inputTarea");
const button = document.getElementById("buttonTarea");
const readButton = document.getElementById("readTareas");
const lista = document.getElementById("lista");
//Funcion[tarea]-->{div}
function toDivs(arregloTareas) {
  lista.innerHTMÑ = ""; // lIMPIAMOS PARA QUE AL PRESIONAR ACTUALIZAR NO SE DUPLIQUE
  const tareaDivs = arregloTareas.map((tarea) => {
    const divTarea = document.createElement("div");
    divTarea.id = tarea._id;
    divTarea.innerHTML = `
  <span>${tarea.name}</span>
  <button onclick="borrarTarea(this)">x</button>
  `; //this-->Toma el valo segun donde se ejecute
    return divTarea;
  });
  lista.append(...tareaDivs); //sprite operator metiendo en lista
}
//-----------------------------------CRUD-------------------------------
//Create
button.onclick = () => {
  //Validar que input no este vacio
  if (input.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El campo tarea no debe quedar vacio",
    });
    return;
  }
  axios({
    //LLamada a axios y enviaños un objeto
    method: "POST",
    url: "https://crudcrud.com/api/a6fd8cd21d5e41a79c51acb70fea341d/todos", //url de crud crud ¿XQ /todos?
    data: {
      name: input.value,
    },
  }).then((response) => {
    input.value = ""; //borrar el input
    Swal.fire({
      icon: "success", //Documentacion de swwtalert2
      title: "Exito",
      text: "Tarea crerada exitosamente",
    });
    console.log(response);
  });
};
//Read
readButton.onclick = () => {
  axios({
    method: "GET",
    url: "https://crudcrud.com/api/a6fd8cd21d5e41a79c51acb70fea341d/todos",
  }).then((response) => {
    toDivs(response.data);
  });
};
//UPDATE

//Delete
function borrarTarea(elemento) {
  //elemento es el boton
  const tareaId = elemento.parentElement.id; //parent-->
  axios({
    method: "DELETE",
    url:
      "https://crudcrud.com/api/a6fd8cd21d5e41a79c51acb70fea341d/todos/" +
      tareaId,
  }).then((response) => {
    const divTarea = elemento.parentElement;
    divTarea.parentElement.removeChild(divTarea); //¿?
    console.log(response.data);
  });
}
