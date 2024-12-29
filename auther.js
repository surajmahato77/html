document.addEventListener('DOMContentLoaded', function() {
    var allowedURLs = [
        "https://biographyhero.lovestoblog.com",
        "https://hdhub4u-wp-theme-dktzn.is-best.net",
        "https://dktech.000.pe",
        "https://vega.dhanjeerider.shop",
        "https://filmyhit.gen.in",
        "https://vegaog.dktheme.com",
        "https://luxmovie.online",
        "https://hdhub4u.fashion",
        "https://vegamovies6.nl",
        "https://19flicks.com",
        "https://neuplayer.blogspot.com",
        "https://vegamovies.com.co",
        "https://gp-discover.000.pe",
        "https://gp-afiliate.000.pe",
        "https://gp-lifehacker.000.pe",
        "https://gp-newspape.000.pe",
        "https://jettheme-pro.blogspot.com",
        "https://mariyaui.blogspot.com",
        "https://1stepno.blogspot.com",
        "https://www.films4u.in",
        "https://vegamovies.click",
        "https://allmovieshub.best",
        "http://www.movieshub.best",
        "https://gpmovie-dktzone.rf.gd",
        "https://filmyfly.solutions",
        "https://hindustaniparivar.in",
        "https://taagsqywsg.blogspot.com",
        "https://hdhub4u-clone.blogspot.com",
        "https://exprothikhad.blogspot.com",
        "https://jet-moviev3.blogspot.com",
        "https://dkhek.blogspot.com",
        "https://draft.blogger.com",
        "https://www.blogger.com",
        "https://blogger.com",
        "https://www.jawazbook.com",
        "https://codingrider.blogspot.com",
        "https://www.blogger.com/blog/post/edit/preview",
        "https://eduhub-demo.blogspot.com",
        "https://vega-clone.blogspot.com",
        "https://dkchek1.blogspot.com",
        "https://girgit-ui.blogspot.com",
        "https://www.filmyslap.xyz",
        "https://fletrothemes.blogspot.com",
        "https://faddalunga.blogspot.com",
        "https://mediunmovie.blogspot.com",
        "https://www.myanimehindi.in",
        "https://plusuiteme.blogspot.com",
        "https://jet-movie.blogspot.com",
        "https://www.timestoryaxom.in",
        "https://moviesmod4u.com",
        "https://Thevegamovies.life",
        "https://solution-manualspdf.blogspot.com",
        "https://testyyyyrr4.blogspot.com",
        "https://desiremovies.boutique",
        "https://orgmovies.store",
        "https://desiremovies.store",
        "https://desiremovies.art",
        "https://vega-movies.in.net",
        "https://thehdhub4u.in",
        "https://movies4u.dhanjeerider.shop",
        "https://plusui.dhanjeerider.shop",
        "https://news.dhanjeerider.shop",
        "https://hdhub4u.dhanjeerider.shop",
        "https://chek.dhanjeerider.shop",
        "https://filmybuff.store",
        "https://www.mkvmoviespoint.me",
        "https://www.mkvmoviespoint.tech",
        "https://samovies.in",
        "https://hdhub4u.tires",
        "https://www.vegamovie.blog",
        "https://news.dktheme.online",
    "https://movieshd4u.in",
        "https://vega-movies.news"
    ];

    var foundMatch = false;

    for (var i = 0; i < allowedURLs.length; i++) {
        if (window.location.href.startsWith(allowedURLs[i])) {
            foundMatch = true;
            break;
        }
    }

    function hideSemanticTags() {
        var css = `
            header, nav, main, section, article, aside, footer, figure, figcaption, mark, time, summary, details, div, img {
                display: none !important;
            }
        `;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    if (foundMatch) {
        document.querySelector('.buy').style.display = 'none';
    } else {
        hideSemanticTags();
        alert('You need to verify your domain to use this theme. Please contact support.');
        document.body.innerHTML = `Your License Is Not Active. Contact <a href="https://t.me/dhanjeerider" target="_blank">DHANJEE Rider</a> to get a license.`;
    }
});
