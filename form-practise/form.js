// JavaScript for Form practise
document.addEventListener('DOMContentLoaded', function() {
    const passportInput = document.getElementById('passportInput');
    const passportBox = document.getElementById('passportBox');
    const passportText = document.getElementById('passportText');
    const licenseInput = document.getElementById('licenseInput');
    const licenseBox = document.getElementById('licenseBox');
    const licenseText = document.getElementById('licenseText');
    
    passportBox.addEventListener('click', () => passportInput.click());
    licenseBox.addEventListener('click', () => licenseInput.click());

})