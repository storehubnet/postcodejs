const postcode = require('./postcode');

describe('postcode', () => {
    test('search full postcode to match only one', () => {
        const result = postcode.search('MY', "16320");
        expect(result.length).toBe(1);
        expect(result[0].city).toBe('Bachok');
        expect(result[0].state).toBe('Kelantan');
        expect(result[0].postcode).toBe('16320');
    });

    test('search postcode to match multiple', () => {
        const result = postcode.search('MY', "1000");

        expect(result.length).toBe(2);

        expect(result[0].city).toBe('Kangar');
        expect(result[0].state).toBe('Perlis');
        expect(result[0].postcode).toBe('1000');

        expect(result[1].city).toBe('Pulau Pinang');
        expect(result[1].state).toBe('Penang');
        expect(result[1].postcode).toBe('10000');
    });

    test('search postcode to match multiple', () => {
        const result = postcode.search('MY', "12");
        expect(result.length).toBe(8);
    });
});
