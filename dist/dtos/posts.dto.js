"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class PostsDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], PostsDto.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], PostsDto.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsObject)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PostsDto.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PostsDto.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PostsDto.prototype, "resource", void 0);
exports.PostsDto = PostsDto;
//# sourceMappingURL=posts.dto.js.map