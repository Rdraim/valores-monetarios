<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# valores-monetarios

Decimales exactos en unidades enteras y reparto sin perder centavos.

Convierte texto decimal canónico en bigint, permite sumar unidades enteras y reparte un total sin perder unidades. La escala es explícita, incluso con cero o tres decimales. La precisión excedente se rechaza; no hay redondeo oculto.

Node.js 22 o superior. Núcleo ESM sin dependencias, utilizable en navegadores modernos. No está publicado en npm: cloná el repositorio o usá una revisión Git fija. Conservá la licencia al copiar el módulo.

## Uso

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

## Contrato

```text
paraUnidades(decimalText, scale = 2) → bigint
deUnidades(bigint, scale = 2) → decimalText
repartirUnidades(totalBigint, shares) → bigint[]
```

## Límites

Acepta punto decimal, signo opcional y dígitos; rechaza agrupación, símbolos monetarios, comas, espacios y entradas Number. Escala 0–18; hasta 1024 caracteres; 1–100000 partes. El resto va a las primeras partes, también con totales negativos. Convertí BigInt a texto antes de JSON. No implementa intereses, impuestos, cambio ni normas contables.

## Verificación

CI en Node 22 y 24, ejemplos ejecutables, pruebas de bordes y revisión heurística de contenido/historial. La revisión automática no reemplaza la inspección humana.

## Contribuciones

Abrí una Issue con el comportamiento esperado y un ejemplo sintético. Enviá un PR con prueba de regresión y documentación sincronizada en los tres idiomas. No envíes datos reales, registros, configuración ni credenciales.

## Seguridad

Usá el reporte privado de vulnerabilidades de GitHub cuando esté disponible. No publiques secretos ni datos personales en Issues. El núcleo no accede a redes, bases ni archivos; validá contratos y límites en la aplicación consumidora.

## Historial

1.0.0 — 2026-10-12: Primera versión: contrato independiente, ejemplos sintéticos, pruebas y CI.

## Licencia

[MIT](LICENSE) © Rodrigo Rodrigues
