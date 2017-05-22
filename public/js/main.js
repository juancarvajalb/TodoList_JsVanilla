//(function(){

    var contador = 0,
        array_pendientes = [],
        array_finalizadas = [],
        input_nuevatarea = document.querySelector("#input_nuevatarea"),
        btn_nuevatarea = document.querySelector("#btn_nuevatarea"),
        list_tareas = document.querySelector("#list_tareas"),
        list_tareas_finalizadas = document.querySelector("#list_tareas_finalizadas"),
        btn_finalizartarea = document.querySelector(".btn_finalizartarea");


    btn_nuevatarea.addEventListener("click", function () {

        var texto = input_nuevatarea.value;
        input_nuevatarea.value = '';
        if (texto !== '') {
            var item_list = {
                'id': contador,
                "texto": texto,
                "fecha_creacion": Date(),
                "fecha_finalizacion": null,
                "finalizada": false,
                "eliminada": false

            };
            array_pendientes.unshift(item_list);
            var nuevo_elemeto = "<a class=\"list-group-item\" ><span class=\"glyphicon glyphicon-asterisk\"></span> " + texto +
                " <button class=\"btn  btn-danger pull-right\" onclick=\"remove_tarea(this," + contador + ")\"><span class=\"glyphicon glyphicon-trash\"></span>" +
                " <button class=\"btn  btn-success pull-right\" onclick=\"finish_tarea(this," + contador + ")\" ><span class=\"glyphicon glyphicon-ok\"></span></button><some:custom:span></some:custom:span></a>";


            var div = document.createElement('div');
            div.innerHTML = nuevo_elemeto;
            //  list_tareas.appendChild(div.children[0]); 
            list_tareas.insertBefore(div.children[0], list_tareas.firstChild);
            contador++;
        } else {
            alert('El campo esta vacio =9');
        }


    });


    function searchfromarray_pendientes(id) {
        for (var i = array_pendientes.length - 1; i >= 0; i--) {
            if (array_pendientes[i]['id'] === id) {
                return i;
            }
        }
    }

    function remove_tarea(referencia, id) {
        var fila = referencia.parentElement;
        referencia.parentElement.parentElement.removeChild(fila);
        array_pendientes[searchfromarray_pendientes(id)]["eliminada"] = true;

    }

    function finish_tarea(referencia, id) {
        var fila = referencia.parentElement;
        referencia.parentElement.parentElement.removeChild(fila);
        var item_list = array_pendientes[searchfromarray_pendientes(id)];
        item_list.finalizada = true;
        item_list.fecha_finalizacion = Date();
        var nuevo_elemeto = "<a class=\"list-group-item list-group-item-success\" > " + item_list.texto + "</a>";
        var div = document.createElement('div');
        div.innerHTML = nuevo_elemeto;
        list_tareas_finalizadas.appendChild(div.children[0]);

    }

    function verstore() {
        console.log("//lista");
        console.log(array_pendientes);
    }

//})();