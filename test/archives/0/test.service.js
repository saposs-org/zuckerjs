(function () {
    return {
        name: 'test.service',
        version: 'v1.0.0',
        route: '/',
        type: 'service',
        execute: function (params) {
            return 'service';
        }
    };
})();