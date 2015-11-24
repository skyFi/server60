/**
 * Created by darcy on 2015/11/24.
 */
(function () {
    var pageWrap = document.getElementById('page-wrap'),
        triggerLoading = [].slice.call(pageWrap.querySelectorAll('.pageload-link')),
        currentPage = 'pageMain';

    //var loader = new SVGLoader(document.getElementById('loader'), {speedIn: 200, easingIn: mina.easeinout});
    //loader.show();
    // after some time hide loader
    //loader.hide();

    function init() {

        triggerLoading.forEach(function (trigger) {
            trigger.addEventListener('click', function (ev) {
                ev.preventDefault();

                var page = ev.currentTarget.attributes['page'].nodeValue;
                classie.removeClass(document.getElementById(currentPage), 'show');
                classie.addClass(document.getElementById(page), 'show');
                currentPage = page;

            });
        });
    }

    //预加载一些后续需要的图片
    function preLoadImg(url) {
        var img = new Image();
        img.src = url;
    }

    init();
})();