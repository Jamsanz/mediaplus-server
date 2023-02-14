import { NextFunction, Request, Response } from 'express';
import contactService from '@services/contact.service';
declare class ContactsController {
    contactService: contactService;
    getContacts: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getContactById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createContact: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateContact: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteContact: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default ContactsController;
