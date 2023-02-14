import StakeholderController from '@controllers/stakeholder.controller';
import { Routes } from '@interfaces/routes.interface';
declare class StakeholderRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    StakeholderController: StakeholderController;
    constructor();
    private initializeRoutes;
}
export default StakeholderRoute;
