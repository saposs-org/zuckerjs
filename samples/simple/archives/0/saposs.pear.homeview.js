(function (win) {
    return {
        name: 'saposs.pear.homeview',
        version: 'v1.0.0',
        templateName: 'saposs.pear.master',
        route: '/',
        isDefault: true,
        type: 'view',
        get: function (callback) {
            win.zucker.utils.getView('saposs.pear.homeview.htm', function (data) {
                callback(data);
            });
        }
    };
})(window);