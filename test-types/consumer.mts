import { paraUnidades, deUnidades, repartirUnidades } from 'valores-monetarios';
const unidades: bigint = paraUnidades('1.20');
const parcelas: bigint[] = repartirUnidades(unidades, 3);
const decimal: string = deUnidades(parcelas[0]);
// @ts-expect-error float input is rejected
paraUnidades(1.20);
// @ts-expect-error must supply minor units as bigint
deUnidades(120);
// @ts-expect-error shares are a number
repartirUnidades(100n, 3n);
void decimal;
