var contacte = [];
function callContact(contact) {
    console.info('calling ... ' + contact.firstName);
}
function feedContact(contact) {
    console.info('feeding ... ' + contact.firstName);
}
function forEachContacts (action) {
    //console.info('actiune: ', action);
    for (var i = 0; i < contacte.length; i++) {
        action(contacte[i]);
    }
    //console.info('am executat');
}
forEachContacts(callContact);
forEachContacts(feedContact);

//contacte.forEach(callContact);
contacte.forEach(function(contact){
    console.info('calling ... ' + contact.firstName);
});
//contacte.forEach(feedContact);
contacte.forEach(function(contact){
    console.info('feeding ... ' + contact.firstName);
});
