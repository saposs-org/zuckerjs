(function (win) {
    return {
        name: 'simple.about-us.view',
        version: 'v1.0.0',
        templateName: 'simple.layout.view',
        route: 'about-us',
        isDefault: false,
        type: 'view',
        get: function (callback) {
            win.zucker.utils.getView('simple.about-us.view.htm', function (data) {
                callback(data);
            });
        }
    };
})(window);