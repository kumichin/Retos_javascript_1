/*
Esta función calcula el área de un polígono. Sólo acepta triangulos, cuadrados y rectángulos;
te devolverá el área según el poligono que introduzcas 
*/

function determinarArea() {
  let poligono = prompt(
    "di si tu poligono es un triangulo, cuadrado o rectangulo"
  );
  let poligonoMinuscula = poligono.toLowerCase();

  if (poligonoMinuscula == "triangulo") {

      let triangulo = parseInt(prompt("Introduce el valor de la base de tu triángulo"));
      let triangulo2 = parseInt(prompt("introduce el valor de la altura de tu triángulo"));
      let areaTriangulo = (triangulo / 2) * triangulo2;
      console.log("El área de un triangulo se define como la mitad de la base por la altura, por tanto... tu triangulo tiene un área de " + areaTriangulo);
  }else if(poligonoMinuscula == "cuadrado"){
    let cuadrado = parseInt(prompt("Introduce el valor de un lado del cuadrado"));
    let areaCuadrado = cuadrado * 2;
    console.log("El área de un cuadrado se define como lado por lado, por tanto... Tu cuadrado tiene un area de " + areaCuadrado);
  }else if(poligonoMinuscula == "rectangulo"){
    let rectanguloLargo = parseInt(prompt("Introduce el valor del alto del rectángulo"));
    let rectanguloAncho = parseInt(prompt("Introduce el ancho de tu rectángulo"));
    let areaRectangulo = rectanguloLargo * rectanguloAncho;
    console.log("El área de un rectángulo se define como alto por ancho, por tanto... El área de tu rectángulo es " + areaRectangulo);
  }else{
    console.log("Este programa actualmente sólo admite polígonos que sean triangulos, cuadrados o rectangulo. Por favor asegurése de haber introducido alguno de esos tipos de polígonos y que lo haya escrito sin acentos");
  }
 }

 determinarArea();
