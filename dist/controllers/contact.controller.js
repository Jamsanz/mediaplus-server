"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const contact_service_1 = (0, tslib_1.__importDefault)(require("@services/contact.service"));
class ContactsController {
    constructor() {
        this.contactService = new contact_service_1.default();
        this.getContacts = async (req, res, next) => {
            try {
                const findAllContactsData = await this.contactService.findAllContacts();
                res.status(200).json({ contacts: findAllContactsData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getContactById = async (req, res, next) => {
            try {
                const ContactId = req.params.id;
                const findOneContactData = await this.contactService.findContactById(ContactId);
                res.status(200).json({ data: findOneContactData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createContact = async (req, res, next) => {
            try {
                const ContactData = req.body;
                const createContactData = await this.contactService.createContact(ContactData);
                res.status(201).json({ data: createContactData, message: 'Request Successfully Submitted' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateContact = async (req, res, next) => {
            try {
                const ContactId = req.params.id;
                const ContactData = req.body;
                const updateContactData = await this.contactService.updateContact(ContactId, ContactData);
                res.status(200).json({ data: updateContactData, message: 'Record updated successfully' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteContact = async (req, res, next) => {
            try {
                const ContactId = req.params.id;
                const deleteContactData = await this.contactService.deleteContact(ContactId);
                res.status(200).json({ data: deleteContactData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = ContactsController;
//# sourceMappingURL=contact.controller.js.map