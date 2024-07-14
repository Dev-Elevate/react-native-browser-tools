import type { urlType } from '../types/types';

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  print(): void {
    console.log(this.items.toString());
  }

  get() {
    return this.items;
  }
}

export const tabsUrlStack = new Stack<urlType>();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.isEmpty());

// stack.print();

// stack.clear();
// console.log(stack.isEmpty());
