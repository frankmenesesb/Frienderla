/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(function() {
    $(".submit_button").click(function() {
        
        
        var strFile = $("#file01").val();
        var strNombre = $("#txtNombre").val();
        
        
        alert(strFile+' '+strNombre);
        var dataString = {'file01': strFile, 'elnombre': strNombre};
        
        
        if (strNombre === '') {

            alert("Ingresa Nombre..");
            $("#txtNombre").focus();

        } 
        else
        {
            $("#flash").show();
            $("#flash").fadeIn(400).html('<span class="load">Loading..</span>');
            $.ajax({
                type: "POST",
                url: "../publica_foto.php",
                data: dataString,
                dataType: 'json',
                cache: true,
                success: function(jsonResp, html) {


                    $("#show").after(html);
                    
                    $("#flash").hide();
                    

                    if (jsonResp.RESPONSE) {

                        alert(jsonResp.MESSAGE);
                        //llevar();
                        
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