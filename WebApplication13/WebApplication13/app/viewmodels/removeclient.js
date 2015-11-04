define(['plugins/http', 'durandal/app', 'knockout', 'bootstrap', 'daterangepicker'], function (http, app, ko, bootstrap, daterangepicker) {


    var vm = {
        clientId: ko.observable(),
    };
    vm.removeClient = function () {

        if (vm.clientId() === '' || vm.clientId() === undefined)
        {
            alert('please provide a client id to delete'); return;
        }

        if (sessionStorage[vm.clientId()] === undefined || sessionStorage[vm.clientId()] === '')
        {
            alert('Client not found'); return;
        }
        else
            {
            sessionStorage[vm.clientId()] = '';
            }
        

        alert('client removed');
        return;

    };
    return vm

});