"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("@exceptions/HttpException");
const contact_model_1 = (0, tslib_1.__importDefault)(require("@models/contact.model"));
const util_1 = require("@utils/util");
class UserService {
    constructor() {
        this.contacts = contact_model_1.default;
    }
    async findAllContacts() {
        const contacts = await this.contacts.find();
        return contacts;
    }
    async findContactById(contactId) {
        if ((0, util_1.isEmpty)(contactId))
            throw new HttpException_1.HttpException(400, "No ID provided");
        const findContact = await this.contacts.findOne({ _id: contactId });
        if (!findContact)
            throw new HttpException_1.HttpException(409, "No contact");
        return findContact;
    }
    async createContact(contactData) {
        if ((0, util_1.isEmpty)(contactData))
            throw new HttpException_1.HttpException(400, "Please fill in all the required fields");
        const createContactData = await this.contacts.create(Object.assign({}, contactData));
        return createContactData;
    }
    async updateContact(contactId, contactData) {
        if ((0, util_1.isEmpty)(contactData))
            throw new HttpException_1.HttpException(400, "Empty fields provided");
        const updateContactById = await this.contacts.findByIdAndUpdate(contactId, { $set: contactData });
        if (!updateContactById)
            throw new HttpException_1.HttpException(409, "Invalid record selection");
        return updateContactById;
    }
    async deleteContact(contactId) {
        const deleteUserById = await this.contacts.findByIdAndDelete(contactId);
        if (!deleteUserById)
            throw new HttpException_1.HttpException(409, "Invalid record deletion");
        return deleteUserById;
    }
}
exports.default = UserService;
//# sourceMappingURL=contact.service.js.map