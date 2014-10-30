



function mostrarAmigos() {
    
    
    
        
        var strLog=$("#recibirVariable2").val();
        var strPass = "prueba";
        var z=0;
        
        var dataString = {'usuario': strLog, 'contrasena': strPass};
    
    if (strLog === '' ) {

            alert("No has ingresado el usuario :)..");
            $("#txtUsuario").focus();

        }else if (strPass === '' ) {

            alert("No has ingresado Contraseña :)..");
            $("#txtContrasena").focus();

        }else
        {
        $.ajax({
            type:'POST',
            data:dataString,
            dataType:'json',
            url: "../getAmigos.php",
            success:function(jsonResp){
                
                if(jsonResp.RESPONSE){
                    
                    
                    if(jsonResp.MESSAGE === "undefined" || jsonResp.MESSAGE ===undefined) {
                        
                        alert('Error Usuario no registrado!!');
                    }
                    if(jsonResp.MESSAGE === ""){
                        
                        var html='';
                           
                        
                        for(var i=0;i<jsonResp.DATA.length;i++){
                            
                           
                            
                                html+='<div>';
		                
			
                            var foto=jsonResp.DATA[i]["imagen"];
                            var nombre=jsonResp.DATA[i]["nombre"];
                            var login=jsonResp.DATA[i]["login"];
                            var ima="<img src=\"../photos/"+foto+"\" width=\"50px\" id=\"imgPhoto\" class=\"imagenHeader\">";
                            
                            if( (nombre===null || nombre==="") ){ 
                            
                            alert("Error: citas invalidas ");
                           
                            }else{
                            
                               
                            
                           //location.href = '../frm/frmMain.html?var='+nombre+'$'+apellido+'*'+login+"!&"+foto+"@"+sexo+":";
                                html+='<table width="95%" align="center" class="ui-corner-all ui-shadow" id="tblMainWhite">';
			        html+='<tbody>';
                                html+='<tr>';
				html+='<td width="20%">'+ima+'</td>';
			        html+='<td width="50%">';
			        html+='<h5 style="clor:gray !important;"> usuario: '+nombre+'</h5>';
			        html+='</td>';
			        html+='<td width="30%">';
			        html+="<a href=\"#\" class=\"ui-btn ui-shadow ui-corner-all ui-icon-check ui-btn-icon-notext ui-btn-b ui-btn-inline\" onclick=\"asistir('"+login+"');\">Check</a>";
			        html+='</td>';
				html+='</tr>';
                                
                                
//                                html+='<tr>';
//                                html+='<td>';
//                                html+='<h6 style="clor:gray !important;">Asitirán: </h6>';
//                                html+='</td>';
//                                
//                                html+='<td>';
//                                 html+='<h6 style="clor:gray !important;">Adolfo Meneses,';
//                                 html+='Frank Meneses, ';
//                                 html+='Carlos Duran, ';
//                                 html+='Marta Henao, ';
//                                 html+='Mario Baracus, </h6>';
//                                 html+='</td>';
//                                 html+='<td>';
//                                html+='</td>';
//                                html+='</tr>';
                                html+='</tbody>';
                                html+='<tbody id="usuariosCitas'+z+'">';
                                
                                html+='</tbody>';
                                html+='</table>';
                                html+='<br>';
                                z=z+1;
                                
                            //document.location.href = "../frm/frmMain.html?parametro1=" + parametro1 + "&parametro2=" + parametro2 + "&";
                        
                            
                        }
                        
                        html+='</div>';
                        //alert('lo que se envia '+id);
                        //mostrarCitasUsuarios(id);
                        }
                        
                        $("#listAmigos").html(html);
                        
                        
                    }else if(jsonResp.MESSAGE === "EMPTY"){
                        alert("Error: no se encontro datos de registro del usuario!!");
                    }
                }else{
                    alert("Ocurrio Un error:"+jsonResp.MESSAGE);
                }
                
                
            },
            error:function(jsonResp){
                alert("Ocurrio Un error");
            }
        });
    }
    
     
    
}

