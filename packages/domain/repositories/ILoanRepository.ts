import { Loan} from "../entities/loans/loan"
import { IRepository } from "./IRepository";

export interface ILoanRepository extends IRepository<Loan>{
}