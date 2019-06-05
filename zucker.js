(function (win) {
    win.zucker = {
        utils: {
            ajax: function (url, callback, i, data, x) {
                try {
                    if (win.XMLHttpRequest) {
                        x = new XMLHttpRequest('MSXML2.XMLHTTP.3.0');
                    }
                    if (win.ActiveXObject) {
                        x = new ActiveXObject('MSXML2.XMLHTTP.3.0');
                    }
                    x.open(data ? 'POST' : 'GET', url, 1);
                    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    x.onreadystatechange = function () {
                        if (x.readyState > 3 && callback)
                            callback(x.responseText, i, x);
                    };
                    x.send(data);
                } catch (e) {
                    if (win.console)
                        console.log(e);
                }
            },
            combinePaths: function (paths) {
                return paths.join('/');
            },
            getCurrentRoute: function () {
                var hash = win.location.hash;
                if (!hash || hash === '' || hash === '/')  hash = '#/';
                return hash;
            },
            getComponentUrl: function (compName) {
                return win.zucker.utils.combinePaths([win.zucker.options.componentFolder, win.zucker.options.selectedProjectIndex, compName]);
            },
            getView: function (viewName, callback) {
                win.zucker.utils.ajax(win.zucker.utils.getComponentUrl(viewName), callback);
            },
            getTemplateIndex: function (tmplName) {
                for (var i = 0; i < win.zucker.templates.length; i++) {
                    if (win.zucker.templates[i].name === tmplName) {
                        return i;
                    }
                }
            },
            executeHandler: function (handlerName, params) {
                for (var i = 0; i < win.zucker.handlers.length; i++) {
                    if (win.zucker.handlers[i].name === handlerName) {
                        return win.zucker.handlers[i].execute(params);
                    }
                }
            },
            executeService: function (serviceName, params) {
                for (var i = 0; i < win.zucker.services.length; i++) {
                    if (win.zucker.services[i].name === serviceName) {
                        return win.zucker.services[i].execute(params);
                    }
                }
            },
            executeServicesByCurrentRoute: function (params) {
                var route = win.zucker.utils.getCurrentRoute();
                for (var i = 0; i < win.zucker.services.length; i++) {
                    if ('#' + win.zucker.services[i].route === route) {
                        win.zucker.services[i].execute(params);
                    }
                }
            }
        },
        defaultView: {},
        defaultTemplate: {},
        entryPointService: {},
        views: [],
        templates: [],
        handlers: [],
        services: [],
        core: {
            install: function () {
                var comps = win.zucker.options.components;
                if (comps.length === 0) return;
                var parseComponent = function (data, i) {
                    var comp = eval(data);
                    if (comp.type === 'view') {
                        if (comp.isDefault) {
                            win.zucker.defaultView = comp;
                        }
                        win.zucker.views.push(comp);
                    } else if (comp.type === 'handler') {
                        win.zucker.handlers.push(comp);
                    } else if (comp.type === 'service') {
                        if (comp.isEntryPoint) {
                            win.zucker.entryPointService = comp;
                        }
                        win.zucker.services.push(comp);
                    } else if (comp.type === 'template') {
                        win.zucker.templates.push(comp);
                    }
                    if (i === comps.length - 1) {
                        if (win.zucker.entryPointService.execute)
                            win.zucker.entryPointService.execute(win.zucker.options.entryPointArgs);
                        win.zucker.core.run();
                    } else {
                        win.zucker.utils.ajax(win.zucker.utils.getComponentUrl(comps[i + 1] + '.js'), parseComponent, i + 1);
                    }
                };

                win.zucker.utils.ajax(win.zucker.utils.getComponentUrl(comps[0] + '.js'), parseComponent, 0);
            },
            run: function () {
                var rootEle = win.document.getElementsByTagName(win.zucker.options.rootElementName)[0];
                var hash = window.location.hash;
                var tmplIndex = -1;
                var i = 0;
                if (!hash || hash === '' || hash === '/') {
                    hash = '/';
                } else hash = win.location.hash;
                var loadHandlers = function (hash) {
                    for (i = 0; i < win.zucker.handlers.length; i++) {
                        if (win.zucker.handlers[i].route === hash) {
                            win.zucker.handlers[i].execute();
                        }
                    }
                };
                var loadView = function () {
                    var afterGetView = function (data) {
                        if (tmplIndex >= 0) {
                            rootEle.innerHTML = win.zucker.templates[tmplIndex].content + ' ' + data;
                            for (i = 0; i < win.zucker.templates[tmplIndex].parts.length; i++) {
                                var _part = win.zucker.templates[tmplIndex].parts[i];
                                (win.document.getElementsByTagName(_part)[0]).innerHTML = win.document.getElementById(_part).innerHTML
                            }
                        } else {
                            rootEle.innerHTML = data;
                        }
                        loadHandlers(hash);
                        win.zucker.options.afterLoaded();
                    };
                    if (hash === '/') {
                        tmplIndex = win.zucker.utils.getTemplateIndex(win.zucker.defaultView.templateName);
                        if (win.zucker.defaultView.get) {
                            win.zucker.defaultView.get(afterGetView);
                            return;
                        }
                    } else {
                        for (i = 0; i < win.zucker.views.length; i++) {
                            if ('#' + win.zucker.views[i].route === hash) {
                                tmplIndex = win.zucker.utils.getTemplateIndex(win.zucker.defaultView.templateName);
                                win.zucker.views[i].get(afterGetView);
                                return;
                            }
                        }
                    }
                    loadHandlers(hash);
                };

                if (win.zucker.templates.length === 0) {
                    loadView();
                    return;
                }
                var loadTemplate = function (data, i) {
                    win.zucker.templates[i].content = data;
                    if (i === win.zucker.templates.length - 1) {
                        loadView();
                    } else {
                        win.zucker.templates[i + 1].get(function (data) {
                            loadTemplate(data, i + 1);
                        });
                    }
                };
                win.zucker.templates[0].get(function (data) {
                    loadTemplate(data, 0);
                });
            },
            bootstrap: function () {
                win.zucker.options.beforeLoad();
                win.zucker.core.install();
            }
        },
        options: {
            componentFolder: 'archives',
            base: 'base',
            selectedProjectIndex: 0,
            beforeLoad: function () {},
            afterLoaded: function () {},
            components: [],
            rootElementName: 'zucker',
            entryPointArgs: null
        },
        before: function (beforeLoad) {
            win.zucker.options.beforeLoad = beforeLoad;
            return win.zucker;
        },
        after: function (afterLoaded) {
            win.zucker.options.afterLoaded = afterLoaded;
            return win.zucker;
        },
        setEntryPointArgs: function (params) {
            win.zucker.options.entryPointArgs = params;
            return win.zucker;
        },
        execute: function () {
            win.zucker.core.bootstrap();
            return win.zucker;
        },
        config: function (components) {
            win.zucker.options.components = components;
            return win.zucker;
        }
    };
})(window);