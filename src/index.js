/** Exact decimal text ↔ integer minor units. No floats, symbols or grouping. */
function exigirEscala(escala) {
  if (!Number.isInteger(escala) || escala < 0 || escala > 18) throw new RangeError('Scale must be an integer from 0 to 18');
}
export function paraUnidades(texto, escala = 2) {
  exigirEscala(escala);
  if (typeof texto !== 'string' || texto.length > 1024 || !/^[+-]?\d+(?:\.\d+)?$/.test(texto)) {
    throw new TypeError('Expected canonical decimal text');
  }
  const negativo = texto.startsWith('-');
  const [inteiro, fracao = ''] = texto.replace(/^[+-]/, '').split('.');
  if (fracao.length > escala) throw new RangeError('Decimal precision exceeds scale');
  const unidades = BigInt(inteiro + fracao.padEnd(escala, '0'));
  return negativo ? -unidades : unidades;
}
export function deUnidades(unidades, escala = 2) {
  exigirEscala(escala);
  if (typeof unidades !== 'bigint') throw new TypeError('Expected bigint minor units');
  const sinal = unidades < 0n ? '-' : '';
  const digitos = (unidades < 0n ? -unidades : unidades).toString().padStart(escala + 1, '0');
  return sinal + (escala === 0 ? digitos : `${digitos.slice(0, -escala)}.${digitos.slice(-escala)}`);
}
/** Split signed minor units; remainder goes to the first shares. */
export function repartirUnidades(total, partes) {
  if (typeof total !== 'bigint') throw new TypeError('Expected bigint minor units');
  if (!Number.isInteger(partes) || partes < 1 || partes > 100000) throw new RangeError('Shares must be an integer from 1 to 100000');
  const sinal = total < 0n ? -1n : 1n;
  const absoluto = total < 0n ? -total : total;
  const divisor = BigInt(partes);
  const base = absoluto / divisor;
  const resto = Number(absoluto % divisor);
  return Array.from({ length: partes }, (_, i) => sinal * (base + (i < resto ? 1n : 0n)));
}
