import { Document } from 'mongoose';
import { Contact } from '../interfaces/contact.interface';
declare const contactModel: import("mongoose").Model<Contact & Document<any, any, any>, {}, {}>;
export default contactModel;
