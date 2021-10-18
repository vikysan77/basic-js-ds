const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
  constructor(){
     this.stack = [];
  }
 //Добавление элемента в массив//
 push(element) {
  return this.stack.push(element);
 }
//Удаление последнего элемента в массиве//
 pop() {
   return this.stack.pop();
 }
//Возврат верхнего элемента без изменения массива//
 peek() {
  return this.stack[this.stack.length - 1];
 }
}
