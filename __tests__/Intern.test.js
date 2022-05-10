const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Dave', 123, 'dave@hotmail.com', 'Harvard');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(123);
    expect(intern.email).toBe('dave@hotmail.com');
    expect(intern.school).toBe('Harvard');
});

test('gets intern school', () => {
    const intern = new Intern('Dave', 123, 'dave@hotmail.com', 'Harvard');

    expect(intern.getSchool()).toBe('Harvard');
});

test('gets intern role', () => {
    const intern = new Intern('Dave', 123, 'dave@hotmail.com', 'Harvard');
  
    expect(intern.getRole()).toBe('Intern');
});
