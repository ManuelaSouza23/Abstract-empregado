import { Empregado } from "./Empregado";

export class Horista extends Empregado{

    private valorHora: number;
    private horasTrabalhadas: number;

    public constructor(_nome:string,_cpf:string, _valorHora:number, _horasTrabalhadas){
        super(_nome, _cpf);
        this.valorHora = _valorHora;
        this.horasTrabalhadas = _horasTrabalhadas;
      }

      public setValorHora(_valorHora:number):void {
        this.valorHora;
      }

      public getValorHora():number {
        return this.valorHora;
      }

      public setHorasTrabalhadas(_horasTrabalhadas:number):void {
        this.horasTrabalhadas;
      }

      public getHorasTrabalhadas():number {
        return this.horasTrabalhadas;
      }

      public  vencimento(): number {
          return this.valorHora * this.horasTrabalhadas;
      }

    
       
}


