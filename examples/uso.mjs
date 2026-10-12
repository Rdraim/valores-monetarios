import { paraUnidades, deUnidades, repartirUnidades } from '../src/index.js';
console.log(deUnidades(paraUnidades('0.10') + paraUnidades('0.20'))); // 0.30
console.log(repartirUnidades(paraUnidades('1.00'), 3).map(n => deUnidades(n))); // 0.34, 0.33, 0.33
