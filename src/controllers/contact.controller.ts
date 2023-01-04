import { NextFunction, Request, Response } from 'express';
import { CreateContactDto } from '@dtos/contact.dto';
import { Contact } from '@interfaces/contact.interface';
import contactService from '@services/contact.service';

class ContactsController {
  public contactService = new contactService();

  public getContacts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllContactsData: Contact[] = await this.contactService.findAllContacts();

      res.status(200).json({ contacts: findAllContactsData});
    } catch (error) {
      next(error);
    }
  };

  public getContactById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ContactId: string = req.params.id;
      const findOneContactData: Contact = await this.contactService.findContactById(ContactId);

      res.status(200).json({ data: findOneContactData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ContactData= req.body;
      const createContactData: Contact = await this.contactService.createContact(ContactData);

      res.status(201).json({ data: createContactData, message: 'Successfully Submitted' });
    } catch (error) {
      next(error);
    }
  };

  public updateContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ContactId: string = req.params.id;
      const ContactData: CreateContactDto = req.body;
      const updateContactData: Contact = await this.contactService.updateContact(ContactId, ContactData);
      res.status(200).json({ data: updateContactData, message: 'Record updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public deleteContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ContactId: string = req.params.id;
      const deleteContactData: Contact = await this.contactService.deleteContact(ContactId);

      res.status(200).json({ data: deleteContactData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ContactsController;
