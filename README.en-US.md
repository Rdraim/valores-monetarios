<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# valores-monetarios

<!-- public-badges:start -->
[![license](assets/support/badge-license.svg)](LICENSE) [![CI](assets/support/badge-ci.svg)](https://github.com/Rdraim/valores-monetarios/actions) [![release](assets/support/badge-release.svg)](https://github.com/Rdraim/valores-monetarios/releases) [![Git](assets/support/badge-git.svg)](https://github.com/Rdraim/valores-monetarios/commits/main)
<!-- public-badges:end -->

<p align="center"><img src="assets/support/project-en-us.svg" width="800" alt="valores-monetarios: Every minor unit preserved."></p>

Exact decimals as integer minor units and lossless allocation.

Converts canonical decimal text to bigint, supports addition in integer minor units and allocates a total without losing units. Scale is explicit, including zero or three decimal places. Excess precision is rejected; there is no hidden rounding.

Node.js 22 or later. Dependency-free ESM core, usable in modern browsers. Not published on npm: clone the repository or use a pinned Git revision. Preserve the license when copying the module.

## Usage

```bash
git clone https://github.com/Rdraim/valores-monetarios.git
cd valores-monetarios
npm test
npm run example
npm run example:integration
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

## Complete documentation

[API and recipes](API.en-US.md) · [Compatibility](COMPATIBILITY.en-US.md) · [Contributing](CONTRIBUTING.en-US.md) · [Security](SECURITY.en-US.md) · [Changelog](CHANGELOG.en-US.md) · [Voluntary support](SUPPORT.en-US.md)

## TypeScript contracts

The package includes .d.ts declarations; the core remains JavaScript ESM. Type examples in test-types/consumer.mts were checked with an existing compiler, without adding dependencies. CI runs runtime and content tests; it does not install a TypeScript compiler.

To repeat the check, use TypeScript installed in your environment:

```bash
tsc --noEmit --strict --target ES2022 --module NodeNext --moduleResolution NodeNext test-types/consumer.mts
```

## New release — 1.1.0

Adds TypeScript declarations, transport recipes and documentation; retains exact operations without implicit rounding.

Indicators are conditional: successful CI, a published stable release and stars/forks above zero. Refresh runs every six hours and on events; an open page needs reloading.

---

<p align="center">
  <img src="assets/support/banner-en-us.svg" width="960" alt="Open source. A coffee makes a difference. Support Rodrigo Rodrigues’s work.">
</p>

## ☕ Buy me a coffee

Did this project help you solve a problem, learn something new, or take your first steps in development? If you feel like supporting my work, a coffee is a kind way to say thank you.

I’m **Rodrigo Rodrigues**, creator of **Nexus** and these open source projects. Your support helps me set aside time to improve the code, write clearer examples, and keep sharing what I learn.

**Give any amount that feels right to you. Supporting is completely optional — the project remains free under the MIT license.**

<p>
  <a href="#support-via-pix"><img src="assets/support/pix-en-us.svg" width="190" height="44" alt="Support via Pix"></a>
  <a href="https://github.com/Rdraim/valores-monetarios/issues/new?title=Feedback%3A%20this%20project%20helped%20me"><img src="assets/support/comment-en-us.svg" width="210" height="44" alt="Leave a comment"></a>
</p>

### Support via Pix

In your banking app, scan the QR code or copy the Pix key below. Choose your amount and check the recipient details before confirming.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="Original Pix QR code supplied by Rodrigo Rodrigues; the text key below is an alternative.">
</p>

**Pix key**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Pix is Brazil’s payment system. If your bank does not support it, you can still help by sharing the project, reporting a bug, improving the documentation, or leaving feedback.

### Your feedback matters, too

[Tell me how the project helped you](https://github.com/Rdraim/valores-monetarios/issues/new?title=Feedback%3A%20this%20project%20helped%20me). I’d love to hear what you built, what you learned, and what could be clearer for someone just starting out.

A comment is welcome with or without a donation. Please keep payment receipts, personal details, credentials and private user data out of public Issues.

---

**Thank you for supporting my work and helping me keep building and sharing. ❤️**
