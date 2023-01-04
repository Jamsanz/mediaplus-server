import { Contact } from '@/interfaces/contact.interface';
import { Schema, model, Document } from 'mongoose';

// The Contact page schema
const contactSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    status: String,
    service: String,
    message: String,
  },
  { timestamps: true },
);

const contactModel = model<Contact & Document>('Contact', contactSchema);
export default contactModel;
