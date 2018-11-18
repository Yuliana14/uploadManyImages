<?php

if (move_uploaded_file($_FILES['lunesfile']['tmp_name'],'images'. $_FILES['lunesfile']['name'])) {
  if (move_uploaded_file($_FILES['martesfile']['tmp_name'],'images'. $_FILES['martesfile']['name'])) {
    if (move_uploaded_file($_FILES['miercolesfile']['tmp_name'],'images'. $_FILES['miercolesfile']['name'])) {
        echo "se subieron con exito";
      } else {
         echo "fallo la carga del miercoles";
      }

    } else {
       echo "fallo la carga del  martes";
    }
  } else {
     echo "fallo la carga del lunes";
  }





?>
