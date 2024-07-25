 
 /*
 Esta función calcula el aspect ratio de una imagen a partir de una imagen cargada
 */



 
 img = new Image();
			img.onload = function(){
				console.log(img.height + " / " + img.width)

			}
			img.src = "IMAGEN-PRUEBA.jpg";
