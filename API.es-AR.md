<p align="right">
  <a href="API.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="API.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="API.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# Referencia de API

| API | Entrada | Resultado y errores |
|---|---|---|
| `paraUnidades(texto, escala = 2)` | Texto decimal con punto y signo opcional. Escala entera 0–18. Hasta 1024 caracteres. | bigint. TypeError para formato/tipo inválidos; RangeError para escala o precisión excedente. |
| `deUnidades(unidades, escala = 2)` | bigint y escala entera 0–18. | Texto decimal canónico; no devuelve Number ni notación exponencial. |
| `repartirUnidades(total, partes)` | Total bigint, 1–100000 partes enteras. | bigint[] con suma exacta. El resto va a las primeras partes; soporta totales negativos. |

## Receta de integración

Ejemplo sintético. Adaptá y probá el contrato consumidor antes de integrar:

```js
import { paraUnidades, deUnidades, repartirUnidades } from './src/index.js';
const total = paraUnidades('10.01');
const partes = repartirUnidades(total, 3).map(n => deUnidades(n)); // ['3.34', '3.34', '3.33']
const payload = JSON.stringify({ total: total.toString(), escala: 2 });
const restaurado = BigInt(JSON.parse(payload).total); // 1001n
```

## Detalles del contrato

No mezcles escalas: 100n representa valores distintos con escala 0, 2 o 3. Transportá escala y moneda por separado. No conviertas a Number para guardar valores. Validá el texto recibido antes de BigInt; esta receta usa solo datos sintéticos. Los cálculos de negocio requieren una política explícita de redondeo.

## Contratos TypeScript

El paquete incluye declaraciones .d.ts; el núcleo sigue siendo JavaScript ESM. Los ejemplos de tipos en test-types/consumer.mts se verificaron con un compilador existente, sin agregar dependencias. El CI ejecuta pruebas de ejecución y contenido; no instala un compilador TypeScript.

[Volver al proyecto](README.es-AR.md) · [Compatibilidad](COMPATIBILITY.es-AR.md)
