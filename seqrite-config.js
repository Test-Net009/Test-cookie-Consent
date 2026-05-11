
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6a01fb21b7a6bd1bcd22d476",
  "uuid": "842b8267-1534-4bfd-9621-415f9a9fdd07",
  "domain": "https://perf.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://cookieconsenttestqa.netlify.app/",
  "cookieExpiresAfterDays": 365,
  "default": true,
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
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "zz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "bn": {
      "acceptAll": "সব গ্রহণ করুন",
      "accept": "গ্রহণ করুন",
      "decline": "সবগুলিই প্রত্যাখ্যান করুন",
      "acceptSelected": "নির্বাচিতদের গ্রহণ করুন",
      "ok": "সব গ্রহণ করুন",
      "consentNotice": {
        "description": "আমরা আপনার গোপনীয়তাকে সম্মান করি আমরা প্রয়োজনীয় সাইট কার্যকারিতা, পাশাপাশি বিপণন, ব্যক্তিগতকরণ এবং বিশ্লেষণ সক্ষম করতে কুকিজ সঞ্চয় করি। \"সবাইকে গ্রহণ করুন\"-এ ক্লিক করে, আপনি আমাদের কুকি ব্যবহারের জন্য সম্মত হন। আপনি যে কোনও সময় আপনার সেটিংস পরিবর্তন করতে পারেন। কুকি নীতি।",
        "learnMore": "কাস্টমাইজ করুন",
        "changeDescription": " "
      },
      "save": "গ্রহণ করুন",
      "consentModal": {
        "title": "সম্মতি পছন্দগুলি কাস্টমাইজ করুন",
        "description": "আমরা আপনাকে দক্ষতার সাথে পৃষ্ঠাগুলির মধ্যে নেভিগেট করতে, আপনার পছন্দগুলি সংরক্ষণ করতে এবং সাধারণত কোনও ওয়েবসাইটের আপনার অভিজ্ঞতা উন্নত করতে সহায়তা করার জন্য কুকি ব্যবহার করি। যাইহোক, আমরা আপনার গোপনীয়তার অধিকারকে স্বীকার করি এবং তাই আপনি কিছু ধরনের কুকিজ অনুমোদন না করার সিদ্ধান্ত নিতে পারেন। আরও জানতে এবং আমাদের ডিফল্ট সেটিংস পরিবর্তন করতে বিভিন্ন বিভাগের শিরোনামে ক্লিক করুন। দয়া করে মনে রাখবেন যে নির্দিষ্ট ধরনের কুকিজ ব্লক করা আপনার সাইটের অভিজ্ঞতাকে প্রভাবিত করতে পারে।",
        "buttons": {
          "save": "গ্রহণ করুন",
          "acceptAll": "সব গ্রহণ করুন",
          "decline": "সবগুলিই প্রত্যাখ্যান করুন"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সবগুলিই প্রত্যাখ্যান করুন",
          "title": "সবগুলিই প্রত্যাখ্যান করুন"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকিগুলি আমাদের ওয়েবসাইটের ট্রাফিক, ব্যবহারকারীর আচরণ এবং ব্যস্ততার ধরণ বিশ্লেষণ করতে সহায়তা করে। সংগৃহীত অন্তর্দৃষ্টি আমাদের বিষয়বস্তু অপ্টিমাইজ করতে, ব্যবহারযোগ্যতা বাড়াতে এবং সামগ্রিক সাইটের কর্মক্ষমতা উন্নত করতে সহায়তা করে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই বিভাগে এমন কুকিজ রয়েছে যা পূর্বনির্ধারিত বিভাগগুলির সাথে খাপ খায় না তবে নির্দিষ্ট ওয়েবসাইটের কার্যকারিতা বা উন্নতির জন্য প্রয়োজনীয় হতে পারে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "doi": {
      "acceptAll": "सभनें गी मंजूर करो",
      "accept": "मंजूर करो",
      "decline": "सभनें गी रद्द करो",
      "acceptSelected": "चुने गेदे गी मंजूर करो",
      "ok": "सभनें गी मंजूर करो",
      "consentNotice": {
        "description": "अस तुंʼदी निजता दा सम्मान करदे आं अस जरूरी साइट कार्यक्षमता दे कन्नै-कन्नै मार्केटिंग, निजीकरण ते विश्लेषिकी गी सक्षम करने आस्तै कुकीज़ स्टोर करदे आं। \"सभनें गी मंजूर करो\" पर क्लिक करियै, तुस साड़ियां कुकीज़ दे इस्तेमाल आस्तै सैह्मती दिंदे ओ। तुस कुसै बी समें अपनी सेटिंग बदली सकदे ओ। कुकी नीति।",
        "learnMore": "अनुकूलित करो",
        "changeDescription": " "
      },
      "save": "मंजूर करो",
      "consentModal": {
        "title": "सहमति वरीयताएं गी अनुकूलित करो",
        "description": "अस पेजें दे बिच्च कुशलता कन्नै नैविगेट करने च तुंʼदी मदद करने, तुंʼदी प्राथमिकताएं गी स्टोर करने ते आमतौरा पर कुसै वैबसाइट दे तुंʼदे अनुभव गी सधारत करने आस्तै कुकीज़ दा इस्तेमाल करदे आं। हालां-के, अस तुंʼदे निजता दे हक्क गी मंजूर करदे आं ते इस करियै तुस किश किस्में दियें कुकीज़ गी इजाज़त नेईं देने दा विकल्प चुन सकदे ओ। मती जानकारी हासल करने ते अपनी डिफ़ॉल्ट सेटिंग्स गी बदलने आस्तै बक्ख-बक्ख वर्ग शीर्षकें पर क्लिक करो। कृपा करियै ध्यान देओ जे किश किस्में दियें कुकीज़ गी अवरुद्ध करना साइट दे तुंʼदे अनुभव गी प्रभावत करी सकदा ऐ।",
        "buttons": {
          "save": "मंजूर करो",
          "acceptAll": "सभनें गी मंजूर करो",
          "decline": "सभनें गी रद्द करो"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभनें गी रद्द करो",
          "title": "सभनें गी रद्द करो"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "एह् कुकीज वेबसाइट ट्रैफिक, उपयोगकर्ता बर्ताव ते जुड़ाव पैटर्न दा विश्लेशन करने च साडी मदद करदियां न। इकट्ठी कीती गेई अंतर्दृष्टि तुसें गी सामग्री गी अनुकूलत करने, उपयोगता बधाने ते समूचे साइट प्रदर्शन च सधार करने दी इजाज़त दिंदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस वर्ग च कुकीज शामल न जेह्ड़े पूर्वपरिभाषित श्रेणियें च खरा नेईं उतरदे पर किश वैबसाइट कार्यक्षमताएं जां सधारें आस्तै लाजमी होई सकदे न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "gu": {
      "acceptAll": "બધા સ્વીકારો",
      "accept": "સ્વીકારો",
      "decline": "બધાને નકારી કાઢો",
      "acceptSelected": "પસંદ કરેલ સ્વીકારો",
      "ok": "બધાને સ્વીકારો",
      "consentNotice": {
        "description": "અમે તમારી ગોપનીયતાનો આદર કરીએ છીએ અમે આવશ્યક સાઇટ કાર્યક્ષમતા, તેમજ માર્કેટિંગ, વ્યક્તિગતકરણ અને વિશ્લેષણને સક્ષમ કરવા માટે કૂકીઝ સંગ્રહિત કરીએ છીએ. \"બધા સ્વીકારો\" પર ક્લિક કરીને, તમે અમારા કૂકીઝના ઉપયોગ માટે સંમતિ આપો છો. તમે કોઈપણ સમયે તમારી સેટિંગ્સ બદલી શકો છો. કૂકી નીતિ.",
        "learnMore": "કસ્ટમાઇઝ કરો",
        "changeDescription": " "
      },
      "save": "સ્વીકારો",
      "consentModal": {
        "title": "સંમતિ પસંદગીઓને કસ્ટમાઇઝ કરો",
        "description": "અમે તમને પૃષ્ઠો વચ્ચે અસરકારક રીતે નેવિગેટ કરવામાં, તમારી પસંદગીઓને સંગ્રહિત કરવામાં અને સામાન્ય રીતે વેબસાઇટના તમારા અનુભવને સુધારવામાં મદદ કરવા માટે કૂકીઝનો ઉપયોગ કરીએ છીએ. જો કે, અમે તમારા ગોપનીયતાના અધિકારને સ્વીકારીએ છીએ અને તેથી તમે અમુક પ્રકારની કૂકીઝને મંજૂરી ન આપવાનું પસંદ કરી શકો છો. વધુ જાણવા અને આપણી મૂળભૂત સેટિંગ્સ બદલવા માટે વિવિધ શ્રેણીના શીર્ષકો પર ક્લિક કરો. મહેરબાની કરીને નોંધ કરો કે અમુક પ્રકારની કૂકીઝને અવરોધિત કરવાથી સાઇટના તમારા અનુભવને અસર થઈ શકે છે.",
        "buttons": {
          "save": "સ્વીકારો",
          "acceptAll": "બધા સ્વીકારો",
          "decline": "બધાને નકારી કાઢો"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "બધાને નકારી કાઢો",
          "title": "બધાને નકારી કાઢો"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "આ કૂકીઝ અમને વેબસાઇટ ટ્રાફિક, વપરાશકર્તા વર્તન અને જોડાણ પેટર્નનું વિશ્લેષણ કરવામાં મદદ કરે છે. એકત્રિત કરવામાં આવેલી આંતરદૃષ્ટિ આપણને સામગ્રીને શ્રેષ્ઠ બનાવવા, ઉપયોગીતા વધારવા અને એકંદર સાઇટ પ્રદર્શનમાં સુધારો કરવાની મંજૂરી આપે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "આ શ્રેણીમાં એવી કૂકીઝનો સમાવેશ થાય છે જે પૂર્વવ્યાખ્યાયિત શ્રેણીઓમાં બંધબેસતી નથી પરંતુ ચોક્કસ વેબસાઇટ કાર્યક્ષમતાઓ અથવા સુધારાઓ માટે જરૂરી હોઈ શકે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "kn": {
      "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
      "accept": "ಸ್ವೀಕರಿಸಿ",
      "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
      "acceptSelected": "ಆಯ್ಕೆಯಾದವರನ್ನು ಸ್ವೀಕರಿಸಿ",
      "ok": "ಎಲ್ಲವನ್ನು ಸ್ವೀಕರಿಸಿ",
      "consentNotice": {
        "description": "ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ನಾವು ಗೌರವಿಸುತ್ತೇವೆ, ಅಗತ್ಯವಾದ ಸೈಟ್ ಕಾರ್ಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು, ಹಾಗೆಯೇ ಮಾರ್ಕೆಟಿಂಗ್, ವೈಯಕ್ತೀಕರಣ ಮತ್ತು ವಿಶ್ಲೇಷಣೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. \"ಎಲ್ಲರನ್ನೂ ಸ್ವೀಕರಿಸಿ\" ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ಕುಕೀಗಳ ಬಳಕೆಯನ್ನು ಒಪ್ಪುತ್ತೀರಿ. ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು. ಕುಕೀ ನೀತಿ.",
        "learnMore": "ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "changeDescription": " "
      },
      "save": "ಸ್ವೀಕರಿಸಿ",
      "consentModal": {
        "title": "ಒಪ್ಪಿಗೆಯ ಆದ್ಯತೆಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "description": "ಪುಟಗಳ ನಡುವೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು, ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ವೆಬ್ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಆದಾಗ್ಯೂ, ನಿಮ್ಮ ಗೌಪ್ಯತೆಯ ಹಕ್ಕನ್ನು ನಾವು ಅಂಗೀಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಆದ್ದರಿಂದ ನೀವು ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ಅನುಮತಿಸದಿರಲು ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಹೆಚ್ಚು ತಿಳಿಯಲು ಮತ್ತು ನಮ್ಮ ಪೂರ್ವನಿಯೋಜಿತ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಲು ವಿವಿಧ ವರ್ಗದ ಶೀರ್ಷಿಕೆಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ನಿರ್ಬಂಧಿಸುವುದರಿಂದ ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ.",
        "buttons": {
          "save": "ಸ್ವೀಕರಿಸಿ",
          "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
          "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
          "title": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ಈ ಕುಕೀಗಳು ಜಾಲತಾಣದ ದಟ್ಟಣೆ, ಬಳಕೆದಾರರ ನಡವಳಿಕೆ ಮತ್ತು ನಿಶ್ಚಿತಾರ್ಥದ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಸಂಗ್ರಹಿಸಿದ ಒಳನೋಟಗಳು ನಮಗೆ ವಿಷಯವನ್ನು ಅತ್ಯುತ್ತಮವಾಗಿಸಲು, ಉಪಯುಕ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಒಟ್ಟಾರೆ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸುಧಾರಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ಈ ವರ್ಗವು ಪೂರ್ವನಿರ್ಧರಿತ ವರ್ಗಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗದ ಆದರೆ ಕೆಲವು ಜಾಲತಾಣದ ಕಾರ್ಯಗಳು ಅಥವಾ ಸುಧಾರಣೆಗಳಿಗೆ ಅಗತ್ಯವಾಗಬಹುದಾದ ಕುಕೀಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "brx": {
      "acceptAll": "गासिबो नाजाव",
      "accept": "नाजाव",
      "decline": "गासिबोखौ नेवसि",
      "acceptSelected": "सायख 'जानायखौ नाजाव",
      "ok": "गासिबो नाजाव",
      "consentNotice": {
        "description": "जों नोंनि प्राइभेसिखौ मान होयो जों गोनांथार साइटनि खामानिजों लोगोसे मार्केटिं, गावारि खालामनाय आरो एनालाइटिक्स खालामनो थाखाय कुकिजखौ दोनथुमो। \"गासिबो नाजाव\" आव क्लिक खालामनानै, नों जोंनि कुकिफोरनि बाहायनायखौ गनायो। नोंथाङा जायखिजाया समावनो गावनि सेटिंसखौ सोलायनो हायो। कुकि पलिसि।",
        "learnMore": "कास्टमाइज खालाम",
        "changeDescription": " "
      },
      "save": "नाजाव",
      "consentModal": {
        "title": "गनायथि सायख 'नायफोरखौ कास्टमाइज खालाम",
        "description": "जों नोंथांखौ पेजफोरनि गेजेराव मोजाङै नेभिगेट खालामनायाव मदद होनो, नोंथांनि गोसो जानायफोरखौ दोनथुमनो आरो सरासनस्रायै नोंथांनि वेबसाइटनि रोंमोनदांथिखौ साबसिन खालामनो थाखाय कुकिफोरखौ बाहायो। जिखिजायामानो, जों नोंनि गावारि मोन्थाइखौ गनायो आरो बेनिखायनो नों माखासे रोखोमनि कुकिसखौ गनायथि होनाङा सायख 'नो हायो। बांसिन मिथिनो आरो जोंनि दिफल्ट सेटिंसखौ सोलायनो थाखाय गुबुन गुबुन थाखोनि हेडिंफोराव क्लिक खालाम। अन्नानै नोजोर हो दि माखासे रोखोमनि कुकिफोरखौ बन्द खालामनाया साइटनि नोंनि रोंमोनदांथिखौ गोहोम खोख्लैनो हागौ।",
        "buttons": {
          "save": "नाजाव",
          "acceptAll": "गासिबो नाजाव",
          "decline": "गासिबोखौ नेवसि"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "गासिबोखौ नेवसि",
          "title": "गासिबोखौ नेवसि"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "बे कुकिफोरा जोंनो वेबसाइट ट्राफिक, बाहायगिरिनि आखु आरो मावसोमनाय महरफोरखौ बिजिरनायाव मदद खालामो। बुथुमनाय मोनदांथिफोरा जोंनो आयदाफोरखौ साबसिन खालामनो, बाहायजाथावखौ बांहोनो आरो गासै साइट दिन्थिफुंनायखौ जौगाहोनो गनायथि होयो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "बे थाखोआ बै कुकिफोरखौ लाफायो जाय सिगां थि खालामनाय थाखोफोराव थाङा नाथाय माखासे वेबसाइटनि खामानि एबा जौगाथायनि थाखाय गोनां जानो हागौ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "as": {
      "acceptAll": "সকলো গ্ৰহণ কৰক",
      "accept": "গ্ৰহণ কৰক",
      "decline": "সকলোবোৰ নাকচ কৰক",
      "acceptSelected": "নিৰ্বাচিত গ্ৰহণ কৰক",
      "ok": "সকলো গ্ৰহণ কৰক",
      "consentNotice": {
        "description": "<p>আমি আপোনাৰ গোপনীয়তাক সন্মান কৰোঁ আমি অত্যাৱশ্যকীয় ছাইট কাৰ্য্যকৰীতা, লগতে বিপণন, ব্যক্তিগতকৰণ আৰু বিশ্লেষণ সক্ষম কৰিবলৈ কুকিজ সংৰক্ষণ কৰোঁ। \"সকলো গ্ৰহণ কৰক\" ক্লিক কৰি, আপুনি আমাৰ কুকিজৰ ব্যৱহাৰত সন্মতি প্ৰদান কৰে। আপুনি যিকোনো সময়তে আপোনাৰ ছেটিংছ সলনি কৰিব পাৰে। কুকি নীতি।</p>",
        "learnMore": "স্বনিৰ্বাচিত কৰক",
        "changeDescription": " "
      },
      "save": "গ্ৰহণ কৰক",
      "consentModal": {
        "title": "<p>সন্মতিৰ পছন্দসমূহ স্বনিৰ্বাচিত কৰক</p>",
        "description": "<p>আমি আপোনাক পৃষ্ঠাসমূহৰ মাজত কাৰ্য্যকৰীভাৱে নেভিগেট কৰাত সহায় কৰিবলৈ, আপোনাৰ পছন্দসমূহ সংৰক্ষণ কৰিবলৈ আৰু সাধাৰণতে ৱেবছাইট এটাৰ আপোনাৰ অভিজ্ঞতা উন্নত কৰিবলৈ কুকিজ ব্যৱহাৰ কৰোঁ। অৱশ্যে, আমি আপোনাৰ গোপনীয়তাৰ অধিকাৰক স্বীকাৰ কৰো আৰু সেয়েহে আপুনি কিছুমান প্ৰকাৰৰ কুকিজৰ অনুমতি নিদিব বিচাৰিব পাৰে। অধিক জানিবলৈ আৰু আমাৰ ডিফল্ট ছেটিংছ সলনি কৰিবলৈ বিভিন্ন শ্ৰেণীৰ শীৰ্ষকত ক্লিক কৰক। অনুগ্ৰহ কৰি মন কৰিব যে কিছুমান নিৰ্দিষ্ট ধৰণৰ কুকিজ ব্লক কৰিলে আপোনাৰ ছাইটৰ অভিজ্ঞতাত প্ৰভাৱ পৰিব পাৰে।</p>",
        "buttons": {
          "save": "গ্ৰহণ কৰক",
          "acceptAll": "সকলো গ্ৰহণ কৰক",
          "decline": "সকলোবোৰ নাকচ কৰক"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সকলোবোৰ নাকচ কৰক",
          "title": "সকলোবোৰ নাকচ কৰক"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকিজবোৰে আমাক ৱেবছাইটৰ ট্ৰেফিক, ব্যৱহাৰকাৰীৰ আচৰণ, আৰু ব্যস্ততাৰ ধৰণ বিশ্লেষণ কৰাত সহায় কৰে। সংগ্ৰহ কৰা অন্তৰ্দৃষ্টিয়ে আমাক সমল অনুকূল কৰিবলৈ, ব্যৱহাৰযোগ্যতা বৃদ্ধি কৰিবলৈ আৰু সামগ্ৰিক ছাইটৰ প্ৰদৰ্শন উন্নত কৰাত সহায় কৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই শ্ৰেণীত কুকিজ অন্তৰ্ভুক্ত থাকে যিবোৰ পূৰ্বনিৰ্ধাৰিত শ্ৰেণীত খাপ নাখায় কিন্তু কিছুমান ৱেবছাইটৰ কাৰ্য্যকৰীতা বা উন্নতিৰ বাবে প্ৰয়োজনীয় হ 'ব পাৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "hi": {
      "acceptAll": "सभी को स्वीकार करें",
      "accept": "स्वीकार करें",
      "decline": "सभी को अस्वीकार करें",
      "acceptSelected": "चयनित को स्वीकार करें",
      "ok": "सभी को स्वीकार करें",
      "consentNotice": {
        "description": "हम आपकी गोपनीयता का सम्मान करते हैं हम आवश्यक साइट कार्यक्षमता के साथ-साथ विपणन, वैयक्तिकरण और विश्लेषण को सक्षम करने के लिए कुकीज़ संग्रहीत करते हैं। \"सभी को स्वीकार करें\" पर क्लिक करके, आप कुकीज़ के हमारे उपयोग के लिए सहमत हैं। आप किसी भी समय अपनी सेटिंग बदल सकते हैं। कुकी नीति।",
        "learnMore": "अनुकूलित करें",
        "changeDescription": " "
      },
      "save": "स्वीकार करें",
      "consentModal": {
        "title": "सहमति वरीयताएँ अनुकूलित करें",
        "description": "हम कुकीज़ का उपयोग आपको पृष्ठों के बीच कुशलता से नेविगेट करने, आपकी प्राथमिकताओं को संग्रहीत करने और आम तौर पर किसी वेबसाइट के आपके अनुभव को बेहतर बनाने में मदद करने के लिए करते हैं। हालाँकि, हम आपकी गोपनीयता के अधिकार को स्वीकार करते हैं और इसलिए आप कुछ प्रकार की कुकीज़ की अनुमति नहीं दे सकते हैं। अधिक जानने के लिए विभिन्न श्रेणी शीर्षकों पर क्लिक करें और हमारी डिफ़ॉल्ट सेटिंग्स को बदलें। कृपया ध्यान दें कि कुछ प्रकार की कुकीज़ को अवरुद्ध करने से साइट का आपका अनुभव प्रभावित हो सकता है।",
        "buttons": {
          "save": "स्वीकार करें",
          "acceptAll": "सभी को स्वीकार करें",
          "decline": "सभी को अस्वीकार करें"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभी को अस्वीकार करें",
          "title": "सभी को अस्वीकार करें"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ये कुकीज़ हमें वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार और जुड़ाव पैटर्न का विश्लेषण करने में मदद करती हैं। एकत्रित अंतर्दृष्टि हमें सामग्री को अनुकूलित करने, उपयोगिता बढ़ाने और समग्र साइट प्रदर्शन में सुधार करने की अनुमति देती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस श्रेणी में ऐसी कुकीज़ शामिल हैं जो पूर्वनिर्धारित श्रेणियों में फिट नहीं होती हैं, लेकिन कुछ वेबसाइट कार्यक्षमताओं या सुधारों के लिए आवश्यक हो सकती हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
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
  "groupByPurpose": false,
  "hideToggleAll": false,
  "appName": "test11",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "test11",
  "companyAddress": " ",
  "services": [
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga",
        "_gid"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language_pref</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme_mode</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fbp</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;gcl_au</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;custom_test_cookie</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_segment</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "session_id",
        "csrf_token",
        "language_pref",
        "theme_mode",
        "fbp",
        "gcl_au",
        "custom_test_cookie",
        "user_segment"
      ]
    }
  ]
};
showCookie();