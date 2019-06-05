(function () {
    return {
        name: 'saposs.pear.homeservice',
        version: 'v1.0.0',
        route: '/',
        type: 'service',
        execute: function (params) {
            return '<b>Hello World</b>';
        }
    };
})();