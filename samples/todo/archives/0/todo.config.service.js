(function (win) {
    return {
        name: 'todo.config.service',
        version: 'v1.0.0',
        route: '',
        isEntryPoint: true,
        type: 'service',
        execute: function (ng) {
            var app = ng.module('todo-app', []);
            win.zucker.utils.executeServicesByCurrentRoute(app);
            return app;
        }
    };
})(window);