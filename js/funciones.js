if(typeof(localStorage.nombres) == "undefined")
	localStorage["nombres"] = JSON.stringify([]);

function getCelda(x,y) {
	return document.getElementById("cell-"+x+"-"+y);
 }
function obtenerCeldaVacia (){
 estalleno=lleno();
 if(estalleno==false){
	do { 
		x=Math.floor((Math.random() * 4) + 1);
    	y=Math.floor((Math.random() * 4) + 1);
		c=getCelda(x,y);
    } 
	while (c.dataset.valor!=0);
	insertarValorEnCelda(c,2);
	return(c);
 }	
}

function inicializador(){
var vector  =  JSON.parse(localStorage["nombres"]);
	obtenerCeldaVacia ();
	obtenerCeldaVacia ();
	document.getElementById("puntos").innerHTML=0;
	if (vector==0){
	 document.getElementById("mejorpuntaje").innerHTML=0;
	}else {
	document.getElementById("mejorpuntaje").innerHTML=vector[0].puntaje};
}


function insertarValorEnCelda(celda,valor){
  	if (valor==0) {
    	vaciarCelda(celda);
   	}
	else{
    	celda.innerHTML=valor;
    	celda.dataset.valor=valor;
     	celda.className="grid-cell has-value has-value-"+valor;
    }
}


function celdaVacia (x,y){
	var c=getCelda(x,y);
	if (c.dataset.valor==0){
    	return (true);
  	} 
  	else {
  		return (false);
  	}
  
}


function getPosicionMasLejana(celda,dir) {
	cel = celda;
 	var x=celda.dataset.x;
 	var y=celda.dataset.y; 	
	if (dir==38){
	    y--;
	    while (y>0) {	    
		    if  (celdaVacia(x,y)==false){
		    	/*if (getCelda(x,y).dataset.valor != celda.dataset.valor){
		    		f=y-1;
		    		return getCelda(x,f);
		    	}			    	
				else */return(getCelda(x,y));
		    }			
			y--;	
		}   
	   	if (y==0){
		    return(getCelda(x,1));			
		}
	}
	else if (dir==39){
	        x++;
	        while (x<5) {
		        if  (celdaVacia(x,y)==false) {
		        	if ((getCelda(x,y)).dataset.valor != cel.dataset.valor){
		        		f=x-1;
		    			return getCelda(f,y);
		    		}
		    		else return(getCelda(x,y));
	            }
				x++;	
		    }   
			if (x==5){
	  	        return(getCelda(4,y));			
			}
	}
	else if (dir==40){	
	        y++;
	        while (y<5){
				if  (celdaVacia(x,y)==false) {
					/*if ((getCelda(x,y)).dataset.valor != cel.dataset.valor){
						f=y+1;
		    			return getCelda(x,f);
		    		}
			     	else */return(getCelda(x,y));
			 	}
		     	y++;
	        }   
		 	if (y==5){
	  	     	return(getCelda(x,4));
	  	    }
	}	
	else if (dir==37){
	        x--;
			while (x>0){		    
		        if  (celdaVacia(x,y)==false) {
		        	if ((getCelda(x,y)).dataset.valor != cel.dataset.valor){
		        		f=x+1
		    			return getCelda(f,y);
		    		}
			        else return(getCelda(x,y));
	            }
			 	x--;	
		    }   
		    if (x==0){
	  	        return(getCelda(1,y));
			}
	}			
}
 
 function vaciarCelda(celda){
    celda.innerHTML=' ';
    celda.dataset.valor=0;
    celda.className="grid-cell";
 }
 

function dentroDeLosLimites (x,y){ 
	if ((x>0) && (x<5)) {
        if ((y>0) && (y<5)) {
	    	return (true);
	    }
	}
	else {
		return (false);
	}
}


function moverCelda(celda,dir){ 
    if (dir==38) {
		aux=celda;
		c=getPosicionMasLejana(celda,38);	
		v=aux.dataset.valor;  
	    if ((dentroDeLosLimites((c.dataset.x),(c.dataset.y))==true) && ((aux.dataset.valor)==(c.dataset.valor))  &&  (aux==c)){
	    	 //Para que es esto?
		}
		else if (((aux.dataset.valor)==(c.dataset.valor)) && (aux!=c)){
             mezclarCeldas(aux,c);
        }
        else if (((aux.dataset.valor)!=(c.dataset.valor))  && (aux!=c)   && ((c.dataset.valor)!=0)){
            y=c.dataset.y;
            y++;
            cel=getCelda(c.dataset.x,y);
            insertarValorEnCelda(cel,aux.dataset.valor);
            if (cel!=celda){
                vaciarCelda(celda);
            }
        }
        else if (c.dataset.valor==0){
	        insertarValorEnCelda( getCelda(c.dataset.x,c.dataset.y) ,v); 
	        insertarValorEnCelda(aux,0);
	    } 
	} 
	else if (dir==40) {
		aux=celda;
		c=getPosicionMasLejana(celda,40);	
		v=aux.dataset.valor;  
	    if ((dentroDeLosLimites((c.dataset.x),(c.dataset.y))==true) && ((aux.dataset.valor)==(c.dataset.valor))  &&  (aux==c)){
	    	 //Para que es esto?
		}
		else if (((aux.dataset.valor)==(c.dataset.valor)) && (aux!=c)){
             mezclarCeldas(aux,c);
        }
        else if (((aux.dataset.valor)!=(c.dataset.valor))  && (aux!=c)   && ((c.dataset.valor)!=0)){
            y=c.dataset.y;
            y--;
            cel=getCelda(c.dataset.x,y);
            insertarValorEnCelda(cel,aux.dataset.valor);
            if (cel!=celda){
                vaciarCelda(celda);
            }
        }
        else if (c.dataset.valor==0){
	        insertarValorEnCelda( getCelda(c.dataset.x,c.dataset.y) ,v); 
	        insertarValorEnCelda(aux,0);
	    } 
	}
	else if (dir==39) {
		aux=celda;
		c=getPosicionMasLejana(celda,39);
		v=aux.dataset.valor;	  
	    if ((dentroDeLosLimites((c.dataset.x),(c.dataset.y))==true) && ((aux.dataset.valor)==(c.dataset.valor))  &&  (aux==c)){
	    	 //Para que es esto?
		}
		else if (((aux.dataset.valor)==(c.dataset.valor)) && (aux!=c)){
             mezclarCeldas(aux,c);
        }
        else if (((aux.dataset.valor)!=(c.dataset.valor))  && (aux!=c)   && ((c.dataset.valor)!=0)){
            x=c.dataset.x;
            x++;
            cel=getCelda(c.dataset.x,y);
            insertarValorEnCelda(cel,aux.dataset.valor);
            if (cel!=celda){
                vaciarCelda(celda);
            }
        }
        else if (c.dataset.valor==0){
	        insertarValorEnCelda( getCelda(c.dataset.x,c.dataset.y) ,v); 
	        insertarValorEnCelda(aux,0);
	    } 
	}
	else if (dir==37) {
		aux=celda;
		c=getPosicionMasLejana(celda,37);	
		v=aux.dataset.valor;  
	    if ((dentroDeLosLimites((c.dataset.x),(c.dataset.y))==true) && ((aux.dataset.valor)==(c.dataset.valor))  &&  (aux==c)){
	    	 //Para que es esto?
		}
		else if (((aux.dataset.valor)==(c.dataset.valor)) && (aux!=c)){
             mezclarCeldas(aux,c);
        }
        else if (((aux.dataset.valor)!=(c.dataset.valor))  && (aux!=c)   && ((c.dataset.valor)!=0)){
            x=c.dataset.x;
            x--;
            cel=getCelda(c.dataset.x,y);
            insertarValorEnCelda(cel,aux.dataset.valor);
            if (cel!=celda){
                vaciarCelda(celda);
            }
        }
        else if (c.dataset.valor==0){
	        insertarValorEnCelda( getCelda(c.dataset.x,c.dataset.y) ,v); 
	        insertarValorEnCelda(aux,0);
	    } 
	}

}   
 

function mezclarCeldas (desde,hasta){
    if (desde.dataset.valor == hasta.dataset.valor) {
	  	v=parseInt(desde.dataset.valor)+parseInt(hasta.dataset.valor);
	 	insertarValorEnCelda(hasta,v);
     	vaciarCelda(desde);
		p=document.getElementById("puntos").innerHTML;
	 	document.getElementById("puntos").innerHTML=parseInt(p)+parseInt(v);
    }
}


function moverCeldas(event){
    //var up=38;
    //var down=40;
    //var left=37;
    //var right=39;
    mov = event.keyCode; 
  	if (mov==38) {      
       	for (var y=1 ;y<5;y++) {
	        for (var x=1; x<5;x++) {
			    c=getCelda(x,y);
				if ( c.dataset.valor != 0) {				   
					moverCelda(getCelda(c.dataset.x,c.dataset.y),38);
				}
		    }
		}
	}
	else if (mov==40) {      
	      	for (var y=4 ;y>0;y--) {
	       		for (var x=1; x<5;x++) {
				    c=getCelda(x,y);
					if ( c.dataset.valor != 0) {				   
						moverCelda(getCelda(c.dataset.x,c.dataset.y),40);
					}
			    }
			}
	}
	else if (mov==37) {      
		       	for (var x=1 ;x<5;x++) {
	       			for (var y=1; y<5;y++) {
					    c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),37);
						}
				    }
				}
	}
	else if (mov==39) {      
			       	for (var x=4 ;x>0;x--) {
	       				for (var y=1; y<5;y++) {
						    c=getCelda(x,y);
							if ( c.dataset.valor != 0) {				   
								moverCelda(getCelda(c.dataset.x,c.dataset.y),39);
							}
					    }
					}
	}		
  obtenerCeldaVacia ();
  hayMovimientosDisponibles();
 
}

function moverCeldasTouch(){
	var contenedor = document.getElementById('zonaTactil');	
	contenedor.addEventListener('touchstart', function (event) {
  	// Solo tomamos un dedo
  		touchStartClientX = event.touches[0].clientX; 
  		touchStartClientY = event.touches[0].clientY;
	});
 
	// Este método tenés que ignorarlo porque se ejecuta cada vez que moves el dedo
	contenedor.addEventListener('touchmove', function (event) {
 		event.preventDefault(); // De esta forma lo ignoramos
	});
	 
	// Fin del touch
	contenedor.addEventListener('touchend', function (event) {
  		var touchEndClientX, touchEndClientY; 
  		touchEndClientX = event.changedTouches[0].clientX;
  		touchEndClientY = event.changedTouches[0].clientY;
  
  		// Acá tienen que comparar touchStartClient* con touchEndClient* 
  		// y ejecutar la función que corresponda
  			if((touchEndClientX<touchStartClientX+30) && (touchEndClientY> touchStartClientY-10) && (touchEndClientY<touchStartClientY+10)){
        		for (var x=1 ;x<5;x++) {
	       			for (var y=1; y<5;y++) {
					    c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),37);
						}
				    }
				}
        	}          
        	else if((touchEndClientX>touchStartClientX-30) && (touchEndClientY> touchStartClientY-10) && (touchEndClientY<touchStartClientY+10)){
        		for (var x=4 ;x>0;x--) {
	       			for (var y=1; y<5;y++) {
						c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),39);
						}
					}
				}
        	} 
        	else if((touchEndClientY>touchStartClientY+30) && (touchEndClientX> touchStartClientX-10) && (touchEndClientX<touchStartClientX+10)){
        		for (var y=4 ;y>0;y--) {
	       			for (var x=1; x<5;x++) {
				    	c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),40);
						}
			    	}
				}
        	}
        	else if((touchEndClientY<touchStartClientY-30) && (touchEndClientX> touchStartClientX-10) && (touchEndClientX<touchStartClientX+10)){
        		for (var y=1 ;y<5;y++) {
	        		for (var x=1; x<5;x++) {
			    		c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),38);
						}
		    		}
				}		
        	}
	obtenerCeldaVacia ();
	hayMovimientosDisponibles();
	});
	
}
/*
function moverCeldastouch(){
    var xIni;
    var yIni;
    var zonaTactil = document.getElementById('zonaTactil');
    zonaTactil.addEventListener('touchstart', function(e){
        if (e.targetTouches.length == 1) { 
        	var touch = e.targetTouches[0]; 
        	xIni = touch.pageX;
        	yIni = touch.pageY;
        }
    });
          
    zonaTactil.addEventListener('touchmove', function(e){
        if (e.targetTouches.length == 1) { 
        	var touch = e.targetTouches[0]; 
        	if((touch.pageX<xIni+50) && (touch.pageY> yIni-10) && (touch.pageY<yIni+10)){
        		for (var x=1 ;x<5;x++) {
	       			for (var y=1; y<5;y++) {
					    c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),37);
						}
				    }
				}
        	}          
        	else if((touch.pageX>xIni-50) && (touch.pageY> yIni-10) && (touch.pageY<yIni+10)){
        		for (var x=4 ;x>0;x--) {
	       			for (var y=1; y<5;y++) {
						c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),39);
						}
					}
				}
        	} 
        	else if((touch.pageY>yIni+50) && (touch.pageX> xIni-10) && (touch.pageX<xIni+10)){
        		for (var y=4 ;y>0;y--) {
	       			for (var x=1; x<5;x++) {
				    	c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),40);
						}
			    	}
				}
        	}
        	else if((touch.pageY<yIni-50) && (touch.pageX> xIni-10) && (touch.pageX<xIni+10)){
        		for (var y=1 ;y<5;y++) {
	        		for (var x=1; x<5;x++) {
			    		c=getCelda(x,y);
						if ( c.dataset.valor != 0) {				   
							moverCelda(getCelda(c.dataset.x,c.dataset.y),38);
						}
		    		}
				}		
        	}
    	} 
                                   			 //Esto lo dejo comentado, porque es donde me da el error.
    //obtenerCeldaVacia ();	                 // En este momento, vas a notar que el tactil anda pero
    //hayMovimientosDisponibles();           // no crea una ficha nueva nunca. Tengo que elegir entre esto 
    })	    								 // o que cree multiples fichas. Proba sacarle el comentado si queres.       
}

*/
function rank(){
    var nombre=window.prompt("Felicitaciones conseguiste uno de los 10 mejores puntajes. Ingresa tu nombre: ");
	var nombres  =  JSON.parse(localStorage["nombres"]);
	if (nombre==''){ nombre='Sin Nombre'};
	nombres.push({nombre: nombre , puntaje: parseInt(document.getElementById("puntos").innerHTML)});
	nombres = nombres.sort(function(a,b){	return b.puntaje-a.puntaje;})
	localStorage["nombres"] = JSON.stringify(nombres);
	window.location = "ranking.html"

}

function lleno (){
var numceldas=0;
for (var y=1 ;y<5;y++) {
	    for (var x=1; x<5;x++) {
		    celda=getCelda(x,y);
		    if (celda.dataset.valor!=0) {
  	  	        numceldas++;
			}
			
	    }
    }
	if (numceldas==16){ return true}
	else return false;




}
function hayMovimientosDisponibles () { 
var numceldas=0;
	a=lleno();
 	if (a==true){
		
	    for (var y=1 ;y<5;y++) {
	        for (var x=1; x<5;x++) {
			   celda=getCelda(x,y);
			    if ((chequearAlrededor(celda))==true) {
			      numceldas++;
			    }			
            }
        }
   	}
	if (numceldas==16){
	  return (alert('No hay movimientos disponibles,you lose' ),rank());	 
	}
}



function reiniciar(){ 
	confirmar=confirm("Seguro?"); 
	if (confirmar) {
    	window.location=("Index.html");     
    }
}


window.onload=inicializador();
onload = moverCeldasTouch();
onkeydown=moverCeldas;

function chequearAlrededor (celda){  
 var ok=false;          
  v=celda.dataset.valor;
 var vx=celda.dataset.x;
 var  vy=celda.dataset.y;
  x=vx; y=vy;
  x++;
  xaumentado=x; 
  x--;x--;
  xdecrementado=x;
  
  y++;
  yaumentado=y;
  y--;y--;
  ydecrementado=y;
  if ((vx==1) && (vy==1)){
       if  (((getCelda(xaumentado,vy)).dataset.valor)!=v)  {  
				    ok=true;
                    if  (((getCelda(vx,yaumentado)).dataset.valor)!=v) {
					                 ok=true;
                
  
  
  
                    }else ok =false;
  
        }else ok=false;
  
    }

    if ((vx==1) && (vy==4) ){
       if  (((getCelda(xaumentado,vy)).dataset.valor)!=v) {  
				    ok=true;
                    if  (((getCelda(vx,ydecrementado)).dataset.valor)!=v) {
					                 ok=true;
                
  
  
  
                    }else ok =false;
  
        }else ok=false;
  
    }
	 if ((vx==4) && (vy==1) ){
       if  (((getCelda(xdecrementado,vy)).dataset.valor)!=v)  {  
				    ok=true;
                    if  (((getCelda(vx,yaumentado)).dataset.valor)!=v) {
					          ok=true;
                
  
  
  
                    }else ok =false;
  
        }else ok=false;
  
    }
	if ((vx==4) && (vy==4)) {
       if  (((getCelda(xdecrementado,vy)).dataset.valor)!=v) {  
				    ok=true;
                    if  (((getCelda(vx,ydecrementado)).dataset.valor)!=v) {
					          ok=true;
                
  
  
  
                    }else ok =false;
  
        }else ok=false;
  
    }
	if ( ((vx==2) && (vy==1))   ||  (((vx==3) && (vy==1) ) )){
       if  (((getCelda(xaumentado,vy)).dataset.valor)!=v) {  
				    ok=true;
                    if  ((getCelda(vx,yaumentado).dataset.valor)!=v){
					                 ok=true;
						if  ((getCelda(xdecrementado,vy).dataset.valor)!=v) {
					                 ok=true;
                       }else ok =false;
                    }else ok =false;
  
        }else ok=false;
  
    }
	if ( ((vx==2) && (vy==4) )  ||  ((vx==3) && (vy==4) ) ){
       if ( (((getCelda(xaumentado,vy)).dataset.valor)!=v)  ){  
				    ok=true;
                    if  (((getCelda(vx,ydecrementado)).dataset.valor)!=v) {
					                 ok=true;
						if  (((getCelda(xdecrementado,vy)).dataset.valor)!=v) {
					                 ok=true;
                       }else ok =false;
                    }else ok =false;
  
        }else ok=false;
  
    }
	if ( ((vx==1) && (vy==2))  ||  ((vx==1) && (vy==3) ) ){
       if ( (((getCelda(xaumentado,vy)).dataset.valor)!=v)  ){  
				    ok=true;
                    if  (((getCelda(vx,yaumentado)).dataset.valor)!=v){
					                 ok=true;
						if  (((getCelda(vx,ydecrementado)).dataset.valor)!=v) {
					                 ok=true;
                       }else ok =false;
                    }else ok =false;
  
        }else ok=false;
  
    }
	if ( ((vx==4) && (vy==2) )  ||  ((vx==4) && (vy==3) ) ){
       if  (((getCelda(xdecrementado,vy)).dataset.valor)!=v)  {  
				    ok=true;
                    if  (((getCelda(vx,yaumentado)).dataset.valor)!=v) {
					                 ok=true;
						if  (((getCelda(vx,ydecrementado)).dataset.valor)!=v) {
					                 ok=true;
                       }else ok =false;
                    }else ok =false;
  
        }else ok=false;
  
    }
	if ( ((vx==2) && (vy==2)  )  ||  ((vx==3) && (vy==2) )  || ((vx==2) && (vy==3))  ||  ((vx==3) && (vy==3)) ){
       if  (((getCelda(xdecrementado,vy)).dataset.valor)!=v)  {  
				    ok=true;
                    if  (((getCelda(vx,yaumentado)).dataset.valor)!=v){
					                 ok=true;
						if  (((getCelda(vx,ydecrementado)).dataset.valor)!=v){
					                 ok=true;
									 if  (((getCelda(xaumentado,vy)).dataset.valor)!=v) {
					                   ok=true;
									 
									 } else ok=false;
                       }else ok =false;
                    }else ok =false;
  
        }else ok=false;
  
    }

 return ok;
} 
  
