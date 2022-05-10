const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Dave', 123, 'dave@hotmail.com', 'davehub');
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(123);
    expect(engineer.email).toBe('dave@hotmail.com');
    expect(engineer.github).toBe('davehub');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Dave', 123, 'dave@hotmail.com', 'davehub');
  
    expect(engineer.getGithub()).toBe('davehub');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Dave', 123, 'dave@hotmail.com', 'davehub');
  
    expect(engineer.getRole()).toBe('Engineer');
});
