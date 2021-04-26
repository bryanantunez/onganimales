function validarFormulario() {
    $('.alert').remove();
    var nombre = $('#nombre').val(),
        correo = $('#correo').val(),
        numero = $('#numero').val(),
        mensaje = $('#mensaje').val();

    if (nombre == "" || nombre == null) {
        cambiarColor("nombre");
        mostrarAlerta("Campo obligatorio");
        return false;

    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)) {
            cambiarColor("nombre")
            mostrarAlerta("No se permiten caracteres especiales o numeros")
            return false;
        }
    }
    if (correo == "" || correo == null) {
        cambiarColor("correo");
        mostrarAlerta("Campo obligatorio");
        return false;

    } else {
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(correo)) {
            cambiarColor("correo")
            mostrarAlerta("Por favor ingresar un correo válido")
            return false;
        }
    }

    if (numero == "" || numero == null) {
        cambiarColor("numero");
        mostrarAlerta("Campo obligatorio");
        return false;

    } else {
        var expresion = /^[0-9]+$/;
        if (!expresion.test(numero)) {
            cambiarColor("numero")
            mostrarAlerta("Por favor escriba solamente con números")
            return false;
        }
    }

    if (mensaje == "" || mensaje == null) {
        cambiarColor("mensaje");
        mostrarAlerta("Campo obligatorio");
        return false;

    }

    $('form').submit();
    return true;

}

$('input').focus(function() {
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('numero');

});

$('textarea').focus(function() {
    $('.alert').remove();
    colorDefault('mensaje');
})

function colorDefault(dato) {
    $('#' + dato).css({
        border: "1px solid #999"
    })
}

function cambiarColor(dato) {
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

function mostrarAlerta(texto) {
    $('#nombre').before('<div class="alert">Error: ' + texto + '</div>')
}