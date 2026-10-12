import { test } from 'node:test';
import assert from 'node:assert/strict';
import { paraUnidades, deUnidades, repartirUnidades } from '../src/index.js';
test('decimal additions remain exact beyond floating point precision', () => {
  assert.equal(deUnidades(paraUnidades('0.10') + paraUnidades('0.20')), '0.30');
  assert.equal(deUnidades(paraUnidades('9007199254740993.99')), '9007199254740993.99');
  assert.equal(deUnidades(paraUnidades('-0.01')), '-0.01');
  assert.equal(deUnidades(paraUnidades('+001.2')), '1.20');
  assert.equal(deUnidades(paraUnidades('123', 0), 0), '123');
});
test('rejects ambiguous formats, floats and silent rounding', () => {
  for (const valor of ['1,20', 'R$ 1.20', '1e2', ' 1.20', '', '.5', '1.', '1,000.00', 1.2, '1'.repeat(1025)]) assert.throws(() => paraUnidades(valor), TypeError);
  assert.throws(() => paraUnidades('1.001'), RangeError);
  assert.throws(() => deUnidades(123), TypeError);
  for (const escala of [-1, 19, 1.5]) assert.throws(() => paraUnidades('1', escala), RangeError);
});
test('round trips signed units across supported scales', () => {
  for (const escala of [0, 2, 3, 18]) for (let n = -100; n <= 100; n++) {
    assert.equal(paraUnidades(deUnidades(BigInt(n), escala), escala), BigInt(n));
  }
});
test('allocation preserves sums and differs by at most one unit', () => {
  assert.deepEqual(repartirUnidades(100n, 3), [34n, 33n, 33n]);
  assert.deepEqual(repartirUnidades(-100n, 3), [-34n, -33n, -33n]);
  for (let n = -100; n <= 100; n++) for (const partes of [1, 3, 7]) {
    const parcelas = repartirUnidades(BigInt(n), partes);
    assert.equal(parcelas.reduce((a, b) => a + b, 0n), BigInt(n));
    const diferenca = parcelas[0] - parcelas.at(-1);
    assert.ok(diferenca >= -1n && diferenca <= 1n);
  }
  for (const partes of [0, 100001, 2.5]) assert.throws(() => repartirUnidades(1n, partes), RangeError);
});
