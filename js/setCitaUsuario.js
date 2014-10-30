/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function asistir(id) {
        
        
        var strLogin =$("#recibirVariable2").val();
        var strId = id;
        //alert(strLogin,id);
        alert('uno '+strLogin+ 'id '+id);
        //alert('dos'+SESSION.USER);
        
        var dataString = {'usario': strLogin, 'id': strId};
        
        
        if (strLogin === '') {

            alert("Ingresa usuario..");
            //$("#txtNombre").focus();

        } else if (strId === '' ) {

            alert("No has ingresado id :)..");
            

        }
        else
        {
            
            $.ajax({
                type: "POST",
                url: "../regis_citaAsistir.php",
                data: dataString,
                dataType: 'json',
                cache: true,
                success: function(jsonResp, html) {


                    
                    

                    if (jsonResp.RESPONSE) {


                        
                        alert(jsonResp.MESSAGE);
                        
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
    }