import {
    addNewContact,
    deleteContact,
    getContactByID,
    getContacts,
    updateContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
    
        // get a specific contact
        .get(getContactByID)

        // updating a specific contact
        .put(updateContact)

        // deteting a specific contact
        .delete(deleteContact)
}

export default routes;

