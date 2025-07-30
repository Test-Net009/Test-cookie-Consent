
document.addEventListener("DOMContentLoaded", function () {
  const branding = {"id":"687f2a31428a4c7ece28f892","name":"COVID-19 Travel Declaration Form","description":"","logo":"","companyName":"Quick Heal Technology Pune ","logoAlignment":"left","headerFontFamily":"Calibri","headerFontSize":"Normal","headerFontColor":"#f44336","headerFontStyle":null,"primaryButtonLabel":"Submit","primaryFontSize":null,"primaryFontStyle":null,"primaryFontColor":"#2e7d32","primaryButtonColor":null,"secondaryButtonLabel":"Cancel","secondaryFontSize":null,"secondaryFontStyle":null,"secondaryFontColor":"#f44336","footerAlignment":"left","status":"PUBLISHED","createdOn":1753164337131,"assignTo":0,"brandingTranslation":[{"language":"English","languageCode":"en","companyName":"Quick Heal Technology Pune ","primaryButtonLabel":"Submit","secondaryButtonLabel":"Cancel"},{"language":"Marathi","languageCode":"mr","companyName":"क्विक हील टेक्नॉलॉजी पुणे","primaryButtonLabel":"सबमिट करा","secondaryButtonLabel":"रद्द करा"},{"language":"Hindi","languageCode":"hi","companyName":"क्विक हील टेक्नोलॉजी पुणे","primaryButtonLabel":"जमा करना","secondaryButtonLabel":"रद्द करना"},{"language":"Telugu","languageCode":"te","companyName":"క్విక్ హీల్ టెక్నాలజీ పూణే","primaryButtonLabel":"సమర్పించండి","secondaryButtonLabel":"రద్దు చేయి"},{"language":"Gujarati","languageCode":"gu","companyName":"ક્વિક હીલ ટેકનોલોજી પુણે","primaryButtonLabel":"સબમિટ કરો","secondaryButtonLabel":"રદ કરો"}],"primaryButtonbgColor":"#fafafa","primaryButtonborderColor":"#66bb6a","secondaryButtonBgColor":"#fafafa","secondaryButtonBorderColor":"#ff5722"};
  const brandingTranslation = branding.brandingTranslation || [];
  const permissions = [{"id":"6889c387428a4c7ece28f9f7","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">1. Has your child travelled abroad during the past 30 days?</span></span></strong></p>","templateId":"68889b8d428a4c7ece28f997","purposeId":"687f2653428a4c7ece28f88a","defineOptions":true,"elementType":"RADIOBUTTON","mandatory":true,"allowMultipleSelection":false,"options":["Yes","No"],"permissionTranslation":[{"language":"English","languageCode":"en","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">1. Has your child travelled abroad during the past 30 days?</span></span></strong></p>","options":["Yes","No"]},{"language":"Marathi","languageCode":"mr","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">१. तुमच्या मुलाने गेल्या ३० दिवसांत परदेश प्रवास केला आहे का?</span></span></strong></p>","options":["होय","नाही"]},{"language":"Hindi","languageCode":"hi","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">1. क्या आपके बच्चे ने पिछले 30 दिनों के दौरान विदेश यात्रा की है?</span></span></strong></p>","options":["हाँ","नहीं"]},{"language":"Telugu","languageCode":"te","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">1. మీ బిడ్డ గత 30 రోజుల్లో విదేశాలకు ప్రయాణించారా?</span></span></strong></p>","options":["అవును","లేదు"]},{"language":"Gujarati","languageCode":"gu","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">૧. શું તમારા બાળકે છેલ્લા ૩૦ દિવસમાં વિદેશ પ્રવાસ કર્યો છે?</span></span></strong></p>","options":["હા","ના"]}]},{"id":"6889c387428a4c7ece28f9f8","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">2. Does your child have plans to travel abroad during the rest of the year?</span></span></strong></p>","templateId":"68889b8d428a4c7ece28f997","purposeId":"687f2653428a4c7ece28f88a","defineOptions":true,"elementType":"RADIOBUTTON","mandatory":false,"allowMultipleSelection":false,"options":["Yes","No"],"permissionTranslation":[{"language":"English","languageCode":"en","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">2. Does your child have plans to travel abroad during the rest of the year?</span></span></strong></p>","options":["Yes","No"]},{"language":"Marathi","languageCode":"mr","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">२. तुमच्या मुलाचा वर्षाच्या उर्वरित काळात परदेशात प्रवास करण्याचा विचार आहे का?</span></span></strong></p>","options":["होय","नाही"]},{"language":"Hindi","languageCode":"hi","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">2. क्या आपके बच्चे की शेष वर्ष में विदेश यात्रा की योजना है?</span></span></strong></p>","options":["हाँ","नहीं"]},{"language":"Telugu","languageCode":"te","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">2. మీ బిడ్డ సంవత్సరంలో మిగిలిన కాలంలో విదేశాలకు వెళ్లాలని ప్లాన్ చేస్తున్నారా?</span></span></strong></p>","options":["అవును","లేదు"]},{"language":"Gujarati","languageCode":"gu","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">૨. શું તમારા બાળકનો વર્ષના બાકીના સમયમાં વિદેશ પ્રવાસ કરવાનો પ્લાન છે?</span></span></strong></p>","options":["હા","ના"]}]},{"id":"6889c387428a4c7ece28f9f9","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">3. Is your child living with a household member under Home Quarantine Order (HQO) or Stay-Home Notice (SHN)?</span></span></strong></p>","templateId":"68889b8d428a4c7ece28f997","purposeId":"687f2653428a4c7ece28f88a","defineOptions":true,"elementType":"DROPDOWN","mandatory":false,"allowMultipleSelection":false,"options":["Yes","No"],"permissionTranslation":[{"language":"English","languageCode":"en","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">3. Is your child living with a household member under Home Quarantine Order (HQO) or Stay-Home Notice (SHN)?</span></span></strong></p>","options":["Yes","No"]},{"language":"Marathi","languageCode":"mr","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">३. तुमचे मूल होम क्वारंटाइन ऑर्डर (HQO) किंवा स्टे-होम नोटिस (SHN) अंतर्गत घरातील सदस्यासोबत राहत आहे का?</span></span></strong></p>","options":["होय","नाही"]},{"language":"Hindi","languageCode":"hi","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">3. क्या आपका बच्चा होम क्वारंटाइन ऑर्डर (HQO) या स्टे-होम नोटिस (SHN) के तहत घर के किसी सदस्य के साथ रह रहा है?</span></span></strong></p>","options":["हाँ","नहीं"]},{"language":"Telugu","languageCode":"te","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">3. మీ బిడ్డ హోమ్ క్వారంటైన్ ఆర్డర్ (HQO) లేదా స్టే-హోమ్ నోటీసు (SHN) కింద ఇంటి సభ్యుడితో నివసిస్తున్నారా?</span></span></strong></p>","options":["అవును","లేదు"]},{"language":"Gujarati","languageCode":"gu","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">૩. શું તમારું બાળક હોમ ક્વોરેન્ટાઇન ઓર્ડર (HQO) અથવા સ્ટે-હોમ નોટિસ (SHN) હેઠળ ઘરના કોઈ સભ્ય સાથે રહે છે?</span></span></strong></p>","options":["હા","ના"]}]},{"id":"6889c387428a4c7ece28f9fa","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">4. What transportation you use to drop and pick up your child?</span></span></strong></p><p></p>","templateId":"68889b8d428a4c7ece28f997","purposeId":"687f2653428a4c7ece28f88a","defineOptions":true,"elementType":"CHECKBOX","mandatory":false,"allowMultipleSelection":false,"options":["Owen Vehicle","Taxi","Private Car","Metro","Bus","By Foot"],"permissionTranslation":[{"language":"English","languageCode":"en","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">4. What transportation you use to drop and pick up your child?</span></span></strong></p><p></p>","options":["Owen Vehicle","Taxi","Private Car","Metro","Bus","By Foot"]},{"language":"Marathi","languageCode":"mr","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">४. तुमच्या मुलाला सोडण्यासाठी आणि घेण्यासाठी तुम्ही कोणत्या वाहतुकीचा वापर करता?</span></span></strong></p><p></p>","options":["ओवेन वाहन","टॅक्सी","खाजगी गाडी","मेट्रो","बस","पायाने"]},{"language":"Hindi","languageCode":"hi","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">4. आप अपने बच्चे को छोड़ने और लाने के लिए किस परिवहन का उपयोग करते हैं?</span></span></strong></p><p></p>","options":["ओवेन वाहन","टैक्सी","निजी कार","मेट्रो","बस","पैदल"]},{"language":"Telugu","languageCode":"te","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">4. మీ బిడ్డను దింపడానికి మరియు తీసుకెళ్లడానికి మీరు ఏ రవాణాను ఉపయోగిస్తారు?</span></span></strong></p><p></p>","options":["ఓవెన్ వాహనం","టాక్సీ","ప్రైవేట్ కారు","మెట్రో","బస్సు","కాలినడకన"]},{"language":"Gujarati","languageCode":"gu","text":"<p><strong><span style=\"color:rgb(44, 51, 69);\"><span style=\"background-color:rgb(255, 255, 255);\">૪. તમારા બાળકને મૂકવા અને લેવા માટે તમે કયા વાહનનો ઉપયોગ કરો છો?</span></span></strong></p><p></p>","options":["ઓવેન વાહન","ટેક્સી","ખાનગી કાર","મેટ્રો","બસ","પગપાળા"]}]}];
  const languageDropdown = document.getElementById("languageDropdown");

  function updateTranslations(lang) {
    // Update branding
    const brandTrans = brandingTranslation.find(bt => bt.language.toLowerCase() === lang);
    if (brandTrans) {
      document.querySelector('[data-translate="companyName"]').textContent = brandTrans.companyName || branding.companyName;
      document.querySelector('[data-translate="submitBtn"]').textContent = brandTrans.primaryButtonLabel || branding.primaryButtonLabel;
      document.querySelector('[data-translate="cancelBtn"]').textContent = brandTrans.secondaryButtonLabel || branding.secondaryButtonLabel;
    }

    // Clear and re-render permissions
    const container = document.getElementById("permissions");
    container.innerHTML = "";

    permissions.forEach(permission => {
  const translation = permission.permissionTranslation.find(pt => pt.language.toLowerCase() === lang);
  const rawText = translation?.text || permission.text;
  const text = rawText.trim(); 

  const options = translation?.options || permission.options || [];

  const block = document.createElement('div');
  block.className = 'permission-block';

  const question = document.createElement('p');
  question.setAttribute('data-translate-text', permission.id);

     if (permission.mandatory) {
        // question.innerHTML = `${text} <span class="mandatory">*</span>`;
        question.innerHTML = `${decodeHtmlEntities(text)} <span class="mandatory">*</span>`;

      }  else {
        // question.innerHTML = text;
        question.innerHTML = decodeHtmlEntities(text);
  }

  block.appendChild(question);

      if (permission.elementType === 'CHECKBOX') {
        options.forEach(option => {
          const label = document.createElement('label');
          label.className = 'checkbox-label';
          label.innerHTML = `<input type="checkbox" name="${permission.id}" value="${option}" data-translate-option="${permission.id}"> ${option}`;
          block.appendChild(label);
        });
      } else if (permission.elementType === 'RADIOBUTTON') {
        options.forEach(option => {
          const label = document.createElement('label');
          label.className = 'radio-label';
          label.innerHTML = `<input type="radio" name="${permission.id}" value="${option}" data-translate-option="${permission.id}"> ${option}`;
          block.appendChild(label);
        });
      } else if (permission.elementType === 'DROPDOWN') {

        if (permission.allowMultipleSelection) {
          const wrapper = document.createElement('div');
          wrapper.className = 'custom-multiselect-wrapper';
        
          const displayBox = document.createElement('div');
          displayBox.className = 'custom-multiselect-display';
        
          // Create span to hold the selected text
          const displayText = document.createElement('span');
          displayText.className = 'custom-multiselect-text';
          displayText.textContent = 'Select options';
        
          displayBox.appendChild(displayText);
          wrapper.appendChild(displayBox);
        
          const optionsBox = document.createElement('div');
          optionsBox.className = 'custom-options-box';
        
          options.forEach(opt => {
            const label = document.createElement('label');
            label.className = 'custom-option';
        
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = opt;
            checkbox.name = permission.id;
        
            checkbox.addEventListener('change', () => {
              const selected = Array.from(wrapper.querySelectorAll('input[type="checkbox"]:checked'))
                .map(cb => cb.value);
              const selectedText = selected.join(', ');
              displayText.textContent = selected.length ? selectedText : 'Select options';
              displayBox.title = selected.length ? selectedText : '';
            });
        
            label.appendChild(checkbox);
            label.append(opt);
            optionsBox.appendChild(label);
          });
        
          wrapper.appendChild(optionsBox);
        
          displayBox.addEventListener('click', () => {
            optionsBox.classList.toggle('show');
            displayBox.classList.toggle('open');
          });
        
          document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
              optionsBox.classList.remove('show');
              displayBox.classList.remove('open');
            }
          });
        
          block.appendChild(wrapper);
        }else{
           const select = document.createElement('select');
        select.className = 'dropdown';
        select.name = permission.id;
        select.setAttribute('data-translate-dropdown', permission.id);
        options.forEach(opt => {
          const optEl = document.createElement('option');
          optEl.value = opt;
          optEl.textContent = opt;
          select.appendChild(optEl);
        });
        block.appendChild(select);
        }
       
      }

      container.appendChild(block);
    });
  }

  languageDropdown.addEventListener("change", function () {
    updateTranslations(this.value.toLowerCase());
  });

  updateTranslations("english");

  let createConsentRequestList = [];
  let dataPrincipleIdList = [];

  // function setDataPrincipleIdList() {
  //   dataPrincipleIdList.push({ key: 'email', value: 'abc@c@emai.com' });
  // }

  function setDataPrincipleIdList() {
  // const email =  document.getElementById('inputEmail').value;
  const email =  'yes@yopmail.com';
  let obj = {
    key: 'email',
    value: email
  };
  dataPrincipleIdList.push(obj);
}

function decodeHtmlEntities(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

  function sendConsent() {
  const errorDiv = document.getElementById('error-message');
 
  fetch('https://qa-hs.qhtpl.com/cpm-api/consent/v1/createOrUpdateConsent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ createConsentRequestDtoWrapper: createConsentRequestList })
  }).then(res => res.json())
    .then(data => {
      if (data.response) {
        // Success case (optional: you can redirect or show success message here)
        console.log('API Response:', data);
    if (data.statusCode === 200) {
      showToast('Consent saved successfully!', 'success');
    } else {
      showToast(data.statusMessage || 'Something went wrong.', 'error');
    }
      } else {
        // API returned error
        // errorDiv.textContent = data.message || "Something went wrong. Please try again.";
      }
    })
    .catch(err => {
      // Network error or other failure
         console.error(err);
    showToast('Failed to submit. Please check your network connection.', 'error');
    });
}

    function showToast(message, type) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336'; // green for success, red for error
  toast.style.visibility = 'visible';
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.visibility = 'hidden';
    toast.style.opacity = '0';
  }, 3000); // hide after 3 seconds
}


  // function getFormValues() {
  //   setDataPrincipleIdList();
  //   createConsentRequestList = [];
  //   const container = document.querySelector(".consent");
  //   const elements = container.querySelectorAll('[name]');
  //   elements.forEach(el => {
  //     const name = el.name;
  //     const value = el.type === "checkbox" || el.type === "radio"
  //       ? el.checked ? el.value : null
  //       : el.value;

  //     if (value !== null && value !== undefined) {
  //       let request = createConsentRequestList.find(req => req.permissionId === name);
  //       if (!request) {
  //         request = {
  //           dataPrincipalIdList: dataPrincipleIdList,
  //           permissionId: name,
  //           consentReceivedType: "FORMS",
  //           optedFor: []
  //         };
  //         createConsentRequestList.push(request);
  //       }
  //       if (!request.optedFor.includes(value)) {
  //         request.optedFor.push(value);
  //       }
  //     }
  //   });
  //   console.log('Collected Form Data:', createConsentRequestList);
  //   sendConsent();
  // }

  function getFormValues() {
  setDataPrincipleIdList();
 
  let consentDiv = document.querySelector('#permissions');
  let checkboxes = consentDiv.querySelectorAll('input[type="checkbox"]:checked');
  let radioButtons = consentDiv.querySelectorAll('input[type="radio"]:checked');
  let dropdowns = consentDiv.querySelectorAll('select');
 
  checkboxes.forEach(checkbox => {
    let label = checkbox.closest('label') ? checkbox.closest('label').innerText : checkbox.value;
    let permissionId = checkbox.name;
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === permissionId) {
        createConsentRequestList[i].optedFor.push(label);
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: permissionId,
        consentReceivedType: 'FORMS',
        optedFor: [label],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  radioButtons.forEach(radioButton => {
    let label = radioButton.closest('label') ? radioButton.closest('label').innerText : radioButton.value;
    let permissionId = radioButton.name;
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === permissionId) {
        createConsentRequestList[i].optedFor.push(label);
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: permissionId,
        consentReceivedType: 'FORMS',
        optedFor: [label],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  dropdowns.forEach(dropdown => {
    let selectedOption = dropdown.options[dropdown.selectedIndex];
    let permissionId = dropdown.name;
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === permissionId) {
        createConsentRequestList[i].optedFor.push(selectedOption.innerText);
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: permissionId,
        consentReceivedType: 'FORMS',
        optedFor: [selectedOption.innerText],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  const consentElements = document.querySelectorAll('.consent [name]');
 
  consentElements.forEach(element => {
    const name = element.getAttribute('name');
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === name) {
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: name,
        consentReceivedType: 'FORMS',
        optedFor: [],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  console.log("Final Consent Payload:", createConsentRequestList);
  sendConsent();
}

 document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  
  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => el.remove());
  document.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border'));

  const container = document.querySelector(".consent");
  const elements = container.querySelectorAll('[name]');
  
  let hasError = false;
  let permissionTracker = {};

  elements.forEach(el => {
    const name = el.name;
    const value = (el.type === "checkbox" || el.type === "radio")
      ? el.checked ? el.value : null
      : el.value.trim();

    if (!permissionTracker[name]) {
      permissionTracker[name] = [];
    }
    if (value !== null && value !== undefined) {
      permissionTracker[name].push(value);
    }
  });

  // Validate mandatory permissions
  permissions.forEach(permission => {
    if (permission.mandatory) {
      const selectedValues = permissionTracker[permission.id] || [];
      if (selectedValues.length === 0) {
        hasError = true;

        // Find the related permission block
        const block = Array.from(document.querySelectorAll(".permission-block"))
          .find(div => {
            const p = div.querySelector('p[data-translate-text]');
            return p && p.getAttribute('data-translate-text') === permission.id;
          });

        if (block) {
          // Add error message
          const error = document.createElement('div');
          error.className = 'error-message';
          error.textContent = 'This field is required.';
          block.appendChild(error);

          // Highlight options
          const inputs = block.querySelectorAll('input, select');
          inputs.forEach(input => input.classList.add('error-border'));
        }
      }
    }
  });

  if (!hasError) {
    getFormValues();  // Only submit if no error
  }
});

});
