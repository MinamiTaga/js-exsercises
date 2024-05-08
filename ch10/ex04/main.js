import { sum } from './index.js'
import { Animal as Bird} from './index.js';

const number =  sum(1, 4);
console.log(number);

const bird = new Bird();
console.log(bird.eat());
console.log(bird.fly());

export {sum, Bird}