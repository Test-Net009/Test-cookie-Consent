
let userLang = (navigator.language || (navigator).userLanguage || 'en');
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "69734f57f3387c313e9fe034",
  "uuid": "7e571d4c-0f9f-4d84-90f2-46b12e1edda6",
  "domain": "https://qa-op.pre-dataprivacy.com/cmapi",
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
  "appName": "2.3.4 Manish Cookies Regression",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "2.3.4 Manish Cookies Regression",
  "companyAddress": " ",
  "services": [
    {
      "name": "_ga_0000000001",
      "title": "_ga_0000000001",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
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
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga"
      ]
    }
  ]
};
showCookie();