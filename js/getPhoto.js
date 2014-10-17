function showPhoto(str){
   if (str!=="2") {
        alert("¬¬");
    }else{
                        var html="";
                       
                        var image="";
                       
                        
                        
                        
                      
                            
                           
                            
                             image=location.search.slice( location.search.indexOf("&") + 1,location.search.indexOf("@"));
                            
                            
                            
                            
                            
    
    
                                //image="<img src=\""+image+"\" width=\"50px\" id=\"imgPhoto\" class=\"imagenHeader\">";
                                //image="<br><img src=\""+image+"\"   style=\"width:50%; height=50%; \" >";
                           
                           
                            html=image;
                            
                        
                        $("#fotoDiv").html(html);
    

    }
}


