/**
 * pages.add
 *
 * Provides functionality of the add contact page
 */

(function(global) {
    var add = { el : $('#page-add') };

    add.onSave = function() {
        var name  = add.el.find('#fld-name').val(),
            phone = add.el.find('#fld-phone').val(),
            email = add.el.find('#fld-email').val();

        global.store.addContact(global.store.ContactInfo(name, phone, email));
        global.pages.contacts.refresh();
    };


    add.el.live('pagecreate', function() {
        add.el = $(this);
        add.el.find('#btn-save-contact').click(add.onSave);
    });

    if ( typeof global.pages === 'undefined' ) {
        global.pages = {};
    }

    global.pages.add = add;

}(this));

