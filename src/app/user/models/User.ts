export class User {

    id: number;
    name: string;
    paterno: string;
    materno: string;
    address: string;
    mail: string;
    phones: string[];
    department: any[];

    constructor() { }

    buildUser(name: string, paterno: string, materno: string, address: string, mail: string, phones: string[], department: any[]): User {
        const user = new User();
        user.name = name;
        user.paterno = paterno;
        user.materno = materno;
        user.address = address;
        user.mail = mail;
        user.phones = phones;
        user.department = department;
        return user;
    }
}