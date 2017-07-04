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
