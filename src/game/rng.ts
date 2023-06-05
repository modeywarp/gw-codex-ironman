export type Seed = string;
export type Uuid = string;

const alpha = 'abcdefghijklmnuiopqrstuvwxyz'.split('');

export function letter() {
  return alpha[randRange(alpha.length)];
}

export function uuid(length = 10): Uuid {
  return new Array(length).fill('0').map(letter).join('');
}

export class Rng {
  private generator: any;

  constructor(seed: Seed = uuid()) {
    //@ts-ignore
    this.generator = new Math.seedrandom(seed);
  }

  next(): number {
    //@ts-ignore
    return this.generator();
  }
}

export function randRangeF(max: number, min = 0): number {
  return Math.random() * max + min;
}

export function randRange(max: number, min = 0) {
  return Math.floor(randRangeF(max, min));
}
