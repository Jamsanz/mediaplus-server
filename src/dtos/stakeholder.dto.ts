import { IsString } from 'class-validator';

class CreateStakeholderDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsString()
  public image: string;
}

export default CreateStakeholderDto;
