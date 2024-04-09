
import { model, Schema, Document } from 'mongoose';
import { IStakeholder } from '../interfaces/stakeholder.interface';

const stakeholderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

export default model<IStakeholder & Document>('Stakeholder', stakeholderSchema);
