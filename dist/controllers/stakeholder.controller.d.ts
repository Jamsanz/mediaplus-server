import { NextFunction, Request, Response } from 'express';
import StakeholderService from '@services/stakeholder.service';
declare class StakeholderController {
    StakeholderService: StakeholderService;
    getStakeholder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getStakeholderById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createStakeholder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateStakeholder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteStakeholder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default StakeholderController;
