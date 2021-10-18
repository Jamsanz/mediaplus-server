import { Contact } from '../interfaces/contact.interface';
import { Document } from 'mongoose';
declare const contactModel: import("mongoose").Model<Contact & Document<any, any, any>, {}, {}>;
export default contactModel;
