// Type definitions for postcodejs 1.0.0
// Project: https://github.com/storehubnet/postcodejs
// Definitions by: Fan Long <https://github.com/cctv1237>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace postcodejs {

    interface Postcode {
        state: string,
        district: string,
        city?: string,
        area?: string
    } 

    export function postcode(countryCode: string, postcode: string | number): Postcode;
    export function search(countryCode: string, postcode: string | number): Postcode[];
    export function states(countryCode: string): string[];
    export function statePostcodes(countryCode: string, state: string | string[], hasInfo?: boolean, infoIncludesArea?: boolean): string[] | Postcode[];
    export function cityPostcodes(countryCode: string, city: string | string[], hasInfo?: boolean, infoIncludesArea?: boolean): string[] | Postcode[];
    export function districtPostcodes(countryCode: string, district: string | string[], hasInfo?: boolean, infoIncludesArea?: boolean): string[] | Postcode[];
}

export = postcodejs;