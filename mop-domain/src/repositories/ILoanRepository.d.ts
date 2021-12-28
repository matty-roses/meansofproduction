import { Loan } from "../entities/loan";
import { IRepository } from "./IRepository";
export interface ILoanRepository extends IRepository<Loan> {
}
