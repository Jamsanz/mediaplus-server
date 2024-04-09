import CreateStakeholderDto from '../dtos/stakeholder.dto';
import { HttpException } from '../exceptions/HttpException';
import { IStakeholder } from '../interfaces/stakeholder.interface';
import stakeholderModel from '../models/stakeholder.model';
import { isEmpty } from '../utils/util';

class StakeholderService {
  public Stakeholder = stakeholderModel;

  public async findAllStakeholder(): Promise<IStakeholder[]> {
    const Stakeholder: IStakeholder[] = await this.Stakeholder.find();
    return Stakeholder;
  }

  public async findStakeholderById(StakeholderId: string): Promise<IStakeholder> {
    if (isEmpty(StakeholderId)) throw new HttpException(400, 'No ID provided');

    const findStakeholder: IStakeholder = await this.Stakeholder.findOne({ _id: StakeholderId });
    if (!findStakeholder) throw new HttpException(409, 'No Stakeholder');

    return findStakeholder;
  }

  public async createStakeholder(StakeholderData: CreateStakeholderDto): Promise<IStakeholder> {
    if (isEmpty(StakeholderData)) throw new HttpException(400, 'Please fill in all the required fields');

    const createStakeholderData: IStakeholder = await this.Stakeholder.create({ ...StakeholderData });

    return createStakeholderData;
  }

  public async updateStakeholder(StakeholderId: string, StakeholderData: CreateStakeholderDto): Promise<IStakeholder> {
    if (isEmpty(StakeholderData)) throw new HttpException(400, 'Empty fields provided');

    const updateStakeholderById: IStakeholder = await this.Stakeholder.findByIdAndUpdate(StakeholderId, { $set: StakeholderData });
    if (!updateStakeholderById) throw new HttpException(409, 'Invalid record selection');

    return updateStakeholderById;
  }

  public async deleteStakeholder(StakeholderId: string): Promise<IStakeholder> {
    const deleteStakeholderById: IStakeholder = await this.Stakeholder.findByIdAndDelete(StakeholderId);
    if (!deleteStakeholderById) throw new HttpException(409, 'Invalid record deletion');

    return deleteStakeholderById;
  }
}

export default StakeholderService;
