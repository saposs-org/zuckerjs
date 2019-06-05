(function () {
    return {
        name: 'saposs.pear.master',
        version: 'v1.0.0',
        type: 'template',
        parts: ['content'],
        content: '',
        get: function (callback) {
            win.zucker.utils.getView('saposs.pear.master.htm', function (data) {
                callback(data);
            });
        }
    };
})();