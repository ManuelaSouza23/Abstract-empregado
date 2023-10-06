import { Assalariado } from "./src/model/Assalariado";
import { Comissionado } from "./src/model/Comissionado";
import { Horista } from "./src/model/Horista";

const a1 = new Assalariado(`Miroslav Klose`, `20646575454546`, 1500);
a1.setNome(`Wesley Lima`);
a1.setCpf(`309328937`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF:${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado (`SlipKnot`, `661661661`, 4000, 0.10);
c1.setNome(`Stratovarius`);
c1.setCpf(`3843759307`);
c1.setTotalVendas(3200);
c1.setTaxaComissão(0.09);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf()}`);
console.log(` Taxa Comissão: ${c1.getTaxaComissao()}, Total Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista (`Jubiscreldo`, `44556677`,7, 15);
h1.setNome(`Jurio`);
h1.setCpf(`3843759307`);
h1.setValorHora(3);
h1.setHorasTrabalhadas(12);
console.log(`Nome: ${h1.getNome()}, CPF: ${h1.getCpf()}`);
console.log(` Valor Hora: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);

