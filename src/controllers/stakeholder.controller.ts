import { NextFunction, Request, Response } from 'express';
import CreateStakeholderDto from '@dtos/stakeholder.dto';
import { IStakeholder } from '@interfaces/stakeholder.interface';
import StakeholderService from '@services/stakeholder.service';

class StakeholderController {
  public StakeholderService = new StakeholderService();

  public getStakeholder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllStakeholderData: IStakeholder[] = await this.StakeholderService.findAllStakeholder();

      res.status(200).json({ data: findAllStakeholderData });
    } catch (error) {
      next(error);
    }
  };

  public getStakeholderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const StakeholderId: string = req.params.id;
      const findOneStakeholderData: IStakeholder = await this.StakeholderService.findStakeholderById(StakeholderId);

      res.status(200).json({ data: findOneStakeholderData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createStakeholder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const StakeholderData = req.body;
      const createStakeholderData: IStakeholder = await this.StakeholderService.createStakeholder(StakeholderData);

      res.status(201).json({ data: createStakeholderData, message: 'Stakeholder Created Successfully' });
    } catch (error) {
      next(error);
    }
  };

  public updateStakeholder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const StakeholderId: string = req.params.id;
      const StakeholderData: CreateStakeholderDto = req.body;
      const updateStakeholderData: IStakeholder = await this.StakeholderService.updateStakeholder(StakeholderId, StakeholderData);
      res.status(200).json({ data: updateStakeholderData, message: 'Stakeholder updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public deleteStakeholder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const StakeholderId: string = req.params.id;
      const deleteStakeholderData: IStakeholder = await this.StakeholderService.deleteStakeholder(StakeholderId);

      res.status(200).json({ data: deleteStakeholderData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default StakeholderController;
