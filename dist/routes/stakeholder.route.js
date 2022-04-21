"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const stakeholder_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/stakeholder.controller"));
class StakeholderRoute {
    constructor() {
        this.path = '/stakeholder';
        this.router = (0, express_1.Router)();
        this.StakeholderController = new stakeholder_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.StakeholderController.getStakeholder);
        this.router.get(`${this.path}/:id`, this.StakeholderController.getStakeholderById);
        this.router.post(`${this.path}`, this.StakeholderController.createStakeholder);
        this.router.put(`${this.path}/:id`, this.StakeholderController.updateStakeholder);
        this.router.delete(`${this.path}/:id`, this.StakeholderController.deleteStakeholder);
    }
}
exports.default = StakeholderRoute;
//# sourceMappingURL=stakeholder.route.js.map