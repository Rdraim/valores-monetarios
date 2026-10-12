import { paraUnidades, deUnidades, repartirUnidades } from '../src/index.js';
const total = paraUnidades('10.01');
const parcelas = repartirUnidades(total, 3);
const transporte = JSON.stringify({ unidades: total.toString(), escala: 2, moeda: 'BRL' });
const recebido = JSON.parse(transporte);
// Synthetic payload; validate external input before converting to bigint.
const restaurado = BigInt(recebido.unidades);
console.log({ parcelas: parcelas.map(n => deUnidades(n)), somaExata: parcelas.reduce((a, b) => a + b, 0n) === total });
console.log({ transporte, restaurado: deUnidades(restaurado, recebido.escala) });
console.log({ tresCasas: deUnidades(paraUnidades('1.234', 3), 3), negativo: repartirUnidades(-100n, 3).map(n => deUnidades(n)) });
