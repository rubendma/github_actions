const division = require('./division');

test('División números enteros: 4 / 2 = 2', () =>{
    expect(division(4,2)).toBe(2);
});

test('División números decimales: 5 / 2 = 2.5', () =>{
    expect(division(5,2)).toBe(2.5);
});

test('División numerador en 0: 0 / 2 = 0', () =>{
    expect(division(0,2)).toBe(0);
});

test('División denominador en 0: 4 / 0 = Infinity', () =>{
    expect(division(4,0)).toBe(Infinity);
});

test('División números iguales: 4 / 4 = 1', () =>{
    expect(division(4,4)).toBe(1);
});