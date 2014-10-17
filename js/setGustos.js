/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(function() {
    $(".submit_button").click(function() {
        
        
        var strPelicula = $("#txtPelicula").val();
        var strMusica = $("#txtMusica").val();
        var strComida = $("#txtComida").val();
        var strDeporte = $("#txtDeporte").val();
        var strLog=$("#recibirVariable").val();
        
        
        var dataString = {'pelicula': strPelicula, 'musica': strMusica, 'comida': strComida, 'deporte': strDeporte,'usuario': strLog};
        
        
        if (strPelicula === '') {

            alert("Ingresa Pelicula..");
            $("#txtPelicula").focus();

        } else if (strMusica === '' ) {

            alert("No has ingresado musica :)..");
            $("#txtMusica").focus();

        }else if (strComida=== '' ) {

            alert("No has ingresado comida :)..");
            $("#txtComida").focus();

        }else if (strDeporte === '' ) {

            alert("No has ingresado deporte :)..");
            $("#txtDeporte").focus();

        }
        else
        {
            $("#flash").show();
            $("#flash").fadeIn(400).html('<span class="load">Loading..</span>');
            $.ajax({
                type: "POST",
                url: "../regis_gustos.php",
                data: dataString,
                dataType: 'json',
                cache: true,
                success: function(jsonResp, html) {


                    $("#show").after(html);
                    
                    $("#flash").hide();
                    

                    if (jsonResp.RESPONSE) {

                        alert(jsonResp.MESSAGE);
                        llevar();
                        
                        $("#show").after(html);
                   
                    $("#flash").hide();
                    

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