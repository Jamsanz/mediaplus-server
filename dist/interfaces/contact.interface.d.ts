export interface Contact {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    status: string;
    message: string;
    service: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
}
