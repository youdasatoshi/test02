
window.APP_KEY = "1725c76e9152f467fc3fd321a4ebe3c28c4e3f7ac9541d1b4b2d740ac5c2d8d0";
window.CLIENT_KEY = "b22175504f8564587440a56d92e0d86ee2d32014e44abfd196c4712a00faad32";

NCMB.initialize(APP_KEY, CLIENT_KEY);

$(function() {
    tappable('.tappable', {
        allowClick : true,
        activeClass : 'tap-active',
        onTap : function(e, dom) {
            // trigger a DOM Event manually
            var event = document.createEvent("HTMLEvents");
            event.initEvent('tappable-tap', true, true);
            dom.dispatchEvent(event);
        }
    });
});


function showSpinner(dom) {
    var opts = {
        lines: 11, // The number of lines to draw
        length: 7, // The length of each line
        width: 4, // The line thickness
        radius: 11, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#999', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: 'auto', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
    };

    dom = dom || (function() {
        var screenDom = $('<div class="screen"></div>');
        screenDom.appendTo(document.body);
        return screenDom[0];
    })();

    if (!window.spinner) {
        window.spinner = new Spinner(opts).spin(dom);
    }
}

function hideSpinner() {
    if (window.spinner) {
        window.spinner.stop();
        window.spinner = null;
    }
}

