

$(function() {
    $(".submit_button").click(function() {
        
        
        var strNom = $("#txtNombre").val();
        var strApe = $("#txtApellido").val();
        var strLog = $("#txtUsuario").val();
        var strPass = $("#txtContrasena").val();
        var strEma = $("#txtEmail").val();
        var strCum = $("#txtCumpleanos").val();
        var strTel = $("#txtTelefono").val();
        var strGen = $("#radioGenero").val();
        var strPai = $("#txtPais").val();
        var strReg = $("#txtRegion").val();
        
        var dataString = {'nombre': strNom, 'apellido': strApe, 'usuario': strLog, 'contrasena': strPass, 'email': strEma
        , 'cumpleanos': strCum, 'telefono': strTel, 'genero': strGen, 'pais': strPai, 'region': strReg};
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
            
            $.ajax({
                type: "POST",
                url: "../regis_user.php",
                data: dataString,
                dataType: 'json',
                cache: true,
                success: function(jsonResp, html) {


                    
                    document.getElementById('txtNombre').value = '';
                    
                    

                    if (jsonResp.RESPONSE) {

                        alert(jsonResp.MESSAGE);
                        llevar();
                        
                        
                    document.getElementById('txtNombre').value = '';
                    

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