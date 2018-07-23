/* eslint-env jest */

const postcode = require('../index');

describe('postcodejs:jest', () => {
    test('Func:postcode:String', () => {
        const res = postcode.postcode('MY', '96507');
        expect(res).toMatchSnapshot();
    });

    test('Func:postcode:Number', () => {
        const res = postcode.postcode('MY', 96507);
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes', () => {
        const res = postcode.statePostcodes('MY', 'Sarawak');
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes withInfo', () => {
        const res = postcode.statePostcodes('MY', 'Selangor', true, false);
        expect(res).toMatchSnapshot();
    });

    test('Func:districtPostcodes', () => {
        const res = postcode.districtPostcodes('MY', 'Padang Terap');
        expect(res).toMatchSnapshot();
    });

    test('Func:cityPostcodes', () => {
        const res = postcode.cityPostcodes('MY', 'Kangar');
        expect(res).toMatchSnapshot();
    });

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

    test('get postcode array', () => {
        const result = postcode.postcode('MY', [12000, 13009]);
        expect(result.length).toBe(2);
        expect(result[1].postcode).toBe('13009');
        expect(result[1].city).toBe('Butterworth');
        expect(result[1].state).toBe('Penang');
    });

    test('get postcode empty array', () => {
        const result = postcode.postcode('MY', []);
        expect(result.length).toBe(0);
        expect(Array.isArray(result)).toBe(true);
    });
});
