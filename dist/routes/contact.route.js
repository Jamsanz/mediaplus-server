"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const contact_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/contact.controller"));
class ContactsRoute {
    constructor() {
        this.path = '/contacts';
        this.router = (0, express_1.Router)();
        this.ContactsController = new contact_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.ContactsController.getContacts);
        this.router.get(`${this.path}/:id`, this.ContactsController.getContactById);
        this.router.post(`${this.path}`, this.ContactsController.createContact);
        this.router.put(`${this.path}/:id`, this.ContactsController.updateContact);
        this.router.delete(`${this.path}/:id`, this.ContactsController.deleteContact);
    }
}
exports.default = ContactsRoute;
//# sourceMappingURL=contact.route.js.map