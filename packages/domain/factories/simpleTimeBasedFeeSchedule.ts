import {IFeeSchedule} from "./IFeeSchedule";
import {ILoan} from "../entities/loans/ILoan";
import {IMoney} from "../valueItems/money/IMoney";

/*
Basic fee generator that charges late fees based upon the cost split up by a set amount of time (default one year to full cost)
 */
export class SimpleTimeBasedFeeSchedule implements IFeeSchedule{
    public readonly numYears: number
    public readonly defaultItemCost: IMoney

    constructor(defaultItemCost: IMoney, numYears: number = 1){
        this.numYears = numYears
        this.defaultItemCost = defaultItemCost
    }

    private baseCost(loan: ILoan): IMoney{
        if(loan.item.purchaseCost){
            return loan.item.purchaseCost
        }
        return this.defaultItemCost
    }

    feesForDamagedItem(loan: ILoan): IMoney {
        return this.baseCost(loan)
    }

    feesForOverdueItem(loan: ILoan): IMoney {
        let timeOverdue = loan.dateReturned?.valueOf() - loan.dueDate?.valueOf()
        if(timeOverdue < 0){
            timeOverdue = 0
        }

        const years = timeOverdue/31536000000
        const ratio = years/this.numYears

        return this.baseCost(loan).multiply(ratio)
    }

}