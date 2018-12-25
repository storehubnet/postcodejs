/* eslint-env jest */

const postcode = require('../index');

describe('postcodejs:MY:jest', () => {
    test('Func:postcode:String', () => {
        const res = postcode.postcode('MY', '96507');
        expect(res).toMatchSnapshot();
    });

    test('Func:postcode:Number', () => {
        const res = postcode.postcode('MY', 96507);
        expect(res).toMatchSnapshot();
    });

    test('Func:states', () => {
        const res = postcode.states('MY');
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes', () => {
        const res = postcode.statePostcodes('MY', 'Sarawak');
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes - state array', () => {
        const res = postcode.statePostcodes('MY', ['Sarawak', 'Kelantan']);
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes withInfo - state array', () => {
        const res = postcode.statePostcodes('MY', ['Sarawak', 'Kelantan'], true, false);
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
});

describe('postcodejs:TH:jest', () => {
    test('Func:postcode:String', () => {
        const res = postcode.postcode('TH', '15120');
        expect(res).toMatchSnapshot();
    });

    test('Func:postcode:Number', () => {
        const res = postcode.postcode('TH', 15120);
        expect(res).toMatchSnapshot();
    });

    test('Func:states', () => {
        const res = postcode.states('TH');
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes', () => {
        const res = postcode.statePostcodes('TH', 'Bangkok');
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes - state array', () => {
        const res = postcode.statePostcodes('TH', ['Bangkok', 'Saraburi']);
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes withInfo - state array', () => {
        const res = postcode.statePostcodes('TH', ['Bangkok', 'Saraburi'], true, false);
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes withInfo', () => {
        const res = postcode.statePostcodes('TH', 'Chachoengsao', true, false);
        expect(res).toMatchSnapshot();
    });

    test('Func:districtPostcodes', () => {
        const res = postcode.districtPostcodes('TH', 'Wattana');
        expect(res).toMatchSnapshot();
    });

    test('search full postcode to match only one', () => {
        const result = postcode.search('TH', "31210");
        expect(result.length).toBe(1);
        expect(result[0].state).toBe('Burirum');
        expect(result[0].postcode).toBe('31210');
    });
});

describe('postcodejs:PH:jest', () => {
    test('Func:postcode:String', () => {
        const res = postcode.postcode('PH', '1771');
        expect(res).toMatchSnapshot();
    });

    test('Func:postcode:Number', () => {
        const res = postcode.postcode('PH', 1771);
        expect(res).toMatchSnapshot();
    });

    test('Func:states', () => {
        const res = postcode.states('PH');
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes', () => {
        const res = postcode.statePostcodes('PH', 'Bulacan');
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes - state array', () => {
        const res = postcode.statePostcodes('PH', ['Bulacan', 'Surigao del Sur']);
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes withInfo - state array', () => {
        const res = postcode.statePostcodes('PH', ['Bulacan', 'Surigao del Sur'], true, false);
        expect(res).toMatchSnapshot();
    });

    test('Func:statePostcodes withInfo', () => {
        const res = postcode.statePostcodes('PH', 'Bukidnon', true, false);
        expect(res).toMatchSnapshot();
    });

    test('Func:cityPostcodes', () => {
        const res = postcode.cityPostcodes('PH', 'Sumilao');
        expect(res).toMatchSnapshot();
    });

    test('search full postcode to match only one', () => {
        const result = postcode.search('PH', "2013");
        expect(result.length).toBe(1);
        expect(result[0].state).toBe('Pampanga');
        expect(result[0].postcode).toBe('2013');
    });
});