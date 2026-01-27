
let userLang = (navigator.language || (navigator).userLanguage || 'en');
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6974ccc61a2bc74b5dd8c937",
  "uuid": "790eb59b-66b8-47e8-afab-098f7208f37d",
  "domain": "https://preprod.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://cookieconsenttestqa.netlify.app",
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
  "appName": "Test for demo",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "Test for demo",
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