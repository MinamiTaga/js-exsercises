import { sum } from './main.js'
import { Bird as Penguin} from './main.js';

const number =  sum(1, 5);
console.log(number);

const penguin = new Penguin();
console.log(penguin.eat());

