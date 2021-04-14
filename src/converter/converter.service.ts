import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



const RATES = [ 
	{
		"option":"AED",
		value: 4.395708,
	},
{
	"option":"AFN",
	value: 92.808444,
},
{
	"option":"ALL",
	value: 123.446074,
},
{
	"option":"AMD",
	value: 621.528347,
},
{
	"option":"ANG",
	value: 2.148242,
},
{
	"option":"AOA",
	value: 759.276618,
},
{
	"option":"ARS",
	value: 110.910923,
},
{
	"option":"AUD",
	value: 1.550627,
},
{
	"option":"AWG",
	value: 2.154179,
},
{
	"option":"AZN",
	value: 2.035515,
},
{
	"option":"BAM",
	value: 1.958262,
},
{
	"option":"BBD",
	value: 2.416541,
},
{
	"option":"BDT",
	value: 101.427637,
},
{
	"option":"BGN",
	value: 1.956839,
},
{
	"option":"BHD",
	value: 0.451193,
},
{
	"option":"BIF",
	value: 2352.842619,
},
{
	"option":"BMD",
	value: 1.196766,
},
{
	"option":"BND",
	value: 1.600694,
},
{
	"option":"BOB",
	value: 8.251866,
},
{
	"option":"BRL",
	value: 6.808048,
},
{
	"option":"BSD",
	value: 1.196856,
},
{
	"option":"BTC",
	value: 0.000018963889,
},
{
	"option":"BTN",
	value: 89.94775,
},
{
	"option":"BWP",
	value: 13.080217,
},
{
	"option":"BYN",
	value: 3.130989,
},
{
	"option":"BYR",
	value: 23456.620212,
},
{
	"option":"BZD",
	value: 2.412436,
},
{
	"option":"CAD",
	value: 1.500667,
},
{
	"option":"CDF",
	value: 2388.745803,
},
{
	"option":"CHF",
	value: 1.104592,
},
{
	"option":"CLF",
	value: 0.030725,
},
{
	"option":"CLP",
	value: 847.747978,
},
{
	"option":"CNY",
	value: 7.814933,
},
{
	"option":"COP",
	value: 4389.619249,
},
{
	"option":"CRC",
	value: 733.66279,
},
{
	"option":"CUC",
	value: 1.196766,
},
{
	"option":"CUP",
	value: 31.714308,
},
{
	"option":"CVE",
	value: 110.402115,
},
{
	"option":"CZK",
	value: 25.944757,
},
{
	"option":"DJF",
	value: 213.07463,
},
{
	"option":"DKK",
	value: 7.437293,
},
{
	"option":"DOP",
	value: 68.16803,
},
{
	"option":"DZD",
	value: 158.448321,
},
{
	"option":"EGP",
	value: 18.752013,
},
{
	"option":"ERN",
	value: 17.953782,
},
{
	"option":"ETB",
	value: 49.516168,
},
{
	"option":"EUR",
	value: 1,
},
{
	"option":"FJD",
	value: 2.472818,
},
{
	"option":"FKP",
	value: 0.869301,
},
{
	"option":"GBP",
	value: 0.868559,
},
{
	"option":"GEL",
	value: 4.129363,
},
{
	"option":"GGP",
	value: 0.869301,
},
{
	"option":"GHS",
	value: 6.917193,
},
{
	"option":"GIP",
	value: 0.869301,
},
{
	"option":"GMD",
	value: 61.035099,
},
{
	"option":"GNF",
	value: 11967.663738,
},
{
	"option":"GTQ",
	value: 9.23654,
},
{
	"option":"GYD",
	value: 250.386325,
},
{
	"option":"HKD",
	value: 9.296124,
},
{
	"option":"HNL",
	value: 28.872023,
},
{
	"option":"HRK",
	value: 7.572302,
},
{
	"option":"HTG",
	value: 97.780989,
},
{
	"option":"HUF",
	value: 358.856342,
},
{
	"option":"IDR",
	value: 17497.262397,
},
{
	"option":"ILS",
	value: 3.926172,
},
{
	"option":"IMP",
	value: 0.869301,
},
{
	"option":"INR",
	value: 89.824738,
},
{
	"option":"IQD",
	value: 1749.074002,
},
{
	"option":"IRR",
	value: 50389.846885,
},
{
	"option":"ISK",
	value: 151.701818,
},
{
	"option":"JEP",
	value: 0.869301,
},
{
	"option":"JMD",
	value: 179.231105,
},
{
	"option":"JOD",
	value: 0.848554,
},
{
	"option":"JPY",
	value: 130.460099,
},
{
	"option":"KES",
	value: 127.814222,
},
{
	"option":"KGS",
	value: 101.48619,
},
{
	"option":"KHR",
	value: 4846.90402,
},
{
	"option":"KMF",
	value: 492.590725,
},
{
	"option":"KPW",
	value: 1077.089934,
},
{
	"option":"KRW",
	value: 1335.952383,
},
{
	"option":"KWD",
	value: 0.360909,
},
{
	"option":"KYD",
	value: 0.997414,
},
{
	"option":"KZT",
	value: 515.670443,
},
{
	"option":"LAK",
	value: 11275.932348,
},
{
	"option":"LBP",
	value: 1828.658674,
},
{
	"option":"LKR",
	value: 241.152497,
},
{
	"option":"LRD",
	value: 206.561638,
},
{
	"option":"LSL",
	value: 17.532563,
},
{
	"option":"LTL",
	value: 3.533739,
},
{
	"option":"LVL",
	value: 0.723912,
},
{
	"option":"LYD",
	value: 5.40966,
},
{
	"option":"MAD",
	value: 10.709891,
},
{
	"option":"MDL",
	value: 21.507511,
},
{
	"option":"MGA",
	value: 4517.792531,
},
{
	"option":"MKD",
	value: 61.691619,
},
{
	"option":"MMK",
	value: 1687.468969,
},
{
	"option":"MNT",
	value: 3411.564813,
},
{
	"option":"MOP",
	value: 9.57393,
},
{
	"option":"MRO",
	value: 427.245377,
},
{
	"option":"MUR",
	value: 48.289546,
},
{
	"option":"MVR",
	value: 18.513464,
},
{
	"option":"MWK",
	value: 939.461493,
},
{
	"option":"MXN",
	value: 24.00298,
},
{
	"option":"MYR",
	value: 4.940851,
},
{
	"option":"MZN",
	value: 73.804893,
},
{
	"option":"NAD",
	value: 17.532582,
},
{
	"option":"NGN",
	value: 456.028265,
},
{
	"option":"NIO",
	value: 41.959014,
},
{
	"option":"NOK",
	value: 10.049283,
},
{
	"option":"NPR",
	value: 143.916321,
},
{
	"option":"NZD",
	value: 1.676568,
},
{
	"option":"OMR",
	value: 0.460754,
},
{
	"option":"PAB",
	value: 1.196856,
},
{
	"option":"PEN",
	value: 4.324511,
},
{
	"option":"PGK",
	value: 4.230579,
},
{
	"option":"PHP",
	value: 58.083783,
},
{
	"option":"PKR",
	value: 182.925455,
},
{
	"option":"PLN",
	value: 4.557597,
},
{
	"option":"PYG",
	value: 7538.021024,
},
{
	"option":"QAR",
	value: 4.35749,
},
{
	"option":"RON",
	value: 4.927086,
},
{
	"option":"RSD",
	value: 117.726211,
},
{
	"option":"RUB",
	value: 90.468717,
},
{
	"option":"RWF",
	value: 1172.831011,
},
{
	"option":"SAR",
	value: 4.488199,
},
{
	"option":"SBD",
	value: 9.562999,
},
{
	"option":"SCR",
	value: 18.128034,
},
{
	"option":"SDG",
	value: 456.561297,
},
{
	"option":"SEK",
	value: 10.126833,
},
{
	"option":"SGD",
	value: 1.598461,
},
{
	"option":"SHP",
	value: 0.869301,
},
{
	"option":"SLL",
	value: 12236.935953,
},
{
	"option":"SOS",
	value: 698.911018,
},
{
	"option":"SRD",
	value: 16.939064,
},
{
	"option":"STD",
	value: 24807.934598,
},
{
	"option":"SVC",
	value: 10.472744,
},
{
	"option":"SYP",
	value: 1505.014342,
},
{
	"option":"SZL",
	value: 17.532303,
},
{
	"option":"THB",
	value: 37.50725,
},
{
	"option":"TJS",
	value: 13.646548,
},
{
	"option":"TMT",
	value: 4.188682,
},
{
	"option":"TND",
	value: 3.283332,
},
{
	"option":"TOP",
	value: 2.732102,
},
{
	"option":"TRY",
	value: 9.697206,
},
{
	"option":"TTD",
	value: 8.136301,
},
{
	"option":"TWD",
	value: 34.042619,
},
{
	"option":"TZS",
	value: 2775.375338,
},
{
	"option":"UAH",
	value: 33.45505,
},
{
	"option":"UGX",
	value: 4309.85267,
},
{
	"option":"USD",
	value: 1.196766,
},
{
	"option":"UYU",
	value: 52.90361,
},
{
	"option":"UZS",
	value: 12568.439837,
},
{
	"option":"VEF",
	value: 255904812003.65353,
},
{
	"option":"VND",
	value: 27620.688263,
},
{
	"option":"VUV",
	value: 131.092424,
},
{
	"option":"WST",
	value: 3.029886,
},
{
	"option":"XAF",
	value: 656.734225,
},
{
	"option":"XAG",
	value: 0.047106,
},
{
	"option":"XAU",
	value: 0.000689,
},
{
	"option":"XCD",
	value: 3.234321,
},
{
	"option":"XDR",
	value: 0.840094,
},
{
	"option":"XOF",
	value: 660.012872,
},
{
	"option":"XPF",
	value: 119.855852,
},
{
	"option":"YER",
	value: 299.61054,
},
{
	"option":"ZAR",
	value: 17.244362,
},
{
	"option":"ZMK",
	value: 10772.335945,
},
{
	"option":"ZMW",
	value: 26.551833,
},
{
	"option":"ZWL",
	value: 385.358994
}
]


@Injectable()
export class ConverterService {
  rates;
  baseCurrency: string = 'EUR';
  access_key = '74b43a83dec3079f79e5b77316aa346f'
  ratesApiUrl = 'http://api.exchangeratesapi.io/v1/latest';

  constructor(private http: HttpClient) { }

  fetchRates() {
    return this.http.get(`${this.ratesApiUrl}?access_key=${this.access_key}`);
  }

  hydrateRates() {
    this.fetchRates().subscribe((response: any) => {
      if (response) {
        const parsedResponse = this.parseRates(response.rates);
        this.rates = parsedResponse ? parsedResponse : RATES;
      }
    })
  }

  parseRates(response) {
    try {
      return Object.entries(response).map((e) => ( { option: e[0], value: e[1]}));
    } catch (e) {
      console.log('Error parsing rate response. Falling back to local rates');
    }
    return null;
  }

  hydrateLocalRates() {
    this.rates = RATES;
  }

  convertCurrency(value, oldCurrency, newCurrency) {
      const findBaseCurrency = RATES.findIndex(f => f.option === oldCurrency);
			const baseValue = value / RATES[findBaseCurrency].value;
      const findNewCurrency = RATES.findIndex(f => f.option === newCurrency);


      let newValue;

			if (baseValue) {
				if (newCurrency !== this.baseCurrency) {
					newValue = baseValue * RATES[findNewCurrency].value;
				} else {
					newValue = baseValue;
				}
			}

      return newValue;
		}
  }