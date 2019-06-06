(function (win) {
    return {
        name: 'todo.controller.service',
        version: 'v1.0.0',
        route: '/',
        isEntryPoint: false,
        type: 'service',
        execute: function (app) {
            if (app) {
                app.controller('todo-controller', function ($scope) {
                    $scope.task = '';
                    $scope.items = ['task 1', 'task 2', 'task 3'];
        
                    $scope.add = function () {
                        if ($scope.task.length > 0) {
                            $scope.items.push($scope.task);
                            $scope.task = '';
                        }
                    };
        
                    $scope.remove = function (task) {
                        var i = $scope.items.indexOf(task);
                        if (i > -1) {
                            $scope.items.splice(i, 1);
                        }
                    };
                });
            }
            return app;
        }
    };
})(window);