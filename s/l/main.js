<script>
document.addEventListener('DOMContentLoaded', function() {
    var allowedURLs = [
        "https://biographyhero.lovestoblog.com",
 "https://filmybuff.store"
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
        hideSemanticTags();
        alert('You need to verify your domain to use this theme. Please contact support.');
        document.body.innerHTML = `Your License Is Not Active. Contact <a href="https://t.me/dhanjeerider" target="_blank">DHANJEE Rider</a> to get a license.`;
       } else {
         }
});

