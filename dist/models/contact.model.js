"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// The Contact page schema
const contactSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    phone: String,
    status: String,
    service: String,
    message: String
});
const contactModel = (0, mongoose_1.model)("Contact", contactSchema);
exports.default = contactModel;
//# sourceMappingURL=contact.model.js.map