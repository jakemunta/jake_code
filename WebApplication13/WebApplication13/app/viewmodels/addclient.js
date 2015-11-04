define(['plugins/http', 'durandal/app', 'knockout', 'bootstrap', 'daterangepicker'], function (http, app, ko, bootstrap, daterangepicker) {


    var vm = {
        clientId: ko.observable(),
        dateOfBirth: ko.observable(),
        firstName: ko.observable(),
        middleName: ko.observable(),
        lastName: ko.observable(),
        streetAddress: ko.observable(),
        appartmentNo: ko.observable(),
        zone: ko.observable(),
        city: ko.observable(),
        zipCode: ko.observable(),
        housingStatus: ko.observable(),
        riskLevel: ko.observable(),
        lstAlias: ko.observableArray([]),
        race: ko.observable(),
        ethinicity: ko.observable(),
        lstZones: ['Zone1:Bayview/Hunter\'s point', 'Zone2:Mission', 'Zone3:Visitacion Valley/OMI', 'Zone4:Western Addition/TL/SoMa', 'Others(Specify)'],
        lstHousing: ['Permanent Housing', 'Temporary Housing', 'Homeless'],
        lstRiskLevels: ['At Risk', 'High Risk', 'In Risk', 'Out Of Risk'],
        lstRace: ['Africal American',
                    'American Indan/Native Alaskan',
                    'Asian',
                    'Declined To State',
                    'Multi-Race',
                    'Pacific Islander',
                    'White/Caucasian',
                    'Other',
                    'Other(Specify)'
        ],
        lstethinicity: ['Hispanic/Latino', 'Not Hispanic/Latino'],
        lstEnglish: ['Fluent', 'Not Fluent','Somewhat Fluent'],
        englishFluency: ko.observable(),
        lstHome: ['English','Spanish','Cantonese','Japanese','Khmer(Cambodian)','Korean','Laotia','Mandarin','Samoan','Tagalog','Vietnamese', 'Other (Specify)'],
        homeLanguage: ko.observable(),
        otherLanguage: ko.observable(),
        gender: ko.observable(),
        lstGender: ['Male', 'Female', 'Transmale', 'Transfemale'],
        gbt: ko.observable(),
        lstGbt: ['Yes', 'No', 'Unsure'],
        educationStatus: ko.observable(),
        lstEStatus: ['Enrolled in School', 'Dropped Out', 'HS Diploma/GED', 'Homeschooled'],
        currentGrade: ko.observable(),
        lstcurrGrade: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'],
        lstEmpStatus: ['Employed Fulltime','Employed Parttime','Endolled in Job Training','Unemployed'],
        employmentStatus: ko.observable(),
        school: ko.observable(),
        lstSchool: ['School 1', 'School 2', 'School 3', 'School 5'],
        lstSpecialNeed: ['Yes', 'No'],
        lstNeeds: ['Attention Deficit/Hyperactivity Disorder (AD/HD)',
                    'Austism Spectrum Disorder',
                    'Emotional Disturbance',
                    'Learning Difficulties/Disablities',
                    'Speech and/or Language Delays',
                    'Other(Specify)'
        ],
        user: ko.observable(),
        lstUser: ['User 1', 'User 2', 'User 3', 'User 4'],
        lstClientStatus: ['Pending','Active','Closed','Potential'],
        clientStatus: ko.observable(),
        lstReasons: ['Deceased','Moved','Client Refusal','Services No Longer Needed'],
        reasonForClose:ko.observable(),
        lstSpecialNeeds: ko.observableArray([]),
        specialNeed: ko.observable(),
        intakeDate: ko.observable(),
        closeDate: ko.observable(),
        activate: function () {
            vm.lstAlias.push({ 'first': '', 'last': '' });            
        },

    };
    vm.addNeed = function () {
        vm.lstSpecialNeeds.push({'need':'','others':''});
    };
    vm.addAlias = function () {
        var x = { 'first': '', 'last': '' };
        vm.lstAlias.push(x);
        
    };

    vm.removeAlias = function () {
        vm.lstAlias.pop();
    };

    vm.selectionChanged = function (event) {
        if($('#lstSpecialNeed').val()==='Yes')
        {
            $('#btnAddNeed').removeAttr('disabled');
        }
        else {
            $('#btnAddNeed').attr('disabled', 'disabled');
        }
    };
    vm.compositionComplete = function () {
        $('#dob').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true
        });

        $('#intakeDate').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true
        });

        $('#closeDate').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true
        });
    };
    vm.addClient = function () {


        //need to do the validation

        // save the client to the local storage
        sessionStorage[vm.clientId()] = vm;

        alert('client saved');


    };
    return vm

});