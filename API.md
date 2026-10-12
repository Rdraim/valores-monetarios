<p align="right">
  <a href="API.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="API.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="API.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# Referência da API

| API | Entrada | Resultado e erros |
|---|---|---|
| `paraUnidades(texto, escala = 2)` | Texto decimal com ponto e sinal opcional. Escala inteira 0–18. Até 1024 caracteres. | bigint. TypeError em formato/tipo; RangeError em escala ou precisão excedente. |
| `deUnidades(unidades, escala = 2)` | bigint e escala inteira 0–18. | Texto decimal canônico; não retorna Number nem notação exponencial. |
| `repartirUnidades(total, partes)` | Total bigint, 1–100000 parcelas inteiras. | bigint[] com soma exata. Resto atribuído às primeiras parcelas; funciona com total negativo. |

## Receita de integração

Exemplo sintético. Adapte e teste o contrato do consumidor antes de integrar:

```js
import { paraUnidades, deUnidades, repartirUnidades } from './src/index.js';
const total = paraUnidades('10.01');
const parcelas = repartirUnidades(total, 3).map(n => deUnidades(n)); // ['3.34', '3.34', '3.33']
const payload = JSON.stringify({ total: total.toString(), escala: 2 });
const restaurado = BigInt(JSON.parse(payload).total); // 1001n
```

## Detalhes do contrato

Não misture escalas: 100n representa valores diferentes com escala 0, 2 ou 3. Transporte escala e moeda separadamente. Não converta para Number para salvar no banco. Valide o texto recebido antes de BigInt; esta receita usa somente dados sintéticos. Operações com valores de negócio exigem sua política explícita de arredondamento.

## Contratos TypeScript

Declarações .d.ts acompanham o pacote; o núcleo continua JavaScript ESM. Exemplos de tipos em test-types/consumer.mts foram verificados com o compilador já disponível, sem acrescentar dependências. O CI executa testes de runtime e conteúdo; não instala um compilador TypeScript.

[Voltar ao projeto](README.md) · [Compatibilidade](COMPATIBILITY.md)
