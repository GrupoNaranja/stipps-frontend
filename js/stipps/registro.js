// Busqueda por id
function findById(id) {
    $.ajax({
        url: 'http://localhost:9000/api/persona/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)
        $("#documento").val(item.documento)
        $("#nombre").val(item.nombre)
        $("#apellido").val(item.apellido)
        $("#correo").val(item.correp)
        $("#telefono").val(item.telefono)
    })
}

//Cargar de manera automatica los datos regostrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/api/persona',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {
            registros += "<tr class='table-success'>";
            registros += "<td><a href='#' onclick='findById(" + item.id + ")'>" + item.id + "</a></td>";
            registros += "<td>" + item.documento + "</td>";
            registros += "<td>" + item.nombre + "</td>";
            registros += "<td>" + item.apellido + "</td>";
            registros += "<td>" + item.correo + "</td>";
            registros += "<td>" + item.telefono + "</td>";
            registros += "</tr>";
        })
        $("#tbSalidaDatos").html(registros);
        $("#descripcion").val("");
        $("#id").val("");
    })
}

//Accion de adicionar un registro
$("#btnRegistrar").on('click', function () {
    console.log("Registrando");
    if ($("#nombre").val()!="" && 
    $("#apellido").val()!="" && 
    $("#telefono").val()!="" &&
    $("#correo").val()!="" &&
    $("#direccion").val()!="" &&
    $("#usuario").val()!="" &&
    $("#clave").val()!="" ){
        $.ajax({
            url: 'http://localhost:9000/api/usuario',
            data: JSON.stringify({
                nombre: $("#nombre").val(),
                apellido: $("#apellido").val(),
                telefono: $("#telefono").val(),
                correo: $("#correo").val(),
                direccion: $("#direccion").val(),
                usuario: $("#usuario").val(),
                clave: $("#clave").val(),
                
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (result) {
            alert("Registro guardado con éxito")
            location.href="inicio.html"
        })
    }   
else{
    alert("Por favor llenar todos los campos")

}   
})

//Accion de modificar el registro que este seleccionado
$("#btnModificar").on('click', function () {
    console.log("Modificando");
    $.ajax({
        url: 'http://localhost:9000/api/persona/' + $("#id").val(),
        data: JSON.stringify({
            documento: $("#documento").val(),
            nombre: $("#nombre").val(),
            apellido: $("#apellido").val(),
            correo: $("#correo").val(),
            telefono: $("#telefono").val()
        }),
        method: "put",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        loadTable();
    })
})

//Accion para eliminar un registro seleccionado 
$("#btnEliminar").on('click', function () {
    if (confirm("Está seguro de eliminar?")) {
        $.ajax({
            url: 'http://localhost:9000/api/persona/' + $("#id").val(),
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (result) {
            loadTable();
        })
    }
})

//Eveto cargar tabla
$(document).ready(function () {
    loadTable();
})