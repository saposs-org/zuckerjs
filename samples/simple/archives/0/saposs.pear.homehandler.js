(function (win) {
    return {
        name: 'saposs.pear.homehandler',
        version: 'v1.0.0',
        route: '/',
        type: 'handler',
        execute: function () {
            (document.getElementsByClassName('result')[0]).innerHTML = win.zucker.utils.executeService('saposs.pear.homeservice');
        }
    };
})(window);