
let userLang = (navigator.language || (navigator).userLanguage || 'en');
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6974be0c1a2bc74b5dd8c928",
  "uuid": "f27b1453-4aaa-4c23-99dc-d3b6855005ec",
  "domain": "https://preprod.pre-dataprivacy.com/cmapi",
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
  "appName": "2.3.4._Preprod_testing_1",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "2.3.4._Preprod_testing_1",
  "companyAddress": " ",
  "services": []
};
showCookie();