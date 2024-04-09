import { Router } from 'express';
import ContactsController from '../controllers/contact.controller';
import { Routes } from '../interfaces/routes.interface';

class ContactsRoute implements Routes {
  public path = '/contacts';
  public router = Router();
  public ContactsController = new ContactsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.ContactsController.getContacts);
    this.router.get(`${this.path}/:id`, this.ContactsController.getContactById);
    this.router.post(`${this.path}`,this.ContactsController.createContact);
    this.router.put(`${this.path}/:id`, this.ContactsController.updateContact);
    this.router.delete(`${this.path}/:id`, this.ContactsController.deleteContact);
  }
}

export default ContactsRoute;
