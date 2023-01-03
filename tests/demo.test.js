describe("DemoComponent tests", () => {

  test('This test must not fail', () => {

    // 1. Inicialization
    const message1 = 'Hello world';
  
    // 2. Stimulus
    const message2 = message1.trim();
  
    // 3. Observe behavior...expected
    expect( message1 ).toBe( message2 );
  })
});