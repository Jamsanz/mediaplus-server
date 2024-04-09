import { Router } from 'express';
import StakeholderController from '../controllers/stakeholder.controller';
import { Routes } from '../interfaces/routes.interface';

class StakeholderRoute implements Routes {
  public path = '/stakeholder';
  public router = Router();
  public StakeholderController = new StakeholderController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.StakeholderController.getStakeholder);
    this.router.get(`${this.path}/:id`, this.StakeholderController.getStakeholderById);
    this.router.post(`${this.path}`, this.StakeholderController.createStakeholder);
    this.router.put(`${this.path}/:id`, this.StakeholderController.updateStakeholder);
    this.router.delete(`${this.path}/:id`, this.StakeholderController.deleteStakeholder);
  }
}

export default StakeholderRoute;
