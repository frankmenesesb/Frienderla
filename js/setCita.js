/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(function() {
    $(".submit_button").click(function() {
        
        
        var strNombre = $("#txtNombre").val();
        var strHora = $("#txtHora").val();
        var strFecha = $("#txtFecha").val();
        var strLugar = $("#txtLugar").val();
        var strTipo = $("#tipoCategoria").val();
        var strLog=$("#recibirVariable2").val();
        //alert('uno'+strLog);
        //alert('dos'+SESSION.USER);
        
        var dataString = {'nombre': strNombre, 'tipo': strTipo,'usuario': strLog, 'hora': strHora,'fecha': strFecha,'lugar': strLugar};
        
        
        if (strNombre === '') {

            alert("Ingresa nombre de la cita..");
            $("#txtNombre").focus();

        } else if (strTipo === '' ) {

            alert("No has ingresado categoria :)..");
            $("#tipoCategoria").focus();

        }else if (strLog=== '' ) {

            alert("No has ingresado usuario :)..");
            

        }
        else
        {
            
            $.ajax({
                type: "POST",
                url: "../regis_cita.php",
                data: dataString,
                dataType: 'json',
                cache: true,
                success: function(jsonResp, html) {


                    
                    

                    if (jsonResp.RESPONSE) {


                        var encabezado='<div>';
                        var final='</div>'
                        var html=jsonResp.MESSAGE;
                        alert(jsonResp.MESSAGE);
                        $("#txtNombre").val('');
                        $("#tipoCategoria").val('');
                        $("#txtHora").val('');
                        $("#txtFecha").val('');
                        $("#txtLugar").val('');
                        //llevar();
                        $("#txtMensaje").html(encabezado+html+final);
                        mostrarCitas();
                        
                    

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