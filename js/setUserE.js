/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(function() {
    $(".submit_button").click(function() {
        
        
        var strNom = $("#txtNombre").val();
        var strApe = $("#txtApellido").val();
        var strLog = $("#txtUsuario").val();
        var strPass = $("#txtContrasena").val();
        var strEma = $("#txtEmail").val();
        
        
        var dataString = {'nombre': strNom, 'apellido': strApe, 'usuario': strLog, 'contrasena': strPass, 'email': strEma};
        if (strNom === '') {

            alert("Ingresa tu nombre..");
            $("#txtNombre").focus();

        } else if (strApe === '' ) {

            alert("No has ingresado tu apellido :)..");
            $("#txtApellido").focus();

        }else if (strLog === '' ) {

            alert("No has ingresado el usuario :)..");
            $("#txtUsuario").focus();

        }else if (strPass === '' ) {

            alert("No has ingresado Contraseña :)..");
            $("#txtContrasena").focus();

        }else if (strEma === '' ) {

            alert("No has ingresado un email :)..");
            $("#txtEmail").focus();

        }
        else
        {
            $("#flash").show();
            $("#flash").fadeIn(400).html('<span class="load">Loading..</span>');
            $.ajax({
                type: "POST",
                url: "../regis_userE.php",
                data: dataString,
                dataType: 'json',
                cache: true,
                success: function(jsonResp, html) {


                    $("#show").after(html);
                    document.getElementById('txtNombre').value = '';
                    $("#flash").hide();
                    

                    if (jsonResp.RESPONSE) {

                        alert(jsonResp.MESSAGE);
                        llevar();
                        
                        $("#show").after(html);
                    document.getElementById('txtNombre').value = '';
                    $("#flash").hide();
                    $("#txtNombre").focus();

                        if (jsonResp.MESSAGE === "") {

                            alert('XD');

                        } else if (jsonResp.MESSAGE === "EMPTY") {
                            alert("No se encontraron datos");
                        }
                    } else {
                        alert("Ocurrio Un error:" + jsonResp.MESSAGE);
                    }

                }
                ,
                error: function(jsonResp) {
                    alert("Ocurrio Un error Diferente");
                }
            });
        }
        return false;
    });
});