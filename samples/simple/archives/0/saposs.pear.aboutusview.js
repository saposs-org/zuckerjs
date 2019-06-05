(function (win) {
    return {
        name: 'saposs.pear.aboutusview',
        version: 'v1.0.0',
        templateName: 'saposs.pear.master',
        route: 'about-us',
        isDefault: false,
        type: 'view',
        get: function (callback) {
            win.zucker.utils.getView('saposs.pear.aboutusview.htm', function (data) {
                callback(data);
            });
        }
    };
})(window);