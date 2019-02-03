lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
        var direccion = document.getElementById('direccion');
        var desde = document.getElementById('desde');
        var hasta = document.getElementById('hasta');
        var agregar = document.getElementById('agregar');

        var circulo = new google.maps.Circle( {
          center: mapa.center,
          radius: 20000
          });

        var autocompleteDireccion = new google.maps.places.Autocomplete(direccion);
        var autocompleteDesde = new google.maps.places.Autocomplete(desde);
        var autocompleteHasta = new google.maps.places.Autocomplete(hasta);
        var autocompleteAgregar = new google.maps.places.Autocomplete(agregar);

        autocompleteDireccion.setBounds(circulo.getBounds());
        autocompleteDesde.setBounds(circle.getBounds());
        autocompleteHasta.setBounds(circle.getBounds());
        autocompleteAgregar.setBounds(circle.getBounds());

  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    var request = {
      location: posicion,
      radius: document.getElementById('radio').value,
      type: document.getElementById('tipoDeLugar').value
    }

    servicioLugares.nearbySearch(request, (resultados, status) => marcadorModulo.marcarLugares(resultados, status));
  }
  return {
    inicializar,
    buscarCerca
  }
})()
