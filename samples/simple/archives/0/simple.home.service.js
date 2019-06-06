(function () {
    return {
        name: 'simple.home.service',
        version: 'v1.0.0',
        route: '/',
        type: 'service',
        execute: function (params) {
            return '<b>Hello World</b>';
        }
    };
})();