/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showUser(strUsuario ) {
    
    
    
    var strLog = $("#txtUsuario").val();
        var strPass = $("#txtContrasena").val();
        
        
        var dataString = {'usuario': strUsuario};
    
    if (str!=="2") {
        alert("¬¬");
    }else{
        $.ajax({
            type:'POST',
            data:dataString,
            dataType:'json',
            url: "getUser.php",
            success:function(jsonResp){
                
                if(jsonResp.RESPONSE){
                    
                    
                    
                    if(jsonResp.MESSAGE === ""){
                        var html="";
                        var video="";
                        var comentario="";
                        var image="";
                        var imagec="";
                        var personaje="";
                        var coment;
                        var encabezado = '<thead>';
                            encabezado += '<tr>';
                            
                            encabezado +='<th data-priority="1" style=\"color: #005599; text-align: center;\"><h3>Nombre</h3></th>';
                            encabezado +='<th data-priority="2" style=\"color: #005599; text-align: center;\"><h3>Comentario</h3></th>';
                            encabezado += '</tr>';
                            encabezado += '</thead>';
                            encabezado += '<tbody>';
                        var final ="</tbody></table>";
                        
                        for(var i=0;i<jsonResp.DATA.length;i++){
                            
                            
                           
                            var video=jsonResp.DATA[i]["video"];
                            var comentario=jsonResp.DATA[i]["comentario"];
                            var image=jsonResp.DATA[i]["imagen"];
                            var personaje=jsonResp.DATA[i]["nombre"];
                            var log="";
                            if( (personaje===null || personaje==="") || ((comentario==null || comentario==="") && (image===null || image==="")) ||(/script/.test(comentario)) ){ 
                            
                            log="error datos";
                           
                            }else{
                            if( video===null || video==""){
                                video="";
                                
                            }else{
                                
                                video='<br>'+video;
                            }
                            imagec=image.substring(0, 3);
                            if( image===null || image==""){
                                image="<img src=\""+"images/INVISIBLE.png"+"\" width=\"5\" height=\"5\">"
                                
                            }else{
                                
                                image="<br><img src=\""+image+"\"   style=\"width:50%; height=50%; \" >";
                            }
                            
                            if( comentario===null || comentario==="" ){
                                comentario="";
                            }else{
                                comentario="<br>"+comentario;
                            }
                           
                            
                            
                            html=html+"<tr>\n\
                                    <td><h4>"+jsonResp.DATA[i]["nombre"]+"</h4></td>"+
                                    "<td>"+comentario+video+image+"</td></tr>";
                            
                        }
                        }
                        
                        $("#txtHint").html(encabezado+html+final);
                        
                    }else if(jsonResp.MESSAGE === "EMPTY"){
                        alert("No se encontraron datos");
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

