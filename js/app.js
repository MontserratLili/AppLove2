var modal = document.getElementById("modalId");

 var modalImagen = document.getElementById("img01");
 var captText = document.getElementById("caption");
 var imagenes = [];
 var spans = [];


 for (var i = 0; i < 12; i++){
   imagenes[i]=document.getElementsByClassName("imagenes")[i];
   imagenes[i].addEventListener("click", mostrar);
 }

 function mostrar(){
   modal.style.display = "block";
   modalImagen.src = this.src;
   captText.innerHTML = this.alt;
 }

 for (var i = 0; i < 12; i++){
   spans[i]=document.getElementsByClassName("ocultar")[i];
   spans[i].addEventListener("click", cerrar);
 }

 function cerrar(){
   modal.style.display = "none";
 }

