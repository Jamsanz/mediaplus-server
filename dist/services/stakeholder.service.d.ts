/// <reference types="mongoose" />
import CreateStakeholderDto from '@dtos/stakeholder.dto';
import { IStakeholder } from '@interfaces/stakeholder.interface';
declare class StakeholderService {
    Stakeholder: import("mongoose").Model<IStakeholder & import("mongoose").Document<any, any, any>, {}, {}>;
    findAllStakeholder(): Promise<IStakeholder[]>;
    findStakeholderById(StakeholderId: string): Promise<IStakeholder>;
    createStakeholder(StakeholderData: CreateStakeholderDto): Promise<IStakeholder>;
    updateStakeholder(StakeholderId: string, StakeholderData: CreateStakeholderDto): Promise<IStakeholder>;
    deleteStakeholder(StakeholderId: string): Promise<IStakeholder>;
}
export default StakeholderService;
