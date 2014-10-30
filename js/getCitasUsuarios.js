



function mostrarCitasUsuarios(cita) {
    
    
        var z=0;
        var tabla="#usuariosCitas";
        var strLog = "una";
        var strPass = "prueba";
        var strCita=cita;
        //alert(strCita);
        var dataString = {'id': strCita, 'contrasena': strPass};
    
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
            url: "../getCitasUsuarios.php",
            success:function(jsonResp){
                
                if(jsonResp.RESPONSE){
                    
                    
                    if(jsonResp.MESSAGE === "undefined" || jsonResp.MESSAGE ===undefined) {
                        
                        //alert('Error Usuario no registrado!!');
                    }
                    if(jsonResp.MESSAGE === ""){
                        
                        var html='';
                           html+='<tr>';
                                html+='<td>';
                                html+='<h6 style="clor:gray !important;">Asitirán: </h6>';
                                html+='</td>';
                                
                                html+='<td>';
                                html+='<h6 style="clor:gray !important;">Adolfo Meneses,';
                           var final='';
                                final+='</h6></td>';
                                final+='<td>';
                                final+='</td>';
                                final+='</tr>';
                                final+='</tbody>';
                                
                                var datos=''
;                        
                        for(var i=0;i<jsonResp.DATA.length;i++){
                            
                           
                            
                               
                                
                                 
                                 
                                 
		                
			
                            //var id=jsonResp.DATA[i]["id"];
                            var nombre=jsonResp.DATA[i]["nombre"];
                            var apellido=jsonResp.DATA[i]["apellidos"];
//                            var lugar=jsonResp.DATA[i]["lugar"];
//                            var fecha=jsonResp.DATA[i]["fecha"];
//                            var tipo=jsonResp.DATA[i]["tipo"];
//                            var hora=jsonResp.DATA[i]["hora"];
//                            var descripcion=jsonResp.DATA[i]["descripcion"];
                            
                            if( (nombre===null || nombre==="") ){ 
                            
                            //alert("Error: citas invalidas ");
                            datos='';
                           
                            }else{
                            
                               
                            
                           //location.href = '../frm/frmMain.html?var='+nombre+'$'+apellido+'*'+login+"!&"+foto+"@"+sexo+":";
                                datos+=''+nombre+' '+apellido+', ';
                                
                            //document.location.href = "../frm/frmMain.html?parametro1=" + parametro1 + "&parametro2=" + parametro2 + "&";
                        
                            
                        }
                        
                        $(tabla+z).html(html+datos+final);
                        z=z+1;
                        datos='';
                        }
                        
                        
                        
                    }else if(jsonResp.MESSAGE === "EMPTY"){
                        //alert("Error: no se encontro datos de registro del usuario!!");
                    }
                }else{
                    //alert("Ocurrio Un error:"+jsonResp.MESSAGE);
                }
                
                
            },
            error:function(jsonResp){
                //alert("Ocurrio Un error");
            }
        });
    }
    
     
    
}

