describe('Testing zucker', () => {

    beforeAll(function () {
        window.zucker.config(['test.view', 'test.handler', 'test.service']).before(function () {
            window.zucker.options.isCacheEnabled = false;
        }).execute();
    });

    it('test total count of components', function (done) {
        setTimeout(function () {
            expect(window.zucker.views.length + window.zucker.handlers.length + window.zucker.services.length).toBe(3);
            done();
        }, 2000);
    });

    it('test get view', function (done) {
        setTimeout(function () {
            expect(window.zucker.views[0].get()).toBe('view');
            done();
        }, 2000);
    });

    it('test executable handler', function (done) {
        setTimeout(function () {
            expect(window.zucker.handlers[0].execute()).toBe('handler');
            done();
        }, 2000);
    });

    it('test executable service', function (done) {
        setTimeout(function () {
            expect(window.zucker.services[0].execute()).toBe('service');
            done();
        }, 2000);
    });
});