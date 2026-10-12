/** Canonical decimal string to exact integer minor units; no rounding. */
export function paraUnidades(texto: string, escala?: number): bigint;
/** Exact integer minor units to canonical decimal string. */
export function deUnidades(unidades: bigint, escala?: number): string;
/** Remainder assigned to first shares, sum exactly equals total. */
export function repartirUnidades(total: bigint, partes: number): bigint[];
