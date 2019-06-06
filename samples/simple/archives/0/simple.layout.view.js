(function () {
    return {
        name: 'simple.layout.view',
        version: 'v1.0.0',
        type: 'template',
        parts: ['content'],
        content: '',
        get: function (callback) {
            win.zucker.utils.getView('simple.layout.view.htm', function (data) {
                callback(data);
            });
        }
    };
})();