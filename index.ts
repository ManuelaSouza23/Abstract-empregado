import { Assalariado } from "./src/model/Assalariado";

const a1 = new Assalariado(`Miroslav Klose`, `20646575454546`, 1500);

a1.setNome(`Wesley Lima`);
a1.setCpf(`309328937`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF:${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);