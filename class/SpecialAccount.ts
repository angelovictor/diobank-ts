import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      const finalValue = value + 10
      this.increaseBalance(finalValue)
      console.log(`Depósito especial de ${value} realizado! Valor final: ${finalValue}. Saldo atual: ${this.getBalance()}`)
    }
  }
}