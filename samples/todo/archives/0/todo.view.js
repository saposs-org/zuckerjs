(function (win) {
    return {
        name: 'todo.view',
        version: 'v1.0.0',
        templateName: 'todo.layout.view',
        route: '/',
        isDefault: true,
        type: 'view',
        get: function (callback) {
            win.zucker.utils.getView('todo.view.htm', function (data) {
                callback(data);
            });
        }
    };
})(window);