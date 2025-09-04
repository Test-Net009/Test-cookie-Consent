
document.addEventListener("DOMContentLoaded", function () {
  const branding = {"id":"688907cac1571b72b5ff0074","name":"Test","description":"","logo":"https://sdpqa-hs.qhtpl.com/cpm-api/upload/v1/fileDownloads?fileUrl=hdfs://sdp-hdfs-namenode.hdfs.svc.cluster.local:9820/jars/1753812728744_Logo.jpg","companyName":"Quick Heal","logoAlignment":"center","headerFontFamily":"Calibri","headerFontSize":"Large","headerFontColor":"#f44336","headerFontStyle":null,"primaryButtonLabel":"Submit","primaryFontSize":null,"primaryFontStyle":null,"primaryFontColor":"#7cb342","primaryButtonColor":null,"secondaryButtonLabel":"Cancel","secondaryFontSize":null,"secondaryFontStyle":null,"secondaryFontColor":"#f44336","footerAlignment":"center","status":"PUBLISHED","createdOn":1753810890971,"assignTo":0,"brandingTranslation":[{"language":"English","languageCode":"en","companyName":"Quick Heal","primaryButtonLabel":"Submit","secondaryButtonLabel":"Cancel"},{"language":"Marathi","languageCode":"mr","companyName":"जलद उपचार","primaryButtonLabel":"सबमिट करा","secondaryButtonLabel":"रद्द करा"},{"language":"Hindi","languageCode":"hi","companyName":"शीघ्र उपचार","primaryButtonLabel":"जमा करना","secondaryButtonLabel":"रद्द करना"}],"primaryButtonbgColor":"#fafafa","primaryButtonborderColor":"#4caf50","secondaryButtonBgColor":"#fafafa","secondaryButtonBorderColor":"#f44336"};
  const brandingTranslation = branding.brandingTranslation || [];
  const permissions = [{"id":"68891013c1571b72b5ff00a1","text":"<p>1) Gender:</p>","templateId":"68890afbc1571b72b5ff007e","purposeId":"688905c9c1571b72b5ff0072","defineOptions":true,"elementType":"RADIOBUTTON","mandatory":true,"allowMultipleSelection":false,"options":["Male","Female","Other"],"permissionTranslation":[{"language":"English","languageCode":"en","text":"<p>1) Gender:</p>","options":["Male","Female","Other"]},{"language":"Marathi","languageCode":"mr","text":"<p>१) लिंग:</p>","options":["पुरुष","स्त्री","इतर"]},{"language":"Hindi","languageCode":"hi","text":"<p>1) लिंग:</p>","options":["पुरुष","महिला","अन्य"]}]},{"id":"68891013c1571b72b5ff00a2","text":"<p>2) Marital Status:</p>","templateId":"68890afbc1571b72b5ff007e","purposeId":"688905c9c1571b72b5ff0072","defineOptions":true,"elementType":"CHECKBOX","mandatory":false,"allowMultipleSelection":false,"options":["Single","Married","Divorced","Widowed","Seperated","Other"],"permissionTranslation":[{"language":"English","languageCode":"en","text":"<p>2) Marital Status:</p>","options":["Single","Married","Divorced","Widowed","Seperated","Other"]},{"language":"Marathi","languageCode":"mr","text":"<p>२) वैवाहिक स्थिती:</p>","options":["सिंगल","विवाहित","घटस्फोटित","विधवा","वेगळे केले","इतर"]},{"language":"Hindi","languageCode":"hi","text":"<p>2) वैवाहिक स्थिति:</p>","options":["अकेला","विवाहित","तलाकशुदा","विधवा","विभाजित","अन्य"]}]},{"id":"68891013c1571b72b5ff00a3","text":"<p>3) Is the patient under 18 years old?</p>","templateId":"68890afbc1571b72b5ff007e","purposeId":"688905c9c1571b72b5ff0072","defineOptions":true,"elementType":"DROPDOWN","mandatory":false,"allowMultipleSelection":false,"options":["Yes","No"],"permissionTranslation":[{"language":"English","languageCode":"en","text":"<p>3) Is the patient under 18 years old?</p>","options":["Yes","No"]},{"language":"Marathi","languageCode":"mr","text":"<p>३) रुग्ण १८ वर्षांपेक्षा कमी वयाचा आहे का?</p>","options":["होय","नाही"]},{"language":"Hindi","languageCode":"hi","text":"<p>3) क्या मरीज की आयु 18 वर्ष से कम है?</p>","options":["हाँ","नहीं"]}]}];
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
  const email =  'sprint1@yopmail.com';
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
 
  fetch('https://sdpqa-hs.qhtpl.com/cpm-api/consent/v1/createOrUpdateConsent', {
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
