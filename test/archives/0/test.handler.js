(function (win) {
    return {
        name: 'test.handler',
        version: 'v1.0.0',
        route: '/',
        type: 'handler',
        execute: function () {
            return 'handler';
        }
    };
})(window);