const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave', 123, 'dave@hotmail.com', 5);
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(123);
    expect(manager.email).toBe('dave@hotmail.com');
    expect(manager.officeNumber).toEqual(5);
});

test('gets manager office number', () => {
    const manager = new Manager('Dave', 123, 'dave@hotmail.com', 5);
  
    expect(manager.getOfficeNum()).toEqual(5);
});

test('gets manager role', () => {
    const manager = new Manager('Dave', 123, 'dave@hotmail.com', 5);
  
    expect(manager.getRole()).toBe('Manager');
});
