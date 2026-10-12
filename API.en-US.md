<p align="right">
  <a href="API.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="API.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="API.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# API reference

| API | Input | Result and errors |
|---|---|---|
| `paraUnidades(texto, escala = 2)` | Decimal text with a dot and optional sign. Integer scale 0–18. Up to 1024 characters. | bigint. TypeError for invalid format/type; RangeError for invalid scale or excess precision. |
| `deUnidades(unidades, escala = 2)` | bigint and integer scale 0–18. | Canonical decimal text; never returns Number or exponential notation. |
| `repartirUnidades(total, partes)` | bigint total, 1–100000 integer shares. | bigint[] with an exact sum. Remainder assigned to the first shares; supports negative totals. |

## Integration recipe

Synthetic example. Adapt and test the consuming application contract before integrating:

```js
import { paraUnidades, deUnidades, repartirUnidades } from './src/index.js';
const total = paraUnidades('10.01');
const shares = repartirUnidades(total, 3).map(n => deUnidades(n)); // ['3.34', '3.34', '3.33']
const payload = JSON.stringify({ total: total.toString(), scale: 2 });
const restored = BigInt(JSON.parse(payload).total); // 1001n
```

## Contract details

Do not mix scales: 100n represents different values at scales 0, 2 or 3. Carry scale and currency separately. Do not convert to Number to store values. Validate received text before BigInt; this recipe uses synthetic data only. Business calculations require an explicit rounding policy.

## TypeScript contracts

The package includes .d.ts declarations; the core remains JavaScript ESM. Type examples in test-types/consumer.mts were checked with an existing compiler, without adding dependencies. CI runs runtime and content tests; it does not install a TypeScript compiler.

[Back to project](README.en-US.md) · [Compatibility](COMPATIBILITY.en-US.md)
