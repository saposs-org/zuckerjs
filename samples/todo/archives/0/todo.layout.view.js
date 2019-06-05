(function (ng) {
    return {
        name: 'todo.layout.view',
        version: 'v1.0.0',
        type: 'template',
        parts: ['content'],
        content: '',
        get: function (callback) {
            win.zucker.utils.getView('todo.layout.view.htm', function (data) {
                callback(data);
            });
        }
    };
})(angular);