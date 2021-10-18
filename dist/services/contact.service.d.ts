/// <reference types="mongoose" />
import { CreateContactDto } from '../dtos/contact.dto';
import { Contact } from '../interfaces/contact.interface';
declare class UserService {
    contacts: import("mongoose").Model<Contact & import("mongoose").Document<any, any, any>, {}, {}>;
    findAllContacts(): Promise<Contact[]>;
    findContactById(contactId: string): Promise<Contact>;
    createContact(contactData: CreateContactDto): Promise<Contact>;
    updateContact(contactId: string, contactData: CreateContactDto): Promise<Contact>;
    deleteContact(contactId: string): Promise<Contact>;
}
export default UserService;
