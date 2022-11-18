// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('testing valid phone 1 ', () => {
    expect(functions.isPhoneNumber('(760)-614-8625')).toBe(true);
  });

test('testing valid phone 2 ', () => {
    expect(functions.isPhoneNumber('(760) 617-8625')).toBe(true);
  });

test('testing invalid phone 1 ', () => {
    expect(functions.isPhoneNumber('604862444')).toBe(false);
  });

test('testing invalid phone 2 ', () => {
    expect(functions.isPhoneNumber('(760) 8624')).toBe(false);
  });

  
test('testing valid Email address 1', ()=>{
    expect(functions.isEmail('anh010@ucsd.edu')).toBe(true);
})

test('testing valid Email address 1', ()=>{
    expect(functions.isEmail('alexhernan45@gmail.com')).toBe(true);
})

test('testing invalid Email address 1', ()=>{
    expect(functions.isEmail('alexhern45.com')).toBe(false);
})

test('testing invalid Email address 2', ()=>{
    expect(functions.isEmail('ahernand90@imperialedu')).toBe(false);
})
  
test('testing strong password 1',()=>{
    expect(functions.isStrongPassword('Iluvkittens')).toBe(true);
})

test('testing strong password 2',()=>{
    expect(functions.isStrongPassword('ThisisStrong')).toBe(true);
})

test('testing weak password 1',()=>{
    expect(functions.isStrongPassword('123456789')).toBe(false);
})

test('testing weak password 2',()=>{
    expect(functions.isStrongPassword('abc')).toBe(false);
})

test('testing valid date 1',()=>{
    expect(functions.isDate('11/17/2022')).toBe(true);
})

test('testing valid date 2',()=>{
    expect(functions.isDate('1/2/2023')).toBe(true);
})

test('testing invalid date 1',()=>{
    expect(functions.isDate('11/17/22')).toBe(false);
})

test('testing invalid date 2',()=>{
    expect(functions.isDate('2022/22/12')).toBe(false);
})

test('testing valid hex color 1',()=>{
    expect(functions.isHexColor('#38c490')).toBe(true)
})

test('testing valid hex color 2',()=>{
    expect(functions.isHexColor('8bb231')).toBe(true)
})

test('testing invalid hex color 1',()=>{
    expect(functions.isHexColor('90bb231')).toBe(false)
})

test('testing invalid hex color 2',()=>{
    expect(functions.isHexColor('#Z60ea0')).toBe(false)
})