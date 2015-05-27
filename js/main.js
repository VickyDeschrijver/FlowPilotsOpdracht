/**
 * Created by cyber05 on 27/05/2015.
 */

$(function() {
    var article = [];

    $.getJSON('js/articles.json', function(data) {
        // read all articles from JSON file and put them in the section #userdata
        $.each(data.article, function(i, f) {
            var art =   "<article id='" + f.id + "'> <img class='respImg' src='" + f.img + "'/>";
            art     +=  "<h3>" + f.title + "</h3>";
            art     +=  "<h5>" + f.date + "</h5>";
            art     +=  "<div> <p>" + f.short + "</p> <p> <em> Bron: " + f.source + "</em> </p> </div>";
            art     +=  "<a class='readOn' href='art" + f.id + ".html'> Lees verder </a> </article>";
            //console.log(art);
            $(art).appendTo("#userdata");
        });

        //    put newest 3 titles in recent
        $.each(data.article, function(i,f) {
            var recent  =   "<li> <a href='art" + f.id + ".html' target='_self'> " + f.title + "</a><li>"
            $(recent).appendTo("#recent");
            return i<2;
        });

        ////     fill FULL article on page

            $.each(data.article, function(i, f) {
                var check = $( "section" ).attr( "title" );
                console.log('check: ' + check);
                if(f.id === check ) {
                    var fullArt =   "<article class='fullArticle' id='post" + f.id + "'> ";
                    fullArt     +=  "<h2>" + f.title + "</h2>";
                    fullArt     +=  "<h5> <strong> Auteur: </strong>" + f.author + "</h5>";
                    fullArt     +=  "<p>" + f.date + "</p>";
                    fullArt     +=  "<img class='respImg' src='" + f.img + "'/>";
                    fullArt     +=  "<div> <p> " + f.text + "</p>";
                    fullArt     +=  "<p><em> Bron: " + f.source + "</em> </div> </article>";



                    console.log(fullArt);


                    $(fullArt).appendTo(".artData");
                    //console.log(oo);
                }

                //console.log(fullArt);
                //$(fullArt).appendTo("#artData");
            });




    });



});


