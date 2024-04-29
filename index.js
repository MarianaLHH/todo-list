//const input = document.getElementById("");--->Ya esta ligado axios
//Obtener input y boton
const input = document.getElementById("inputTarea");
const button = document.getElementById("buttonTarea");
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
    console.log(response);
  });
};
