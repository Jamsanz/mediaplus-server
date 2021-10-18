"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateContactDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateContactDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateContactDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateContactDto.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateContactDto.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateContactDto.prototype, "message", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateContactDto.prototype, "service", void 0);
exports.CreateContactDto = CreateContactDto;
//# sourceMappingURL=contact.dto.js.map