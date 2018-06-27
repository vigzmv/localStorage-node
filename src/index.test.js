import './index';

describe('Methods should work', () => {
  it('sets a value with setItem', () => {
    localStorage.setItem('a', 1);
    expect(localStorage.key(0)).toBe('a');
  });

  it('gets value with getItem', () => {
    localStorage.setItem('b', '2');
    expect(localStorage.getItem('a')).toBe('1');
    expect(localStorage.getItem('b')).toBe('2');
    expect(localStorage.length).toBe(2);
  });

  it('gets null/undefined on non existent key', () => {
    expect(localStorage['c']).toBeUndefined();
    expect(localStorage.getItem('c')).toBeNull();
  });

  it('sets undefined when no value provided', () => {
    localStorage.setItem('c');
    expect(localStorage.getItem('c')).toBe('undefined');
    expect(localStorage.length).toBe(3);
  });

  it('removes item with removeItem', () => {
    localStorage.removeItem('c');
    expect(localStorage.getItem('c')).toBeNull();
    expect(localStorage.length).toBe(2);
  });

  it('clears localStorage with clear', () => {
    localStorage.clear();
    expect(localStorage.getItem('a')).toBeNull();
    expect(localStorage.getItem('b')).toBeNull();
    expect(localStorage.length).toBe(0);
  });
});

describe('Error throwing', () => {
  it('it throws error', () => {
    expect(() => {
      localStorage.key();
    }).toThrowError(
      /Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present./,
    );
  });
});

describe('Proxy should work', () => {
  it('has 0 length when empty', () => {
    expect(localStorage.length).toBe(0);
  });

  it('sets item with assign operator', () => {
    localStorage.a = {};
    expect(localStorage.a).toBe('[object Object]');
  });

  it('key gets stringified', () => {
    localStorage.c = 1;
    const obj = {};
    localStorage[obj] = 'key gets stringified';
    expect(localStorage['[object Object]']).toBe('key gets stringified');
  });

  it('key gets stringified', () => {
    localStorage.c = 1;
    const obj = {};
    localStorage[obj] = 'key gets stringified';
    expect(localStorage['[object Object]']).toBe('key gets stringified');
    expect(localStorage.c).toBe('1');
    expect(localStorage.length).toBe(3);
  });

  it('gets correct length', () => {
    expect(localStorage.length).toBe(3);
  });
});
