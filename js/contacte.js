/*function $$ (selector){
 var tmp ="#contacts-list tbody": split;
 return document.getElementById();
 }*/

function getRow(firstName, lastName, phone) {
    if(phone == undefined) {
        phone = '';
    }
    if(typeof lastName == 'undefined') {
        lastName = '';
    }
    firstName = firstName || '';
    var row = '<tr><td>' + (firstName || '') + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
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

var contacte = [
    {firstName: 'Matei', lastName: 'Nicolae', phone: '01'},
    {firstName: 'Alexandra', lastName: 'Bichir', phone: '02'},
    {firstName: 'Simina', lastName: 'Pop', phone: '03'},
    {firstName: 'Andrei'},
    {lastName: 'Basescu'}
];

var person = {
    lastNume: "Matei",
    firstName: "Nicolae",
    age: 19,
    married: true,
    skills: ["HTML", "CSS", "JS"],
    /*kids: [
     {
     lastNume: "Matei",
     firstName: "Nicoleta",
     age: 7,
     married: false,
     skills: ["rubiks", "lego"],
     kids: []
     },
     {
     lastNume: "Matei",
     firstName: "Laurentiu",
     age: 5,
     married: false,
     skills: ["cars", "lego"],
     kids: []
     },
     {
     lastNume: "Matei",
     firstName: "Evelina",
     age: 3,
     married: false,
     skills: ["dolls", "lego"],
     kids: []
     }
     ]*/
    voiceCall: function (nume) {
        console.info('te rog sa suni pe ', nume);
    },
    partner: {
        firstName: "M",
        age: 18
    }
};

//console.info(person.firstName);
//person.voiceCall("Soacra");

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
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}

$.ajax('date/contacte.json').done(function(contacte){
    console.info('contacte ',  contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);
});
console.info('after ajax');


//contacte.forEach(createRow);

//var contacte = ['Nicolae', 'Matei', '123'];
//var contactsList = document.getElementById("contacts-list");
//contactsList.getElementsByTagName('tbody')[0].innerHTML = row;
//#contacts-list tbody {color: red;}

//1. convert from array of arrays into json
//2. load contacts from json file with ajax
//3. remove contacts (UI)
//4. edit contacts (UI)




