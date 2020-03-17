const countries = [
  {
    'countryTitle': 'Afghanistan',
    'statisticsCode': 'AF',
    'timelineCode': 'AF'
  },
  {
    'countryTitle': 'Albania',
    'statisticsCode': 'AL',
    'timelineCode': 'AL'
  },
  {
    'countryTitle': 'Algeria',
    'statisticsCode': 'DZ',
    'timelineCode': 'DZ'
  },
  {
    'countryTitle': 'Angola',
    'statisticsCode': 'AO',
    'timelineCode': 'AO'
  },
  {
    'countryTitle': 'Argentina',
    'statisticsCode': 'AR',
    'timelineCode': 'AR'
  },
  {
    'countryTitle': 'Armenia',
    'statisticsCode': 'AM',
    'timelineCode': 'AM'
  },
  {
    'countryTitle': 'Australia',
    'statisticsCode': 'AU',
    'timelineCode': 'AU'
  },
  {
    'countryTitle': 'Austria',
    'statisticsCode': 'AT',
    'timelineCode': 'AT'
  },
  {
    'countryTitle': 'Azerbaijan',
    'statisticsCode': 'AZ',
    'timelineCode': 'AZ'
  },
  {
    'countryTitle': 'Bahamas',
    'statisticsCode': 'BS',
    'timelineCode': 'BS'
  },
  {
    'countryTitle': 'Bangladesh',
    'statisticsCode': 'BD',
    'timelineCode': 'BD'
  },
  {
    'countryTitle': 'Belarus',
    'statisticsCode': 'BY',
    'timelineCode': 'BY'
  },
  {
    'countryTitle': 'Belgium',
    'statisticsCode': 'BE',
    'timelineCode': 'BE'
  },
  {
    'countryTitle': 'Belize',
    'statisticsCode': 'BZ',
    'timelineCode': 'BZ'
  },
  {
    'countryTitle': 'Benin',
    'statisticsCode': 'BJ',
    'timelineCode': 'BJ'
  },
  {
    'countryTitle': 'Bhutan',
    'statisticsCode': 'BT',
    'timelineCode': 'BT'
  },
  {
    'countryTitle': 'Bolivia',
    'statisticsCode': 'BO',
    'timelineCode': 'BO'
  },
  {
    'countryTitle': 'Bosnia and Herzegovina',
    'statisticsCode': 'BA',
    'timelineCode': 'BA'
  },
  {
    'countryTitle': 'Botswana',
    'statisticsCode': 'BW',
    'timelineCode': 'BW'
  },
  {
    'countryTitle': 'Brazil',
    'statisticsCode': 'BR',
    'timelineCode': 'BR'
  },
  {
    'countryTitle': 'Brunei Darussalam',
    'statisticsCode': 'BN',
    'timelineCode': 'BN'
  },
  {
    'countryTitle': 'Bulgaria',
    'statisticsCode': 'BG',
    'timelineCode': 'BG'
  },
  {
    'countryTitle': 'Burkina Faso',
    'statisticsCode': 'BF',
    'timelineCode': 'BF'
  },
  {
    'countryTitle': 'Burundi',
    'statisticsCode': 'BI',
    'timelineCode': 'BI'
  },
  {
    'countryTitle': 'Cambodia',
    'statisticsCode': 'KH',
    'timelineCode': 'KH'
  },
  {
    'countryTitle': 'Cameroon',
    'statisticsCode': 'CM',
    'timelineCode': 'CM'
  },
  {
    'countryTitle': 'Canada',
    'statisticsCode': 'CA',
    'timelineCode': 'CA'
  },
  {
    'countryTitle': 'Central African Republic',
    'statisticsCode': 'CF',
    'timelineCode': 'CF'
  },
  {
    'countryTitle': 'Chad',
    'statisticsCode': 'TD',
    'timelineCode': 'TD'
  },
  {
    'countryTitle': 'Chile',
    'statisticsCode': 'CL',
    'timelineCode': 'CL'
  },
  {
    'countryTitle': 'China',
    'statisticsCode': 'CN',
    'timelineCode': 'CN'
  },
  {
    'countryTitle': 'Colombia',
    'statisticsCode': 'CO',
    'timelineCode': 'CO'
  },
  {
    'countryTitle': 'Congo',
    'statisticsCode': 'CG',
    'timelineCode': 'CG'
  },
  {
    'countryTitle': 'Costa Rica',
    'statisticsCode': 'CR',
    'timelineCode': 'CR'
  },
  {
    'countryTitle': 'Croatia',
    'statisticsCode': 'HR',
    'timelineCode': 'HR'
  },
  {
    'countryTitle': 'Cuba',
    'statisticsCode': 'CU',
    'timelineCode': 'CU'
  },
  {
    'countryTitle': 'Cyprus',
    'statisticsCode': 'CY',
    'timelineCode': 'CY'
  },
  {
    'countryTitle': 'Czechia',
    'statisticsCode': 'CZ',
    'timelineCode': 'CZ'
  },
  {
    'countryTitle': 'Democratic Republic of Congo',
    'statisticsCode': 'CD',
    'timelineCode': 'CD'
  },
  {
    'countryTitle': 'Denmark',
    'statisticsCode': 'DK',
    'timelineCode': 'DK'
  },
  {
    'countryTitle': 'Diamond Princess',
    'statisticsCode': 'DP',
    'timelineCode': 'DP'
  },
  {
    'countryTitle': 'Djibouti',
    'statisticsCode': 'DJ',
    'timelineCode': 'DJ'
  },
  {
    'countryTitle': 'Dominican Republic',
    'statisticsCode': 'DO',
    'timelineCode': 'DO'
  },
  {
    'countryTitle': 'DR Congo',
    'statisticsCode': 'CD',
    'timelineCode': 'CD'
  },
  {
    'countryTitle': 'Ecuador',
    'statisticsCode': 'EC',
    'timelineCode': 'EC'
  },
  {
    'countryTitle': 'Egypt',
    'statisticsCode': 'EG',
    'timelineCode': 'EG'
  },
  {
    'countryTitle': 'El Salvador',
    'statisticsCode': 'SV',
    'timelineCode': 'SV'
  },
  {
    'countryTitle': 'Equatorial Guinea',
    'statisticsCode': 'GQ',
    'timelineCode': 'GQ'
  },
  {
    'countryTitle': 'Eritrea',
    'statisticsCode': 'ER',
    'timelineCode': 'ER'
  },
  {
    'countryTitle': 'Estonia',
    'statisticsCode': 'EE',
    'timelineCode': 'EE'
  },
  {
    'countryTitle': 'Ethiopia',
    'statisticsCode': 'ET',
    'timelineCode': 'ET'
  },
  {
    'countryTitle': 'Falkland Islands',
    'statisticsCode': 'FK',
    'timelineCode': 'FK'
  },
  {
    'countryTitle': 'Fiji',
    'statisticsCode': 'FJ',
    'timelineCode': 'FJ'
  },
  {
    'countryTitle': 'Finland',
    'statisticsCode': 'FI',
    'timelineCode': 'FI'
  },
  {
    'countryTitle': 'France',
    'statisticsCode': 'FR',
    'timelineCode': 'FR'
  },
  {
    'countryTitle': 'French Guiana',
    'statisticsCode': 'GF',
    'timelineCode': 'GF'
  },
  {
    'countryTitle': 'French Southern Territories',
    'statisticsCode': 'TF',
    'timelineCode': 'TF'
  },
  {
    'countryTitle': 'Gabon',
    'statisticsCode': 'GA',
    'timelineCode': 'GA'
  },
  {
    'countryTitle': 'Gambia',
    'statisticsCode': 'GM',
    'timelineCode': 'GM'
  },
  {
    'countryTitle': 'Georgia',
    'statisticsCode': 'GE',
    'timelineCode': 'GE'
  },
  {
    'countryTitle': 'Germany',
    'statisticsCode': 'DE',
    'timelineCode': 'DE'
  },
  {
    'countryTitle': 'Ghana',
    'statisticsCode': 'GH',
    'timelineCode': 'GH'
  },
  {
    'countryTitle': 'Greece',
    'statisticsCode': 'GR',
    'timelineCode': 'GR'
  },
  {
    'countryTitle': 'Greenland',
    'statisticsCode': 'GL',
    'timelineCode': 'GL'
  },
  {
    'countryTitle': 'Guatemala',
    'statisticsCode': 'GT',
    'timelineCode': 'GT'
  },
  {
    'countryTitle': 'Guinea',
    'statisticsCode': 'GN',
    'timelineCode': 'GN'
  },
  {
    'countryTitle': 'Guinea-Bissau',
    'statisticsCode': 'GW',
    'timelineCode': 'GW'
  },
  {
    'countryTitle': 'Guyana',
    'statisticsCode': 'GY',
    'timelineCode': 'GY'
  },
  {
    'countryTitle': 'Haiti',
    'statisticsCode': 'HT',
    'timelineCode': 'HT'
  },
  {
    'countryTitle': 'Honduras',
    'statisticsCode': 'HN',
    'timelineCode': 'HN'
  },
  {
    'countryTitle': 'Hong Kong',
    'statisticsCode': 'HK',
    'timelineCode': 'HK'
  },
  {
    'countryTitle': 'Hungary',
    'statisticsCode': 'HU',
    'timelineCode': 'HU'
  },
  {
    'countryTitle': 'Iceland',
    'statisticsCode': 'IS',
    'timelineCode': 'IS'
  },
  {
    'countryTitle': 'India',
    'statisticsCode': 'IN',
    'timelineCode': 'IN'
  },
  {
    'countryTitle': 'Indonesia',
    'statisticsCode': 'ID',
    'timelineCode': 'ID'
  },
  {
    'countryTitle': 'Iran',
    'statisticsCode': 'IR',
    'timelineCode': 'IR'
  },
  {
    'countryTitle': 'Iraq',
    'statisticsCode': 'IQ',
    'timelineCode': 'IQ'
  },
  {
    'countryTitle': 'Ireland',
    'statisticsCode': 'IE',
    'timelineCode': 'IE'
  },
  {
    'countryTitle': 'Israel',
    'statisticsCode': 'IL',
    'timelineCode': 'IL'
  },
  {
    'countryTitle': 'Italy',
    'statisticsCode': 'IT',
    'timelineCode': 'IT'
  },
  {
    'countryTitle': 'Ivory Coast',
    'statisticsCode': 'CI',
    'timelineCode': 'CI'
  },
  {
    'countryTitle': 'Jamaica',
    'statisticsCode': 'JM',
    'timelineCode': 'JM'
  },
  {
    'countryTitle': 'Japan',
    'statisticsCode': 'JP',
    'timelineCode': 'JP'
  },
  {
    'countryTitle': 'Jordan',
    'statisticsCode': 'JO',
    'timelineCode': 'JO'
  },
  {
    'countryTitle': 'Kazakhstan',
    'statisticsCode': 'KZ',
    'timelineCode': 'KZ'
  },
  {
    'countryTitle': 'Kenya',
    'statisticsCode': 'KE',
    'timelineCode': 'KE'
  },
  {
    'countryTitle': 'Korea',
    'statisticsCode': 'KP',
    'timelineCode': 'KP'
  },
  {
    'countryTitle': 'Kosovo',
    'statisticsCode': 'XK',
    'timelineCode': 'XK'
  },
  {
    'countryTitle': 'Kuwait',
    'statisticsCode': 'KW',
    'timelineCode': 'KW'
  },
  {
    'countryTitle': 'Kyrgyzstan',
    'statisticsCode': 'KG',
    'timelineCode': 'KG'
  },
  {
    'countryTitle': 'Lao',
    'statisticsCode': 'LA',
    'timelineCode': 'LA'
  },
  {
    'countryTitle': 'Latvia',
    'statisticsCode': 'LV',
    'timelineCode': 'LV'
  },
  {
    'countryTitle': 'Lebanon',
    'statisticsCode': 'LB',
    'timelineCode': 'LB'
  },
  {
    'countryTitle': 'Lesotho',
    'statisticsCode': 'LS',
    'timelineCode': 'LS'
  },
  {
    'countryTitle': 'Liberia',
    'statisticsCode': 'LR',
    'timelineCode': 'LR'
  },
  {
    'countryTitle': 'Libya',
    'statisticsCode': 'LY',
    'timelineCode': 'LY'
  },
  {
    'countryTitle': 'Lithuania',
    'statisticsCode': 'LT',
    'timelineCode': 'LT'
  },
  {
    'countryTitle': 'Luxembourg',
    'statisticsCode': 'LU',
    'timelineCode': 'LU'
  },
  {
    'countryTitle': 'Macedonia',
    'statisticsCode': 'MK',
    'timelineCode': 'MK'
  },
  {
    'countryTitle': 'Madagascar',
    'statisticsCode': 'MG',
    'timelineCode': 'MG'
  },
  {
    'countryTitle': 'Malawi',
    'statisticsCode': 'MW',
    'timelineCode': 'MW'
  },
  {
    'countryTitle': 'Malaysia',
    'statisticsCode': 'MY',
    'timelineCode': 'MY'
  },
  {
    'countryTitle': 'Mali',
    'statisticsCode': 'ML',
    'timelineCode': 'ML'
  },
  {
    'countryTitle': 'Mauritania',
    'statisticsCode': 'MR',
    'timelineCode': 'MR'
  },
  {
    'countryTitle': 'Mexico',
    'statisticsCode': 'MX',
    'timelineCode': 'MX'
  },
  {
    'countryTitle': 'Moldova',
    'statisticsCode': 'MD',
    'timelineCode': 'MD'
  },
  {
    'countryTitle': 'Mongolia',
    'statisticsCode': 'MN',
    'timelineCode': 'MN'
  },
  {
    'countryTitle': 'Montenegro',
    'statisticsCode': 'ME',
    'timelineCode': 'ME'
  },
  {
    'countryTitle': 'Morocco',
    'statisticsCode': 'MA',
    'timelineCode': 'MA'
  },
  {
    'countryTitle': 'Mozambique',
    'statisticsCode': 'MZ',
    'timelineCode': 'MZ'
  },
  {
    'countryTitle': 'Myanmar',
    'statisticsCode': 'MM',
    'timelineCode': 'MM'
  },
  {
    'countryTitle': 'Namibia',
    'statisticsCode': 'NA',
    'timelineCode': 'NA'
  },
  {
    'countryTitle': 'Nepal',
    'statisticsCode': 'NP',
    'timelineCode': 'NP'
  },
  {
    'countryTitle': 'Netherlands',
    'statisticsCode': 'NL',
    'timelineCode': 'NL'
  },
  {
    'countryTitle': 'New Caledonia',
    'statisticsCode': 'NC',
    'timelineCode': 'NC'
  },
  {
    'countryTitle': 'New Zealand',
    'statisticsCode': 'NZ',
    'timelineCode': 'NZ'
  },
  {
    'countryTitle': 'Nicaragua',
    'statisticsCode': 'NI',
    'timelineCode': 'NI'
  },
  {
    'countryTitle': 'Niger',
    'statisticsCode': 'NE',
    'timelineCode': 'NE'
  },
  {
    'countryTitle': 'Nigeria',
    'statisticsCode': 'NG',
    'timelineCode': 'NG'
  },
  {
    'countryTitle': 'North Korea',
    'statisticsCode': 'KP',
    'timelineCode': 'KP'
  },
  {
    'countryTitle': 'Norway',
    'statisticsCode': 'NO',
    'timelineCode': 'NO'
  },
  {
    'countryTitle': 'Oman',
    'statisticsCode': 'OM',
    'timelineCode': 'OM'
  },
  {
    'countryTitle': 'Pakistan',
    'statisticsCode': 'PK',
    'timelineCode': 'PK'
  },
  {
    'countryTitle': 'Palestine',
    'statisticsCode': 'PS',
    'timelineCode': 'PS'
  },
  {
    'countryTitle': 'Panama',
    'statisticsCode': 'PA',
    'timelineCode': 'PA'
  },
  {
    'countryTitle': 'Papua New Guinea',
    'statisticsCode': 'PG',
    'timelineCode': 'PG'
  },
  {
    'countryTitle': 'Paraguay',
    'statisticsCode': 'PY',
    'timelineCode': 'PY'
  },
  {
    'countryTitle': 'Peru',
    'statisticsCode': 'PE',
    'timelineCode': 'PE'
  },
  {
    'countryTitle': 'Philippines',
    'statisticsCode': 'PH',
    'timelineCode': 'PH'
  },
  {
    'countryTitle': 'Poland',
    'statisticsCode': 'PL',
    'timelineCode': 'PL'
  },
  {
    'countryTitle': 'Portugal',
    'statisticsCode': 'PT',
    'timelineCode': 'PT'
  },
  {
    'countryTitle': 'Puerto Rico',
    'statisticsCode': 'PR',
    'timelineCode': 'PR'
  },
  {
    'countryTitle': 'Qatar',
    'statisticsCode': 'QA',
    'timelineCode': 'QA'
  },
  {
    'countryTitle': 'Republic of Kosovo',
    'statisticsCode': 'XK',
    'timelineCode': 'XK'
  },
  {
    'countryTitle': 'Romania',
    'statisticsCode': 'RO',
    'timelineCode': 'RO'
  },
  {
    'countryTitle': 'Russia',
    'statisticsCode': 'RU',
    'timelineCode': 'RU'
  },
  {
    'countryTitle': 'Rwanda',
    'statisticsCode': 'RW',
    'timelineCode': 'RW'
  },
  {
    'countryTitle': 'Saudi Arabia',
    'statisticsCode': 'SA',
    'timelineCode': 'SA'
  },
  {
    'countryTitle': 'Senegal',
    'statisticsCode': 'SN',
    'timelineCode': 'SN'
  },
  {
    'countryTitle': 'Serbia',
    'statisticsCode': 'RS',
    'timelineCode': 'RS'
  },
  {
    'countryTitle': 'Sierra Leone',
    'statisticsCode': 'SL',
    'timelineCode': 'SL'
  },
  {
    'countryTitle': 'Singapore',
    'statisticsCode': 'SG',
    'timelineCode': 'SG'
  },
  {
    'countryTitle': 'Slovakia',
    'statisticsCode': 'SK',
    'timelineCode': 'SK'
  },
  {
    'countryTitle': 'Slovenia',
    'statisticsCode': 'SI',
    'timelineCode': 'SI'
  },
  {
    'countryTitle': 'Solomon Islands',
    'statisticsCode': 'SB',
    'timelineCode': 'SB'
  },
  {
    'countryTitle': 'Somalia',
    'statisticsCode': 'SO',
    'timelineCode': 'SO'
  },
  {
    'countryTitle': 'South Africa',
    'statisticsCode': 'ZA',
    'timelineCode': 'ZA'
  },
  {
    'countryTitle': 'South Korea',
    'statisticsCode': 'KR',
    'timelineCode': 'KR'
  },
  {
    'countryTitle': 'South Sudan',
    'statisticsCode': 'SS',
    'timelineCode': 'SS'
  },
  {
    'countryTitle': 'Spain',
    'statisticsCode': 'ES',
    'timelineCode': 'ES'
  },
  {
    'countryTitle': 'Sri Lanka',
    'statisticsCode': 'LK',
    'timelineCode': 'LK'
  },
  {
    'countryTitle': 'Sudan',
    'statisticsCode': 'SD',
    'timelineCode': 'SD'
  },
  {
    'countryTitle': 'Suriname',
    'statisticsCode': 'SR',
    'timelineCode': 'SR'
  },
  {
    'countryTitle': 'Svalbard and Jan Mayen',
    'statisticsCode': 'SJ',
    'timelineCode': 'SJ'
  },
  {
    'countryTitle': 'Swaziland',
    'statisticsCode': 'SZ',
    'timelineCode': 'SZ'
  },
  {
    'countryTitle': 'Sweden',
    'statisticsCode': 'SE',
    'timelineCode': 'SE'
  },
  {
    'countryTitle': 'Switzerland',
    'statisticsCode': 'CH',
    'timelineCode': 'CH'
  },
  {
    'countryTitle': 'Syrian Arab Republic',
    'statisticsCode': 'SY',
    'timelineCode': 'SY'
  },
  {
    'countryTitle': 'Taiwan',
    'statisticsCode': 'TW',
    'timelineCode': 'TW'
  },
  {
    'countryTitle': 'Tajikistan',
    'statisticsCode': 'TJ',
    'timelineCode': 'TJ'
  },
  {
    'countryTitle': 'Tanzania',
    'statisticsCode': 'TZ',
    'timelineCode': 'TZ'
  },
  {
    'countryTitle': 'Thailand',
    'statisticsCode': 'TH',
    'timelineCode': 'TH'
  },
  {
    'countryTitle': 'Timor-Leste',
    'statisticsCode': 'TL',
    'timelineCode': 'TL'
  },
  {
    'countryTitle': 'Togo',
    'statisticsCode': 'TG',
    'timelineCode': 'TG'
  },
  {
    'countryTitle': 'Trinidad and Tobago',
    'statisticsCode': 'TT',
    'timelineCode': 'TT'
  },
  {
    'countryTitle': 'Tunisia',
    'statisticsCode': 'TN',
    'timelineCode': 'TN'
  },
  {
    'countryTitle': 'Turkey',
    'statisticsCode': 'TR',
    'timelineCode': 'TR'
  },
  {
    'countryTitle': 'Turkmenistan',
    'statisticsCode': 'TM',
    'timelineCode': 'TM'
  },
  {
    'countryTitle': 'UAE',
    'statisticsCode': 'AE',
    'timelineCode': 'AE'
  },
  {
    'countryTitle': 'Uganda',
    'statisticsCode': 'UG',
    'timelineCode': 'UG'
  },
  {
    'countryTitle': 'Ukraine',
    'statisticsCode': 'UA',
    'timelineCode': 'UA'
  },
  {
    'countryTitle': 'United Kingdom',
    'statisticsCode': 'GB',
    'timelineCode': 'GB'
  },
  {
    'countryTitle': 'Uruguay',
    'statisticsCode': 'UY',
    'timelineCode': 'UY'
  },
  {
    'countryTitle': 'USA',
    'statisticsCode': 'US',
    'timelineCode': 'US'
  },
  {
    'countryTitle': 'Uzbekistan',
    'statisticsCode': 'UZ',
    'timelineCode': 'UZ'
  },
  {
    'countryTitle': 'Vanuatu',
    'statisticsCode': 'VU',
    'timelineCode': 'VU'
  },
  {
    'countryTitle': 'Venezuela',
    'statisticsCode': 'VE',
    'timelineCode': 'VE'
  },
  {
    'countryTitle': 'Vietnam',
    'statisticsCode': 'VN',
    'timelineCode': 'VN'
  },
  {
    'countryTitle': 'Western Sahara',
    'statisticsCode': 'EH',
    'timelineCode': 'EH'
  },
  {
    'countryTitle': 'Yemen',
    'statisticsCode': 'YE',
    'timelineCode': 'YE'
  },
  {
    'countryTitle': 'Zambia',
    'statisticsCode': 'ZM',
    'timelineCode': 'ZM'
  },
  {
    'countryTitle': 'Zimbabwe',
    'statisticsCode': 'ZW',
    'timelineCode': 'ZW'
  }
];

export default countries;