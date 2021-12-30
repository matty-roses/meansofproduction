import { User } from "../entities/user";
import { IRepository } from "./IRepository";
import { EmailAddress } from "../valueItems/emailAddress";
export interface IUserRepository extends IRepository<User> {
    getByEmail(email: EmailAddress): User;
}
