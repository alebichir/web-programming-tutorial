/*function $$ (selector){
 var tmp ="#contacts-list tbody": split;
 return document.getElementById();
 }*/

function getRow(contact) {
    /*if(phone == undefined) {
        phone = '';
    }
    if(typeof lastName == 'undefined') {
        lastName = '';
    }*/
    var id = contact.id || '';
    var phone = contact.phone || '';
    var  lastName = contact.lastName || '';
    var  firstName = contact.firstName || '';
    var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td>' +
        '<td class="actions">' +
            '<span> <a href="date/remove.html?id=' + id + '"> &#x2718; </a> </span> ' +
            '<span> <a class="edit" href="#"> &#x270E; </a> </span>' +
        '</td>' +
        '</tr>';
    return row;
}

//var undefined ='mere';

/*var getRow = function (firstName, lastName, phone) {
 var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
 return row;
 }
var getRow1 = function (firstName, lastName, phone) {
    var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
    return row;
}*/

/*var contacte = [
    {firstName: 'Matei', lastName: 'Nicolae', phone: '01'},
    {firstName: 'Alexandra', lastName: 'Bichir', phone: '02'},
    {firstName: 'Simina', lastName: 'Pop', phone: '03'},
    {firstName: 'Andrei'},
    {lastName: 'Basescu'}
];*/

var contacte = [];

var tableContent = '';

for (var i = 0; i < contacte.length; i++) {
    //getRow(contacte[i][0], contacte[i][1], contacte[i][2])
    //var contact = contacte[i];
    //tableContent += getRow(contact[0], contact[1], contact[2]);
    //tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
    //tableContent += getRow1(contact[0], contact[1], contact[2]);
    createRow(contacte[i]);
}

function createRow(contact) {
    tableContent += getRow(contact);
}


//TODO disable cache
//TODO response/ content type (json)
//TODO status codes: 200, 404, 5**, 3**
//TODO php includes/templates
//TODO create new number (auto increment)


$.ajax('date/contacte.json', { cache: false }).done(function(contacte) {
    console.debug('contacte ', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);
    $('.edit').click(function (){
//TODO
    editContact("Matei", "Ioan", "78");
    });

});
console.info('after ajax');


function editContact(firstName, lastName, phone) {
    $("input[name=firstName]").val(firstName);
    $("input[name=lastName]").val(lastName);
    $("input[name=phone]").val(phone);
};


//contacte.forEach(createRow);

//var contacte = ['Nicolae', 'Matei', '123'];
//var contactsList = document.getElementById("contacts-list");
//contactsList.getElementsByTagName('tbody')[0].innerHTML = row;
//#contacts-list tbody {color: red;}

//1. convert from array of arrays into json
//2. load contacts from json file with ajax
//3. remove contacts (UI)
//4. edit contacts (UI)




