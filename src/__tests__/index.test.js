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

    test('Func:districtPostcodes', () => {
        const res = postcode.districtPostcodes('MY', 'Padang Terap');
        expect(res).toMatchSnapshot();
    });

    test('Func:cityPostcodes', () => {
        const res = postcode.cityPostcodes('MY', 'Kangar');
        expect(res).toMatchSnapshot();
    });
});