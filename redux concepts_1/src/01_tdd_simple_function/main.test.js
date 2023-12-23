import * as math from './main';

describe('test math operations', () => {
    let x,y;
    beforeAll(() => {
        console.log("###> Before all test cases begins execution, initialization can be done");
        x = 10;
        y = 2;
    })
    beforeEach(() => {
        console.log("===> Before each test case, it comes here");
    })
    afterEach(() => {
        console.log("<=== After each test case, it comes here");
    })
    afterAll(() => {
        console.log("<### After all test cases have been executed, cleanup can be done");
    })

    it('add 2 numbers', () => {
        console.log('*** adding 2 numbers...');
        expect(math.add(x, y)).toBe(12);
    })
    it('should subtract 2 numbers', () => {
        console.log('*** subtracting 2 numbers...');
        expect(math.subtract(x, y)).toBe(8);
    })
    it('should multiply 2 numbers', () => {
        console.log('*** multiplying 2 numbers...');
        expect(math.multiply(x, y)).toBe(20);
    })
    it('should divide 2 numbers', () => {
        console.log('*** dividing 2 numbers...');
        expect(math.divide(x, y)).toBe(5);
    })
    it.todo('should square a number');
})