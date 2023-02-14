import ContactsController from '@controllers/contact.controller';
import { Routes } from '@interfaces/routes.interface';
declare class ContactsRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    ContactsController: ContactsController;
    constructor();
    private initializeRoutes;
}
export default ContactsRoute;
