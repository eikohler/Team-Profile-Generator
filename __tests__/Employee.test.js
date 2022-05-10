const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Dave', 123, 'dave@hotmail.com');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(123);
    expect(employee.email).toBe('dave@hotmail.com');
});

test('gets employee name', () => {
    const employee = new Employee('Dave', 123, 'dave@hotmail.com');
  
    expect(employee.getName()).toBe('Dave');
});

test('gets employee id', () => {
    const employee = new Employee('Dave', 123, 'dave@hotmail.com');
  
    expect(employee.getID()).toEqual(123);
});

test('gets employee email', () => {
    const employee = new Employee('Dave', 123, 'dave@hotmail.com');
  
    expect(employee.getEmail()).toBe('dave@hotmail.com');
});

test('gets employee role', () => {
    const employee = new Employee('Dave', 123, 'dave@hotmail.com');
  
    expect(employee.getRole()).toBe('Employee');
});