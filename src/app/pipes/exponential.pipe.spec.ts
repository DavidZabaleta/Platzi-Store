import { ExponentialPipe } from './exponential.pipe';

describe('ExponentialPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponentialPipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe shold return 4 when 2 is the arg', () => {
    const pipe = new ExponentialPipe();

    const result = pipe.transform(2);

    expect(result).toBe(4);
  });
});
