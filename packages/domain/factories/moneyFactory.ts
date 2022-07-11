import {IMoney} from "../valueItems/money/IMoney";
import {USDMoney} from "../valueItems/money/USDMoney";

export class MoneyFactory{
    public getEmptyMoney(): IMoney{
        return new USDMoney(0)
    }
}