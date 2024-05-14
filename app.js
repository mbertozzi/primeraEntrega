
    const personas = [
            {nombre: "Martin", apellido: "Gomez", celular:1165605566},
                     ];
    function menu () {
        document.write("%x")
        let operation = parseInt(prompt('Ingrese la opcion:\n 1.Alta \n 2.Listado \n 3.Salir'));
        return operation;
     }

    function listarOrdenado() {
        //Ordena el arrany alfabeticamente por apellido
        console.table(personas.sort((a,b) => a.apellido.localeCompare(b.apellido)));
    }

    function alta (listado,nombre,apellido,celular) {
        //Agrega el registro al array 
        let nuevaPersona= {nombre: nombre, apellido: apellido, celular:celular};
        listado.push(nuevaPersona);
    }

    function existeEnAgenda(agenda,celular) {
        //Valida si el celular existe en el array
        return agenda.findIndex(persona => persona.celular === celular) !== -1;
    }



    let x=true;
    while (x) {

        operation=menu();
      switch (operation) {
        //es el switch del menu.
        case 1:
            let nombre = prompt('Ingresa el nombre');
            let apellido = prompt('Ingresa el apellido');
            let celular = prompt('Ingrese el celular');
            let listado = personas;
            if (!existeEnAgenda(personas,celular)) {
                    alta(listado,nombre,apellido,celular);
            } else {
                    alert("Ya existe el celular " + celular + " -En la proxima version podra editar");
            }
          break;
        case 2:
            listarOrdenado();
          break;
        case 3:
          x=false;
        default:
          alert(
            "Muchas gracias"
          );
          break;
      }
    };








