//ESERCIZIO
// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi, e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").
$(document).ready(function() {
//Chiamata ajax
  $.ajax({
      // qui parte l'oggetto dei dischi dieci musicali
      'url': 'https://flynn.boolean.careers/exercises/api/array/music',
      'method': 'GET',
      'success': function(disco) {
      var infodisco = disco.response;
          // stampo le informazioni per ogni disco
          console.log(infodisco);

          stampahtml(infodisco);
          selectgeneri(infodisco);
      }
  }
  );

  function stampahtml(infodischi) {
          var schedadisco = $('#entry-template').html();
          var template_function = Handlebars.compile(schedadisco);

          for (var i = 0; i < infodischi.length; i++) {
              var info= infodischi[i];
              var disco = {
                  'poster': info.poster,
                  'title' : info.title,
                  'author': info.author,
                  'year': info.year,
                  'genre': info.genre,
                  'classe': info.genre,
              }
              var html_finale = template_function(disco);
              $('.cds-container.container').append(html_finale);
          }
  }
});
