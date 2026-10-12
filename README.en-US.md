<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# valores-monetarios

Exact decimals as integer minor units and lossless allocation.

Converts canonical decimal text to bigint, supports addition in integer minor units and allocates a total without losing units. Scale is explicit, including zero or three decimal places. Excess precision is rejected; there is no hidden rounding.

Node.js 22 or later. Dependency-free ESM core, usable in modern browsers. Not published on npm: clone the repository or use a pinned Git revision. Preserve the license when copying the module.

## Usage

```bash
git clone https://github.com/Rdraim/valores-monetarios.git
cd valores-monetarios
npm test
npm run example
```

```js
import { paraUnidades, deUnidades, repartirUnidades } from './src/index.js';
deUnidades(paraUnidades('0.10') + paraUnidades('0.20')); // '0.30'
repartirUnidades(100n, 3); // [34n, 33n, 33n]
```

## Contract

```text
paraUnidades(decimalText, scale = 2) → bigint
deUnidades(bigint, scale = 2) → decimalText
repartirUnidades(totalBigint, shares) → bigint[]
```

## Limits

Accepts a decimal dot, optional sign and digits; rejects grouping, currency symbols, commas, whitespace and Number inputs. Scale 0–18; input up to 1024 characters; 1–100000 shares. Remainder goes to the first shares, including negative totals. Convert BigInt to text before JSON. No interest, taxes, exchange rates or accounting rules.

## Verification

CI on Node 22 and 24, runnable examples, edge case tests and heuristic content/history checks. Automated checks do not replace human review.

## Contributing

Open an Issue with expected behavior and a synthetic example. Contributions need a PR with a regression test and synchronized documentation in all three languages. Do not submit real data, logs, configuration or credentials.

## Security

Use GitHub private vulnerability reporting when available. Do not post secrets or personal data in Issues. The core does not access networks, databases or files; validate contracts and limits in the consuming application.

## Changelog

1.0.0 — 2026-10-12: Initial release: independent contract, synthetic examples, tests and CI.

## License

[MIT](LICENSE) © Rodrigo Rodrigues
