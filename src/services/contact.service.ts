import { CreateContactDto } from '@dtos/contact.dto';
import { HttpException } from '@exceptions/HttpException';
import { Contact } from '@interfaces/contact.interface';
import contactModel from '@models/contact.model';
import { isEmpty } from '@utils/util';

class UserService {
  public contacts = contactModel;

  public async findAllContacts(): Promise<Contact[]> {
    const contacts: Contact[] = await this.contacts.find();
    return contacts;
  }

  public async findContactById(contactId: string): Promise<Contact> {
    if (isEmpty(contactId)) throw new HttpException(400, "No ID provided");

    const findContact: Contact = await this.contacts.findOne({ _id: contactId });
    if (!findContact) throw new HttpException(409, "No contact");

    return findContact;
  }

  public async createContact(contactData: CreateContactDto): Promise<Contact> {
    if (isEmpty(contactData)) throw new HttpException(400, "Please fill in all the required fields");
    
    const createContactData: Contact = await this.contacts.create({ ...contactData});

    return createContactData;
  }

  public async updateContact(contactId: string, contactData: CreateContactDto): Promise<Contact> {
    if (isEmpty(contactData)) throw new HttpException(400, "Empty fields provided");


    const updateContactById: Contact = await this.contacts.findByIdAndUpdate(contactId, { contactData });
    if (!updateContactById) throw new HttpException(409, "Invalid record selection");

    return updateContactById;
  }

  public async deleteContact(contactId: string): Promise<Contact> {
    const deleteUserById: Contact = await this.contacts.findByIdAndDelete(contactId);
    if (!deleteUserById) throw new HttpException(409, "Invalid record deletion");

    return deleteUserById;
  }
}

export default UserService;
