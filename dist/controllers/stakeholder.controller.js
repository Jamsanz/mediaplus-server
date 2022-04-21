"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const stakeholder_service_1 = (0, tslib_1.__importDefault)(require("../services/stakeholder.service"));
class StakeholderController {
    constructor() {
        this.StakeholderService = new stakeholder_service_1.default();
        this.getStakeholder = async (req, res, next) => {
            try {
                const findAllStakeholderData = await this.StakeholderService.findAllStakeholder();
                res.status(200).json({ data: findAllStakeholderData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getStakeholderById = async (req, res, next) => {
            try {
                const StakeholderId = req.params.id;
                const findOneStakeholderData = await this.StakeholderService.findStakeholderById(StakeholderId);
                res.status(200).json({ data: findOneStakeholderData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createStakeholder = async (req, res, next) => {
            try {
                const StakeholderData = req.body;
                const createStakeholderData = await this.StakeholderService.createStakeholder(StakeholderData);
                res.status(201).json({ data: createStakeholderData, message: 'Stakeholder Created Successfully' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateStakeholder = async (req, res, next) => {
            try {
                const StakeholderId = req.params.id;
                const StakeholderData = req.body;
                const updateStakeholderData = await this.StakeholderService.updateStakeholder(StakeholderId, StakeholderData);
                res.status(200).json({ data: updateStakeholderData, message: 'Stakeholder updated successfully' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteStakeholder = async (req, res, next) => {
            try {
                const StakeholderId = req.params.id;
                const deleteStakeholderData = await this.StakeholderService.deleteStakeholder(StakeholderId);
                res.status(200).json({ data: deleteStakeholderData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = StakeholderController;
//# sourceMappingURL=stakeholder.controller.js.map