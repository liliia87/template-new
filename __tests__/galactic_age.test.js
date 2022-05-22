import Person from './../src/galactic_age.js';

describe('Persone', () => {

  test('should correctly create a person object', () => {
    const person = new Person("Keren",24,75);
    expect(person.name).toEqual("Keren");
    expect(person.age).toEqual(24);
    expect(person.averageLofeEx).toEqual(75);
  });

  test('should correctly calculate year on Mercury', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateMercury()).toEqual(100);
    
  });

  test('should correctly calculate year on Venus', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateVenus()).toBeCloseTo(38.709);
  });

  test('should correctly calculate year on Mars', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateMars()).toBe(13);
  });

  test('should correctly calculate year on Mars', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateJupiter()).toBe(2);
  });

  test('should correctly return points for professional sport', () => {
    const person = new Person("Keren",24,75);
    expect(person.lifestyleList("professional sport")).toBe(5);
  });

  test('should correctly return points for sport', () => {
    const person = new Person("Keren",24,75);
    expect(person.lifestyleList("sport")).toBe(10);
  });

  test('should correctly return points for no sport', () => {
    const person = new Person("Keren",24,75);
    expect(person.lifestyleList("no sport")).toBe(15);
  });

  test('should correctly return points for not correct lifestyleList', () => {
    const person = new Person("Keren",24,75);
    expect(person.lifestyleList(" ")).toEqual(0);
  });
//---------------------------------------------------------------------------------------//
  test('should correctly return points for "every day"', () => {
    const person = new Person("Keren",24,75);
    expect(person.lifestyleList("every day")).toBe(15);
  });

  test('should correctly return points for "one per week"', () => {
    const person = new Person("Keren",24,75);
    expect(person.lifestyleList("no sport")).toBe(15);
  });

});
