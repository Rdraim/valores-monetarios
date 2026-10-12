<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# valores-monetarios

<!-- public-badges:start -->
[![license](assets/support/badge-license.svg)](LICENSE) [![CI](assets/support/badge-ci.svg)](https://github.com/Rdraim/valores-monetarios/actions) [![release](assets/support/badge-release.svg)](https://github.com/Rdraim/valores-monetarios/releases) [![Git](assets/support/badge-git.svg)](https://github.com/Rdraim/valores-monetarios/commits/main)
<!-- public-badges:end -->

<p align="center"><img src="assets/support/project-es-ar.svg" width="800" alt="valores-monetarios: Cada centavo conservado."></p>

Decimales exactos en unidades enteras y reparto sin perder centavos.

Convierte texto decimal canónico en bigint, permite sumar unidades enteras y reparte un total sin perder unidades. La escala es explícita, incluso con cero o tres decimales. La precisión excedente se rechaza; no hay redondeo oculto.

Node.js 22 o superior. Núcleo ESM sin dependencias, utilizable en navegadores modernos. No está publicado en npm: cloná el repositorio o usá una revisión Git fija. Conservá la licencia al copiar el módulo.

## Uso

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

## Documentación completa

[API y recetas](API.es-AR.md) · [Compatibilidad](COMPATIBILITY.es-AR.md) · [Contribuciones](CONTRIBUTING.es-AR.md) · [Seguridad](SECURITY.es-AR.md) · [Historial](CHANGELOG.es-AR.md) · [Apoyo voluntario](SUPPORT.es-AR.md)

## Contratos TypeScript

El paquete incluye declaraciones .d.ts; el núcleo sigue siendo JavaScript ESM. Los ejemplos de tipos en test-types/consumer.mts se verificaron con un compilador existente, sin agregar dependencias. El CI ejecuta pruebas de ejecución y contenido; no instala un compilador TypeScript.

Para repetir el chequeo, usá TypeScript instalado en tu entorno:

```bash
tsc --noEmit --strict --target ES2022 --module NodeNext --moduleResolution NodeNext test-types/consumer.mts
```

## Nueva versión — 1.1.0

Agrega declaraciones TypeScript, recetas de transporte y documentación; conserva operaciones exactas sin redondeo implícito.

Los indicadores son condicionales: CI aprobado, versión estable publicada y estrellas/forks mayores que cero. Se actualizan cada seis horas y por eventos; una página abierta necesita recargarse.

---

<p align="center">
  <img src="assets/support/banner-es-ar.svg" width="960" alt="Código abierto. Un café suma. Apoyá el trabajo de Rodrigo Rodrigues.">
</p>

## ☕ Invitame un café

¿Este proyecto te ayudó a resolver un problema, aprender algo nuevo o dar tus primeros pasos en desarrollo? Si querés apoyar mi trabajo, un café es una linda forma de agradecer.

Soy **Rodrigo Rodrigues**, creador de **Nexus** y de estos proyectos de código abierto. Tu aporte me ayuda a dedicar tiempo a mejorar el código, escribir ejemplos más claros y seguir compartiendo lo que aprendo.

**Aportá el monto que tenga sentido para vos. El apoyo es totalmente voluntario; el proyecto sigue siendo gratuito bajo la licencia MIT.**

[Apoyá con Pix](#apoyá-con-pix) · [Dejá un comentario](https://github.com/Rdraim/valores-monetarios/issues/new?title=Comentario%3A%20este%20proyecto%20me%20ayud%C3%B3)

### Apoyá con Pix

En la app de tu banco, escaneá el QR o copiá la clave Pix de abajo. Elegí el monto y revisá los datos del destinatario antes de confirmar.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="QR Pix original proporcionado por Rodrigo Rodrigues; también podés usar la clave de texto de abajo.">
</p>

**Clave Pix**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Pix es el sistema de pagos de Brasil. Si tu banco no lo admite, también podés ayudar compartiendo el proyecto, reportando un problema, mejorando la documentación o dejando un comentario.

### Tu comentario también suma

[Contame cómo te ayudó el proyecto](https://github.com/Rdraim/valores-monetarios/issues/new?title=Comentario%3A%20este%20proyecto%20me%20ayud%C3%B3). Me gustaría saber qué creaste, qué aprendiste y qué podría ser más claro para quienes recién empiezan.

Los comentarios son bienvenidos con o sin donación. Cuidá tu privacidad: no publiques comprobantes de pago, datos personales, credenciales ni información privada de usuarios en las Issues.

**Gracias por apoyar mi trabajo y ayudarme a seguir creando y compartiendo. ❤️**
