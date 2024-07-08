function contacto (){
    var nombre = document.forms[0]. nombre.value
    var apellido;
    apellido = document.form_contacto.apellido.value
    var email = document.getElementById("email-id").value
   
    if(nombre==""){
        document.getElementById("nomre-error").innerHTML = "El nombre es obligatorio"
    }
    console.log("Formulario",nombre,apellido,email,mensaje,document.forms)
    document.getElementById("mensaje").innerHTML = "Grasias por contactarse"
}
function getTipoSeguro(){
    console.log("Entre")
    var tipo_de_seguro = document.getElementById("tipo_de_seguro-id").value
    console.log("tipo_de_seguro",tipo_de_seguro)
    if(tipo_de_seguro==1){
        document.getElementById("mensajeValorTipoSeguro").innerHTML="$ 500"

    }else if(tipo_de_seguro==2){
        document.getElementById("mensajeValorTipoSeguro").innerHTML="$ 1000"

    }else{document.getElementById("mensajeValorTipoSeguro").innerHTML="$ 1500"
}
}
getTipoSeguro()
