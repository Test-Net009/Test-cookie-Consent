
let userLang = (navigator.language || (navigator).userLanguage || 'en').slice(0, 2);
window.klaroConfig = {
  "consentManagerId": "6899797c939bb223903abf65",
  "uuid": "4c252af9-a633-4f52-a3b1-9c6b7749bdb3",
  "domain": "https://dev-hs.qhtpl.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://cookieconsenttestqa.netlify.app/",
  "cookieExpiresAfterDays": 365,
  "default": false,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": true,
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
  "appName": "test2",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "test2",
  "companyAddress": " ",
  "services": [
    {
      "name": "_ga_0000000001",
      "title": "_ga_0000000001",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga_0000000001"
      ]
    },
    {
      "name": "_ga",
      "title": "_ga",
      "purposes": [
        "Analytics"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga"
      ]
    }
  ]
};
showCookie();