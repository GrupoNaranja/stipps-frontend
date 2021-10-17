// Busqueda por id
function findById(id) {
    $.ajax({
        url: 'http://localhost:9000/api/continente/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)
        $("#descripcion").val(item.descripcion)
    })
}

//Cargar de manera automatica los datos regostrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/api/continente',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {
            registros += "<tr class='table-success'><td><a href='#' onclick='findById(" + item.id + ")'>" + item.id + "</a></td><td>" + item.descripcion + "</td></tr>";
        })
        $("#tbSalidaDatos").html(registros);
        $("#descripcion").val("");
        $("#id").val("");
    })
}

//Accion de adicionar un registro
$("#btnAdicionar").on('click', function () {
    $.ajax({
        url: 'http://localhost:9000/api/continente',
        data: JSON.stringify({
            descripcion: $("#descripcion").val()
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        loadTable();
    })
})

//Accion de modificar el registro que este seleccionado
$("#btnModificar").on('click', function () {
    $.ajax({
        url: 'http://localhost:9000/api/continente/' + $("#id").val(),
        data: JSON.stringify({
            descripcion: $("#descripcion").val()
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
            url: 'http://localhost:9000/api/continente/' + $("#id").val(),
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