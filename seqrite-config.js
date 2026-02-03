
let userLang = (navigator.language || (navigator).userLanguage || 'en');
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6980d641f272561dc2e982c6",
  "uuid": "39211ef1-ca30-4db4-ba6e-32cd4fd7a2cc",
  "domain": "https://starhealth.pre-dataprivacy.com/cmapi",
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
  "appName": "Star_Health3",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "Star_Health3",
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