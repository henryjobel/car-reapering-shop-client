
function appendTimestampToUrls() {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    var scripts = document.querySelectorAll('script[src]');
    var timestamp = new Date().getTime();

    links.forEach(function(link) {
        link.href += "?v=" + timestamp;
    });

    scripts.forEach(function(script) {
        script.src += "?v=" + timestamp;
    });
}

window.addEventListener('load', appendTimestampToUrls);