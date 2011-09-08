(function(global) {

    var store = { contacts : [] };

    store.ContactInfo = function(name, phone, email) {
        return { name : name, phone : phone, email : email }
    };

    store.addContact = function(contact) {
        store.contacts.push(contact);
    };

    store.removeContact = function(contact) {
        for (var i=0; i < store.contacts.length; ++i ) {
            if ( store.contacts[i].phone === contact.phone ) {
                // found it
                store.contacts.splice(i);
                break;
            }
        }
    };

    store.getContacts = function() {
        return store.contacts;
    };

    global.store = store;
}(this));
