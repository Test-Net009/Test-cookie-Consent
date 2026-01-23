
let userLang = (navigator.language || (navigator).userLanguage || 'en');
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "69705f5882dc6b43bb61559c",
  "uuid": "22643ff0-939f-4d84-95cd-acb19971de53",
  "domain": "https://qa-op.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://www.flipkart.com",
  "cookieExpiresAfterDays": 365,
  "default": false,
  "mustConsent": true,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {},
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": true,
  "hideToggleAll": false,
  "appName": "Test_1",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "Test_1",
  "companyAddress": " ",
  "services": [
    {
      "name": "vw",
      "title": "vw",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "vw"
      ]
    },
    {
      "name": "vh",
      "title": "vh",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "vh"
      ]
    },
    {
      "name": "at",
      "title": "at",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "at"
      ]
    },
    {
      "name": "T",
      "title": "T",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "T"
      ]
    },
    {
      "name": "dpr",
      "title": "dpr",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "dpr"
      ]
    },
    {
      "name": "isH2EnabledBandwidth",
      "title": "isH2EnabledBandwidth",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "isH2EnabledBandwidth"
      ]
    },
    {
      "name": "Network-Type",
      "title": "Network-Type",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "Network-Type"
      ]
    },
    {
      "name": "K-ACTION",
      "title": "K-ACTION",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "K-ACTION"
      ]
    },
    {
      "name": "SN",
      "title": "SN",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "SN"
      ]
    },
    {
      "name": "ud",
      "title": "ud",
      "purposes": [
        "Marketing"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "ud"
      ]
    },
    {
      "name": "h2NetworkBandwidth",
      "title": "h2NetworkBandwidth",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "h2NetworkBandwidth"
      ]
    }
  ]
};
showCookie();