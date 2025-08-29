
let userLang = (navigator.language || (navigator).userLanguage || 'en').slice(0, 2);
window.klaroConfig = {
  "consentManagerId": "68ad4116a1e1d577646d93f6",
  "uuid": "a25f7548-f7aa-437f-8f35-7e24dbbb8897",
  "domain": "https://qa-hs.qhtpl.com/cmapi",
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
  "translations": {
    "english": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time.</p><p></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">PAN, Aadhaar, OTP, DPDP Act, GDPR, HTTP-only, UPI, and product/brand names should never be translated.</span></span></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Legal references like “DPDP Act, 2023” must remain unchanged in wording and year.</span></span></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Translations should fit in the same UI space, should not overlap cookie banner.</span></span></p></li><li><p></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Numbers and dates in text must be in correct format and unchanged in meaning.:</span></span></p></li></ol></li></ol><p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p><p>Common Date Formats</p><p>DD/MM/YYYY → 29/08/2025</p><p>MM/DD/YYYY → 08/29/2025</p><p>YYYY/MM/DD → 2025/08/29</p><p>DD-MM-YYYY → 29-08-2025</p><p>MM-DD-YYYY → 08-29-2025</p><p>YYYY-MM-DD → 2025-08-29 (ISO 8601 standard)</p><p>DD.MM.YYYY → <a href=\"29.08.2025\" target=\"_blank\">29.08.2025</a></p><p>YYYY.MM.DD → <a href=\"2025.08.29\" target=\"_blank\">2025.08.29</a></p><p></p><p>With Day of Week</p><p>Day, DD Month YYYY → Friday, 29 August 2025</p><p>Day, Month DD, YYYY → Friday, August 29, 2025</p><p>DDD, DD-MMM-YYYY → Fri, 29-Aug-2025</p><p></p><p>With Time</p><p>DD/MM/YYYY HH:MM:SS → 29/08/2025 11:35:00</p><p>YYYY-MM-DD HH:MM:SS → 2025-08-29 11:35:00</p><p>MM-DD-YYYY hh:mm A → 08-29-2025 11:35 AM</p><p>Textual Formats</p><p>DD Month YYYY → 29 August 2025</p><p>Month DD, YYYY → August 29, 2025</p><p>Mon DD, YYYY → Aug 29, 2025</p><p>DD Mon YYYY → 29 Aug 2025</p><p></p><p><a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "<p>Customize Consent Preferences</p>",
        "description": "<p>We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website. However, we acknowledge your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site.</p><p></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">PAN, Aadhaar, OTP, DPDP Act, GDPR, HTTP-only, UPI, and product/brand names should never be translated.</span></span></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Legal references like “DPDP Act, 2023” must remain unchanged in wording and year.</span></span></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Translations should fit in the same UI space, should not overlap cookie banner.</span></span></p></li><li><p></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Numbers and dates in text must be in correct format and unchanged in meaning.:</span></span></p></li></ol></li></ol><p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p><p>Common Date Formats</p><p>DD/MM/YYYY → 29/08/2025</p><p>MM/DD/YYYY → 08/29/2025</p><p>YYYY/MM/DD → 2025/08/29</p><p>DD-MM-YYYY → 29-08-2025</p><p>MM-DD-YYYY → 08-29-2025</p><p>YYYY-MM-DD → 2025-08-29 (ISO 8601 standard)</p><p>DD.MM.YYYY → <a href=\"29.08.2025\" target=\"_blank\">29.08.2025</a></p><p>YYYY.MM.DD → <a href=\"2025.08.29\" target=\"_blank\">2025.08.29</a></p><p></p><p>With Day of Week</p><p>Day, DD Month YYYY → Friday, 29 August 2025</p><p>Day, Month DD, YYYY → Friday, August 29, 2025</p><p>DDD, DD-MMM-YYYY → Fri, 29-Aug-2025</p><p></p><p>With Time</p><p>DD/MM/YYYY HH:MM:SS → 29/08/2025 11:35:00</p><p>YYYY-MM-DD HH:MM:SS → 2025-08-29 11:35:00</p><p>MM-DD-YYYY hh:mm A → 08-29-2025 11:35 AM</p><p>Textual Formats</p><p>DD Month YYYY → 29 August 2025</p><p>Month DD, YYYY → August 29, 2025</p><p>Mon DD, YYYY → Aug 29, 2025</p><p>DD Mon YYYY → 29 Aug 2025</p><p></p>",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><p><br>This Category is Mandatory</p>"
        },
        "Others": {
          "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p>"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "purpose"
      },
      "purposeItem": {
        "service": "service",
        "services": "services"
      }
    },
    "abri": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time.</p><p></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">PAN, Aadhaar, OTP, DPDP Act, GDPR, HTTP-only, UPI, and product/brand names should never be translated.</span></span></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Legal references like “DPDP Act, 2023” must remain unchanged in wording and year.</span></span></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Translations should fit in the same UI space, should not overlap cookie banner.</span></span></p></li><li><p></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Numbers and dates in text must be in correct format and unchanged in meaning.:</span></span></p></li></ol></li></ol><p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p><p>Common Date Formats</p><p>DD/MM/YYYY → 29/08/2025</p><p>MM/DD/YYYY → 08/29/2025</p><p>YYYY/MM/DD → 2025/08/29</p><p>DD-MM-YYYY → 29-08-2025</p><p>MM-DD-YYYY → 08-29-2025</p><p>YYYY-MM-DD → 2025-08-29 (ISO 8601 standard)</p><p>DD.MM.YYYY → <a href=\"29.08.2025\" target=\"_blank\">29.08.2025</a></p><p>YYYY.MM.DD → <a href=\"2025.08.29\" target=\"_blank\">2025.08.29</a></p><p></p><p>With Day of Week</p><p>Day, DD Month YYYY → Friday, 29 August 2025</p><p>Day, Month DD, YYYY → Friday, August 29, 2025</p><p>DDD, DD-MMM-YYYY → Fri, 29-Aug-2025</p><p></p><p>With Time</p><p>DD/MM/YYYY HH:MM:SS → 29/08/2025 11:35:00</p><p>YYYY-MM-DD HH:MM:SS → 2025-08-29 11:35:00</p><p>MM-DD-YYYY hh:mm A → 08-29-2025 11:35 AM </p><p>Textual Formats</p><p>DD Month YYYY → 29 August 2025</p><p>Month DD, YYYY → August 29, 2025</p><p>Mon DD, YYYY → Aug 29, 2025</p><p>DD Mon YYYY → 29 Aug 2025</p><p></p><p><a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "<p>We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website. However, we acknowledge your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site.</p><p></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">PAN, Aadhaar, OTP, DPDP Act, GDPR, HTTP-only, UPI, and product/brand names should never be translated.</span></span></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Legal references like “DPDP Act, 2023” must remain unchanged in wording and year.</span></span></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Translations should fit in the same UI space, should not overlap cookie banner.</span></span></p></li><li><p></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Numbers and dates in text must be in correct format and unchanged in meaning.:</span></span></p></li></ol></li></ol><p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p><p>Common Date Formats</p><p>DD/MM/YYYY → 29/08/2025</p><p>MM/DD/YYYY → 08/29/2025</p><p>YYYY/MM/DD → 2025/08/29</p><p>DD-MM-YYYY → 29-08-2025</p><p>MM-DD-YYYY → 08-29-2025</p><p>YYYY-MM-DD → 2025-08-29 (ISO 8601 standard)</p><p>DD.MM.YYYY → <a href=\"29.08.2025\" target=\"_blank\">29.08.2025</a></p><p>YYYY.MM.DD → <a href=\"2025.08.29\" target=\"_blank\">2025.08.29</a></p><p></p><p>With Day of Week</p><p>Day, DD Month YYYY → Friday, 29 August 2025</p><p>Day, Month DD, YYYY → Friday, August 29, 2025</p><p>DDD, DD-MMM-YYYY → Fri, 29-Aug-2025</p><p></p><p>With Time</p><p>DD/MM/YYYY HH:MM:SS → 29/08/2025 11:35:00</p><p>YYYY-MM-DD HH:MM:SS → 2025-08-29 11:35:00</p><p>MM-DD-YYYY hh:mm A → 08-29-2025 11:35 AM </p><p>Textual Formats</p><p>DD Month YYYY → 29 August 2025</p><p>Month DD, YYYY → August 29, 2025</p><p>Mon DD, YYYY → Aug 29, 2025</p><p>DD Mon YYYY → 29 Aug 2025</p><p></p>",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><p><br>This Category is Mandatory</p>"
        },
        "Others": {
          "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p>"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "purpose"
      },
      "purposeItem": {
        "service": "service",
        "services": "services"
      }
    },
    "abrizz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time.</p><p></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">PAN, Aadhaar, OTP, DPDP Act, GDPR, HTTP-only, UPI, and product/brand names should never be translated.</span></span></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Legal references like “DPDP Act, 2023” must remain unchanged in wording and year.</span></span></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Translations should fit in the same UI space, should not overlap cookie banner.</span></span></p></li><li><p></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Numbers and dates in text must be in correct format and unchanged in meaning.:</span></span></p></li></ol></li></ol><p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p><p>Common Date Formats</p><p>DD/MM/YYYY → 29/08/2025</p><p>MM/DD/YYYY → 08/29/2025</p><p>YYYY/MM/DD → 2025/08/29</p><p>DD-MM-YYYY → 29-08-2025</p><p>MM-DD-YYYY → 08-29-2025</p><p>YYYY-MM-DD → 2025-08-29 (ISO 8601 standard)</p><p>DD.MM.YYYY → <a href=\"29.08.2025\" target=\"_blank\">29.08.2025</a></p><p>YYYY.MM.DD → <a href=\"2025.08.29\" target=\"_blank\">2025.08.29</a></p><p></p><p>With Day of Week</p><p>Day, DD Month YYYY → Friday, 29 August 2025</p><p>Day, Month DD, YYYY → Friday, August 29, 2025</p><p>DDD, DD-MMM-YYYY → Fri, 29-Aug-2025</p><p></p><p>With Time</p><p>DD/MM/YYYY HH:MM:SS → 29/08/2025 11:35:00</p><p>YYYY-MM-DD HH:MM:SS → 2025-08-29 11:35:00</p><p>MM-DD-YYYY hh:mm A → 08-29-2025 11:35 AM </p><p>Textual Formats</p><p>DD Month YYYY → 29 August 2025</p><p>Month DD, YYYY → August 29, 2025</p><p>Mon DD, YYYY → Aug 29, 2025</p><p>DD Mon YYYY → 29 Aug 2025</p><p></p><p><a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "<p>We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website. However, we acknowledge your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site.</p><p></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">PAN, Aadhaar, OTP, DPDP Act, GDPR, HTTP-only, UPI, and product/brand names should never be translated.</span></span></p><ol><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Legal references like “DPDP Act, 2023” must remain unchanged in wording and year.</span></span></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Translations should fit in the same UI space, should not overlap cookie banner.</span></span></p></li><li><p></p></li><li><p><span style=\"color:rgb(41, 42, 46);\"><span style=\"background-color:rgb(255, 255, 255);\">Numbers and dates in text must be in correct format and unchanged in meaning.:</span></span></p></li></ol></li></ol><p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p><p>Common Date Formats</p><p>DD/MM/YYYY → 29/08/2025</p><p>MM/DD/YYYY → 08/29/2025</p><p>YYYY/MM/DD → 2025/08/29</p><p>DD-MM-YYYY → 29-08-2025</p><p>MM-DD-YYYY → 08-29-2025</p><p>YYYY-MM-DD → 2025-08-29 (ISO 8601 standard)</p><p>DD.MM.YYYY → <a href=\"29.08.2025\" target=\"_blank\">29.08.2025</a></p><p>YYYY.MM.DD → <a href=\"2025.08.29\" target=\"_blank\">2025.08.29</a></p><p></p><p>With Day of Week</p><p>Day, DD Month YYYY → Friday, 29 August 2025</p><p>Day, Month DD, YYYY → Friday, August 29, 2025</p><p>DDD, DD-MMM-YYYY → Fri, 29-Aug-2025</p><p></p><p>With Time</p><p>DD/MM/YYYY HH:MM:SS → 29/08/2025 11:35:00</p><p>YYYY-MM-DD HH:MM:SS → 2025-08-29 11:35:00</p><p>MM-DD-YYYY hh:mm A → 08-29-2025 11:35 AM </p><p>Textual Formats</p><p>DD Month YYYY → 29 August 2025</p><p>Month DD, YYYY → August 29, 2025</p><p>Mon DD, YYYY → Aug 29, 2025</p><p>DD Mon YYYY → 29 Aug 2025</p><p></p>",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><p><br>This Category is Mandatory</p>"
        },
        "Others": {
          "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p>"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "purpose"
      },
      "purposeItem": {
        "service": "service",
        "services": "services"
      }
    },
    "kashmiri": {
      "acceptAll": "سٲری کر قبوٗل۔",
      "accept": "قبول کرن۔",
      "decline": "سٲری کریو رد۔",
      "acceptSelected": "منتخب کر قبول۔",
      "ok": "سٲری کر قبوٗل۔",
      "consentNotice": {
        "description": "أسۍ چھ تہنٛز راز دٲری ہنٛد احترام کران أسۍ چھ ضروری سایٹہ ہنٛز فعالیتس سۭتۍ سۭتۍ مارکیٹنگ، پرسنلائزیشن تہٕ تجزیاتن فعال کرنہٕ خٲطرٕ کوکیز ذخیرٕ کران۔ \"تمام قبول کرو\" کلک کرتھ، تہۍ چھو سانۍ کوکیز استعمال کرنہٕ خٲطرٕ رضامند۔ تہۍ ہیٚکو کنہ تہ وقتہٕ پنٕنۍ سیٹنگہٕ تبدیل کٔرتھ۔ پین، آدھار، او ٹی پی، ڈی پی ڈی پی ایکٹ، جی ڈی پی آر، صرف ایچ ٹی ٹی پی، یو پی آٮٔی، تہٕ پروڈکٹ/برانڈ ناو گژھن نہٕ زانٛہہ تہ ترجمہٕ کرن۔ قونوٗنی حوالہٕ یتھ کٔنہ زن \"ڈی پی ڈی پی ایکٹ، 2023\" گژھ الفاظن تہٕ ؤرۍ یس منٛز غٲر تبدیل روزن۔ ترجمہٕ گژھن أکسی UI جایہ منٛز فٹ گژھن، کوکی بینر گژھ نہٕ اوورلیپ گژھن۔ متنس منز گژھ نمبر تہٕ تٲریخ صحیح شکلہ منز آسن تہٕ معنیس منز گژھ نہٕ کنٛہہ تبدیلی۔ : 0,1,2,3,4,5,6,7,8,9 کامن ڈیٹ فارمیٹس ڈی ڈی/ایم ایم/وائی وائی وائی → 29/08/2025 ایم ایم/ڈی ڈی/YYYY → 08/29/2025 YYYY/ایم ایم/ڈی ڈی → 2025/08/29 DD-MM-YYYY → 29-08-2025 ایم ایم-DD-YYYYY → 08-29-2025 YYYY-MM-DD → 2025-08-29 (ISO 8601 معیار) DD. M. YYYYY → 29.08.2025 YYYY. M. M. D. D. → 2025.08.29 ہفتک دوہ، ڈی ڈی ماہ YYYY : 00 ایم ایم-ڈی ڈی-وائی وائی وائی ایچ ایچ: ایم ایم اے → 08-29-2025 11:35 اے ایم ٹیکسٹیول فارمیٹس ڈی ڈی ماہ YYYY → 29 اگست 2025 ماہ ڈی ڈی، YYYY → 29 اگست 2025 مون ڈی ڈی، YYYY → 29 اگست 2025 ڈی ڈی مون YYYYY → 29 اگست 2025 کوکی پالیسی۔",
        "learnMore": "کسٹمائز کر۔",
        "changeDescription": " "
      },
      "save": "قبول کرن۔",
      "consentModal": {
        "title": "رضامندی ہنز ترجیحات کر کسٹمائز",
        "description": "أسۍ چھ کوکیز استعمال کران تۄہہ پیجن درمیان کامیٲبی سان نیویگیٹ کرنس منٛز مدد کرنہٕ خٲطرٕ، تہنٛز ترجیحات محفوظ کرنہٕ خٲطرٕ، تہٕ عام طور پٲٹھۍ ویب سایٹہ ہنٛد تہنٛد تجربہٕ بہتر بناونہٕ خٲطرٕ۔ وونہ گو٘، أسۍ چھ تہنٛد راز دٲری ہنٛد حق تسلیم کران تہٕ امہ کنہ ہیٚکو تہۍ کیٚنٛہہ قٕسمٕک کوکیزن اجازت نہٕ دنک انتخاب کٔرتھ۔ زیادٕ زانٛکٲری تہٕ سٲنۍ ڈیفالٹ سیٹنگہٕ بدلاونہٕ خٲطرٕ کٔرو مختٔلف زمرٕ کین عنوانن پؠٹھ کلک۔ مہربٲنی کٔرتھ کٔرو نوٹ ز کیٚنٛہہ قٕسمٕک کوکیز بلاک کرنہٕ سۭتۍ ہیٚکہ تہنٛد سایٹہ ہنٛد تجربہٕ متٲثر گژھتھ۔ پین، آدھار، او ٹی پی، ڈی پی ڈی پی ایکٹ، جی ڈی پی آر، صرف ایچ ٹی ٹی پی، یو پی آٮٔی، تہٕ پروڈکٹ/برانڈ ناو گژھن نہٕ زانٛہہ تہ ترجمہٕ کرن۔ قونوٗنی حوالہٕ یتھ کٔنہ زن \"ڈی پی ڈی پی ایکٹ، 2023\" گژھ الفاظن تہٕ ؤرۍ یس منٛز غٲر تبدیل روزن۔ ترجمہٕ گژھن أکسی UI جایہ منٛز فٹ گژھن، کوکی بینر گژھ نہٕ اوورلیپ گژھن۔ متنس منز گژھ نمبر تہٕ تٲریخ صحیح شکلہ منز آسن تہٕ معنیس منز گژھ نہٕ کنٛہہ تبدیلی۔ : 0,1,2,3,4,5,6,7,8,9 کامن ڈیٹ فارمیٹس ڈی ڈی/ایم ایم/وائی وائی وائی → 29/08/2025 ایم ایم/ڈی ڈی/YYYY → 08/29/2025 YYYY/ایم ایم/ڈی ڈی → 2025/08/29 DD-MM-YYYY → 29-08-2025 ایم ایم-DD-YYYYY → 08-29-2025 YYYY-MM-DD → 2025-08-29 (ISO 8601 معیار) DD. M. YYYYY → 29.08.2025 YYYY. M. M. D. D. → 2025.08.29 ہفتک دوہ، ڈی ڈی ماہ YYYY : 00 ایم ایم-ڈی ڈی-وائی وائی وائی ایچ ایچ: ایم ایم اے → 08-29-2025 11:35 اے ایم ٹیکسٹیول فارمیٹس ڈی ڈی ماہ YYYY → 29 اگست 2025 ماہ ڈی ڈی، YYYY → 29 اگست 2025 مون ڈی ڈی، YYYY → 29 اگست 2025 ڈی ڈی مون YYYY",
        "buttons": {
          "save": "قبول کرن۔",
          "acceptAll": "سٲری کر قبوٗل۔",
          "decline": "سٲری کریو رد۔"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "یم کوکیز چھ ویب سائٹ ٹریفک، صارفک رویہٕ، تہٕ مشغولیتک نمونن ہیند تجزیہٕ کرنس منٛز مدد کران۔ جمع کرنہٕ آمٕتۍ بصیرت چھ اسہ مواد بہتر بناون، استعمالس منٛز اضافہٕ کرن، تہٕ مجموعی سائٹچ کارکردگی بہتر بناونک اجازت دیوان۔ یہ زمرہ چھ ضٔروٗری۔"
        },
        "Others": {
          "description": "اتھ زمرس منٛز چھ کوکیز شأمل یم نہٕ گوڑنتھ طے شدٕ زمرن منٛز فٹ چھ آسان مگر ویب سائٹچ کنہہ فعالیتہٕ یا بہتری خاطرٕ چھ ضروری۔"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "مقصد۔"
      },
      "purposeItem": {
        "service": "خدمت۔",
        "services": "خدمات۔"
      }
    },
    "dogri": {
      "acceptAll": "सभनें गी मंजूर करो",
      "accept": "मंजूर करो",
      "decline": "सभनें गी रद्द करो",
      "acceptSelected": "चुने गेदे गी मंजूर करो",
      "ok": "सभनें गी मंजूर करो",
      "consentNotice": {
        "description": "अस तुंʼदी निजता दा सम्मान करदे आं अस जरूरी साइट कार्यक्षमता दे कन्नै-कन्नै मार्केटिंग, निजीकरण ते विश्लेषिकी गी सक्षम करने आस्तै कुकीज़ स्टोर करदे आं। \"सभनें गी मंजूर करो\" पर क्लिक करियै, तुस साड़ियां कुकीज़ दे इस्तेमाल आस्तै सैह्मती दिंदे ओ। तुस कुसै बी समें अपनी सेटिंग बदली सकदे ओ। पैन, आधार, ओ. टी. पी., डी. पी. डी. पी. अधिनियम, जी. डी. पी. आर., सिर्फ एच. टी. टी. पी., यू. पी. आई. ते उत्पाद/ब्रांड दे नांऽ दा कदें बी अनुवाद नेईं कीता जाना चाहिदा। शब्दांकन ते बʼरे च \"डी. पी. डी. पी. अधिनियम, 2023\" जनेह् कानूनी संदर्भें च कोई तब्दीली नेईं होनी चाहिदी। अनुवादें गी इक गै यूआई स्पेस च फिट होना चाहिदा, कुकी बैनर गी ओवरलैप नेईं करना चाहिदा। पाठ च गिनतरी ते तरीकें दा ठीक प्रारूप होना चाहिदा ते उंʼदे अर्थ च कोई तब्दीली नेईं होनी चाहिदी। 0, 2, 3, 4, 5, 6, 7, 8, 9 सधारण तरीकै दे प्रारूप डीडी/एमएम/वाईवाईवाईवाई → 29/08/2025 एमएम/डीडी/वाईवाईवाईवाई → 08/29/2025 वाईवाईवाईवाई/एमएम/डीडी → 2025/08/29 डीडी-एमएम-वाईवाईवाई → 29-08-2025 एमएम-डीडी-वाईवाईवाई → 08-29-2025 वाईवाईवाईवाई-एमएम-डीडी → 2025-08-29 (आईएसओ 8601 मानक) डीडी. एम. एम. वाई. वाई. वाई. वाई. → 29.08.2025 वाईवाईवाई. एम. एम. एम. डी. → 2025.08.29 हफ्ते दे दिन, डीडी मासक वाईवाईवाई दे कन्नै डी. डी.-वाई. वाई. वाई. एच. एच.: एम. एम. ए. → 08-29-2025 11:35 ए. एम. पाठ्य प्रारूप डी. महीना वाई. वाई. वाई. → 29 अगस्त 2025 महीना डी. डी., वाई. वाई. वाई. → 29 अगस्त, 2025 सोम डी. डी., वाई. वाई. वाई. वाई. → 29 अगस्त, 2025 डीडी सोम वाई. वाई. वाई. वाई. → 29 अगस्त 2025 कुकी पालिसी।",
        "learnMore": "अनुकूलित करो",
        "changeDescription": " "
      },
      "save": "मंजूर करो",
      "consentModal": {
        "title": "सहमति वरीयताएं गी अनुकूलित करो",
        "description": "अस पेजें दे बिच्च कुशलता कन्नै नैविगेट करने च तुंʼदी मदद करने, तुंʼदी प्राथमिकताएं गी स्टोर करने ते आमतौरा पर कुसै वैबसाइट दे तुंʼदे अनुभव गी सधारत करने आस्तै कुकीज़ दा इस्तेमाल करदे आं। हालां-के, अस तुंʼदे निजता दे हक्क गी मंजूर करदे आं ते इस करियै तुस किश किस्में दियें कुकीज़ गी इजाज़त नेईं देने दा विकल्प चुन सकदे ओ। मती जानकारी हासल करने ते अपनी डिफ़ॉल्ट सेटिंग्स गी बदलने आस्तै बक्ख-बक्ख वर्ग शीर्षकें पर क्लिक करो। कृपा करियै ध्यान देओ जे किश किस्में दियें कुकीज़ गी अवरुद्ध करना साइट दे तुंʼदे अनुभव गी प्रभावत करी सकदा ऐ। पैन, आधार, ओ. टी. पी., डी. पी. डी. पी. अधिनियम, जी. डी. पी. आर., सिर्फ एच. टी. टी. पी., यू. पी. आई. ते उत्पाद/ब्रांड दे नांऽ दा कदें बी अनुवाद नेईं कीता जाना चाहिदा। शब्दांकन ते बʼरे च \"डी. पी. डी. पी. अधिनियम, 2023\" जनेह् कानूनी संदर्भें च कोई तब्दीली नेईं होनी चाहिदी। अनुवादें गी इक गै यूआई स्पेस च फिट होना चाहिदा, कुकी बैनर गी ओवरलैप नेईं करना चाहिदा। पाठ च गिनतरी ते तरीकें दा ठीक प्रारूप होना चाहिदा ते उंʼदे अर्थ च कोई तब्दीली नेईं होनी चाहिदी। 0, 2, 3, 4, 5, 6, 7, 8, 9 सधारण तरीकै दे प्रारूप डीडी/एमएम/वाईवाईवाईवाई → 29/08/2025 एमएम/डीडी/वाईवाईवाईवाई → 08/29/2025 वाईवाईवाईवाई/एमएम/डीडी → 2025/08/29 डीडी-एमएम-वाईवाईवाई → 29-08-2025 एमएम-डीडी-वाईवाईवाई → 08-29-2025 वाईवाईवाईवाई-एमएम-डीडी → 2025-08-29 (आईएसओ 8601 मानक) डीडी. एम. एम. वाई. वाई. वाई. वाई. → 29.08.2025 वाईवाईवाई. एम. एम. एम. डी. → 2025.08.29 हफ्ते दे दिन, डीडी मासक वाईवाईवाई दे कन्नै डी. डी.-वाई. वाई. वाई. एच. एच.: एम. एम. ए. → 08-29-2025 11:35 ए. एम. पाठ्य प्रारूप डी. महीना वाई. वाई. वाई. → 29 अगस्त 2025 महीना डी. डी., वाई. वाई. वाई. → 29 अगस्त, 2025 सोम डी. डी., वाई. वाई. वाई. वाई. → 29 अगस्त, 2025 सोम वाई. वाई. वाई. वाई.",
        "buttons": {
          "save": "मंजूर करो",
          "acceptAll": "सभनें गी मंजूर करो",
          "decline": "सभनें गी रद्द करो"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "एह् कुकीज वेबसाइट ट्रैफिक, उपयोगकर्ता बर्ताव ते जुड़ाव पैटर्न दा विश्लेशन करने च साडी मदद करदियां न। इकट्ठी कीती गेई अंतर्दृष्टि तुसें गी सामग्री गी अनुकूलत करने, उपयोगता बधाने ते समूचे साइट प्रदर्शन च सधार करने दी इजाज़त दिंदी ऐ। एह् वर्ग लाजमी ऐ"
        },
        "Others": {
          "description": "इस वर्ग च कुकीज शामल न जेह्ड़े पूर्वपरिभाषित श्रेणियें च खरा नेईं उतरदे पर किश वैबसाइट कार्यक्षमताएं जां सधारें आस्तै लाजमी होई सकदे न।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "उद्देश"
      },
      "purposeItem": {
        "service": "सेवा",
        "services": "सेवां"
      }
    },
    "malayalam": {
      "acceptAll": "എല്ലാം സ്വീകരിക്കുക.",
      "accept": "സ്വീകരിക്കുക.",
      "decline": "എല്ലാം നിരസിക്കുക",
      "acceptSelected": "തിരഞ്ഞെടുത്തവ സ്വീകരിക്കുക",
      "ok": "എല്ലാം സ്വീകരിക്കുക",
      "consentNotice": {
        "description": "നിങ്ങളുടെ സ്വകാര്യതയെ ഞങ്ങൾ മാനിക്കുന്നു, അവശ്യ സൈറ്റ് പ്രവർത്തനക്ഷമത, മാർക്കറ്റിംഗ്, വ്യക്തിഗതമാക്കൽ, വിശകലനം എന്നിവ പ്രാപ്തമാക്കുന്നതിന് ഞങ്ങൾ കുക്കികൾ സംഭരിക്കുന്നു. \"എല്ലാം സ്വീകരിക്കുക\" ക്ലിക്കുചെയ്യുന്നതിലൂടെ, ഞങ്ങളുടെ കുക്കികളുടെ ഉപയോഗത്തിന് നിങ്ങൾ സമ്മതിക്കുന്നു. നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ ക്രമീകരണങ്ങൾ മാറ്റാം. പാൻ, ആധാർ, ഒടിപി, ഡിപിഡിപി നിയമം, ജിഡിപിആർ, എച്ച്ടിടിപി മാത്രം, യുപിഐ, ഉൽപ്പന്ന/ബ്രാൻഡ് നാമങ്ങൾ എന്നിവ ഒരിക്കലും വിവർത്തനം ചെയ്യരുത്. \"ഡിപിഡിപി ആക്റ്റ്, 2023\" പോലുള്ള നിയമപരമായ പരാമർശങ്ങൾ വാക്കുകളിലും വർഷത്തിലും മാറ്റമില്ലാതെ തുടരണം. വിവർത്തനങ്ങൾ ഒരേ യുഐ സ്ഥലത്ത് യോജിക്കണം, കുക്കി ബാനർ ഓവർലാപ്പ് ചെയ്യരുത്. വാചകത്തിലെ അക്കങ്ങളും തീയതികളും ശരിയായ ഫോർമാറ്റിലായിരിക്കണം, അർത്ഥത്തിൽ മാറ്റമില്ലാതെ ആയിരിക്കണം. 0, 2, 3, 4, 5, 6, 7, 8, 9 പൊതു തീയതി ഫോർമാറ്റുകൾ ഡി. ഡി./എം. എം./വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. DDD-YYYY hh: mm A → 08-29-2025 11:35 AM ടെക്സ്റ്റ് ഫോർമാറ്റുകൾ DD മാസം YYYY → 29 ഓഗസ്റ്റ് 2025 മാസം DD, YYYY → ഓഗസ്റ്റ് 29,2025 മോൺ DD, YYYY → ഓഗസ്റ്റ് 29,2025 DD മോൺ YYYY → 29 ഓഗസ്റ്റ് 2025 കുക്കി പോളിസി.",
        "learnMore": "ഇഷ്ടാനുസൃതമാക്കുക",
        "changeDescription": " "
      },
      "save": "സ്വീകരിക്കുക.",
      "consentModal": {
        "title": "സമ്മത മുൻഗണനകൾ ഇഷ്ടാനുസൃതമാക്കുക",
        "description": "പേജുകൾക്കിടയിൽ കാര്യക്ഷമമായി നാവിഗേറ്റ് ചെയ്യാനും നിങ്ങളുടെ മുൻഗണനകൾ സംഭരിക്കാനും ഒരു വെബ്സൈറ്റിന്റെ നിങ്ങളുടെ അനുഭവം മെച്ചപ്പെടുത്താനും നിങ്ങളെ സഹായിക്കുന്നതിന് ഞങ്ങൾ കുക്കികൾ ഉപയോഗിക്കുന്നു. എന്നിരുന്നാലും, സ്വകാര്യതയ്ക്കുള്ള നിങ്ങളുടെ അവകാശം ഞങ്ങൾ അംഗീകരിക്കുന്നു, അതിനാൽ ചിലതരം കുക്കികൾ അനുവദിക്കരുതെന്ന് നിങ്ങൾക്ക് തിരഞ്ഞെടുക്കാം. കൂടുതൽ അറിയാനും ഞങ്ങളുടെ സ്ഥിരസ്ഥിതി ക്രമീകരണങ്ങൾ മാറ്റാനും വ്യത്യസ്ത വിഭാഗ തലക്കെട്ടുകളിൽ ക്ലിക്കുചെയ്യുക. ചില തരത്തിലുള്ള കുക്കികൾ തടയുന്നത് സൈറ്റിലെ നിങ്ങളുടെ അനുഭവത്തെ ബാധിച്ചേക്കാമെന്നത് ശ്രദ്ധിക്കുക. പാൻ, ആധാർ, ഒടിപി, ഡിപിഡിപി നിയമം, ജിഡിപിആർ, എച്ച്ടിടിപി മാത്രം, യുപിഐ, ഉൽപ്പന്ന/ബ്രാൻഡ് നാമങ്ങൾ എന്നിവ ഒരിക്കലും വിവർത്തനം ചെയ്യരുത്. \"ഡിപിഡിപി ആക്റ്റ്, 2023\" പോലുള്ള നിയമപരമായ പരാമർശങ്ങൾ വാക്കുകളിലും വർഷത്തിലും മാറ്റമില്ലാതെ തുടരണം. വിവർത്തനങ്ങൾ ഒരേ യുഐ സ്ഥലത്ത് യോജിക്കണം, കുക്കി ബാനർ ഓവർലാപ്പ് ചെയ്യരുത്. വാചകത്തിലെ അക്കങ്ങളും തീയതികളും ശരിയായ ഫോർമാറ്റിലായിരിക്കണം, അർത്ഥത്തിൽ മാറ്റമില്ലാതെ ആയിരിക്കണം. 0, 2, 3, 4, 5, 6, 7, 8, 9 പൊതു തീയതി ഫോർമാറ്റുകൾ ഡി. ഡി./എം. എം./വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. വൈ. DDD-YYYY hh: mm A → 08-29-2025 11:35 AM ടെക്സ്റ്റ് ഫോർമാറ്റുകൾ ഡിഡി മാസം YYYY → 29 ഓഗസ്റ്റ് 2025 മാസം ഡിഡി, YYYY → ഓഗസ്റ്റ് 29,2025 മോൺ ഡിഡി, YYYY → ഓഗസ്റ്റ് 29,2025 ഡിഡി മോൺ YYYY → 29 ഓഗസ്റ്റ് 2025",
        "buttons": {
          "save": "സ്വീകരിക്കുക.",
          "acceptAll": "എല്ലാം സ്വീകരിക്കുക.",
          "decline": "എല്ലാം നിരസിക്കുക"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "വെബ്സൈറ്റ് ട്രാഫിക്, ഉപയോക്തൃ പെരുമാറ്റം, ഇടപഴകൽ രീതികൾ എന്നിവ വിശകലനം ചെയ്യാൻ ഈ കുക്കികൾ ഞങ്ങളെ സഹായിക്കുന്നു. ശേഖരിച്ച ഉൾക്കാഴ്ചകൾ ഉള്ളടക്കം ഒപ്റ്റിമൈസ് ചെയ്യാനും ഉപയോഗക്ഷമത വർദ്ധിപ്പിക്കാനും മൊത്തത്തിലുള്ള സൈറ്റ് പ്രകടനം മെച്ചപ്പെടുത്താനും ഞങ്ങളെ അനുവദിക്കുന്നു. ഈ വിഭാഗം നിർബന്ധമാണ്"
        },
        "Others": {
          "description": "ഈ വിഭാഗത്തിൽ മുൻകൂട്ടി നിർവചിക്കപ്പെട്ട വിഭാഗങ്ങളുമായി പൊരുത്തപ്പെടാത്തതും എന്നാൽ ചില വെബ്സൈറ്റ് പ്രവർത്തനങ്ങൾക്കോ മെച്ചപ്പെടുത്തലുകൾക്കോ ആവശ്യമായി വന്നേക്കാവുന്ന കുക്കികൾ ഉൾപ്പെടുന്നു."
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "ഉദ്ദേശം"
      },
      "purposeItem": {
        "service": "സേവനം",
        "services": "സേവനങ്ങൾ"
      }
    },
    "manipuri": {
      "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯕꯤꯌꯨ",
      "accept": "ꯂꯧꯁꯤꯟꯕꯤꯌꯨ",
      "decline": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯊꯣꯛꯎ",
      "acceptSelected": "ꯈꯟꯒꯠꯂꯕ ꯑꯁꯤ ꯂꯧꯕꯤꯌꯨ",
      "ok": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯕꯤꯌꯨ",
      "consentNotice": {
        "description": "ꯑꯩꯈꯣꯏꯅ ꯅꯍꯥꯛꯀꯤ ꯂꯅꯥꯏꯕꯨ ꯏꯀꯥꯏ ꯈꯨꯝꯅꯩ ꯑꯩꯈꯣꯏꯅ ꯇꯉꯥꯏꯐꯗꯕ ꯁꯥꯏꯠꯀꯤ ꯃꯊꯧ ꯇꯧꯕ ꯉꯝꯕ, ꯃꯥꯔꯀꯦꯇꯤꯡ, ꯄꯦꯁ ꯭ ꯅꯦꯜꯥꯏꯖꯦꯁꯟ ꯑꯃꯁꯨꯡ ꯑꯦꯅꯥꯂꯤꯇꯤꯛꯁ ꯇꯧꯕ ꯉꯝꯅꯕ ꯀꯨꯀꯤꯁꯤꯡ ꯊꯝꯃꯤ ꯫ \"ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯤꯌꯨ\" ꯍꯥꯏꯕ ꯑꯗꯨꯗ ꯅꯝꯗꯨꯅ, ꯅꯍꯥꯛꯅ ꯑꯩꯈꯣꯏꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯁꯤꯖꯤꯟꯅꯕ ꯌꯥꯔꯦ ꯫ ꯅꯍꯥꯛꯅ ꯃꯇꯝ ꯑꯃꯍꯦꯛꯇꯗ ꯅꯍꯥꯛꯀꯤ ꯁꯦꯇꯤꯡꯁ ꯑꯗꯨ ꯍꯣꯡꯗꯣꯛꯄ ꯌꯥꯏ ꯫ ꯄꯦꯟ, ꯑꯥꯙꯥꯔ, ꯑꯣ. ꯇꯤ. ꯄꯤ., ꯗꯤ. ꯄꯤ. ꯗꯤ. ꯄꯤ. ꯑꯦꯛꯠ, ꯖꯤ. ꯗꯤ. ꯄꯤ. ꯑꯥꯔ., ꯑꯩꯆ. ꯇꯤ. ꯇꯤ. ꯄꯤ. ꯈꯛꯇꯃꯛ, ꯌꯨ. ꯄꯤ. ꯑꯥꯏ., ꯑꯃꯁꯨꯡ ꯄꯣꯠꯊꯣꯛ/ꯕ ꯭ ꯔꯥꯟꯗꯀꯤ ꯃꯃꯤꯡꯁꯤꯡ ꯑꯁꯤ ꯃꯇꯝ ꯑꯃꯠꯇꯗ ꯍꯟꯗꯣꯛꯄ ꯌꯥꯔꯣꯏꯗꯕꯅꯤ ꯫ \"ꯗꯤ. ꯄꯤ. ꯗꯤ. ꯄꯤ. ꯑꯦꯛꯠ, 2023\" ꯒꯨꯝꯕ ꯑꯥꯏꯟꯒꯤ ꯑꯣꯏꯕ ꯋꯥꯐꯝꯁꯤꯡ ꯑꯁꯤ ꯋꯥꯍꯩ ꯑꯃꯁꯨꯡ ꯆꯍꯤꯗ ꯍꯣꯡꯗꯅ ꯂꯩꯒꯗꯕꯅꯤ ꯫ ꯇ ꯭ ꯔꯥꯟꯁꯂꯦꯁꯟꯁꯤꯡ ꯑꯁꯤ ꯆꯞ ꯃꯥꯟꯅꯕ ꯌꯨ. ꯑꯥꯏ. ꯁ ꯭ ꯄꯦꯁꯇ ꯐꯦꯠ ꯇꯧꯒꯗꯕꯅꯤ, ꯀꯨꯀꯤꯒꯤ ꯕꯦꯅꯔ ꯑꯗꯨ ꯑꯣꯚꯔꯂꯦꯞ ꯇꯧꯔꯣꯏꯗꯕꯅꯤ ꯫ ꯂꯥꯏꯔꯤꯛꯁꯤꯡꯗ ꯃꯁꯤꯡ ꯑꯃꯁꯨꯡ ꯇꯥꯡꯁꯤꯡ ꯑꯁꯤ ꯑꯆꯨꯝꯕ ꯃꯑꯣꯡ ꯑꯃꯗ ꯂꯩꯒꯗꯕꯅꯤ ꯑꯃꯁꯨꯡ ꯑꯔꯊꯗ ꯍꯣꯡꯗꯕ ꯑꯣꯏꯒꯗꯕꯅꯤ ꯫ 0, 2, 3, 4, 5, 6, 7, 8, 9 ꯀꯃꯟ ꯗꯦꯠ ꯐꯣꯔꯃꯦꯠꯁꯤꯡ ꯗꯤ. ꯗꯤ./ꯑꯦꯝ. ꯑꯦꯝ./ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → <ꯑꯥꯏ. ꯗꯤ. 5> ꯑꯦꯝ. ꯑꯦꯝ./ꯗꯤ. ꯗꯤ./ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → <ꯑꯥꯏ. ꯗꯤ. 7> ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ./ꯑꯦꯝ. ꯑꯦꯝ./ꯗꯤ. ꯗꯤ. → <ꯑꯥꯏ. ꯗꯤ. 2> ꯗꯤ. ꯗꯤ.-ꯑꯦꯝ. ꯑꯦꯝ.-ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → <ꯑꯥꯏ. ꯗꯤ. 10> ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ.-ꯑꯦꯝ. ꯑꯦꯝ.-ꯗꯤ. ꯗꯤ. → <ꯑꯥꯏ. ꯗꯤ. 9> (ꯑꯥꯏ. ꯑꯦꯁ. ꯑꯣ. 8601 ꯁ ꯭ ꯇꯦꯟꯗꯔ ꯭ ꯗ) ꯗꯤ. ꯗꯤ. ꯑꯦꯝ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯗꯤ. ꯗꯤ.-ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯑꯩꯆ. ꯑꯩꯆ.: ꯑꯦꯝ. ꯑꯦꯝ. ꯑꯦ. → <ꯑꯥꯏ. ꯗꯤ. 10> <ꯑꯥꯏ. ꯗꯤ. 8> ꯑꯦ. ꯑꯦꯝ. ꯇꯦꯛꯁ ꯭ ꯇ ꯭ ꯌꯨꯜ ꯐꯣꯔꯃꯦꯠꯁꯤꯡ ꯗꯤ. ꯗꯤ. ꯊꯥ ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → 29 ꯑꯣꯒꯁ ꯭ ꯠ 2025 ꯊꯥ ꯗꯤ. ꯗꯤ., ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → ꯑꯣꯒꯁ ꯭ ꯠ 29,2025 ꯃꯣꯟ ꯗꯤ. ꯗꯤ., ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → ꯑꯣꯒꯁ ꯭ ꯠ 29,2025 ꯗꯤ. ꯗꯤ. ꯃꯣꯟ ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → 29 ꯑꯣꯒꯁ ꯭ ꯠ 2025 ꯀꯨꯀꯤ ꯊꯧꯁꯤꯜ ꯫",
        "learnMore": "ꯀꯁꯇꯃꯥꯏꯖ ꯇꯧ ꯫",
        "changeDescription": " "
      },
      "save": "ꯂꯧꯁꯤꯟꯕꯤꯌꯨ",
      "consentModal": {
        "title": "ꯀꯣꯟꯁꯦꯟꯠ ꯄ ꯭ ꯔꯦꯐꯔꯦꯟꯁꯁꯤꯡ ꯀꯁ ꯭ ꯇꯥꯃꯥꯏꯖ ꯇꯧ",
        "description": "ꯑꯩꯈꯣꯏꯅ ꯀꯨꯀꯤꯁꯤꯡ ꯑꯁꯤ ꯅꯍꯥꯛꯅ ꯆꯦꯐꯣꯡꯁꯤꯡꯒꯤ ꯃꯔꯛꯇ ꯐꯖꯅ ꯆꯠꯄꯗ ꯃꯇꯦꯡ ꯄꯥꯡꯅꯕ, ꯅꯍꯥꯛꯀꯤ ꯄꯥꯝꯖꯕꯁꯤꯡ ꯊꯝꯗꯨꯅ ꯊꯝꯕ, ꯑꯃꯁꯨꯡ ꯃꯍꯧꯁꯥꯅ ꯅꯍꯥꯛꯀꯤ ꯋꯦꯕꯁꯥꯏꯠ ꯑꯃꯒꯤ ꯈꯪ-ꯍꯩꯕ ꯑꯗꯨ ꯐꯒꯠꯍꯟꯕꯗ ꯁꯤꯖꯤꯟꯅꯩ ꯫ ꯑꯗꯨꯝ ꯑꯣꯏꯅꯃꯛ, ꯑꯩꯈꯣꯏꯅ ꯅꯍꯥꯛꯀꯤ ꯂꯅꯥꯏꯒꯤ ꯑꯣꯏꯕ ꯍꯛ ꯑꯗꯨ ꯌꯥꯔꯦ ꯑꯃꯁꯨꯡ ꯃꯔꯝ ꯑꯁꯤꯅ ꯅꯍꯥꯛꯅ ꯃꯈꯜ ꯈꯔꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯌꯥꯍꯟꯗꯅꯕ ꯈꯟꯕ ꯌꯥꯏ ꯫ ꯍꯦꯟꯅ ꯈꯪꯗꯣꯛꯅꯕ ꯑꯃꯁꯨꯡ ꯑꯩꯈꯣꯏꯒꯤ ꯗꯤꯐꯣꯜꯠ ꯁꯦꯇꯤꯡꯁ ꯑꯗꯨ ꯍꯣꯡꯗꯣꯛꯅꯕ ꯇꯣꯉꯥꯟ-ꯇꯣꯉꯥꯟꯕ ꯀꯦꯇꯦꯒꯣꯔꯤꯒꯤ ꯍꯦꯗꯤꯡꯁꯤꯡꯗ ꯅꯝꯃꯨ ꯫ ꯆꯥꯟꯕꯤꯗꯨꯅ ꯆꯦꯛꯁꯤꯟꯕꯤꯌꯨ ꯃꯗꯨꯗꯤ ꯑꯀꯛꯅꯕ ꯃꯈꯜꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯊꯤꯡꯕꯅ ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯠ ꯑꯗꯨꯒꯤ ꯈꯪꯍꯧꯗ ꯭ ꯔꯕꯗ ꯑꯀꯥꯏꯕ ꯄꯤꯕ ꯌꯥꯏ ꯫ ꯄꯦꯟ, ꯑꯥꯙꯥꯔ, ꯑꯣ. ꯇꯤ. ꯄꯤ., ꯗꯤ. ꯄꯤ. ꯗꯤ. ꯄꯤ. ꯑꯦꯛꯠ, ꯖꯤ. ꯗꯤ. ꯄꯤ. ꯑꯥꯔ., ꯑꯩꯆ. ꯇꯤ. ꯇꯤ. ꯄꯤ. ꯈꯛꯇꯃꯛ, ꯌꯨ. ꯄꯤ. ꯑꯥꯏ., ꯑꯃꯁꯨꯡ ꯄꯣꯠꯊꯣꯛ/ꯕ ꯭ ꯔꯥꯟꯗꯀꯤ ꯃꯃꯤꯡꯁꯤꯡ ꯑꯁꯤ ꯃꯇꯝ ꯑꯃꯠꯇꯗ ꯍꯟꯗꯣꯛꯄ ꯌꯥꯔꯣꯏꯗꯕꯅꯤ ꯫ \"ꯗꯤ. ꯄꯤ. ꯗꯤ. ꯄꯤ. ꯑꯦꯛꯠ, 2023\" ꯒꯨꯝꯕ ꯑꯥꯏꯟꯒꯤ ꯑꯣꯏꯕ ꯋꯥꯐꯝꯁꯤꯡ ꯑꯁꯤ ꯋꯥꯍꯩ ꯑꯃꯁꯨꯡ ꯆꯍꯤꯗ ꯍꯣꯡꯗꯅ ꯂꯩꯒꯗꯕꯅꯤ ꯫ ꯇ ꯭ ꯔꯥꯟꯁꯂꯦꯁꯟꯁꯤꯡ ꯑꯁꯤ ꯆꯞ ꯃꯥꯟꯅꯕ ꯌꯨ. ꯑꯥꯏ. ꯁ ꯭ ꯄꯦꯁꯇ ꯐꯦꯠ ꯇꯧꯒꯗꯕꯅꯤ, ꯀꯨꯀꯤꯒꯤ ꯕꯦꯅꯔ ꯑꯗꯨ ꯑꯣꯚꯔꯂꯦꯞ ꯇꯧꯔꯣꯏꯗꯕꯅꯤ ꯫ ꯂꯥꯏꯔꯤꯛꯁꯤꯡꯗ ꯃꯁꯤꯡ ꯑꯃꯁꯨꯡ ꯇꯥꯡꯁꯤꯡ ꯑꯁꯤ ꯑꯆꯨꯝꯕ ꯃꯑꯣꯡ ꯑꯃꯗ ꯂꯩꯒꯗꯕꯅꯤ ꯑꯃꯁꯨꯡ ꯑꯔꯊꯗ ꯍꯣꯡꯗꯕ ꯑꯣꯏꯒꯗꯕꯅꯤ ꯫ 0, 2, 3, 4, 5, 6, 7, 8, 9 ꯀꯃꯟ ꯗꯦꯠ ꯐꯣꯔꯃꯦꯠꯁꯤꯡ ꯗꯤ. ꯗꯤ./ꯑꯦꯝ. ꯑꯦꯝ./ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → <ꯑꯥꯏ. ꯗꯤ. 5> ꯑꯦꯝ. ꯑꯦꯝ./ꯗꯤ. ꯗꯤ./ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → <ꯑꯥꯏ. ꯗꯤ. 7> ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ./ꯑꯦꯝ. ꯑꯦꯝ./ꯗꯤ. ꯗꯤ. → <ꯑꯥꯏ. ꯗꯤ. 2> ꯗꯤ. ꯗꯤ.-ꯑꯦꯝ. ꯑꯦꯝ.-ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → <ꯑꯥꯏ. ꯗꯤ. 10> ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ.-ꯑꯦꯝ. ꯑꯦꯝ.-ꯗꯤ. ꯗꯤ. → <ꯑꯥꯏ. ꯗꯤ. 9> (ꯑꯥꯏ. ꯑꯦꯁ. ꯑꯣ. 8601 ꯁ ꯭ ꯇꯦꯟꯗꯔ ꯭ ꯗ) ꯗꯤ. ꯗꯤ. ꯑꯦꯝ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯗꯤ. ꯗꯤ.-ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯑꯩꯆ. ꯑꯩꯆ.: ꯑꯦꯝ. ꯑꯦꯝ. ꯑꯦ. → <ꯑꯥꯏ. ꯗꯤ. 10> <ꯑꯥꯏ. ꯗꯤ. 8> ꯑꯦ. ꯑꯦꯝ. ꯇꯦꯛꯁ ꯭ ꯇ ꯭ ꯌꯨꯜ ꯐꯣꯔꯃꯦꯠꯁꯤꯡ ꯗꯤ. ꯗꯤ. ꯊꯥ ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → 29 ꯑꯣꯒꯁꯠ 2025 ꯊꯥ ꯗꯤ. ꯗꯤ., ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → ꯑꯣꯒꯁꯠ 29,2025 ꯃꯣꯟ ꯗꯤ. ꯗꯤ., ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → ꯑꯣꯒꯁꯠ 29,2025 ꯗꯤ. ꯗꯤ. ꯃꯣꯟ ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. ꯋꯥꯏ. → 29 ꯑꯣꯒꯁꯠ 2025",
        "buttons": {
          "save": "ꯂꯧꯁꯤꯟꯕꯤꯌꯨ",
          "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯕꯤꯌꯨ",
          "decline": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯊꯣꯛꯎ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "ꯃꯁꯤꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯑꯁꯤꯅ ꯑꯩꯈꯣꯏꯗ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯇ ꯭ ꯔꯥꯐꯤꯛ, ꯌꯨꯖꯔꯒꯤ ꯃꯑꯣꯡ ꯃꯇꯧ, ꯑꯃꯁꯨꯡ ꯏꯡꯒꯦꯁꯟ ꯄꯦꯇꯔꯟꯁꯤꯡ ꯅꯩꯅꯕꯗ ꯃꯇꯦꯡ ꯄꯥꯡꯉꯤ ꯫ ꯈꯣꯝꯖꯤꯜꯂꯕ ꯋꯥꯈꯜꯂꯣꯟꯁꯤꯡ ꯑꯁꯤꯅ ꯑꯩꯈꯣꯏꯗ ꯀꯟꯇꯦꯟꯠ ꯑꯗꯨ ꯍꯦꯟꯅ ꯐꯕ ꯑꯣꯏꯍꯟꯕ, ꯁꯤꯖꯤꯟꯅꯕ ꯉꯝꯕꯒꯤ ꯆꯥꯡ ꯍꯦꯟꯒꯠꯍꯟꯕ, ꯑꯃꯁꯨꯡ ꯑꯄꯨꯟꯕ ꯁꯥꯏꯠꯀꯤ ꯊꯕꯛ ꯄꯥꯡꯊꯣꯛꯄ ꯑꯗꯨ ꯐꯒꯠꯍꯟꯕ ꯉꯝꯍꯜꯂꯤ ꯫ ꯃꯁꯤꯒꯤ ꯀꯥꯡꯂꯨꯞ ꯑꯁꯤ ꯃꯊꯧ ꯇꯥꯕꯅꯤ ꯫"
        },
        "Others": {
          "description": "ꯃꯁꯤꯒꯤ ꯀꯦꯇꯦꯒꯣꯔꯤ ꯑꯁꯤꯗ ꯃꯃꯥꯡꯗ ꯂꯦꯞꯊꯣꯛꯂꯕ ꯀꯦꯇꯦꯒꯣꯔꯤꯁꯤꯡꯗ ꯌꯥꯎꯗꯕ ꯑꯗꯨꯕꯨ ꯑꯀꯛꯅꯕ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯃꯊꯧꯁꯤꯡ ꯅꯠꯇ ꯭ ꯔꯒ ꯐꯒꯠꯍꯟꯅꯕꯒꯤꯗꯃꯛ ꯃꯊꯧ ꯇꯥꯕ ꯌꯥꯕ ꯀꯨꯀꯤꯁꯤꯡ ꯌꯥꯎꯔꯤ ꯫"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "ꯄꯥꯟꯗꯝ"
      },
      "purposeItem": {
        "service": "ꯁꯦꯕꯥ ꯇꯧꯕ",
        "services": "ꯁꯔꯕꯤꯁꯁꯤꯡ"
      }
    },
    "santali": {
      "acceptAll": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "accept": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "decline": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾",
      "acceptSelected": "ᱵᱟᱪᱷᱱᱟᱣ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "ok": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "consentNotice": {
        "description": "ᱟᱢ ᱟᱢᱟᱜ ᱜᱚᱭᱱᱟᱥᱤ ᱨᱮᱭᱟᱜ ᱢᱟᱹᱱ ᱮᱢ ᱮᱫᱟ, ᱟᱢ ᱫᱚ ᱵᱮᱼᱵᱟᱹᱛᱤᱞ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮ ᱥᱟᱶ ᱥᱟᱶᱛᱮ ᱵᱟᱡᱟᱨ, ᱵᱮᱼᱵᱟᱹᱛᱤᱞ ᱟᱨ ᱚᱱᱚᱞᱤᱠᱤᱥ ᱠᱚᱨᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱠᱩᱠᱤ ᱠᱚ ᱫᱚᱦᱚ ᱮᱫᱟ ᱾ \"ᱥᱟᱱᱟᱢᱟᱜ ᱦᱟᱛᱟᱣ ᱢᱮ\" ᱨᱮ ᱠᱞᱤᱠ ᱠᱟᱛᱮ, ᱟᱢ ᱤᱧᱟᱹᱜ ᱠᱩᱠᱤᱠᱚ ᱵᱮᱶᱦᱟᱨ ᱞᱟᱹᱜᱤᱫ ᱮ ᱥᱤᱜᱤᱞ ᱞᱮᱱᱟ ᱾ ᱟᱢ ᱡᱟᱦᱟᱸ ᱚᱠᱛᱚ ᱨᱮᱦᱚᱸ ᱟᱢᱟᱜ ᱥᱮᱴᱤᱝ ᱠᱚ ᱵᱚᱱᱚᱫᱚᱞ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ ᱯᱮᱱ, ᱟᱭᱫᱷᱟᱨ, ᱳᱴᱤᱯᱤ, ᱰᱤᱯᱤᱰᱤᱯᱤ ᱮᱠᱴ, ᱡᱤᱰᱤᱯᱤ ᱟᱨ, ᱥᱩᱢᱩᱝ ᱮᱴᱤᱴᱤᱯᱤ, ᱤᱭᱯᱤ ᱟᱭ ᱟᱨ ᱡᱤᱱᱤᱥ/ᱵᱨᱮᱱᱰ ᱧᱩᱛᱩᱢ ᱨᱮᱱᱟᱜ ترجᱢᱟᱹ ᱵᱟᱝ ᱠᱚᱨᱟᱣ ᱞᱟᱹᱠᱛᱤ ᱾ \"ᱰᱤᱯᱤᱰᱤᱯᱤ ᱮᱠᱴ, 2023\" ᱞᱮᱠᱟᱱ ᱟᱹᱱ ᱟᱱᱟᱜ ᱵᱚᱨᱱᱚᱱ ᱠᱚᱫᱚ ᱠᱟᱛᱷᱟ ᱟᱨ ᱥᱮᱨᱢᱟ ᱨᱮ ᱵᱟᱝ ᱜᱮ ᱵᱚᱱᱚᱫᱚᱞ ᱛᱟᱦᱮᱸᱱᱟ ᱾ ترجᱢᱟᱜ ᱠᱚᱫᱚ ᱢᱤᱫ ᱜᱮ ᱤᱭᱩ ᱟᱭ ᱴᱷᱟᱶ ᱨᱮ ᱥᱮᱞᱮᱫ ᱦᱳᱭᱳᱜᱼᱟ, ᱠᱩᱠᱤ ᱵᱮᱱᱟᱨ ᱪᱮᱛᱟᱱ ᱨᱮ ᱵᱟᱝ ᱫᱚᱦᱚ ᱦᱳᱭᱳᱜᱼᱟ ᱾ ᱚᱞ ᱨᱮᱭᱟᱜ ᱱᱟᱢᱵᱟᱨ ᱟᱨ ᱛᱟᱹᱞᱤᱠᱟ ᱫᱚ ᱜᱚᱴᱟ ᱞᱮᱠᱟᱛᱮ ᱥᱚᱨᱟᱥᱟᱹᱨᱤ ᱞᱮᱠᱟᱛᱮ ᱦᱳᱭᱳᱜᱼᱟ ᱟᱨ ᱚᱱᱟ ᱨᱮᱭᱟᱜ ᱜᱚᱱᱚᱝ ᱵᱟᱝ ᱜᱮ ᱦᱩᱭ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ 0, 2, 3, 4, 5, 6, 7, 8, 9 ᱥᱟᱫᱷᱟᱨᱚᱱ ᱛᱟᱹᱞᱤᱠᱟ ᱯᱷᱚᱨᱢᱮᱴ ᱰᱤᱰᱤ/ᱮᱢ ᱮᱢ/ᱳᱭᱟᱭᱼᱭᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭ DDD-YYYY hh: mm A → 08-29-2025 11:35 AM ᱛᱟᱹᱞᱤᱠᱟ ᱯᱷᱚᱨᱢᱮᱴ ᱰᱰᱤ ᱪᱟᱸᱫᱳ YYYY → 29 اگست 2025 ᱪᱟᱸᱫᱳ DD, YYYY → 29 اگست 2025 ᱢᱩᱱ DD, YYYY → 29 اگست 2025 ᱰᱰᱤ ᱢᱩᱱ YYYYY → 29 اگست 2025 ᱠᱩᱠᱤ ᱟᱹᱨᱤ ᱾",
        "learnMore": "ᱠᱟᱥᱴᱚᱢᱟᱭᱤᱡ ᱢᱮ ᱾",
        "changeDescription": " "
      },
      "save": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "consentModal": {
        "title": "ᱥᱳᱯᱨᱩᱢᱟᱱᱟᱜ ᱵᱟᱪᱷᱱᱟᱣ ᱠᱚ ᱜᱚᱴᱟᱼᱵᱩᱴᱟᱹ ᱢᱮ ᱾",
        "description": "ᱟᱢ ᱫᱚ ᱯᱮᱡᱽ ᱠᱚ ᱢᱩᱫ ᱨᱮ ᱠᱟᱹᱢᱤ ᱞᱮᱠᱟᱛᱮ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱛᱮ, ᱟᱢᱟᱜ ᱵᱟᱪᱷᱱᱟᱣ ᱠᱚ ᱫᱚᱦᱚ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱥᱟᱫᱷᱟᱨᱚᱱ ᱞᱮᱠᱟᱛᱮ ᱢᱤᱫᱴᱟᱝ ᱳᱭᱮᱵᱽᱥᱟᱭᱤᱴ ᱨᱮ ᱟᱢᱟᱜ ᱩᱯᱟᱹᱭ ᱟᱨᱦᱚᱸ ᱱᱟᱯᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱛᱮ ᱟᱢ ᱠᱳᱠᱤ ᱠᱚ ᱵᱮᱣᱦᱟᱨᱼᱟ ᱾ ᱮᱱᱛᱮ ᱨᱮᱦᱚᱸ, ᱟᱢ ᱟᱢᱟᱜ ᱜᱚᱭᱟᱨᱚᱱ ᱫᱟᱲᱮᱭ ᱢᱟᱱᱟᱣ ᱟᱠᱟᱫᱟ ᱟᱨ ᱚᱱᱟᱛᱮ ᱟᱢ ᱠᱤᱪᱷᱩ ᱞᱮᱠᱟᱱ ᱠᱩᱠᱤ ᱨᱮᱭᱟᱜ ᱪᱷᱟᱹᱲ ᱵᱟᱝ ᱮᱢ ᱞᱟᱹᱜᱤᱫ ᱮ ᱵᱟᱪᱷᱱᱟᱣ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ ᱟᱨᱦᱚᱸ ᱵᱟᱰᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱟᱢᱟᱜ ᱰᱤᱯᱷᱚᱞᱴ ᱥᱮᱴᱤᱝᱥ ᱵᱚᱱᱚᱫᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱟᱭᱢᱟ ᱛᱷᱚᱱᱚᱛ ᱨᱮᱭᱟᱜ ᱦᱤᱫᱤᱝ ᱨᱮ ᱠᱞᱤᱠ ᱢᱮ ᱾ ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱢᱚᱱᱮ ᱦᱩᱭᱩᱜ ᱢᱮ ᱡᱮ ᱠᱤᱪᱷᱩᱠ ᱞᱮᱠᱟᱱ ᱠᱩᱠᱤ ᱵᱚᱱᱫᱮᱡ ᱠᱚᱨᱟᱣ ᱟᱢᱟᱜ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱩᱯᱟᱹᱭ ᱮ ᱮᱥᱮᱨ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ ᱯᱮᱱ, ᱟᱭᱫᱷᱟᱨ, ᱳᱴᱤᱯᱤ, ᱰᱤᱯᱤᱰᱤᱯᱤ ᱮᱠᱴ, ᱡᱤᱰᱤᱯᱤ ᱟᱨ, ᱥᱩᱢᱩᱝ ᱮᱴᱤᱴᱤᱯᱤ, ᱤᱭᱯᱤ ᱟᱭ ᱟᱨ ᱡᱤᱱᱤᱥ/ᱵᱨᱮᱱᱰ ᱧᱩᱛᱩᱢ ᱨᱮᱱᱟᱜ ترجᱢᱟᱹ ᱵᱟᱝ ᱠᱚᱨᱟᱣ ᱞᱟᱹᱠᱛᱤ ᱾ \"ᱰᱤᱯᱤᱰᱤᱯᱤ ᱮᱠᱴ, 2023\" ᱞᱮᱠᱟᱱ ᱟᱹᱱ ᱟᱱᱟᱜ ᱵᱚᱨᱱᱚᱱ ᱠᱚᱫᱚ ᱠᱟᱛᱷᱟ ᱟᱨ ᱥᱮᱨᱢᱟ ᱨᱮ ᱵᱟᱝ ᱜᱮ ᱵᱚᱱᱚᱫᱚᱞ ᱛᱟᱦᱮᱸᱱᱟ ᱾ ترجᱢᱟᱜ ᱠᱚᱫᱚ ᱢᱤᱫ ᱜᱮ ᱤᱭᱩ ᱟᱭ ᱴᱷᱟᱶ ᱨᱮ ᱥᱮᱞᱮᱫ ᱦᱳᱭᱳᱜᱼᱟ, ᱠᱩᱠᱤ ᱵᱮᱱᱟᱨ ᱪᱮᱛᱟᱱ ᱨᱮ ᱵᱟᱝ ᱫᱚᱦᱚ ᱦᱳᱭᱳᱜᱼᱟ ᱾ ᱚᱞ ᱨᱮᱭᱟᱜ ᱱᱟᱢᱵᱟᱨ ᱟᱨ ᱛᱟᱹᱞᱤᱠᱟ ᱫᱚ ᱜᱚᱴᱟ ᱞᱮᱠᱟᱛᱮ ᱥᱚᱨᱟᱥᱟᱹᱨᱤ ᱞᱮᱠᱟᱛᱮ ᱦᱳᱭᱳᱜᱼᱟ ᱟᱨ ᱚᱱᱟ ᱨᱮᱭᱟᱜ ᱜᱚᱱᱚᱝ ᱵᱟᱝ ᱜᱮ ᱦᱩᱭ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ 0, 2, 3, 4, 5, 6, 7, 8, 9 ᱥᱟᱫᱷᱟᱨᱚᱱ ᱛᱟᱹᱞᱤᱠᱟ ᱯᱷᱚᱨᱢᱮᱴ ᱰᱤᱰᱤ/ᱮᱢ ᱮᱢ/ᱳᱭᱟᱭᱼᱭᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭᱼ ᱟᱭ DDD-YYYY hh: mm A → 08-29-2025 11:35 AM ᱛᱟᱹᱞᱤᱠᱟ ᱯᱷᱚᱨᱢᱮᱴ ᱰᱰᱤ ᱪᱟᱸᱫᱳ YYYY → 29 اگست 2025 ᱪᱟᱸᱫᱳ ᱰᱰᱤ, YYYY → 29 اگست 2025 ᱢᱩᱱ ᱰᱰᱤ, YYYYY → 29 اگست 2025 ᱰᱰᱤ ᱢᱩᱱ YYYYY → 29 اگست 2025 ᱾",
        "buttons": {
          "save": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
          "acceptAll": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
          "decline": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱴᱨᱟᱯᱷᱤᱠ, ᱵᱮᱣᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱵᱮᱣᱦᱟᱨ ᱟᱨ ᱡᱳᱜᱟᱡᱳᱜ ᱨᱮᱭᱟᱜ ᱦᱚᱨᱟ ᱠᱚ ᱵᱤᱪᱷᱱᱟᱶ ᱞᱟᱹᱜᱤᱫ ᱜᱚᱲᱚ ᱠᱚ ᱮᱢᱼᱟ ᱾ ᱥᱮᱞᱮᱫ ᱟᱠᱟᱱ ᱚᱱᱩᱢᱟᱹᱱ ᱠᱚ ᱤᱧᱟᱹᱜ ᱛᱚᱛᱩᱛᱚ ᱥᱚᱨᱮᱥ ᱞᱟᱹᱜᱤᱫ, ᱵᱮᱣᱦᱟᱨ ᱫᱟᱲᱮ ᱵᱟᱹᱲᱛᱤ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱥᱟᱱᱟᱢ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮᱹᱭᱟᱜᱼᱟ ᱾ ᱱᱚᱶᱟ ᱛᱷᱚᱱᱚᱛ ᱫᱚ ᱞᱟᱹᱠᱛᱤ ᱠᱟᱱᱟ ᱾"
        },
        "Others": {
          "description": "ᱱᱚᱶᱟ ᱛᱷᱚᱱᱚᱛ ᱨᱮ ᱠᱳᱠᱤ ᱠᱚᱫᱚ ᱥᱮᱞᱮᱫ ᱢᱮᱱᱟᱜᱼᱟ ᱡᱟᱦᱟᱸ ᱫᱚ ᱢᱟᱲᱟᱝ ᱠᱷᱚᱱ ᱞᱟᱹᱭ ᱟᱠᱟᱱ ᱛᱷᱚᱱᱚᱛ ᱠᱚ ᱢᱩᱫᱨᱮ ᱵᱟᱝ ᱥᱮᱞᱮᱫᱚᱜᱼᱟ ᱢᱮᱱᱠᱷᱟᱱ ᱠᱤᱪᱷᱩ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱥᱮ ᱱᱟᱯᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱞᱟᱹᱠᱛᱤ ᱦᱩᱭ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "ᱡᱚᱥ ᱾"
      },
      "purposeItem": {
        "service": "ᱯᱚᱨᱤᱥᱮᱵᱟ ᱾",
        "services": "ᱯᱚᱨᱤᱥᱮᱵᱟ ᱾"
      }
    },
    "urdu": {
      "acceptAll": "سب کو قبول کریں",
      "accept": "قبول کریں۔",
      "decline": "سب کو مسترد کریں",
      "acceptSelected": "منتخب کردہ کو قبول کریں",
      "ok": "سب کو قبول کریں",
      "consentNotice": {
        "description": "ہم آپ کی رازداری کا احترام کرتے ہیں۔ ہم سائٹ کی ضروری فعالیت کے ساتھ ساتھ مارکیٹنگ، شخصی کاری اور تجزیات کو فعال کرنے کے لیے کوکیز کو محفوظ کرتے ہیں۔ \"سب کو قبول کریں\" پر کلک کرکے، آپ ہمارے کوکیز کے استعمال سے اتفاق کرتے ہیں۔ آپ کسی بھی وقت اپنی ترتیبات تبدیل کر سکتے ہیں۔ پین، آدھار، او ٹی پی، ڈی پی ڈی پی ایکٹ، جی ڈی پی آر، صرف ایچ ٹی ٹی پی، یو پی آئی، اور پروڈکٹ/برانڈ ناموں کا ترجمہ کبھی نہیں کیا جانا چاہیے۔ \"ڈی پی ڈی پی ایکٹ، 2023\" جیسے قانونی حوالہ جات الفاظ اور سال میں تبدیل نہیں ہونے چاہئیں۔ ترجمے ایک ہی UI جگہ میں فٹ ہونے چاہئیں، کوکی بینر کو اوورلیپ نہیں کرنا چاہیے۔ متن میں اعداد اور تاریخیں درست شکل میں ہونی چاہئیں اور معنی میں کوئی تبدیلی نہیں ہونی چاہیے۔ : 0، 1، 2، 3، 4، 5، 6، 7، 8، 9 مشترکہ تاریخ کی شکلیں ڈی ڈی/ایم ایم/وائی وائی وائی وائی → 29/08/2025 ایم ایم/ڈی ڈی/وائی وائی وائی وائی → 2025/08/29 ڈی ڈی-ایم ایم-وائی وائی وائی → 29-08-2025 ایم ایم-ڈی ڈی-وائی وائی وائی → 08-29-2025 وائی وائی وائی-ایم ایم-ڈی ڈی → 2025-08-29 (آئی ایس او 8601 معیاری) ڈی۔ ڈی۔ ایم۔ وائی وائی وائی۔ ڈی ڈی-وائی وائی وائی ایچ ایچ: ایم ایم اے → 08-29-2025 11:35 اے ایم ٹیکسٹ فارمیٹس ڈی ڈی ماہ YYYY → 29 اگست 2025 ماہ ڈی ڈی، YYYY → 29 اگست 2025 مون ڈی ڈی، YYYY → اگست 29، 2025 ڈی ڈی مون YYYY → 29 اگست 2025 کوکی پالیسی۔",
        "learnMore": "اپنی مرضی کے مطابق بنائیں",
        "changeDescription": " "
      },
      "save": "قبول کریں۔",
      "consentModal": {
        "title": "رضامندی کی ترجیحات کو حسب ضرورت بنائیں",
        "description": "ہم کوکیز کا استعمال آپ کو صفحات کے درمیان موثر طریقے سے نیویگیشن کرنے، اپنی ترجیحات کو محفوظ کرنے اور عام طور پر کسی ویب سائٹ کے اپنے تجربے کو بہتر بنانے میں مدد کرنے کے لیے کرتے ہیں۔ تاہم، ہم آپ کے رازداری کے حق کو تسلیم کرتے ہیں اور اس لیے آپ کچھ قسم کی کوکیز کی اجازت نہ دینے کا انتخاب کر سکتے ہیں۔ مزید جاننے اور ہماری ڈیفالٹ سیٹنگز کو تبدیل کرنے کے لیے مختلف زمرہ کے عنوانات پر کلک کریں۔ براہ کرم نوٹ کریں کہ بعض قسم کی کوکیز کو مسدود کرنا سائٹ کے آپ کے تجربے کو متاثر کر سکتا ہے۔ پین، آدھار، او ٹی پی، ڈی پی ڈی پی ایکٹ، جی ڈی پی آر، صرف ایچ ٹی ٹی پی، یو پی آئی، اور پروڈکٹ/برانڈ ناموں کا ترجمہ کبھی نہیں کیا جانا چاہیے۔ \"ڈی پی ڈی پی ایکٹ، 2023\" جیسے قانونی حوالہ جات الفاظ اور سال میں تبدیل نہیں ہونے چاہئیں۔ ترجمے ایک ہی UI جگہ میں فٹ ہونے چاہئیں، کوکی بینر کو اوورلیپ نہیں کرنا چاہیے۔ متن میں اعداد اور تاریخیں درست شکل میں ہونی چاہئیں اور معنی میں کوئی تبدیلی نہیں ہونی چاہیے۔ : 0، 1، 2، 3، 4، 5، 6، 7، 8، 9 مشترکہ تاریخ کی شکلیں ڈی ڈی/ایم ایم/وائی وائی وائی وائی → 29/08/2025 ایم ایم/ڈی ڈی/وائی وائی وائی وائی → 2025/08/29 ڈی ڈی-ایم ایم-وائی وائی وائی → 29-08-2025 ایم ایم-ڈی ڈی-وائی وائی وائی → 08-29-2025 وائی وائی وائی-ایم ایم-ڈی ڈی → 2025-08-29 (آئی ایس او 8601 معیاری) ڈی۔ ڈی۔ ایم۔ وائی وائی وائی۔ ڈی ڈی-وائی وائی وائی ایچ ایچ: ایم ایم اے → 08-29-2025 11:35 اے ایم ٹیکسٹ فارمیٹس ڈی ڈی ماہ YYYY → 29 اگست 2025 ماہ ڈی ڈی، YYYY → 29 اگست 2025 مون ڈی ڈی، YYYY → اگست 29,2025 ڈی ڈی مون YYYY → 29 اگست 2025",
        "buttons": {
          "save": "قبول کریں۔",
          "acceptAll": "سب کو قبول کریں",
          "decline": "سب کو مسترد کریں"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "یہ کوکیز ویب سائٹ کے ٹریفک، صارف کے رویے اور مشغولیت کے نمونوں کا تجزیہ کرنے میں ہماری مدد کرتی ہیں۔ جمع کی گئی بصیرت ہمیں مواد کو بہتر بنانے، استعمال کو بڑھانے اور سائٹ کی مجموعی کارکردگی کو بہتر بنانے کی اجازت دیتی ہے۔ یہ زمرہ لازمی ہے"
        },
        "Others": {
          "description": "اس زمرے میں کوکیز شامل ہیں جو پہلے سے طے شدہ زمروں میں فٹ نہیں ہوتی ہیں لیکن ویب سائٹ کی کچھ فعالیتوں یا بہتری کے لیے ضروری ہو سکتی ہیں۔"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "مقصد"
      },
      "purposeItem": {
        "service": "خدمت",
        "services": "خدمات"
      }
    },
    "bodo": {
      "acceptAll": "गासिबो नाजाव।",
      "accept": "नाजाव।",
      "decline": "गासिबोखौ नेवसि।",
      "acceptSelected": "सायख 'जानायखौ नाजाव।",
      "ok": "गासिबो नाजाव।",
      "consentNotice": {
        "description": "जों नोंनि प्राइभेसिखौ मान होयो जों गोनांथार साइटनि खामानिजों लोगोसे मार्केटिं, गावारि खालामनाय आरो एनालाइटिक्स खालामनो थाखाय कुकिजखौ दोनथुमो। \"गासिबो नाजाव\" आव क्लिक खालामनानै, नों जोंनि कुकिफोरनि बाहायनायखौ गनायो। नोंथाङा जायखिजाया समावनो गावनि सेटिंसखौ सोलायनो हायो। पैन, आधार, अ. टि. पि., डि. पि. डि. पि. आइन, जि. डि. पि. आर., एच. टि. टि. पि.-ल ', इउ. पि. आइ. आरो दिहुनजानाय बेसाद/ब्रान्डनि मुंखौ माब्लाबाबो राव दानस्लायनो नाङा। \"डी. पी. डी. पी. आइन, 2023\" बायदि आयेनारि मुंख 'नायफोरा सोदोब आरो बोसोराव सोलायस्लु जाना थानांगौ। राव दानस्लायनायफोरा एखे इउ. आइ. जायगायाव गोरोबहोनांगोन, कुकि बेनारखौ बारस्लायनांगौ नङा। बिजाबाव अनजिमा आरो अक्ट 'फोरा थार महरनि जानांगौ आरो ओंथिआव सोलाय-सोल' जानो नाङा। 0, 2, 3, 4, 5, 6, 7, 8, 9 सरासनस्रा अक्ट 'फरमेट डि. डि./एम. एम./वाई. वाई. वाई. वाई. → 29/08/2025 एम. एम./डी. डी./वाई. वाई. वाई. वाई. → 08/29/2025 वाई. वाई. वाई. वाई./एम. एम./डी. डी. → 2025/08/29 डी. डी.-एम. एम.-वाई. वाई. वाई. वाई. → 08-29-2025 वाई. वाई. वाई. वाई.-एम. एम.-डी. डी. → 2025-08-29 (आई. एस. ओ. 8601 मानथाखो) डी. डी. एम. एम. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. DDD-YYYY hh: mm A → 08-29-2025 11:35 AM टेक्सटुएल फरमेटफोर DD दान YYYY → 29 आगस्त 2025 दान DD, YYYY → 29 आगस्त 2025 मन DD, YYYY → 29 आगस्त 2025 डी. डी. मन YYYY → 29 आगस्त 2025 कुकि पलिसि।",
        "learnMore": "कास्टमाइज खालाम।",
        "changeDescription": " "
      },
      "save": "नाजाव।",
      "consentModal": {
        "title": "गनायथि सायख 'नायफोरखौ कास्टमाइज खालाम।",
        "description": "जों नोंथांखौ पेजफोरनि गेजेराव मोजाङै नेभिगेट खालामनायाव मदद होनो, नोंथांनि गोसो जानायफोरखौ दोनथुमनो आरो सरासनस्रायै नोंथांनि वेबसाइटनि रोंमोनदांथिखौ साबसिन खालामनो थाखाय कुकिफोरखौ बाहायो। जिखिजायामानो, जों नोंनि गावारि मोन्थाइखौ गनायो आरो बेनिखायनो नों माखासे रोखोमनि कुकिसखौ गनायथि होनाङा सायख 'नो हायो। बांसिन मिथिनो आरो जोंनि दिफल्ट सेटिंसखौ सोलायनो थाखाय गुबुन गुबुन थाखोनि हेडिंफोराव क्लिक खालाम। अन्नानै नोजोर हो दि माखासे रोखोमनि कुकिफोरखौ बन्द खालामनाया साइटनि नोंनि रोंमोनदांथिखौ गोहोम खोख्लैनो हागौ। पैन, आधार, अ. टि. पि., डि. पि. डि. पि. आइन, जि. डि. पि. आर., एच. टि. टि. पि.-ल ', इउ. पि. आइ. आरो दिहुनजानाय बेसाद/ब्रान्डनि मुंखौ माब्लाबाबो राव दानस्लायनो नाङा। \"डी. पी. डी. पी. आइन, 2023\" बायदि आयेनारि मुंख 'नायफोरा सोदोब आरो बोसोराव सोलायस्लु जाना थानांगौ। राव दानस्लायनायफोरा एखे इउ. आइ. जायगायाव गोरोबहोनांगोन, कुकि बेनारखौ बारस्लायनांगौ नङा। बिजाबाव अनजिमा आरो अक्ट 'फोरा थार महरनि जानांगौ आरो ओंथिआव सोलाय-सोल' जानो नाङा। 0, 2, 3, 4, 5, 6, 7, 8, 9 सरासनस्रा अक्ट 'फरमेट डि. डि./एम. एम./वाई. वाई. वाई. वाई. → 29/08/2025 एम. एम./डी. डी./वाई. वाई. वाई. वाई. → 08/29/2025 वाई. वाई. वाई. वाई./एम. एम./डी. डी. → 2025/08/29 डी. डी.-एम. एम.-वाई. वाई. वाई. वाई. → 08-29-2025 वाई. वाई. वाई. वाई.-एम. एम.-डी. डी. → 2025-08-29 (आई. एस. ओ. 8601 मानथाखो) डी. डी. एम. एम. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. DDD-YYYY hh: mm A → 08-29-2025 11:35 AM टेक्सटुएल फरमेटस DD मन्थ YYYY → 29 आगस्त 2025 मन्थ DD, YYYY → 29 आगस्त 2025 मन DD, YYYY → 29 आगस्त 2025 मन YYYYY",
        "buttons": {
          "save": "नाजाव।",
          "acceptAll": "गासिबो नाजाव।",
          "decline": "गासिबोखौ नेवसि।"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "बे कुकिफोरा जोंनो वेबसाइट ट्राफिक, बाहायगिरिनि आखु आरो मावसोमनाय महरफोरखौ बिजिरनायाव मदद खालामो। बुथुमनाय मोनदांथिफोरा जोंनो आयदाफोरखौ साबसिन खालामनो, बाहायजाथावखौ बांहोनो आरो गासै साइट दिन्थिफुंनायखौ जौगाहोनो गनायथि होयो। बे थाखोआ गोनांथार।"
        },
        "Others": {
          "description": "बे थाखोआ बै कुकिफोरखौ लाफायो जाय सिगां थि खालामनाय थाखोफोराव थाङा नाथाय माखासे वेबसाइटनि खामानि एबा जौगाथायनि थाखाय गोनां जानो हागौ।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "थांखिया"
      },
      "purposeItem": {
        "service": "सिबिथाइ।",
        "services": "सिबिथाइफोर।"
      }
    },
    "odia": {
      "acceptAll": "ସମସ୍ତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ।",
      "accept": "ଗ୍ରହଣ କରନ୍ତୁ।",
      "decline": "ସମସ୍ତକୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ",
      "acceptSelected": "ମନୋନୀତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ",
      "ok": "ସମସ୍ତ ଗ୍ରହଣ କରନ୍ତୁ",
      "consentNotice": {
        "description": "ଆମେ ଆପଣଙ୍କ ଗୋପନୀୟତାକୁ ସମ୍ମାନ କରୁ, ଆମେ ଅତ୍ୟାବଶ୍ୟକ ସାଇଟ୍ କାର୍ଯ୍ୟକାରିତା ତଥା ମାର୍କେଟିଂ, ବ୍ୟକ୍ତିଗତକରଣ ଏବଂ ବିଶ୍ଳେଷଣକୁ ସକ୍ଷମ କରିବା ପାଇଁ କୁକିଜ୍ ଷ୍ଟୋର୍ କରୁ। \"ସମସ୍ତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ\" ଉପରେ କ୍ଲିକ୍ କରି, ଆପଣ ଆମର କୁକିଜ୍ ବ୍ୟବହାର ପାଇଁ ରାଜି ହୁଅନ୍ତି। ଆପଣ ଯେକୌଣସି ସମୟରେ ନିଜର ସେଟିଂ ବଦଳାଇ ପାରିବେ। ପାନ୍, ଆଧାର, ଓଟିପି, ଡିପିଡିପି ଆଇନ, ଜିଡିପିଆର, ଏଚଟିଟିପି-କେବଳ, ୟୁପିଆଇ, ଏବଂ ଉତ୍ପାଦ/ବ୍ରାଣ୍ଡ ନାମ କଦାପି ଅନୁବାଦ କରାଯିବା ଉଚିତ ନୁହେଁ। \"ଡିପିଡିପି ଅଧିନିୟମ, 2023\" ଭଳି ଆଇନଗତ ସନ୍ଦର୍ଭଗୁଡ଼ିକ ଶବ୍ଦ ଏବଂ ବର୍ଷରେ ଅପରିବର୍ତ୍ତିତ ରହିବା ଆବଶ୍ୟକ। ଅନୁବାଦଗୁଡ଼ିକ ସମାନ ୟୁ. ଆଇ. ସ୍ଥାନରେ ଖାପ ଖୁଆଇବା ଉଚିତ, କୁକି ବ୍ୟାନରକୁ ଓଭରଲାପ୍ କରିବା ଉଚିତ ନୁହେଁ। ପାଠ୍ୟରେ ଥିବା ସଂଖ୍ୟା ଏବଂ ତାରିଖଗୁଡ଼ିକ ସଠିକ୍ ଫର୍ମାଟରେ ଏବଂ ଅର୍ଥରେ ଅପରିବର୍ତ୍ତିତ ରହିବା ଆବଶ୍ୟକ। 0, 2, 3, 4, 5, 6, 7, 8, 9 ସାଧାରଣ ତାରିଖ ଫର୍ମାଟ୍ ଡି. ଡି./ଏମ୍. ଏମ୍./ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. : 00 ଏମ୍. ଏମ୍.-ଡି. ଡି.-ୱାଇ. ୱାଇ. ୱାଇ. ହ୍.: ଏମ୍. ଏମ୍. ଏ. → 08-29-2025 11:35 ଏ. ଏମ୍. ଟେକ୍ସଚୁଆଲ୍ ଫର୍ମାଟ୍ ଡି. ଡି. ମାସ ୱାଇ. ୱାଇ. ୱାଇ. → 29 ଅଗଷ୍ଟ 2025 ମାସ ଡି. ଡି., ୱାଇ. ୱାଇ. ୱାଇ.-29 ଅଗଷ୍ଟ 2025 ସୋମ ଡି. ଡି., ୱାଇ. ୱାଇ. ୱାଇ.-29 ଅଗଷ୍ଟ 2025 ଡି. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ.-29 ଅଗଷ୍ଟ 2025 କୁକି ନୀତି।",
        "learnMore": "ସ୍ୱତନ୍ତ୍ର କରନ୍ତୁ",
        "changeDescription": " "
      },
      "save": "ଗ୍ରହଣ କରନ୍ତୁ।",
      "consentModal": {
        "title": "ସମ୍ମତି ପସନ୍ଦଗୁଡ଼ିକୁ ସ୍ୱତନ୍ତ୍ର କରନ୍ତୁ",
        "description": "ଆମେ ଆପଣଙ୍କୁ ପୃଷ୍ଠାଗୁଡ଼ିକ ମଧ୍ୟରେ ଦକ୍ଷତାର ସହ ନେଭିଗେଟ୍ କରିବାରେ, ଆପଣଙ୍କ ପସନ୍ଦକୁ ସଂରକ୍ଷଣ କରିବାରେ ଏବଂ ସାଧାରଣତଃ ଏକ ୱେବ୍ସାଇଟ୍ରେ ଆପଣଙ୍କ ଅଭିଜ୍ଞତାକୁ ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ କରିବାକୁ କୁକିଜ୍ ବ୍ୟବହାର କରୁ। ତଥାପି, ଆମେ ଆପଣଙ୍କ ଗୋପନୀୟତାର ଅଧିକାରକୁ ସ୍ୱୀକାର କରୁ ଏବଂ ତେଣୁ ଆପଣ କିଛି ପ୍ରକାରର କୁକିଜକୁ ଅନୁମତି ନଦେବାକୁ ବାଛିପାରିବେ। ଅଧିକ ଜାଣିବା ପାଇଁ ବିଭିନ୍ନ ବର୍ଗର ଶୀର୍ଷକ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ ଆମର ପୂର୍ବନିର୍ଦ୍ଧାରିତ ସେଟିଂ ବଦଳାନ୍ତୁ। ଦୟାକରି ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ରକାରର କୁକିଜକୁ ଅବରୋଧ କରିବା ସାଇଟର ଆପଣଙ୍କ ଅଭିଜ୍ଞତାକୁ ପ୍ରଭାବିତ କରିପାରେ। ପାନ୍, ଆଧାର, ଓଟିପି, ଡିପିଡିପି ଆଇନ, ଜିଡିପିଆର, ଏଚଟିଟିପି-କେବଳ, ୟୁପିଆଇ, ଏବଂ ଉତ୍ପାଦ/ବ୍ରାଣ୍ଡ ନାମ କଦାପି ଅନୁବାଦ କରାଯିବା ଉଚିତ ନୁହେଁ। \"ଡିପିଡିପି ଅଧିନିୟମ, 2023\" ଭଳି ଆଇନଗତ ସନ୍ଦର୍ଭଗୁଡ଼ିକ ଶବ୍ଦ ଏବଂ ବର୍ଷରେ ଅପରିବର୍ତ୍ତିତ ରହିବା ଆବଶ୍ୟକ। ଅନୁବାଦଗୁଡ଼ିକ ସମାନ ୟୁ. ଆଇ. ସ୍ଥାନରେ ଖାପ ଖୁଆଇବା ଉଚିତ, କୁକି ବ୍ୟାନରକୁ ଓଭରଲାପ୍ କରିବା ଉଚିତ ନୁହେଁ। ପାଠ୍ୟରେ ଥିବା ସଂଖ୍ୟା ଏବଂ ତାରିଖଗୁଡ଼ିକ ସଠିକ୍ ଫର୍ମାଟରେ ଏବଂ ଅର୍ଥରେ ଅପରିବର୍ତ୍ତିତ ରହିବା ଆବଶ୍ୟକ। 0, 2, 3, 4, 5, 6, 7, 8, 9 ସାଧାରଣ ତାରିଖ ଫର୍ମାଟ୍ ଡି. ଡି./ଏମ୍. ଏମ୍./ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. ୱାଇ. : 00 ଏମ୍. ଏମ୍.-ଡି. ଡି.-ୱାଇ. ୱାଇ. ୱାଇ. ହ୍.: ଏମ୍. ଏମ୍. ଏ. → 08-29-2025 11:35 ଏ. ଏମ୍. ପାଠ୍ୟ ଫର୍ମାଟ୍ ଡି. ଡି. ମାସ ୱାଇ. ୱାଇ. ୱାଇ. → 29 ଅଗଷ୍ଟ 2025 ମାସ ଡି. ଡି., ୱାଇ. ୱାଇ. ୱାଇ.-29 ଅଗଷ୍ଟ 2025 ସୋମ ଡି. ଡି., ୱାଇ. ୱାଇ. ୱାଇ.-29 ଅଗଷ୍ଟ 2025 ଡି. ୱାଇ. ୱାଇ. ୱାଇ.",
        "buttons": {
          "save": "ଗ୍ରହଣ କରନ୍ତୁ।",
          "acceptAll": "ସମସ୍ତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ।",
          "decline": "ସମସ୍ତକୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "ଏହି କୁକିଜ୍ ଆମକୁ ୱେବ୍ସାଇଟ୍ ଟ୍ରାଫିକ୍, ବ୍ୟବହାରକାରୀଙ୍କ ଆଚରଣ ଏବଂ ପ୍ରବୃତ୍ତି ଢାଞ୍ଚା ବିଶ୍ଳେଷଣ କରିବାରେ ସାହାଯ୍ୟ କରେ | ସଂଗୃହୀତ ଅନ୍ତର୍ଦୃଷ୍ଟି ଆମକୁ ବିଷୟବସ୍ତୁକୁ ଅପ୍ଟିମାଇଜ୍ କରିବାକୁ, ବ୍ୟବହାରଯୋଗ୍ୟତା ବୃଦ୍ଧି କରିବାକୁ ଏବଂ ସାମଗ୍ରିକ ସାଇଟ୍ ପ୍ରଦର୍ଶନରେ ଉନ୍ନତି କରିବାକୁ ଅନୁମତି ଦିଏ | ଏହି ବର୍ଗଟି ବାଧ୍ୟତାମୂଳକ"
        },
        "Others": {
          "description": "ଏହି ବର୍ଗରେ କୁକିଜ ଅନ୍ତର୍ଭୁକ୍ତ ଅଛି ଯାହା ପୂର୍ବନିର୍ଦ୍ଧାରିତ ବର୍ଗରେ ଖାପ ଖାଏ ନାହିଁ କିନ୍ତୁ ନିର୍ଦ୍ଦିଷ୍ଟ ୱେବସାଇଟ୍ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ଉନ୍ନତି ପାଇଁ ଆବଶ୍ୟକ ହୋଇପାରେ |"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "ଉଦ୍ଦେଶ୍ୟ"
      },
      "purposeItem": {
        "service": "ସେବା",
        "services": "ସେବା"
      }
    },
    "marathi": {
      "acceptAll": "सर्व स्वीकारा.",
      "accept": "स्वीकारा.",
      "decline": "सर्व नाकारा",
      "acceptSelected": "निवडलेले स्वीकारा",
      "ok": "सर्व स्वीकारा",
      "consentNotice": {
        "description": "आम्ही तुमच्या गोपनीयतेचा आदर करतो आम्ही आवश्यक साइट कार्यक्षमता, तसेच विपणन, वैयक्तिकरण आणि विश्लेषण सक्षम करण्यासाठी कुकीज संचयित करतो. \"सर्व स्वीकारा\" वर क्लिक करून, तुम्ही आमच्या कुकीजच्या वापरास संमती देता. तुम्ही कधीही तुमचे सेटिंग बदलू शकता. पॅन, आधार, ओ. टी. पी., डी. पी. डी. पी. कायदा, जी. डी. पी. आर., केवळ एच. टी. टी. पी., यू. पी. आय. आणि उत्पादन/ब्रँड नावांचे भाषांतर कधीही केले जाऊ नये. \"डी. पी. डी. पी. कायदा, 2023\" सारखे कायदेशीर संदर्भ शब्दांकन आणि वर्षामध्ये अपरिवर्तित राहिले पाहिजेत. अनुवाद एकाच यू. आय. जागेत बसायला हवेत, कुकी बॅनरला ओव्हरलॅप करू नये. मजकुरातील संख्या आणि तारखा योग्य स्वरूपात असाव्यात आणि त्यांचा अर्थ बदललेला नसावा. 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तारीख स्वरूप डीडी/एमएम/वायवायवायवाय............................................... डी. डी.-वाय. वाय. वाय. एच. एच.: एम. एम. ए. → 08-29-2025 11:35 ए. एम. मजकूर स्वरूप डी. डी. महिना वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 महिना डी. डी., वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 सोम डी. डी., वाय. वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 डी. डी. सोम वाय. वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 कुकी धोरण.",
        "learnMore": "सानुकूलित करा",
        "changeDescription": " "
      },
      "save": "स्वीकारा.",
      "consentModal": {
        "title": "संमतीची प्राधान्ये सानुकूलित करा",
        "description": "पृष्ठांदरम्यान कार्यक्षमतेने नेव्हिगेट करण्यात, तुमची प्राधान्ये संचयित करण्यात आणि सामान्यतः वेबसाइटचा तुमचा अनुभव सुधारण्यात मदत करण्यासाठी आम्ही कुकीज वापरतो. तथापि, आम्ही तुमच्या गोपनीयतेच्या अधिकाराची कबुली देतो आणि म्हणूनच तुम्ही काही प्रकारच्या कुकीजला परवानगी न देणे निवडू शकता. अधिक जाणून घेण्यासाठी आणि आपली पूर्वनिर्धारित मांडणी बदलण्यासाठी विविध श्रेणी शीर्षकांवर क्लिक करा. कृपया लक्षात घ्या की विशिष्ट प्रकारच्या कुकीज अवरोधित केल्याने तुमच्या संकेतस्थळावरील अनुभवावर परिणाम होऊ शकतो. पॅन, आधार, ओ. टी. पी., डी. पी. डी. पी. कायदा, जी. डी. पी. आर., केवळ एच. टी. टी. पी., यू. पी. आय. आणि उत्पादन/ब्रँड नावांचे भाषांतर कधीही केले जाऊ नये. \"डी. पी. डी. पी. कायदा, 2023\" सारखे कायदेशीर संदर्भ शब्दांकन आणि वर्षामध्ये अपरिवर्तित राहिले पाहिजेत. अनुवाद एकाच यू. आय. जागेत बसायला हवेत, कुकी बॅनरला ओव्हरलॅप करू नये. मजकुरातील संख्या आणि तारखा योग्य स्वरूपात असाव्यात आणि त्यांचा अर्थ बदललेला नसावा. 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तारीख स्वरूप डीडी/एमएम/वायवायवायवाय............................................... डी. डी.-वाय. वाय. वाय. एच.: एम. एम. ए. → 08-29-2025 11:35 ए. एम. मजकूर स्वरूप डी. डी. महिना वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 महिना डी. डी., वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 सोम डी. डी., वाय. वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 सोम वाय. वाय. वाय. वाय. वाय.",
        "buttons": {
          "save": "स्वीकारा.",
          "acceptAll": "सर्व स्वीकारा.",
          "decline": "सर्व नाकारा"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "या कुकीज आम्हाला वेबसाइटची रहदारी, वापरकर्त्याचे वर्तन आणि गुंतवणूकीच्या पद्धतींचे विश्लेषण करण्यात मदत करतात. गोळा केलेली अंतर्दृष्टी आम्हाला सामग्री अनुकूल करण्यास, उपयुक्तता वाढविण्यास आणि एकूण साइट कामगिरी सुधारण्यास अनुमती देते. ही श्रेणी अनिवार्य आहे"
        },
        "Others": {
          "description": "या श्रेणीमध्ये अशा कुकीज समाविष्ट आहेत ज्या पूर्वनिर्धारित श्रेणींमध्ये बसत नाहीत परंतु वेबसाइटच्या विशिष्ट कार्यक्षमता किंवा सुधारणांसाठी आवश्यक असू शकतात."
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "उद्देश"
      },
      "purposeItem": {
        "service": "सेवा",
        "services": "सेवा"
      }
    },
    "assamese": {
      "acceptAll": "সকলো গ্ৰহণ কৰক",
      "accept": "গ্ৰহণ কৰক",
      "decline": "সকলোবোৰ নাকচ কৰক",
      "acceptSelected": "নিৰ্বাচিত গ্ৰহণ কৰক",
      "ok": "সকলো গ্ৰহণ কৰক",
      "consentNotice": {
        "description": "আমি আপোনাৰ গোপনীয়তাক সন্মান কৰোঁ আমি অত্যাৱশ্যকীয় ছাইট কাৰ্য্যকৰীতা, লগতে বিপণন, ব্যক্তিগতকৰণ আৰু বিশ্লেষণ সক্ষম কৰিবলৈ কুকিজ সংৰক্ষণ কৰোঁ। \"সকলো গ্ৰহণ কৰক\" ক্লিক কৰি, আপুনি আমাৰ কুকিজৰ ব্যৱহাৰত সন্মতি প্ৰদান কৰে। আপুনি যিকোনো সময়তে আপোনাৰ ছেটিংছ সলনি কৰিব পাৰে। পেন, আধাৰ, অ 'টিপি, ডিপিডিপি আইন, জিডিপিআৰ, এইচটিটিপি-কেৱল, ইউপিআই, আৰু সামগ্ৰী/ব্ৰেণ্ডৰ নাম কেতিয়াও অনুবাদ কৰিব নালাগে। \"ডিপিডিপি আইন, 2023\" ৰ দৰে আইনী প্ৰসংগবোৰ শব্দ আৰু বছৰত অপৰিৱৰ্তিত থাকিব লাগিব। অনুবাদবোৰ একেটা ইউ. আই. স্থানত খাপ খোৱা উচিত, কুকি বেনাৰ অতিৰিক্ত কৰা উচিত নহয়। পাঠৰ সংখ্যা আৰু তাৰিখবোৰ সঠিক বিন্যাসত থাকিব লাগিব আৰু অৰ্থত সলনি নহ 'ব লাগিব। 0, 2, 3, 4, 5, 6, 7, 8, 9 সাধাৰণ তাৰিখৰ বিন্যাসসমূহ ডিডি/এমএম/ৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইএমএম/ডিডিৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱ DDD-YYYY hh: mm A → 08-29-2025 11:35 AM টেক্সচুৱেল ফৰমেট ডিডি মাহ YYYY → 29 আগষ্ট 2025 মাহ ডিডি, YYYY → 29 আগষ্ট, 2025 সোম ডিডি, YYYY → 29 আগষ্ট, 2025 ডিডি মন YYYYY → 29 আগষ্ট 2025 কুকি নীতি।",
        "learnMore": "স্বনিৰ্ধাৰিত কৰক",
        "changeDescription": " "
      },
      "save": "গ্ৰহণ কৰক",
      "consentModal": {
        "title": "সন্মতিৰ পছন্দসমূহ স্বনিৰ্বাচিত কৰক",
        "description": "আমি আপোনাক পৃষ্ঠাসমূহৰ মাজত কাৰ্য্যকৰীভাৱে নেভিগেট কৰাত সহায় কৰিবলৈ, আপোনাৰ পছন্দসমূহ সংৰক্ষণ কৰিবলৈ আৰু সাধাৰণতে ৱেবছাইট এটাৰ আপোনাৰ অভিজ্ঞতা উন্নত কৰিবলৈ কুকিজ ব্যৱহাৰ কৰোঁ। অৱশ্যে, আমি আপোনাৰ গোপনীয়তাৰ অধিকাৰক স্বীকাৰ কৰো আৰু সেয়েহে আপুনি কিছুমান প্ৰকাৰৰ কুকিজৰ অনুমতি নিদিব বিচাৰিব পাৰে। অধিক জানিবলৈ আৰু আমাৰ ডিফল্ট ছেটিংছ সলনি কৰিবলৈ বিভিন্ন শ্ৰেণীৰ শীৰ্ষকত ক্লিক কৰক। অনুগ্ৰহ কৰি মন কৰিব যে কিছুমান নিৰ্দিষ্ট ধৰণৰ কুকিজ ব্লক কৰিলে আপোনাৰ ছাইটৰ অভিজ্ঞতাত প্ৰভাৱ পৰিব পাৰে। পেন, আধাৰ, অ 'টিপি, ডিপিডিপি আইন, জিডিপিআৰ, এইচটিটিপি-কেৱল, ইউপিআই, আৰু সামগ্ৰী/ব্ৰেণ্ডৰ নাম কেতিয়াও অনুবাদ কৰিব নালাগে। \"ডিপিডিপি আইন, 2023\" ৰ দৰে আইনী প্ৰসংগবোৰ শব্দ আৰু বছৰত অপৰিৱৰ্তিত থাকিব লাগিব। অনুবাদবোৰ একেটা ইউ. আই. স্থানত খাপ খোৱা উচিত, কুকি বেনাৰ অতিৰিক্ত কৰা উচিত নহয়। পাঠৰ সংখ্যা আৰু তাৰিখবোৰ সঠিক বিন্যাসত থাকিব লাগিব আৰু অৰ্থত সলনি নহ 'ব লাগিব। 0, 2, 3, 4, 5, 6, 7, 8, 9 সাধাৰণ তাৰিখৰ বিন্যাসসমূহ ডিডি/এমএম/ৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইএমএম/ডিডিৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱাইৱ DDD-YYYY hh: mm A → 08-29-2025 11:35 AM টেক্সচুৱেল ফৰমেট ডিডি মাহ YYYY → 29 আগষ্ট 2025 মাহ ডিডি, YYYY → 29 আগষ্ট, 2025 সোম ডিডি, YYYY → 29 আগষ্ট, 2025 ডিডি মন YYYYY → 29 আগষ্ট 2025",
        "buttons": {
          "save": "গ্ৰহণ কৰক",
          "acceptAll": "সকলো গ্ৰহণ কৰক",
          "decline": "সকলোবোৰ নাকচ কৰক"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "এই কুকিজবোৰে আমাক ৱেবছাইটৰ ট্ৰেফিক, ব্যৱহাৰকাৰীৰ আচৰণ, আৰু ব্যস্ততাৰ ধৰণ বিশ্লেষণ কৰাত সহায় কৰে। সংগ্ৰহ কৰা অন্তৰ্দৃষ্টিয়ে আমাক সমল অনুকূল কৰিবলৈ, ব্যৱহাৰযোগ্যতা বৃদ্ধি কৰিবলৈ আৰু সামগ্ৰিক ছাইটৰ প্ৰদৰ্শন উন্নত কৰাত সহায় কৰে। এই শ্ৰেণীটো বাধ্যতামূলক"
        },
        "Others": {
          "description": "এই শ্ৰেণীত কুকিজ অন্তৰ্ভুক্ত থাকে যিবোৰ পূৰ্বনিৰ্ধাৰিত শ্ৰেণীত খাপ নাখায় কিন্তু কিছুমান ৱেবছাইটৰ কাৰ্য্যকৰীতা বা উন্নতিৰ বাবে প্ৰয়োজনীয় হ 'ব পাৰে।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "উদ্দেশ্য"
      },
      "purposeItem": {
        "service": "সেৱা",
        "services": "সেৱাসমূহ"
      }
    },
    "maithili": {
      "acceptAll": "सभकेँ स्वीकार करू।",
      "accept": "स्वीकार करू।",
      "decline": "सभकेँ अस्वीकार करू।",
      "acceptSelected": "चुनल गेलकेँ स्वीकार करू।",
      "ok": "सभकेँ स्वीकार करू।",
      "consentNotice": {
        "description": "हम अहाँक गोपनीयता के सम्मान करैत छी हम आवश्यक साइट कार्यक्षमता के संग-संग विपणन, वैयक्तिकरण आ विश्लेषण के सक्षम करै लेल कुकीज स्टोर करैत छी। \"सभ स्वीकार करू\" पर क्लिक कऽ अहाँ हमर कुकीजक उपयोगक लेल सहमति दैत छी। अहाँ कोनो समय अपन व्यवस्था बदल सकैत छी। पैन, आधार, ओ. टी. पी., डी. पी. डी. पी. अधिनियम, जी. डी. पी. आर., केवल एच. टी. टी. पी., यू. पी. आई., आ उत्पाद/ब्राण्डक नामक अनुवाद कहियो नहि करबाक चाही। \"डी. पी. डी. पी. अधिनियम, 2023\" सन कानूनी सन्दर्भ शब्द आ वर्षमे अपरिवर्तित रहबाक चाही। अनुवाद एकहि यूआई स्पेसमे फिट होयबाक चाही, कुकी बैनरकेँ ओवरलैप नहि करबाक चाही। पाठमे संख्या आ तिथि सही प्रारूपमे आ अर्थमे अपरिवर्तित रहबाक चाही। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तिथि प्रारूप डी. डी./एम. एम./वाई. वाई. वाई. वाई. → 29/08/2025 एम. एम./डी. डी./वाई. वाई. वाई. वाई. → 08/29/2025 वाई. वाई. वाई. वाई./एम. एम./डी. डी. → 2025/08/29 डी. डी.-एम. एम.-वाई. वाई. वाई. → 08-29-2025 वाई. वाई. वाई. वाई.-एम. एम.-डी. डी. → 2025-08-29 (आई. एस. ओ. 8601 मानक) डी. डी. एम. एम. वाई. वाई. वाई. वाई. → 29.08.2025 वाई. वाई. वाई. वाई. एम. एम. एम. डी. 00 एमएम-डीडी-वाईवाईवाईएचएचः एमएम ए → 08-29-2025 11:35 एएम टेक्स्ट फॉर्मेट्स डीडी महीना वाईवाईवाई → 29 अगस्त 2025 महीना डीडी, वाईवाईवाईवाई → 29 अगस्त, 2025 सोम डीडी, वाईवाईवाईवाई → 29 अगस्त, 2025 डीडी सोम वाईवाईवाईवाई → 29 अगस्त 2025 कुकी नीति।",
        "learnMore": "अनुकूलित करू।",
        "changeDescription": " "
      },
      "save": "स्वीकार करू।",
      "consentModal": {
        "title": "सहमति प्राथमिकता केँ अनुकूलित करू।",
        "description": "हम कुकीज के उपयोग अहाँ के पेज के बीच कुशलता सँ नेविगेट करै मे मदद करै लेल करैत छी, अपन प्राथमिकता के स्टोर करै लेल, आर आम तौर पर कोनो वेबसाइट के अपन अनुभव के बेहतर करै लेल। यद्यपि, हम अहाँक गोपनीयताक अधिकारकेँ स्वीकार करैत छी आ एहि लेल अहाँ किछु प्रकारक कुकीजकेँ अनुमति नहि देबाक विकल्प चुन सकैत छी। बेसी जानकारी प्राप्त करबाक लेल विभिन्न श्रेणीक शीर्षक पर क्लिक करू आ अपन पूर्वनिर्धारित सेटिंग्स बदलू। कृपया ध्यान राखू जे किछु प्रकारक कुकीजकेँ अवरुद्ध करब साइटक अहाँक अनुभवकेँ प्रभावित कऽ सकैत अछि। पैन, आधार, ओ. टी. पी., डी. पी. डी. पी. अधिनियम, जी. डी. पी. आर., केवल एच. टी. टी. पी., यू. पी. आई., आ उत्पाद/ब्राण्डक नामक अनुवाद कहियो नहि करबाक चाही। \"डी. पी. डी. पी. अधिनियम, 2023\" सन कानूनी सन्दर्भ शब्द आ वर्षमे अपरिवर्तित रहबाक चाही। अनुवाद एकहि यूआई स्पेसमे फिट होयबाक चाही, कुकी बैनरकेँ ओवरलैप नहि करबाक चाही। पाठमे संख्या आ तिथि सही प्रारूपमे आ अर्थमे अपरिवर्तित रहबाक चाही। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तिथि प्रारूप डी. डी./एम. एम./वाई. वाई. वाई. वाई. → 29/08/2025 एम. एम./डी. डी./वाई. वाई. वाई. वाई. → 08/29/2025 वाई. वाई. वाई. वाई./एम. एम./डी. डी. → 2025/08/29 डी. डी.-एम. एम.-वाई. वाई. वाई. → 08-29-2025 वाई. वाई. वाई. वाई.-एम. एम.-डी. डी. → 2025-08-29 (आई. एस. ओ. 8601 मानक) डी. डी. एम. एम. वाई. वाई. वाई. वाई. → 29.08.2025 वाई. वाई. वाई. वाई. एम. एम. एम. डी. 00 एमएम-डीडी-वाईवाईवाईएचएचः एमएम ए → 08-29-2025 11:35 एएम पाठ्य प्रारूप डीडी महीना वाईवाईवाई → 29 अगस्त 2025 महीना डीडी, वाईवाईवाईवाई → 29 अगस्त, 2025 सोम डीडी, वाईवाईवाईवाई → 29 अगस्त, 2025 डीडी सोम वाईवाईवाईवाई → 29 अगस्त 2025",
        "buttons": {
          "save": "स्वीकार करू।",
          "acceptAll": "सभकेँ स्वीकार करू।",
          "decline": "सभकेँ अस्वीकार करू।"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "ई कुकीज वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार, आ संलग्नता पैटर्नक विश्लेषण करबामे हमरा सभक सहायता करैत अछि। एकत्रित अंतर्दृष्टि हमरा सभकेँ सामग्रीकेँ अनुकूलित करबाक, उपयोगिताकेँ बढ़यबाक, आ समग्र साइट प्रदर्शनमे सुधार करबाक अनुमति दैत अछि। ई श्रेणी अनिवार्य अछि।"
        },
        "Others": {
          "description": "एहि श्रेणीमे कुकीज शामिल अछि जे पूर्वनिर्धारित श्रेणीमे फिट नहि होइत अछि मुदा वेबसाइटक किछु कार्यक्षमता वा सुधारक लेल आवश्यक भऽ सकैत अछि।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "उद्देश्य"
      },
      "purposeItem": {
        "service": "सेवा",
        "services": "सेवा"
      }
    },
    "tamil": {
      "acceptAll": "அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்.",
      "accept": "ஏற்றுக்கொள்.",
      "decline": "அனைத்தையும் நிராகரிக்கவும்",
      "acceptSelected": "தேர்ந்தெடுக்கப்பட்டவர்களை ஏற்றுக்கொள்ளுங்கள்",
      "ok": "அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்",
      "consentNotice": {
        "description": "அத்தியாவசிய தள செயல்பாடு, சந்தைப்படுத்தல், தனிப்பயனாக்கம் மற்றும் பகுப்பாய்வு ஆகியவற்றை செயல்படுத்த உங்கள் தனியுரிமையை நாங்கள் மதிக்கிறோம். \"அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்\" என்பதைக் கிளிக் செய்வதன் மூலம், நாங்கள் குக்கீகளைப் பயன்படுத்துவதை நீங்கள் ஒப்புக்கொள்கிறீர்கள். நீங்கள் எந்த நேரத்திலும் உங்கள் அமைப்புகளை மாற்றலாம். பான், ஆதார், ஓடிபி, டிபிடிபி சட்டம், ஜிடிபிஆர், எச். டி. டி. பி-மட்டும், யுபிஐ மற்றும் தயாரிப்பு/பிராண்ட் பெயர்கள் ஒருபோதும் மொழிபெயர்க்கப்படக்கூடாது. \"டிபிடிபி சட்டம், 2023\" போன்ற சட்ட குறிப்புகள் சொற்களிலும் ஆண்டிலும் மாறாமல் இருக்க வேண்டும். மொழிபெயர்ப்புகள் ஒரே யுஐ இடத்தில் பொருந்த வேண்டும், குக்கீ பேனரை ஒன்றுடன் ஒன்று இணைக்கக்கூடாது. உரையில் உள்ள எண்கள் மற்றும் தேதிகள் சரியான வடிவத்தில் இருக்க வேண்டும் மற்றும் அர்த்தத்தில் மாறாமல் இருக்க வேண்டும். : 0,1,2,3,4,5,6,7,8,9 பொதுவான தேதி வடிவங்கள் டிடி/எம்எம்/ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய் : 00 எம்எம்-டிடி-ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒ",
        "learnMore": "தனிப்பயனாக்குங்கள்",
        "changeDescription": " "
      },
      "save": "ஏற்றுக்கொள்.",
      "consentModal": {
        "title": "சம்மத விருப்பங்களைத் தனிப்பயனாக்குங்கள்",
        "description": "பக்கங்களுக்கு இடையில் திறம்பட செல்லவும், உங்கள் விருப்பங்களை சேமிக்கவும், பொதுவாக ஒரு வலைத்தளத்தைப் பற்றிய உங்கள் அனுபவத்தை மேம்படுத்தவும் குக்கீகளைப் பயன்படுத்துகிறோம். இருப்பினும், தனியுரிமைக்கான உங்கள் உரிமையை நாங்கள் ஒப்புக்கொள்கிறோம், எனவே சில வகையான குக்கீகளை அனுமதிக்க வேண்டாம் என்று நீங்கள் தேர்வு செய்யலாம். மேலும் அறிய பல்வேறு வகை தலைப்புகளைக் கிளிக் செய்து நமது இயல்புநிலை அமைப்புகளை மாற்றவும். சில வகையான குக்கீகளைத் தடுப்பது தளத்தின் உங்கள் அனுபவத்தை பாதிக்கலாம் என்பதை நினைவில் கொள்க. பான், ஆதார், ஓடிபி, டிபிடிபி சட்டம், ஜிடிபிஆர், எச். டி. டி. பி-மட்டும், யுபிஐ மற்றும் தயாரிப்பு/பிராண்ட் பெயர்கள் ஒருபோதும் மொழிபெயர்க்கப்படக்கூடாது. \"டிபிடிபி சட்டம், 2023\" போன்ற சட்ட குறிப்புகள் சொற்களிலும் ஆண்டிலும் மாறாமல் இருக்க வேண்டும். மொழிபெயர்ப்புகள் ஒரே யுஐ இடத்தில் பொருந்த வேண்டும், குக்கீ பேனரை ஒன்றுடன் ஒன்று இணைக்கக்கூடாது. உரையில் உள்ள எண்கள் மற்றும் தேதிகள் சரியான வடிவத்தில் இருக்க வேண்டும் மற்றும் அர்த்தத்தில் மாறாமல் இருக்க வேண்டும். : 0,1,2,3,4,5,6,7,8,9 பொதுவான தேதி வடிவங்கள் டிடி/எம்எம்/ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய் : 00 எம்எம்-டிடி-ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒய்ஒ",
        "buttons": {
          "save": "ஏற்றுக்கொள்.",
          "acceptAll": "அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்.",
          "decline": "அனைத்தையும் நிராகரிக்கவும்"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "வலைத்தள போக்குவரத்து, பயனர் நடத்தை மற்றும் ஈடுபாட்டு முறைகளை பகுப்பாய்வு செய்ய இந்த குக்கீகள் எங்களுக்கு உதவுகின்றன. சேகரிக்கப்பட்ட நுண்ணறிவுகள் உள்ளடக்கத்தை மேம்படுத்தவும், பயன்பாட்டினை மேம்படுத்தவும், ஒட்டுமொத்த தள செயல்திறனை மேம்படுத்தவும் அனுமதிக்கின்றன. இந்த வகை கட்டாயமானது"
        },
        "Others": {
          "description": "இந்த வகை முன் வரையறுக்கப்பட்ட வகைகளுக்குள் பொருந்தாத குக்கீகளை உள்ளடக்கியது, ஆனால் சில வலைத்தள செயல்பாடுகள் அல்லது மேம்பாடுகளுக்கு அவசியமாக இருக்கலாம்."
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "நோக்கம்"
      },
      "purposeItem": {
        "service": "சேவை",
        "services": "சேவைகள்"
      }
    },
    "sindhi": {
      "acceptAll": "سڀ قبول ڪریو",
      "accept": "قبول ڪریو",
      "decline": "سڀنی کی رد ڪریو",
      "acceptSelected": "چونڊیل قبول ڪریو",
      "ok": "سڀ قبول ڪریو",
      "consentNotice": {
        "description": "اسان توہان جی رازداری جو احترام ڪریون ٿا اسان ضروری سائیٽ جی ڪارڪردگی کی فعال ڪرڻ لاء ڪوڪی کی اسٽور ڪریون ٿا، گڏوگڏ مارڪیٽنگ، ذاتی ڪرڻ ۽ تجزیا ڪلڪ ڪندی \"سڀنی کی قبول ڪریو\" توہان اسان جی ڪوڪیز جی استعمال لاء رضامند آہیو توھان پنھنجی سیٽنگن کی ڪنھن بہ وقت تبدیل ڪری سگھو ٿا پین، آدھار، او ٽی پی، ڊی پی ڊی پی ایڪٽ، جی ڊی پی آر، صرف HTTP، یو پی آئی، ۽ پیداوار/برانڊ جی نالن جو ترجمو ڪڏھن بہ نہ ٿیڻ گھرجی قانونی حوالن جہڙوڪ \"DPDP ایڪٽ، 2023\" لفظن ۽ سال ۾ تبدیل نہ ٿیڻ گھرجی ترجمی کی ساڳئی UI جڳھ ۾ فٽ ٿیڻ گھرجی ڪوڪی بینر کی اوورلیپ نہ ڪرڻ گھرجی متن ۾ نمبر ۽ تاریخ صحیح شڪل ۾ ہجڻ گھرجی ۽ معنی ۾ تبدیل نہ ٿیڻ گھرجی 0، 1، 2، 3، 4، 5، 6، 7، 8، 9 عام تاریخ فارمیٽ ڊی ڊی/ایم ایم/وائی وائی وائی۔۔۔۔۔۔۔۔۔۔۔ DDD-YYYY hh: mm A → 08-29-2025 11:35 AM متن فارمیٽ DD مہینی YYYY → 29 آگسٽ 2025 مہینی DD, YYYY → 29 آگسٽ 2025 مون DD, YYYY → 29 آگسٽ 2025 DD مون YYYYY → 29 آگسٽ 2025 ڪوڪی پالیسی",
        "learnMore": "حسب ضرورت ٺاہیو",
        "changeDescription": " "
      },
      "save": "قبول ڪریو",
      "consentModal": {
        "title": "رضامندی جی ترجیحن کی ترتیب ڏیو",
        "description": "اسان استعمال ڪریون ٿا ڪوڪیز توہان جی مدد ڪرڻ لاء پیجز جی وچ ۾ نیویگیشن موثر طریقی سان، توہان جی ترجیحن کی محفوظ ڪرڻ، ۽ عام طئور تی توہان جی ویب سائیٽ جی تجربی کی بہتر بڻائڻ بہرحال، اسان توہان جی رازداری جی حق کی تسلیم ڪریون ٿا ۽ ان ڪری توہان چونڊ ڪری سگہو ٿا تہ ڪجھ قسم جی ڪوڪیز جی اجازت نہ ڏیو وڌیڪ معلوم ڪرڻ ۽ اسان جی ڊیفالٽ سیٽنگن کی تبدیل ڪرڻ لاء مختلف ڪیٽیگری ہیڊنگ تی ڪلڪ ڪریو مہربانی ڪری نوٽ ڪریو تہ ڪجھ قسم جی ڪوڪیز کی بلاڪ ڪرڻ شاید سائیٽ جی توہان جی تجربی کی متاثر ڪری سگہی ٿو پین، آدھار، او ٽی پی، ڊی پی ڊی پی ایڪٽ، جی ڊی پی آر، صرف HTTP، یو پی آئی، ۽ پیداوار/برانڊ جی نالن جو ترجمو ڪڏھن بہ نہ ٿیڻ گھرجی قانونی حوالن جہڙوڪ \"DPDP ایڪٽ، 2023\" لفظن ۽ سال ۾ تبدیل نہ ٿیڻ گھرجی ترجمی کی ساڳئی UI جڳھ ۾ فٽ ٿیڻ گھرجی ڪوڪی بینر کی اوورلیپ نہ ڪرڻ گھرجی متن ۾ نمبر ۽ تاریخ صحیح شڪل ۾ ہجڻ گھرجی ۽ معنی ۾ تبدیل نہ ٿیڻ گھرجی 0، 1، 2، 3، 4، 5، 6، 7، 8، 9 عام تاریخ فارمیٽ ڊی ڊی/ایم ایم/وائی وائی وائی۔۔۔۔۔۔۔۔۔۔۔ DDD-YYYY hh: mm A → 08-29-2025 11:35 AM متن فارمیٽ DD مہینی YYYY → 29 آگسٽ 2025 مہینی DD، YYYY → 29 آگسٽ 2025 مون DD، YYYY → 29 آگسٽ 2025 DD مون YYYYY",
        "buttons": {
          "save": "قبول ڪریو",
          "acceptAll": "سڀ قبول ڪریو",
          "decline": "سڀنی کی رد ڪریو"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "اہی ڪوڪیز اسان کی ویب سائیٽ ٽرئفڪ، صارف جی رویا، ۽ مصروفیت جی نمونن جو تجزیو ڪرڻ ۾ مدد ڪن ٿیون گڏ ڪیل بصیرت اسان کی مواد کی بہتر بڻائڻ، استعمال کی وڌائڻ، ۽ مجموعی سائیٽ جی ڪارڪردگی کی بہتر بڻائڻ جی اجازت ڏئی ٿی ہی درجو لازمی آھی"
        },
        "Others": {
          "description": "ھن درجی ۾ ڪوڪیز شامل آھن جیڪی اڳ ۾ مقرر ڪیل قسمن ۾ فٽ نہ ٿیون ٿین پر شاید ویب سائیٽ جی ڪجھ ڪارڪردگی یا بہتری لاء ضروری آھن"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "مقصد"
      },
      "purposeItem": {
        "service": "خدمت",
        "services": "خدمتون"
      }
    },
    "telugu": {
      "acceptAll": "అన్నింటినీ అంగీకరించండి.",
      "accept": "అంగీకరించండి.",
      "decline": "అన్నింటినీ తిరస్కరించండి",
      "acceptSelected": "ఎంపిక చేయబడినవారిని అంగీకరించండి",
      "ok": "అన్నింటినీ అంగీకరించండి",
      "consentNotice": {
        "description": "మేము మీ గోప్యతను గౌరవిస్తాము, అవసరమైన సైట్ కార్యాచరణను, అలాగే మార్కెటింగ్, వ్యక్తిగతీకరణ మరియు విశ్లేషణలను ప్రారంభించడానికి మేము కుకీలను నిల్వ చేస్తాము. \"అందరినీ అంగీకరించండి\" పై క్లిక్ చేయడం ద్వారా, మీరు మా కుకీల వినియోగానికి అంగీకరిస్తారు. మీరు ఎప్పుడైనా మీ సెట్టింగులను మార్చుకోవచ్చు. పాన్, ఆధార, ఓటిపి, డిపిడిపి చట్టం, జిడిపిఆర్, హెచ్టిటిపి-మాత్రమే, యుపిఐ మరియు ఉత్పత్తి/బ్రాండ్ పేర్లను ఎప్పుడూ అనువదించకూడదు. \"డిపిడిపి చట్టం, 2023\" వంటి చట్టపరమైన సూచనలు పదాలు మరియు సంవత్సరంలో మారకుండా ఉండాలి. అనువాదాలు ఒకే UI స్థలంలో సరిపోతాయి, కుకీ బ్యానర్ను అతివ్యాప్తి చేయకూడదు. వచనంలోని సంఖ్యలు మరియు తేదీలు సరైన ఆకృతిలో ఉండాలి మరియు అర్థంలో మారకూడదు. 0, 2, 3, 4, 5, 6, 7, 8, 9 సాధారణ తేదీ ఫార్మాట్లు డిడి/ఎంఎం/వైవైవైవై → 29/08/2025 ఎంఎం/డిడి/వైవైవైవై → 08/29/2025 వైవైవైవై/ఎంఎం/డిడి → 2025/08/29 డిడి-ఎంఎం-వైవైవై → 29-08-2025 ఎంఎం-డిడి-వైవైవై → 08-29-2025 వైవైవైవై-ఎంఎం-డిడి → 2025-08-29 (ఐఎస్ఓ 8601 ప్రమాణం) డిడి. ఎం. ఎం. వైవైవై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. : 00 ఎమ్ఎమ్-డిడి-వైవైవై హెచ్ హెచ్ః ఎంఎమ్ ఎ → 08-29-2025 11:35 ఎఎమ్ టెక్స్టువల్ ఫార్మాట్స్ డిడి నెల వైవైవైవై → 29 ఆగస్టు 2025 నెల డిడి, వైవైవైవై → ఆగస్టు 29,2025 మోన్ డిడి, వైవైవైవై → ఆగస్టు 29,2025 డిడి మోన్ వైవైవైవై → 29 ఆగస్టు 2025 కుకీ పాలసీ.",
        "learnMore": "అనుకూలీకరించండి",
        "changeDescription": " "
      },
      "save": "అంగీకరించండి.",
      "consentModal": {
        "title": "సమ్మతి ప్రాధాన్యతలను అనుకూలీకరించండి",
        "description": "పేజీల మధ్య సమర్థవంతంగా నావిగేట్ చేయడానికి, మీ ప్రాధాన్యతలను నిల్వ చేయడానికి మరియు సాధారణంగా వెబ్సైట్ యొక్క మీ అనుభవాన్ని మెరుగుపరచడానికి మేము కుకీలను ఉపయోగిస్తాము. అయితే, మీ గోప్యత హక్కును మేము గుర్తించాము, అందువల్ల మీరు కొన్ని రకాల కుకీలను అనుమతించకూడదని ఎంచుకోవచ్చు. మరింత తెలుసుకోవడానికి మరియు మా డిఫాల్ట్ సెట్టింగులను మార్చడానికి వివిధ వర్గ శీర్షికలపై క్లిక్ చేయండి. కొన్ని రకాల కుకీలను నిరోధించడం సైట్ యొక్క మీ అనుభవాన్ని ప్రభావితం చేస్తుందని దయచేసి గమనించండి. పాన్, ఆధార, ఓటిపి, డిపిడిపి చట్టం, జిడిపిఆర్, హెచ్టిటిపి-మాత్రమే, యుపిఐ మరియు ఉత్పత్తి/బ్రాండ్ పేర్లను ఎప్పుడూ అనువదించకూడదు. \"డిపిడిపి చట్టం, 2023\" వంటి చట్టపరమైన సూచనలు పదాలు మరియు సంవత్సరంలో మారకుండా ఉండాలి. అనువాదాలు ఒకే UI స్థలంలో సరిపోతాయి, కుకీ బ్యానర్ను అతివ్యాప్తి చేయకూడదు. వచనంలోని సంఖ్యలు మరియు తేదీలు సరైన ఆకృతిలో ఉండాలి మరియు అర్థంలో మారకూడదు. 0, 2, 3, 4, 5, 6, 7, 8, 9 సాధారణ తేదీ ఫార్మాట్లు డిడి/ఎంఎం/వైవైవైవై → 29/08/2025 ఎంఎం/డిడి/వైవైవైవై → 08/29/2025 వైవైవైవై/ఎంఎం/డిడి → 2025/08/29 డిడి-ఎంఎం-వైవైవై → 29-08-2025 ఎంఎం-డిడి-వైవైవై → 08-29-2025 వైవైవైవై-ఎంఎం-డిడి → 2025-08-29 (ఐఎస్ఓ 8601 ప్రమాణం) డిడి. ఎం. ఎం. వైవైవై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. వై. : 00 ఎమ్ఎమ్-డిడి-వైవైవై హెచ్ హెచ్ః ఎమ్ఎమ్ ఎ → 08-29-2025 11:35 ఎఎమ్ టెక్స్టువల్ ఫార్మాట్స్ డిడి నెల వైవైవైవై → 29 ఆగస్టు 2025 నెల డిడి, వైవైవైవై → ఆగస్టు 29,2025 మోన్ డిడి, వైవైవైవై → ఆగస్టు 29,2025 డిడి మోన్ వైవైవైవై → 29 ఆగస్టు 2025",
        "buttons": {
          "save": "అంగీకరించండి.",
          "acceptAll": "అన్నింటినీ అంగీకరించండి.",
          "decline": "అన్నింటినీ తిరస్కరించండి"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "వెబ్సైట్ ట్రాఫిక్, వినియోగదారు ప్రవర్తన మరియు నిశ్చితార్థం నమూనాలను విశ్లేషించడానికి ఈ కుకీలు మాకు సహాయపడతాయి. సేకరించిన అంతర్దృష్టులు కంటెంట్ను ఆప్టిమైజ్ చేయడానికి, వినియోగాన్ని మెరుగుపరచడానికి మరియు మొత్తం సైట్ పనితీరును మెరుగుపరచడానికి మాకు అనుమతిస్తాయి. ఈ వర్గం తప్పనిసరి"
        },
        "Others": {
          "description": "ఈ వర్గం ముందుగా నిర్వచించిన వర్గాలకు సరిపోని కుకీలను కలిగి ఉంటుంది, కానీ కొన్ని వెబ్సైట్ కార్యాచరణలు లేదా మెరుగుదలలకు అవసరం కావచ్చు."
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "ఉద్దేశం"
      },
      "purposeItem": {
        "service": "సేవ.",
        "services": "సేవలు"
      }
    },
    "bengali": {
      "acceptAll": "সব গ্রহণ করুন।",
      "accept": "গ্রহণ করুন।",
      "decline": "সবগুলিই প্রত্যাখ্যান করুন",
      "acceptSelected": "নির্বাচিতদের গ্রহণ করুন",
      "ok": "সব গ্রহণ করুন",
      "consentNotice": {
        "description": "আমরা আপনার গোপনীয়তাকে সম্মান করি আমরা প্রয়োজনীয় সাইট কার্যকারিতা, পাশাপাশি বিপণন, ব্যক্তিগতকরণ এবং বিশ্লেষণ সক্ষম করতে কুকিজ সঞ্চয় করি। \"সবাইকে গ্রহণ করুন\"-এ ক্লিক করে, আপনি আমাদের কুকি ব্যবহারের জন্য সম্মত হন। আপনি যে কোনও সময় আপনার সেটিংস পরিবর্তন করতে পারেন। প্যান, আধার, ওটিপি, ডিপিডিপি আইন, জিডিপিআর, শুধুমাত্র এইচটিটিপি, ইউপিআই এবং পণ্য/ব্র্যান্ডের নাম কখনও অনুবাদ করা উচিত নয়। \"ডিপিডিপি আইন, 2023\"-এর মতো আইনি উল্লেখগুলি অবশ্যই শব্দ এবং বছরে অপরিবর্তিত থাকতে হবে। অনুবাদগুলি একই ইউ. আই স্পেসে ফিট করা উচিত, কুকি ব্যানারকে ওভারল্যাপ করা উচিত নয়। পাঠ্যের সংখ্যা এবং তারিখগুলি অবশ্যই সঠিক বিন্যাসে এবং অর্থ অপরিবর্তিত থাকতে হবে। 0, 2, 3, 4, 5, 6, 7, 8, 9 সাধারণ তারিখের বিন্যাস ডিডি/এমএম/ওয়াইওয়াইওয়াইওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই - : 00 এম. এম.-ডি. ডি.-ওয়াই. ওয়াই. ওয়াই. ওয়াই. এইচ. এইচ.: এম. এম. এ. → 08-29-2025 11:35 এ. এম পাঠ্য বিন্যাস ডি. মাস ওয়াই. ওয়াই. ওয়াই. ওয়াই. → 29 আগস্ট 2025 মাস ডি. ডি, ওয়াই. ওয়াই. ওয়াই. ওয়াই. → 29 আগস্ট, 2025 সোম ডি. ডি, ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. → 29 আগস্ট, 2025 ডি. মান ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই. ওয়াই",
        "learnMore": "কাস্টমাইজ করুন",
        "changeDescription": " "
      },
      "save": "গ্রহণ করুন।",
      "consentModal": {
        "title": "সম্মতি পছন্দগুলি কাস্টমাইজ করুন",
        "description": "আমরা আপনাকে দক্ষতার সাথে পৃষ্ঠাগুলির মধ্যে নেভিগেট করতে, আপনার পছন্দগুলি সংরক্ষণ করতে এবং সাধারণত কোনও ওয়েবসাইটের আপনার অভিজ্ঞতা উন্নত করতে সহায়তা করার জন্য কুকিজ ব্যবহার করি। যাইহোক, আমরা আপনার গোপনীয়তার অধিকারকে স্বীকার করি এবং তাই আপনি কিছু ধরনের কুকিজ অনুমোদন না করার সিদ্ধান্ত নিতে পারেন। আরও জানতে এবং আমাদের ডিফল্ট সেটিংস পরিবর্তন করতে বিভিন্ন বিভাগের শিরোনামে ক্লিক করুন। দয়া করে মনে রাখবেন যে নির্দিষ্ট ধরনের কুকিজ ব্লক করা আপনার সাইটের অভিজ্ঞতাকে প্রভাবিত করতে পারে। প্যান, আধার, ওটিপি, ডিপিডিপি আইন, জিডিপিআর, শুধুমাত্র এইচটিটিপি, ইউপিআই এবং পণ্য/ব্র্যান্ডের নাম কখনও অনুবাদ করা উচিত নয়। \"ডিপিডিপি আইন, 2023\"-এর মতো আইনি উল্লেখগুলি অবশ্যই শব্দ এবং বছরে অপরিবর্তিত থাকতে হবে। অনুবাদগুলি একই ইউ. আই স্পেসে ফিট করা উচিত, কুকি ব্যানারকে ওভারল্যাপ করা উচিত নয়। পাঠ্যের সংখ্যা এবং তারিখগুলি অবশ্যই সঠিক বিন্যাসে এবং অর্থ অপরিবর্তিত থাকতে হবে। 0, 2, 3, 4, 5, 6, 7, 8, 9 সাধারণ তারিখের বিন্যাস ডিডি/এমএম/ওয়াইওয়াইওয়াইওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই-ওয়াই - : 00 এম. এম.-ডি. ডি.-ওয়াই. ওয়াই. ওয়াই. ওয়াই. এইচ. এইচ.: এম. এম. এ. → 08-29-2025 11:35 এ. এম. পাঠ্য বিন্যাস ডি. ডি মাস ওয়াই. ওয়াই. ওয়াই. ওয়াই. → 29 আগস্ট 2025 মাস ডি. ডি, ওয়াই. ওয়াই. ওয়াই. ওয়াই. → 29 আগস্ট, 2025 সোম ডি. ডি, ওয়াই. ওয়াই. ওয়াই. ওয়াই. → 29 আগস্ট, 2025 ডি.",
        "buttons": {
          "save": "গ্রহণ করুন।",
          "acceptAll": "সব গ্রহণ করুন।",
          "decline": "সবগুলিই প্রত্যাখ্যান করুন"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "এই কুকিগুলি আমাদের ওয়েবসাইটের ট্রাফিক, ব্যবহারকারীর আচরণ এবং ব্যস্ততার ধরণ বিশ্লেষণ করতে সহায়তা করে। সংগৃহীত অন্তর্দৃষ্টি আমাদের বিষয়বস্তু অপ্টিমাইজ করতে, ব্যবহারযোগ্যতা বাড়াতে এবং সামগ্রিক সাইটের কর্মক্ষমতা উন্নত করতে সহায়তা করে। এই বিভাগটি বাধ্যতামূলক"
        },
        "Others": {
          "description": "এই বিভাগে এমন কুকিজ রয়েছে যা পূর্বনির্ধারিত বিভাগগুলির সাথে খাপ খায় না তবে নির্দিষ্ট ওয়েবসাইটের কার্যকারিতা বা উন্নতির জন্য প্রয়োজনীয় হতে পারে।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "উদ্দেশ্য"
      },
      "purposeItem": {
        "service": "পরিষেবা",
        "services": "পরিষেবাগুলি"
      }
    },
    "gujarati": {
      "acceptAll": "બધા સ્વીકારો",
      "accept": "સ્વીકારો",
      "decline": "બધાને નકારી કાઢો",
      "acceptSelected": "પસંદ કરેલ સ્વીકારો",
      "ok": "બધાને સ્વીકારો",
      "consentNotice": {
        "description": "અમે તમારી ગોપનીયતાનો આદર કરીએ છીએ અમે આવશ્યક સાઇટ કાર્યક્ષમતા, તેમજ માર્કેટિંગ, વ્યક્તિગતકરણ અને વિશ્લેષણને સક્ષમ કરવા માટે કૂકીઝ સંગ્રહિત કરીએ છીએ. \"બધા સ્વીકારો\" પર ક્લિક કરીને, તમે અમારા કૂકીઝના ઉપયોગ માટે સંમતિ આપો છો. તમે કોઈપણ સમયે તમારી સેટિંગ્સ બદલી શકો છો. પાન, આધાર, ઓ. ટી. પી., ડી. પી. ડી. પી. કાયદો, જી. ડી. પી. આર., એચ. ટી. ટી. પી.-માત્ર, યુ. પી. આઈ. અને ઉત્પાદન/બ્રાન્ડ નામોનું ક્યારેય ભાષાંતર ન કરવું જોઈએ. \"ડી. પી. ડી. પી. અધિનિયમ, 2023\" જેવા કાનૂની સંદર્ભો શબ્દો અને વર્ષમાં અપરિવર્તિત રહેવા જોઈએ. અનુવાદો સમાન UI જગ્યામાં ફિટ થવો જોઈએ, કૂકી બેનરને ઓવરલેપ ન કરવું જોઈએ. લખાણમાં સંખ્યાઓ અને તારીખો સાચા સ્વરૂપમાં હોવી જોઈએ અને અર્થમાં ફેરફાર થવો જોઈએ નહીં. 0, 2, 3, 4, 5, 6, 7, 8, 9 સામાન્ય તારીખ બંધારણો ડીડી/એમએમ/વાયવાયવાયવાય → 29/08/2025 એમએમ/ડીડી/વાયવાયવાયવાયવાય → 08/29/2025 વાયવાયવાયવાયવાય/એમએમ/ડીડી → 2025/08/29 ડીડી-એમએમ-વાયવાયવાયવાય → 08-29-2025 વાયવાયવાયવાય-એમએમ-ડીડી → 2025-08-29 (આઇએસઓ 8601 પ્રમાણભૂત) ડીડી. એમ. વાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાય DDD-YYYY hh: mm A → 08-29-2025 11:35 AM લખાણ સ્વરૂપો DD મહિનો YYYY → 29 ઓગસ્ટ 2025 મહિનો DD, YYYY → 29 ઓગસ્ટ, 2025 સોમ DD, YYYY → 29 ઓગસ્ટ, 2025 DD સોમ YYYY → 29 ઓગસ્ટ 2025 કૂકી નીતિ.",
        "learnMore": "કસ્ટમાઇઝ કરો",
        "changeDescription": " "
      },
      "save": "સ્વીકારો",
      "consentModal": {
        "title": "સંમતિ પસંદગીઓને કસ્ટમાઇઝ કરો",
        "description": "અમે તમને પૃષ્ઠો વચ્ચે અસરકારક રીતે નેવિગેટ કરવામાં, તમારી પસંદગીઓને સંગ્રહિત કરવામાં અને સામાન્ય રીતે વેબસાઇટના તમારા અનુભવને સુધારવામાં મદદ કરવા માટે કૂકીઝનો ઉપયોગ કરીએ છીએ. જો કે, અમે તમારા ગોપનીયતાના અધિકારને સ્વીકારીએ છીએ અને તેથી તમે અમુક પ્રકારની કૂકીઝને મંજૂરી ન આપવાનું પસંદ કરી શકો છો. વધુ જાણવા અને આપણી મૂળભૂત સેટિંગ્સ બદલવા માટે વિવિધ શ્રેણીના શીર્ષકો પર ક્લિક કરો. મહેરબાની કરીને નોંધ કરો કે અમુક પ્રકારની કૂકીઝને અવરોધિત કરવાથી સાઇટના તમારા અનુભવને અસર થઈ શકે છે. પાન, આધાર, ઓ. ટી. પી., ડી. પી. ડી. પી. કાયદો, જી. ડી. પી. આર., એચ. ટી. ટી. પી.-માત્ર, યુ. પી. આઈ. અને ઉત્પાદન/બ્રાન્ડ નામોનું ક્યારેય ભાષાંતર ન કરવું જોઈએ. \"ડી. પી. ડી. પી. અધિનિયમ, 2023\" જેવા કાનૂની સંદર્ભો શબ્દો અને વર્ષમાં અપરિવર્તિત રહેવા જોઈએ. અનુવાદો સમાન UI જગ્યામાં ફિટ થવો જોઈએ, કૂકી બેનરને ઓવરલેપ ન કરવું જોઈએ. લખાણમાં સંખ્યાઓ અને તારીખો સાચા સ્વરૂપમાં હોવી જોઈએ અને અર્થમાં ફેરફાર થવો જોઈએ નહીં. 0, 2, 3, 4, 5, 6, 7, 8, 9 સામાન્ય તારીખ બંધારણો ડીડી/એમએમ/વાયવાયવાયવાય → 29/08/2025 એમએમ/ડીડી/વાયવાયવાયવાયવાય → 08/29/2025 વાયવાયવાયવાયવાય/એમએમ/ડીડી → 2025/08/29 ડીડી-એમએમ-વાયવાયવાયવાય → 08-29-2025 વાયવાયવાયવાય-એમએમ-ડીડી → 2025-08-29 (આઇએસઓ 8601 પ્રમાણભૂત) ડીડી. એમ. વાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાયવાય DDD-YYYY hh: mm A → 08-29-2025 11:35 AM લખાણ સ્વરૂપો DD મહિનો YYYY → 29 ઓગસ્ટ 2025 મહિનો DD, YYYY → 29 ઓગસ્ટ, 2025 સોમ DD, YYYY → 29 ઓગસ્ટ, 2025 DD સોમ YYYYY → 29 ઓગસ્ટ 2025",
        "buttons": {
          "save": "સ્વીકારો",
          "acceptAll": "બધા સ્વીકારો",
          "decline": "બધાને નકારી કાઢો"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "આ કૂકીઝ અમને વેબસાઇટ ટ્રાફિક, વપરાશકર્તા વર્તન અને જોડાણ પેટર્નનું વિશ્લેષણ કરવામાં મદદ કરે છે. એકત્રિત કરવામાં આવેલી આંતરદૃષ્ટિ આપણને સામગ્રીને શ્રેષ્ઠ બનાવવા, ઉપયોગીતા વધારવા અને એકંદર સાઇટ પ્રદર્શનમાં સુધારો કરવાની મંજૂરી આપે છે. આ શ્રેણી ફરજિયાત છે"
        },
        "Others": {
          "description": "આ શ્રેણીમાં એવી કૂકીઝનો સમાવેશ થાય છે જે પૂર્વવ્યાખ્યાયિત શ્રેણીઓમાં બંધબેસતું નથી પરંતુ ચોક્કસ વેબસાઇટ કાર્યક્ષમતાઓ અથવા સુધારાઓ માટે જરૂરી હોઈ શકે છે."
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "હેતુ"
      },
      "purposeItem": {
        "service": "સેવા",
        "services": "સેવાઓ"
      }
    },
    "kannada": {
      "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ.",
      "accept": "ಸ್ವೀಕರಿಸಿ.",
      "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
      "acceptSelected": "ಆಯ್ಕೆಯಾದವರನ್ನು ಸ್ವೀಕರಿಸಿ",
      "ok": "ಎಲ್ಲವನ್ನು ಸ್ವೀಕರಿಸಿ",
      "consentNotice": {
        "description": "ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ನಾವು ಗೌರವಿಸುತ್ತೇವೆ, ಅಗತ್ಯವಾದ ಸೈಟ್ ಕಾರ್ಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು, ಹಾಗೆಯೇ ಮಾರ್ಕೆಟಿಂಗ್, ವೈಯಕ್ತೀಕರಣ ಮತ್ತು ವಿಶ್ಲೇಷಣೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. \"ಎಲ್ಲರನ್ನೂ ಸ್ವೀಕರಿಸಿ\" ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ಕುಕೀಗಳ ಬಳಕೆಯನ್ನು ಒಪ್ಪುತ್ತೀರಿ. ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು. ಪ್ಯಾನ್, ಆಧಾರ, ಒಟಿಪಿ, ಡಿಪಿಡಿಪಿ ಕಾಯ್ದೆ, ಜಿಡಿಪಿಆರ್, ಎಚ್. ಟಿ. ಟಿ. ಪಿ-ಮಾತ್ರ, ಯುಪಿಐ ಮತ್ತು ಉತ್ಪನ್ನ/ಬ್ರಾಂಡ್ ಹೆಸರುಗಳನ್ನು ಎಂದಿಗೂ ಅನುವಾದಿಸಬಾರದು. \"ಡಿಪಿಡಿಪಿ ಕಾಯ್ದೆ, 2023\" ನಂತಹ ಕಾನೂನು ಉಲ್ಲೇಖಗಳು ಪದಗಳು ಮತ್ತು ವರ್ಷದಲ್ಲಿ ಬದಲಾಗದೆ ಉಳಿಯಬೇಕು. ಅನುವಾದಗಳು ಒಂದೇ ಯುಐ ಜಾಗದಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳಬೇಕು, ಕುಕೀ ಬ್ಯಾನರ್ ಅನ್ನು ಅತಿಕ್ರಮಿಸಬಾರದು. ಪಠ್ಯದಲ್ಲಿನ ಸಂಖ್ಯೆಗಳು ಮತ್ತು ದಿನಾಂಕಗಳು ಸರಿಯಾದ ಸ್ವರೂಪದಲ್ಲಿರಬೇಕು ಮತ್ತು ಅರ್ಥದಲ್ಲಿ ಬದಲಾಗಬಾರದು. 0, 2, 3, 4, 5, 6, 7, 8, 9 ಸಾಮಾನ್ಯ ದಿನಾಂಕ ಸ್ವರೂಪಗಳು ಡಿ. ಡಿ./ಎಂ. ಎಂ./ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ಡಿಡಿಡಿ-ವೈವೈವೈಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎ",
        "learnMore": "ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "changeDescription": " "
      },
      "save": "ಸ್ವೀಕರಿಸಿ.",
      "consentModal": {
        "title": "ಒಪ್ಪಿಗೆಯ ಆದ್ಯತೆಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "description": "ಪುಟಗಳ ನಡುವೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು, ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ವೆಬ್ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಆದಾಗ್ಯೂ, ನಿಮ್ಮ ಗೌಪ್ಯತೆಯ ಹಕ್ಕನ್ನು ನಾವು ಅಂಗೀಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಆದ್ದರಿಂದ ನೀವು ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ಅನುಮತಿಸದಿರಲು ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಹೆಚ್ಚು ತಿಳಿಯಲು ಮತ್ತು ನಮ್ಮ ಪೂರ್ವನಿಯೋಜಿತ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಲು ವಿವಿಧ ವರ್ಗದ ಶೀರ್ಷಿಕೆಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ನಿರ್ಬಂಧಿಸುವುದರಿಂದ ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ. ಪ್ಯಾನ್, ಆಧಾರ, ಒಟಿಪಿ, ಡಿಪಿಡಿಪಿ ಕಾಯ್ದೆ, ಜಿಡಿಪಿಆರ್, ಎಚ್. ಟಿ. ಟಿ. ಪಿ-ಮಾತ್ರ, ಯುಪಿಐ ಮತ್ತು ಉತ್ಪನ್ನ/ಬ್ರಾಂಡ್ ಹೆಸರುಗಳನ್ನು ಎಂದಿಗೂ ಅನುವಾದಿಸಬಾರದು. \"ಡಿಪಿಡಿಪಿ ಕಾಯ್ದೆ, 2023\" ನಂತಹ ಕಾನೂನು ಉಲ್ಲೇಖಗಳು ಪದಗಳು ಮತ್ತು ವರ್ಷದಲ್ಲಿ ಬದಲಾಗದೆ ಉಳಿಯಬೇಕು. ಅನುವಾದಗಳು ಒಂದೇ ಯುಐ ಜಾಗದಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳಬೇಕು, ಕುಕೀ ಬ್ಯಾನರ್ ಅನ್ನು ಅತಿಕ್ರಮಿಸಬಾರದು. ಪಠ್ಯದಲ್ಲಿನ ಸಂಖ್ಯೆಗಳು ಮತ್ತು ದಿನಾಂಕಗಳು ಸರಿಯಾದ ಸ್ವರೂಪದಲ್ಲಿರಬೇಕು ಮತ್ತು ಅರ್ಥದಲ್ಲಿ ಬದಲಾಗಬಾರದು. 0, 2, 3, 4, 5, 6, 7, 8, 9 ಸಾಮಾನ್ಯ ದಿನಾಂಕ ಸ್ವರೂಪಗಳು ಡಿ. ಡಿ./ಎಂ. ಎಂ./ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ವೈ. ಡಿಡಿಡಿ-ವೈವೈವೈಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎಚ್ಎ",
        "buttons": {
          "save": "ಸ್ವೀಕರಿಸಿ.",
          "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ.",
          "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "ಈ ಕುಕೀಗಳು ಜಾಲತಾಣದ ದಟ್ಟಣೆ, ಬಳಕೆದಾರರ ನಡವಳಿಕೆ ಮತ್ತು ನಿಶ್ಚಿತಾರ್ಥದ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಸಂಗ್ರಹಿಸಿದ ಒಳನೋಟಗಳು ನಮಗೆ ವಿಷಯವನ್ನು ಅತ್ಯುತ್ತಮವಾಗಿಸಲು, ಉಪಯುಕ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಒಟ್ಟಾರೆ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸುಧಾರಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ. ಈ ವರ್ಗವು ಕಡ್ಡಾಯವಾಗಿದೆ"
        },
        "Others": {
          "description": "ಈ ವರ್ಗವು ಪೂರ್ವನಿರ್ಧರಿತ ವರ್ಗಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗದ ಆದರೆ ಕೆಲವು ಜಾಲತಾಣದ ಕಾರ್ಯಗಳು ಅಥವಾ ಸುಧಾರಣೆಗಳಿಗೆ ಅಗತ್ಯವಾಗಬಹುದಾದ ಕುಕೀಗಳನ್ನು ಒಳಗೊಂಡಿದೆ."
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "ಉದ್ದೇಶ"
      },
      "purposeItem": {
        "service": "ಸೇವೆ",
        "services": "ಸೇವೆಗಳು"
      }
    },
    "nepali": {
      "acceptAll": "सबै स्वीकार गर्नुहोस्",
      "accept": "स्वीकार गर्नुहोस्",
      "decline": "सबै अस्वीकार गर्नुहोस्",
      "acceptSelected": "चुनिएको स्वीकार गर्नुहोस्",
      "ok": "सबै स्वीकार गर्नुहोस्",
      "consentNotice": {
        "description": "हामी तपाईंको गोपनीयतालाई सम्मान गर्दछौं हामी आवश्यक साइट कार्यक्षमता, साथै मार्केटिङ, निजीकरण र विश्लेषण सक्षम गर्न कुकीहरू भण्डार गर्दछौं। \"सबै स्वीकार गर्नुहोस्\" मा क्लिक गरेर, तपाईं हाम्रो कुकीजको प्रयोगमा सहमत हुनुहुन्छ। तपाईँले कुनै पनि समयमा आफ्नो सेटिङहरू परिवर्तन गर्न सक्नुहुन्छ। प्यान, आधार, ओटिपी, डिपिडिपी ऐन, जिडिपिआर, एचटिटिपी-मात्र, युपीआई, र उत्पादन/ब्रान्ड नामहरू कहिल्यै अनुवाद गर्नु हुँदैन। \"डिपिडिपी ऐन, 2023\" जस्ता कानुनी सन्दर्भहरू शब्द र वर्षमा अपरिवर्तित रहनुपर्छ। अनुवादहरू एउटै युआई स्थानमा फिट हुनुपर्छ, कुकी ब्यानरलाई ओभरल्याप गर्नु हुँदैन। पाठमा सङ्ख्या र मितिहरू सही ढाँचामा र अर्थमा अपरिवर्तित हुनुपर्छ। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य मिति ढाँचाहरू डीडी/एमएम/वाईवाईवाईवाई → 29/08/2025 एमएम/डीडी/वाईवाईवाईवाई → 08/29/2025 वाईवाईवाईवाई/एमएम/डीडी → 2025/08/29 डीडी-एमएम-वाईवाईवाई → 29-08-2025 एमएम-डीडी-वाईवाईवाई → 08-29-2025 वाईवाईवाईवाई-एमएम-डीडी → 2025-08-29 (आईएसओ 8601 मानक) डीडी. एमएम. वाईवाईवाईवाई → 29.08.2025 वाईवाईवाईवाई. एम. एम. एम. डी. → 2025.08.29 हप्ताको दिनको साथ, डीडी महिना वाईवाईवाईवाई : 00 एमएम-डीडी-वाईवाईवाईएचएचः एमएम ए → 08-29-2025 11:35 एएम पाठ्य ढाँचाहरू डीडी महिना वाईवाईवाईवाई → 29 अगस्ट 2025 महिना डीडी, वाईवाईवाईवाई → अगस्त 29,2025 सोम डीडी, वाईवाईवाईवाई → अगस्त 29,2025 डीडी सोम वाईवाईवाईवाई → 29 अगस्ट 2025 कुकी नीति।",
        "learnMore": "अनुकूलित गर्नुहोस्",
        "changeDescription": " "
      },
      "save": "स्वीकार गर्नुहोस्",
      "consentModal": {
        "title": "सहमति प्राथमिकताहरू अनुकूलित गर्नुहोस्",
        "description": "हामी तपाईंलाई पृष्ठहरू बिच कुशलतापूर्वक नेभिगेट गर्न, तपाईंको प्राथमिकताहरू भण्डारण गर्न, र सामान्यतया वेबसाइटको तपाईंको अनुभव सुधार गर्न मद्दत गर्न कुकीहरू प्रयोग गर्दछौं। जे होस्, हामी तपाईंको गोपनीयताको अधिकारलाई स्वीकार गर्दछौं र त्यसैले तपाईं केही प्रकारका कुकीजहरूलाई अनुमति नदिन छनौट गर्न सक्नुहुन्छ। थप पत्ता लगाउन र हाम्रो पूर्वनिर्धारित सेटिङहरू परिवर्तन गर्न विभिन्न श्रेणी शीर्षकहरूमा क्लिक गर्नुहोस्। कृपया ध्यान दिनुहोस् कि केही प्रकारका कुकीहरू अवरुद्ध गर्नाले साइटको तपाईंको अनुभवलाई असर गर्न सक्छ। प्यान, आधार, ओटिपी, डिपिडिपी ऐन, जिडिपिआर, एचटिटिपी-मात्र, युपीआई, र उत्पादन/ब्रान्ड नामहरू कहिल्यै अनुवाद गर्नु हुँदैन। \"डिपिडिपी ऐन, 2023\" जस्ता कानुनी सन्दर्भहरू शब्द र वर्षमा अपरिवर्तित रहनुपर्छ। अनुवादहरू एउटै युआई स्थानमा फिट हुनुपर्छ, कुकी ब्यानरलाई ओभरल्याप गर्नु हुँदैन। पाठमा सङ्ख्या र मितिहरू सही ढाँचामा र अर्थमा अपरिवर्तित हुनुपर्छ। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य मिति ढाँचाहरू डीडी/एमएम/वाईवाईवाईवाई → 29/08/2025 एमएम/डीडी/वाईवाईवाईवाई → 08/29/2025 वाईवाईवाईवाई/एमएम/डीडी → 2025/08/29 डीडी-एमएम-वाईवाईवाई → 29-08-2025 एमएम-डीडी-वाईवाईवाई → 08-29-2025 वाईवाईवाईवाई-एमएम-डीडी → 2025-08-29 (आईएसओ 8601 मानक) डीडी. एमएम. वाईवाईवाईवाई → 29.08.2025 वाईवाईवाईवाई. एम. एम. एम. डी. → 2025.08.29 हप्ताको दिनको साथ, डीडी महिना वाईवाईवाईवाई : 00 एमएम-डीडी-वाईवाईवाईएचः एमएम ए → 08-29-2025 11:35 एएम पाठ्य ढाँचाहरू डीडी महिना वाईवाईवाईवाई → 29 अगस्त 2025 महिना डीडी, वाईवाईवाईवाई → अगस्त 29,2025 सोम डीडी, वाईवाईवाईवाई → अगस्त 29,2025 डीडी सोम वाईवाईवाईवाई → 29 अगस्त 2025",
        "buttons": {
          "save": "स्वीकार गर्नुहोस्",
          "acceptAll": "सबै स्वीकार गर्नुहोस्",
          "decline": "सबै अस्वीकार गर्नुहोस्"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "यी कुकीहरूले हामीलाई वेबसाइट ट्राफिक, प्रयोगकर्ता व्यवहार, र संलग्नता ढाँचाहरू विश्लेषण गर्न मद्दत गर्दछ। एकत्रित अन्तर्दृष्टिले हामीलाई सामग्री अनुकूलन गर्न, उपयोगिता बढाउन, र समग्र साइट प्रदर्शन सुधार गर्न अनुमति दिन्छ। यो श्रेणी अनिवार्य छ"
        },
        "Others": {
          "description": "यस श्रेणीले कुकीहरू समावेश गर्दछ जुन पूर्वनिर्धारित कोटीहरूमा फिट हुँदैन तर निश्चित वेबसाइट प्रकार्यहरू वा सुधारहरूका लागि आवश्यक हुन सक्छ।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "उद्देश्य"
      },
      "purposeItem": {
        "service": "सेवा",
        "services": "सेवाहरू"
      }
    },
    "hindi": {
      "acceptAll": "सभी को स्वीकार करें।",
      "accept": "स्वीकार करें।",
      "decline": "सभी को अस्वीकार करें",
      "acceptSelected": "चयनित को स्वीकार करें",
      "ok": "सभी को स्वीकार करें",
      "consentNotice": {
        "description": "हम आपकी गोपनीयता का सम्मान करते हैं हम आवश्यक साइट कार्यक्षमता के साथ-साथ विपणन, वैयक्तिकरण और विश्लेषण को सक्षम करने के लिए कुकीज़ संग्रहीत करते हैं। \"सभी को स्वीकार करें\" पर क्लिक करके, आप कुकीज़ के हमारे उपयोग के लिए सहमत हैं। आप किसी भी समय अपनी सेटिंग बदल सकते हैं। पैन, आधार, ओ. टी. पी., डी. पी. डी. पी. अधिनियम, जी. डी. पी. आर., केवल एच. टी. टी. पी., यू. पी. आई. और उत्पाद/ब्रांड नामों का कभी भी अनुवाद नहीं किया जाना चाहिए। \"डी. पी. डी. पी. अधिनियम, 2023\" जैसे कानूनी संदर्भ शब्दों और वर्ष में अपरिवर्तित रहने चाहिए। अनुवाद एक ही यू. आई. स्थान में फिट होने चाहिए, कुकी बैनर को ओवरलैप नहीं करना चाहिए। पाठ में संख्याएँ और तिथियाँ सही प्रारूप में होनी चाहिए और अर्थ में अपरिवर्तित होनी चाहिए। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तिथि प्रारूप डी. डी./एम. एम./वाई. वाई. वाई. वाई. → 29/08/2025 एम. एम./डी. डी./वाई. वाई. वाई. वाई. → 08/29/2025 वाई. वाई. वाई. वाई./एम. एम./डी. डी. → 2025/08/29 डी. डी.-एम. एम.-वाई. वाई. वाई. → 08-29-2025 वाई. वाई. वाई. वाई.-एम. एम.-डी. डी. → 2025-08-29 (आई. एस. ओ. 8601 मानक) डी. डी. एम. एम. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. डी. डी.-वाई. वाई. वाई. एच. एच.: एम. एम. ए. → 08-29-2025 11:35 ए. एम. पाठ्य प्रारूप डी. डी. महीना वाई. वाई. वाई. वाई. → 29 अगस्त 2025 महीना डी. डी., वाई. वाई. वाई. वाई. → 29 अगस्त 2025 सोम डी. डी., वाई. वाई. वाई. वाई. → 29 अगस्त 2025 डी. डी. सोम वाई. वाई. वाई. वाई. → 29 अगस्त 2025 कुकी नीति।",
        "learnMore": "अनुकूलित करें",
        "changeDescription": " "
      },
      "save": "स्वीकार करें।",
      "consentModal": {
        "title": "सहमति वरीयताएँ अनुकूलित करें",
        "description": "हम कुकीज़ का उपयोग आपको पृष्ठों के बीच कुशलता से नेविगेट करने, आपकी प्राथमिकताओं को संग्रहीत करने और आम तौर पर किसी वेबसाइट के आपके अनुभव को बेहतर बनाने में मदद करने के लिए करते हैं। हालाँकि, हम आपकी गोपनीयता के अधिकार को स्वीकार करते हैं और इसलिए आप कुछ प्रकार की कुकीज़ की अनुमति नहीं दे सकते हैं। अधिक जानने के लिए विभिन्न श्रेणी शीर्षकों पर क्लिक करें और हमारी डिफ़ॉल्ट सेटिंग्स को बदलें। कृपया ध्यान दें कि कुछ प्रकार की कुकीज़ को अवरुद्ध करने से साइट का आपका अनुभव प्रभावित हो सकता है। पैन, आधार, ओ. टी. पी., डी. पी. डी. पी. अधिनियम, जी. डी. पी. आर., केवल एच. टी. टी. पी., यू. पी. आई. और उत्पाद/ब्रांड नामों का कभी भी अनुवाद नहीं किया जाना चाहिए। \"डी. पी. डी. पी. अधिनियम, 2023\" जैसे कानूनी संदर्भ शब्दों और वर्ष में अपरिवर्तित रहने चाहिए। अनुवाद एक ही यू. आई. स्थान में फिट होने चाहिए, कुकी बैनर को ओवरलैप नहीं करना चाहिए। पाठ में संख्याएँ और तिथियाँ सही प्रारूप में होनी चाहिए और अर्थ में अपरिवर्तित होनी चाहिए। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तिथि प्रारूप डी. डी./एम. एम./वाई. वाई. वाई. वाई. → 29/08/2025 एम. एम./डी. डी./वाई. वाई. वाई. वाई. → 08/29/2025 वाई. वाई. वाई. वाई./एम. एम./डी. डी. → 2025/08/29 डी. डी.-एम. एम.-वाई. वाई. वाई. → 08-29-2025 वाई. वाई. वाई. वाई.-एम. एम.-डी. डी. → 2025-08-29 (आई. एस. ओ. 8601 मानक) डी. डी. एम. एम. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. वाई. डी. डी.-वाई. वाई. वाई. एच. एच.: एम. एम. ए. → 08-29-2025 11:35 ए. एम. पाठ्य प्रारूप डी. डी. महीना वाई. वाई. वाई. वाई. → 29 अगस्त 2025 महीना डी. डी., वाई. वाई. वाई. वाई. → 29 अगस्त, 2025 सोम डी. डी., वाई. वाई. वाई. वाई. → 29 अगस्त, 2025 डीडी सोम वाई. वाई. वाई. वाई. → 29 अगस्त 2025",
        "buttons": {
          "save": "स्वीकार करें।",
          "acceptAll": "सभी को स्वीकार करें।",
          "decline": "सभी को अस्वीकार करें"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "ये कुकीज़ हमें वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार और जुड़ाव पैटर्न का विश्लेषण करने में मदद करती हैं। एकत्रित अंतर्दृष्टि हमें सामग्री को अनुकूलित करने, उपयोगिता बढ़ाने और समग्र साइट प्रदर्शन में सुधार करने की अनुमति देती है। यह श्रेणी अनिवार्य है"
        },
        "Others": {
          "description": "इस श्रेणी में ऐसी कुकीज़ शामिल हैं जो पूर्वनिर्धारित श्रेणियों में फिट नहीं होती हैं, लेकिन कुछ वेबसाइट कार्यक्षमताओं या सुधारों के लिए आवश्यक हो सकती हैं।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "उद्देश्य"
      },
      "purposeItem": {
        "service": "सेवा",
        "services": "सेवाएँ"
      }
    },
    "goan konkani": {
      "acceptAll": "सगळें मान्य कर.",
      "accept": "स्विकार कर.",
      "decline": "सगळें न्हयकार",
      "acceptSelected": "वेंचून घेतिल्लें मान्य कर",
      "ok": "सगळें मान्य कर",
      "consentNotice": {
        "description": "आमी तुमच्या गुप्ततायेचो आदर करतात आमी गरजेच्यो संकेतथळ कार्यक्षमताय, तशेंच विपणन, वैयक्तीकरण आनी विश्लेशण सक्षम करपा खातीर कुकीज सांठोवन दवरतात. \"सगळे मान्य करात\" क्लिक केल्यार, तुमी आमचे कुकीज वापरपाक मान्यताय दितात. तुमी खंयच्याय वेळार तुमची सेटिंग बदलूंक शकतात. पॅन, आधार, ओ. टी. पी., डी. पी. डी. पी. कायदो, जी. डी. पी. आर., फकत एच. टी. टी. पी., यू. पी. आय., आनी उत्पादन/ब्रँड नांवांचो केन्नाच अनुवाद करचो न्हय. \"डी. पी. डी. पी. कायदो, 2023\" सारक्या कायदेशीर संदर्भांनी शब्द आनी वर्सांत बदल जावंक जायना. अनुवाद एकाच यू. आय. जाग्यार बसपाक जाय, कुकी बॅनर ओवरलॅप जावंक जायना. मजकुरांतले क्रमांक आनी तारखां योग्य स्वरूपांत आसपाक जाय आनी अर्थ बदलूंक जायना. 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तारखेचे फॉरमॅट डीडी/एमएम/वायवायवायवाय.............................................. 00 एम. एम.-डी. डी.-वाय. वाय. वाय. वाय. एच.: एम. एम. ए. → 08-29-2025 11:35 ए. एम. टेक्स्ट फॉर्मेट्स डी. डी. म्हयनो वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 म्हयनो डी. डी., वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 सोम डी. डी., वाय. वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 डी. डी. सोम वाय. वाय. वाय. वाय. वाय.",
        "learnMore": "कस्टमायझ करात",
        "changeDescription": " "
      },
      "save": "स्विकार कर.",
      "consentModal": {
        "title": "संमतीची पसंती सानुकूल करात",
        "description": "पानां मदीं कुशळटायेन नेव्हिगेट करपाक, तुमची पसंती सांठोवन दवरपाक आनी सादारणपणान संकेतथळाचो तुमचो अणभव सुदारपाक आमी कुकीज वापरतात. पूण, आमी तुज्या खाजगीपणाच्या अधिकाराची मान्यताय दितात आनी देखून तूं कांय प्रकारच्या कुकीजांक परवानगी दिना अशें निवडूंक शकता. चड सोदून काडपाक आनी आमची पूर्वनिर्धारीत मांडणी बदलपाक वेगवेगळ्या श्रेणीच्या शीर्षकांचेर क्लिक करात. उपकार करून लक्षांत घेयात की कांय प्रकारच्या कुकीज आडावपाचो परिणाम तुमच्या सायटीच्या अणभवाचेर जावं येता. पॅन, आधार, ओ. टी. पी., डी. पी. डी. पी. कायदो, जी. डी. पी. आर., फकत एच. टी. टी. पी., यू. पी. आय., आनी उत्पादन/ब्रँड नांवांचो केन्नाच अनुवाद करचो न्हय. \"डी. पी. डी. पी. कायदो, 2023\" सारक्या कायदेशीर संदर्भांनी शब्द आनी वर्सांत बदल जावंक जायना. अनुवाद एकाच यू. आय. जाग्यार बसपाक जाय, कुकी बॅनर ओवरलॅप जावंक जायना. मजकुरांतले क्रमांक आनी तारखां योग्य स्वरूपांत आसपाक जाय आनी अर्थ बदलूंक जायना. 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य तारखेचे फॉरमॅट डीडी/एमएम/वायवायवायवाय.............................................. 00 एम. एम.-डी. डी.-वाय. वाय. वाय. वाय. एच.: एम. एम. ए. → 08-29-2025 11:35 एएम टेक्स्ट फॉर्मेट्स डी. डी. म्हयनो वाय. वाय. वाय. वाय. → 29 ऑगस्ट 2025 म्हयनो डी. डी., वाय. वाय. वाय. वाय. → 29 ऑगस्ट, 2025 सोम डी. डी., वाय. वाय. वाय. वाय. वाय. → 29 ऑगस्ट, 2025 सोम वाय. वाय. वाय. वाय. वाय.",
        "buttons": {
          "save": "स्विकार कर.",
          "acceptAll": "सगळें मान्य कर.",
          "decline": "सगळें न्हयकार"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "हे कुकीज आमकां संकेतथळाचो ट्रॅफिक, वापरप्याची वागणूक, आनी व्यस्ततायेचे नमुने विश्लेशण करपाक मदत करतात. एकठांय केल्ली अंतर्दृष्टी आमकां सामुग्री ऑप्टिमायझ करपाक, उपेगीपण वाडोवपाक आनी एकंदर सायटाची कामगिरी सुदारपाक मदत करता. हो वर्ग सक्तीचो आसा"
        },
        "Others": {
          "description": "ह्या श्रेणींत कुकीज आसतात ज्यो पूर्वनिर्धारित श्रेणींत बसनात पूण कांय संकेतथळाची कार्यक्षमताय वा सुदारणां खातीर गरजेच्यो आसूं येतात."
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "उद्देश"
      },
      "purposeItem": {
        "service": "सेवा",
        "services": "सेवा"
      }
    },
    "punjabi": {
      "acceptAll": "ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
      "accept": "ਸਵੀਕਾਰ ਕਰੋ।",
      "decline": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ",
      "acceptSelected": "ਚੁਣੇ ਹੋਏ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
      "ok": "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
      "consentNotice": {
        "description": "ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦਾ ਸਨਮਾਨ ਕਰਦੇ ਹਾਂ ਅਸੀਂ ਜ਼ਰੂਰੀ ਸਾਈਟ ਕਾਰਜਕੁਸ਼ਲਤਾ ਦੇ ਨਾਲ ਨਾਲ ਮਾਰਕੀਟਿੰਗ, ਵਿਅਕਤੀਗਤਕਰਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਨੂੰ ਸਮਰੱਥ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਨੂੰ ਸਟੋਰ ਕਰਦੇ ਹਾਂ। \"ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ\" ਉੱਤੇ ਕਲਿਕ ਕਰਕੇ, ਤੁਸੀਂ ਸਾਡੀਆਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ। ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀਆਂ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲ ਸਕਦੇ ਹੋ। ਪੈਨ, ਆਧਾਰ, ਓ. ਟੀ. ਪੀ., ਡੀ. ਪੀ. ਡੀ. ਪੀ. ਐਕਟ, ਜੀ. ਡੀ. ਪੀ. ਆਰ., ਸਿਰਫ ਐਚ. ਟੀ. ਟੀ. ਪੀ., ਯੂ. ਪੀ. ਆਈ. ਅਤੇ ਉਤਪਾਦ/ਬ੍ਰਾਂਡ ਨਾਮਾਂ ਦਾ ਕਦੇ ਵੀ ਅਨੁਵਾਦ ਨਹੀਂ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ। \"ਡੀ. ਪੀ. ਡੀ. ਪੀ. ਐਕਟ, 2023\" ਵਰਗੇ ਕਾਨੂੰਨੀ ਹਵਾਲੇ ਸ਼ਬਦਾਂ ਅਤੇ ਸਾਲ ਵਿੱਚ ਬਦਲਦੇ ਨਹੀਂ ਹੋਣੇ ਚਾਹੀਦੇ। ਅਨੁਵਾਦ ਉਸੇ ਯੂ. ਆਈ. ਸਪੇਸ ਵਿੱਚ ਫਿੱਟ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ, ਕੂਕੀ ਬੈਨਰ ਨੂੰ ਓਵਰਲੈਪ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ। ਪਾਠ ਵਿੱਚ ਨੰਬਰ ਅਤੇ ਮਿਤੀਆਂ ਸਹੀ ਫਾਰਮੈਟ ਵਿੱਚ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ ਅਤੇ ਅਰਥ ਵਿੱਚ ਕੋਈ ਤਬਦੀਲੀ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ। 0, 2, 3, 4, 5, 6, 7, 8, 9 ਆਮ ਮਿਤੀ ਫਾਰਮੈਟ ਡੀ. ਡੀ./ਐੱਮ. ਐੱਮ./ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29/08/2025 ਐੱਮ. ਐੱਮ./ਡੀ. ਡੀ./ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 08/29/2025 ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ./ਐੱਮ. ਐੱਮ./ਡੀ. ਡੀ. → 2025/08/29 ਡੀ. ਡੀ.-ਐੱਮ. ਐੱਮ.-ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29-08-2025 ਐੱਮ. ਐੱਮ.-ਡੀ. ਡੀ.-ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 08-29-2025 ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ.-ਐੱਮ.-ਡੀ. → 2025-08-29 (ਆਈ. ਐੱ ਡੀ. ਡੀ.-ਵਾਈ. ਵਾਈ. ਵਾਈ. ਐੱਚ. ਐੱਚ.: ਐੱਮ. ਐੱਮ. ਏ. → 08-29-2025 11:35 ਏ. ਐੱਮ. ਟੈਕਸਟ ਫਾਰਮੈਟਸ ਡੀ. ਡੀ. ਮਹੀਨਾ ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ 2025 ਮਹੀਨਾ ਡੀ. ਡੀ., ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ, 2025 ਸੋਮ ਡੀ. ਡੀ., ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ, 2025 ਡੀ. ਡੀ. ਸੋਮ ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ 2025 ਕੂਕੀ ਨੀਤੀ।",
        "learnMore": "ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "changeDescription": " "
      },
      "save": "ਸਵੀਕਾਰ ਕਰੋ।",
      "consentModal": {
        "title": "ਸਹਿਮਤੀ ਤਰਜੀਹਾਂ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "description": "ਅਸੀਂ ਪੰਨਿਆਂ ਵਿਚਕਾਰ ਕੁਸ਼ਲਤਾ ਨਾਲ ਨੈਵੀਗੇਟ ਕਰਨ, ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ ਨੂੰ ਸੰਭਾਲਣ ਅਤੇ ਆਮ ਤੌਰ 'ਤੇ ਕਿਸੇ ਵੈੱਬਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਤਜ਼ਰਬੇ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਹਾਲਾਂਕਿ, ਅਸੀਂ ਤੁਹਾਡੇ ਗੋਪਨੀਯਤਾ ਦੇ ਅਧਿਕਾਰ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ ਅਤੇ ਇਸ ਲਈ ਤੁਸੀਂ ਕੁੱਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਦੀ ਆਗਿਆ ਨਾ ਦੇਣ ਦੀ ਚੋਣ ਕਰ ਸਕਦੇ ਹੋ। ਹੋਰ ਜਾਣਨ ਅਤੇ ਸਾਡੀਆਂ ਡਿਫਾਲਟ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲਣ ਲਈ ਵੱਖ-ਵੱਖ ਸ਼੍ਰੇਣੀ ਸਿਰਲੇਖਾਂ 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਕਿਰਪਾ ਕਰਕੇ ਨੋਟ ਕਰੋ ਕਿ ਕੁੱਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਨੂੰ ਰੋਕਣਾ ਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਤਜ਼ਰਬੇ ਨੂੰ ਪ੍ਰਭਾਵਤ ਕਰ ਸਕਦਾ ਹੈ। ਪੈਨ, ਆਧਾਰ, ਓ. ਟੀ. ਪੀ., ਡੀ. ਪੀ. ਡੀ. ਪੀ. ਐਕਟ, ਜੀ. ਡੀ. ਪੀ. ਆਰ., ਸਿਰਫ ਐਚ. ਟੀ. ਟੀ. ਪੀ., ਯੂ. ਪੀ. ਆਈ. ਅਤੇ ਉਤਪਾਦ/ਬ੍ਰਾਂਡ ਨਾਮਾਂ ਦਾ ਕਦੇ ਵੀ ਅਨੁਵਾਦ ਨਹੀਂ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ। \"ਡੀ. ਪੀ. ਡੀ. ਪੀ. ਐਕਟ, 2023\" ਵਰਗੇ ਕਾਨੂੰਨੀ ਹਵਾਲੇ ਸ਼ਬਦਾਂ ਅਤੇ ਸਾਲ ਵਿੱਚ ਬਦਲਦੇ ਨਹੀਂ ਹੋਣੇ ਚਾਹੀਦੇ। ਅਨੁਵਾਦ ਉਸੇ ਯੂ. ਆਈ. ਸਪੇਸ ਵਿੱਚ ਫਿੱਟ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ, ਕੂਕੀ ਬੈਨਰ ਨੂੰ ਓਵਰਲੈਪ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ। ਪਾਠ ਵਿੱਚ ਨੰਬਰ ਅਤੇ ਮਿਤੀਆਂ ਸਹੀ ਫਾਰਮੈਟ ਵਿੱਚ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ ਅਤੇ ਅਰਥ ਵਿੱਚ ਕੋਈ ਤਬਦੀਲੀ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ। 0, 2, 3, 4, 5, 6, 7, 8, 9 ਆਮ ਮਿਤੀ ਫਾਰਮੈਟ ਡੀ. ਡੀ./ਐੱਮ. ਐੱਮ./ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29/08/2025 ਐੱਮ. ਐੱਮ./ਡੀ. ਡੀ./ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 08/29/2025 ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ./ਐੱਮ. ਐੱਮ./ਡੀ. ਡੀ. → 2025/08/29 ਡੀ. ਡੀ.-ਐੱਮ. ਐੱਮ.-ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29-08-2025 ਐੱਮ. ਐੱਮ.-ਡੀ. ਡੀ.-ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 08-29-2025 ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ.-ਐੱਮ.-ਡੀ. → 2025-08-29 (ਆਈ. ਐੱ ਡੀ. ਡੀ.-ਵਾਈ. ਵਾਈ. ਵਾਈ. ਐੱਚ. ਐੱਚ.: ਐੱਮ. ਐੱਮ. ਏ. → 08-29-2025 11:35 ਏ. ਐੱਮ. ਟੈਕਸਟ ਫਾਰਮੈਟ ਡੀ. ਡੀ. ਮਹੀਨਾ ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ 2025 ਮਹੀਨਾ ਡੀ. ਡੀ., ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ, 2025 ਸੋਮ ਡੀ. ਡੀ., ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ, 2025 ਡੀਡੀ ਸੋਮ ਵਾਈ. ਵਾਈ. ਵਾਈ. ਵਾਈ. → 29 ਅਗਸਤ 2025",
        "buttons": {
          "save": "ਸਵੀਕਾਰ ਕਰੋ।",
          "acceptAll": "ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
          "decline": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਨੂੰ ਵੈੱਬਸਾਈਟ ਟ੍ਰੈਫਿਕ, ਉਪਭੋਗਤਾ ਵਿਵਹਾਰ ਅਤੇ ਰੁਝੇਵਿਆਂ ਦੇ ਪੈਟਰਨਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੀਆਂ ਹਨ। ਇਕੱਠੀ ਕੀਤੀ ਗਈ ਸੂਝ ਸਾਨੂੰ ਸਮੱਗਰੀ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ, ਉਪਯੋਗਤਾ ਵਧਾਉਣ ਅਤੇ ਸਮੁੱਚੀ ਸਾਈਟ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਦੀ ਆਗਿਆ ਦਿੰਦੀ ਹੈ। ਇਹ ਸ਼੍ਰੇਣੀ ਲਾਜ਼ਮੀ ਹੈ"
        },
        "Others": {
          "description": "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੂਕੀਜ਼ ਸ਼ਾਮਲ ਹਨ ਜੋ ਪਹਿਲਾਂ ਤੋਂ ਪ੍ਰਭਾਸ਼ਿਤ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਫਿੱਟ ਨਹੀਂ ਹੁੰਦੀਆਂ ਪਰ ਕੁਝ ਵੈੱਬਸਾਈਟ ਕਾਰਜਕੁਸ਼ਲਤਾ ਜਾਂ ਸੁਧਾਰਾਂ ਲਈ ਜ਼ਰੂਰੀ ਹੋ ਸਕਦੀਆਂ ਹਨ।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "ਉਦੇਸ਼"
      },
      "purposeItem": {
        "service": "ਸੇਵਾ",
        "services": "ਸੇਵਾਵਾਂ"
      }
    },
    "sanskrit": {
      "acceptAll": "सर्वं स्वीकरोतु।",
      "accept": "स्वीकरोतु।",
      "decline": "सर्वं निराकरोतु।",
      "acceptSelected": "चयनं स्वीकरोतु।",
      "ok": "सर्वं स्वीकरोतु।",
      "consentNotice": {
        "description": "वयं भवतः गोपनीयतायाः आदरं कुर्वन्ति, वयं आवश्यक-जालपुट-कार्यक्षमतां, अपि च विपणनं, वैयक्तिकरणं, विश्लेषणं च समर्थयितुं कुकीस् सञ्चालयामः। \"सर्वान् स्वीकरोतु\" इति क्लिक् कृत्वा, भवान् अस्माकं कुकीस् इत्यस्य उपयोगाय सम्मतिं ददति। भवान् कस्मिंश्चित् अपि स्वस्य सेट्टिङ्ग्स् परिवर्तयितुं शक्नोति। पान्, आधार, ओटिपि, डि. पि. डि. पि. अधिनियमः, जि. डि. पि. आर्., केवलं एच. टि. टि. पि., यू. पि. ऐ., उत्पादानां/ब्राण्ड्-नामानां च अनुवादः कदापि न करणीयः। \"डी. पी. डी. पी. अधिनियमः, 2023\" इत्यादीनि वैधानिकानि उल्लेखानि शब्दार्थं वर्षे च अपरिवर्तितानि एव भवेयुः। अनुवादाः समान-यू. ऐ. स्थाने एव योजनीयाः भवेयुः, कुकी-फलकं अतिव्याप्तिः न भवेत्। पाठे संख्याः दिनाङ्काः च सम्यक् रूपेण भवेयुः, अर्थरूपेण च अपरिवर्तिताः भवेयुः। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य-दिनाङ्क-विन्यासाः डि. डि./एम्. एम्./वै. वै. वै. वै. → 29/08/2025 एम्. एम्./डि. डि./वै. वै. वै. वै. → 08/29/2025 वै. वै. वै. वै./एम्. एम्./डि. डि. → 2025/08/29 डि. डि.-एम्. एम्.-वै. वै. वै. वै. → 08-29-2025 वै. वै. वै. वै.-एम्. एम्.-डि. डि. → 2025-08-29 (ऐ. एस्. ओ. 8601 मानकम्) डि. डि. एम्. एम्.-वै. वै. वै. वै. वै. वै. वै. 00 एम्. एम्.-डी. डी.-वै. वै. वै. एच्.: एम्. एम्. ए. → <ऐ. डी. 3> <ऐ. डी. 6> ए. एम्. टेक्सचुयल् फार्मेट्स् डी. डी. मासः वै. वै. वै. वै. → 29 आगस्ट् 2025 मासः डी. डी., वै. वै. वै. वै. → आगस्ट् 29,2025 सोमः डी. डी., वै. वै. वै. वै. → आगस्ट् 29,2025 सोमः वै. वै. वै. वै. वै. → 29 आगस्ट् 2025 कुकी नीतिः।",
        "learnMore": "कस्टमैस् कुरु।",
        "changeDescription": " "
      },
      "save": "स्वीकरोतु।",
      "consentModal": {
        "title": "सहमतिप्राधान्यतां स्वकीयीकरोतु।",
        "description": "वयं कुकीस् इत्येतान् भवतां पृष्ठानां मध्ये दक्षतया मार्गनिर्देशयितुं, भवतः प्राथमिकतां सञ्चारं कर्तुं, सामान्यतया भवतः जालपुटानुभवं वर्धयितुं च उपयुज्यामः। तथापि, वयं भवतः गोपनीयतायाः अधिकारम् अङ्गीकृष्यामः, अतः भवान् केषुचित् प्रकाराणां कुकीस् इत्येतान् न अनुमन्येताम् इति चयनं कर्तुं शक्नोति। विभिन्नवर्गस्य शीर्षकेषु क्लिक् कुर्वन्तु, येन अधिकं ज्ञातुं, अस्मैः पूर्वनिर्धारितानि सेट्टिङ्ग्स् च परिवर्तयितुं शक्नुयात्। कृपया लक्षयतु यत् कतिपयप्रकाराणां कुकीस् इत्येतान् अवरुद्धं कुर्वन् भवतः जालपुटस्य अनुभवः प्रभावितः भवेत्। पान्, आधार, ओटिपि, डि. पि. डि. पि. अधिनियमः, जि. डि. पि. आर्., केवलं एच. टि. टि. पि., यू. पि. ऐ., उत्पादानां/ब्राण्ड्-नामानां च अनुवादः कदापि न करणीयः। \"डी. पी. डी. पी. अधिनियमः, 2023\" इत्यादीनि वैधानिकानि उल्लेखानि शब्दार्थं वर्षे च अपरिवर्तितानि एव भवेयुः। अनुवादाः समान-यू. ऐ. स्थाने एव योजनीयाः भवेयुः, कुकी-फलकं अतिव्याप्तिः न भवेत्। पाठे संख्याः दिनाङ्काः च सम्यक् रूपेण भवेयुः, अर्थरूपेण च अपरिवर्तिताः भवेयुः। 0, 2, 3, 4, 5, 6, 7, 8, 9 सामान्य-दिनाङ्क-विन्यासाः डि. डि./एम्. एम्./वै. वै. वै. वै. → 29/08/2025 एम्. एम्./डि. डि./वै. वै. वै. वै. → 08/29/2025 वै. वै. वै. वै./एम्. एम्./डि. डि. → 2025/08/29 डि. डि.-एम्. एम्.-वै. वै. वै. वै. → 08-29-2025 वै. वै. वै. वै.-एम्. एम्.-डि. डि. → 2025-08-29 (ऐ. एस्. ओ. 8601 मानकम्) डि. डि. एम्. एम्.-वै. वै. वै. वै. वै. वै. वै. 00 एम्. एम्.-डी. डी.-वै. वै. वै. एच्.: एम्. एम्. ए.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.-ए. एम्.",
        "buttons": {
          "save": "स्वीकरोतु।",
          "acceptAll": "सर्वं स्वीकरोतु।",
          "decline": "सर्वं निराकरोतु।"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "Analytics": {
          "description": "एते कुकीस् इत्येताः जालपुटस्य यातायातस्य, उपयोक्तृ-व्यवहारस्य, संलग्नता-विन्यासस्य च विश्लेषणार्थं साहाय्यं कुर्वन्ति। सङ्गृहीताः अन्तर्दृष्टयः सामग्रीं अनुकूलतां कर्तुं, उपयोगितां वर्धयितुं, समग्र-जालस्थल-प्रदर्शनं च वर्धयितुं साहाय्यं कुर्वन्ति। अयं वर्गः अनिवार्यः अस्ति।"
        },
        "Others": {
          "description": "अस्मिन् वर्गे कुकीस् इत्येतानि अन्तर्भवन्ति यानि पूर्वनिर्धारितेषु वर्गेषु न योजयन्ति परन्तु कतिपय-जालपुट-क्रियात्मकतायै वा सुधाराय वा आवश्यकानि भवितुम् अर्हन्ति।"
        }
      },
      "service": {
        "disableAll": {
          "description": "DisableAll",
          "title": "Disable"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        },
        "purpose": "प्रयोजनम्।"
      },
      "purposeItem": {
        "service": "सेवाः।",
        "services": "सेवाः"
      }
    }
  },
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
  "appName": "Test The Bhashini ",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "Test The Bhashini ",
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