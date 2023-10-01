
var characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()'
};

var strengthLevels = {
    1: 'red',
    2: 'orangered',
    3: 'orange',
    4: 'lightgreen'
};



document.getElementById('length-slider').addEventListener('input', function() {
    document.getElementById('length-display').innerText = this.value;
});

document.getElementById('generate-button').addEventListener('click', function() {
    var length = document.getElementById('length-slider').value;
    var includeUppercase = document.getElementById('include-uppercase').checked;
    var includeLowercase = document.getElementById('include-lowercase').checked;
    var includeNumbers = document.getElementById('include-numbers').checked;
    var includeSymbols = document.getElementById('include-symbols').checked;

    var passwordCharacters = '';
    if (includeUppercase) passwordCharacters += characters.uppercase;
    if (includeLowercase) passwordCharacters += characters.lowercase;
    if (includeNumbers) passwordCharacters += characters.numbers;
    if (includeSymbols) passwordCharacters += characters.symbols;

    var password = '';
    for (var i = 0; i < length; i++) {
        password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    document.getElementById('password-display').value = password;

    var strength = 0;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (length >= 12) strength++;

    for (var i = 1; i <= 4; i++) {
        var box = document.getElementById('strength-' + i);
        if (i <= strength) {
            box.style.backgroundColor = strengthLevels[strength];
        } else {
            box.style.backgroundColor = 'transparent';
        }
    }
});

document.getElementById('copy-button').addEventListener('click', function() {
    var password = document.getElementById('password-display').value;
    navigator.clipboard.writeText(password);
});



const lengthSlider = document.getElementById('length-slider');
const lengthDisplay = document.getElementById('length-display');

lengthSlider.addEventListener('input', function () {
    const newValue = this.value;
    lengthDisplay.textContent = newValue;

    if (newValue === '100') {
        lengthDisplay.style.marginLeft = '104px';
    } else {
        lengthDisplay.style.marginLeft = '110px';
    }
});