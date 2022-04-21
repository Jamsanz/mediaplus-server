"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const stakeholder_model_1 = (0, tslib_1.__importDefault)(require("../models/stakeholder.model"));
const util_1 = require("../utils/util");
class StakeholderService {
    constructor() {
        this.Stakeholder = stakeholder_model_1.default;
    }
    async findAllStakeholder() {
        const Stakeholder = await this.Stakeholder.find();
        return Stakeholder;
    }
    async findStakeholderById(StakeholderId) {
        if ((0, util_1.isEmpty)(StakeholderId))
            throw new HttpException_1.HttpException(400, 'No ID provided');
        const findStakeholder = await this.Stakeholder.findOne({ _id: StakeholderId });
        if (!findStakeholder)
            throw new HttpException_1.HttpException(409, 'No Stakeholder');
        return findStakeholder;
    }
    async createStakeholder(StakeholderData) {
        if ((0, util_1.isEmpty)(StakeholderData))
            throw new HttpException_1.HttpException(400, 'Please fill in all the required fields');
        const createStakeholderData = await this.Stakeholder.create(Object.assign({}, StakeholderData));
        return createStakeholderData;
    }
    async updateStakeholder(StakeholderId, StakeholderData) {
        if ((0, util_1.isEmpty)(StakeholderData))
            throw new HttpException_1.HttpException(400, 'Empty fields provided');
        const updateStakeholderById = await this.Stakeholder.findByIdAndUpdate(StakeholderId, { $set: StakeholderData });
        if (!updateStakeholderById)
            throw new HttpException_1.HttpException(409, 'Invalid record selection');
        return updateStakeholderById;
    }
    async deleteStakeholder(StakeholderId) {
        const deleteStakeholderById = await this.Stakeholder.findByIdAndDelete(StakeholderId);
        if (!deleteStakeholderById)
            throw new HttpException_1.HttpException(409, 'Invalid record deletion');
        return deleteStakeholderById;
    }
}
exports.default = StakeholderService;
//# sourceMappingURL=stakeholder.service.js.map