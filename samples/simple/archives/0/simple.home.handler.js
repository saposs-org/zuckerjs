(function (win) {
    return {
        name: 'simple.home.handler',
        version: 'v1.0.0',
        route: '/',
        type: 'handler',
        execute: function () {
            (document.getElementsByClassName('result')[0]).innerHTML = win.zucker.utils.executeService('simple.home.service');
        }
    };
})(window);