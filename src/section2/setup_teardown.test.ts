describe('outer describe block', () => {
  beforeAll(() => console.log('outer beforeAll'))

  afterAll(() => console.log('outer afterAll'))

  beforeEach(() => console.log('outer beforeEach'))

  afterEach(() => console.log('outer afterEach'))

  it('outer test 1', () => console.log('outer test 1'))

  it('outer test 2', () => console.log('outer test 2'))

  describe('inner describe block', () => {
    beforeAll(() => console.log('inner beforeAll'))

    afterAll(() => console.log('inner afterAll'))

    beforeEach(() => console.log('inner beforeEach'))

    afterEach(() => console.log('inner afterEach'))

    it('inner test 1', () => console.log('inner test 1'))

    it('inner test 2', () => console.log('inner test 2'))
  })
})
