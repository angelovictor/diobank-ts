import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { SpecialAccount } from "./class/SpecialAccount"

const peopleAcc = new PeopleAccount(123456789, "Ângelo", 1)
const companyAcc = new CompanyAccount("Microsoft", 2)
const specialAcc = new SpecialAccount("Conta Especial", 3)

peopleAcc.deposit(100)
peopleAcc.withdraw(50)

companyAcc.deposit(200)
companyAcc.getLoan(500)

specialAcc.deposit(100)
specialAcc.withdraw(50)