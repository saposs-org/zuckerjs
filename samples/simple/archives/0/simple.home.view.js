(function (win) {
    return {
        name: 'simple.home.view',
        version: 'v1.0.0',
        templateName: 'simple.layout.view',
        route: '/',
        isDefault: true,
        type: 'view',
        get: function (callback) {
            win.zucker.utils.getView('simple.home.view.htm', function (data) {
                callback(data);
            });
        }
    };
})(window);