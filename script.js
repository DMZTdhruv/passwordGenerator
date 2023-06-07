const generateStrongPasswordBtn = document.getElementById('generatePassword');
const generatedPassword = document.querySelector('.genertated-password');
const generateWeakPasswordBtn = document.getElementById('generateWeakPassword');

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvxyz";
const symbols = "$%^&*()#@!";
const numbers = "0123456789";
const allOptions = document.querySelectorAll('.options');

const options = [
    { name: "uppercase", value: "false"},
    { name: "lowercase", value: "false"},
    { name: "symbols", value: "false"},
    { name: "numbers", value: "false"},
]

allOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        if (option.name === "uppercase") {
            options[0].value === "false" ? options[0].value = "true" : options[0].value = "false";
        } else if (option.name === "lowercase") {
            options[1].value === "false" ? options[1].value = "true" : options[1].value = "false";
        } else if (option.name === "symbols") {
            options[2].value === "false" ? options[2].value = "true" : options[2].value = "false";
        } else if (option.name === "numbers") {
            options[3].value === "false" ? options[3].value = "true" : options[3].value = "false";
        }
    })
})

class Password {
    generateWeakPassword() {
        const password = [
            "123456",
            "12345678",
            "123456789",
            "12345",
            "1234567",
            "password",
            "1password",
            "abc123",
            "qwerty",
            "111111",
            "1234",
            "iloveyou",
            "sunshine",
            "monkey",
            "1234567890",
            "123123",
            "princess",
            "baseball",
            "dragon",
            "football",
            "shadow",
            "soccer",
            "unknownMan",
            "000000",
            "myspace1",
            "purple",
            "fuckyou",
            "superman",
            "Tigger",
            "buster",
            "pepper",
            "ginger",
            "qwerty123",
            "qwerty1",
            "peanut",
            "summer",
            "654321",
            "michael1",
            "cookie",
            "LinkedIn",
            "whatever",
            "mustang",
            "qwertyuiop",
            "123456a",
            "123abc",
            "pokemon",
            "StarWars",
            "iloveyou2",
            "123qwe",
            "Pussy",
            "angel1"
        ]
        generatedPassword.innerHTML = password[Math.floor(Math.random() * password.length)];
    }
    generateStrongPassword() {
        let strongPassword = "";
        for(let a = 0;a<11;a++ ){
            if(options[0].value === "true"){
                strongPassword += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
            } if(options[1].value === "true"){
                strongPassword += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
            } if(options[2].value === "true") {
                strongPassword += symbols[Math.floor(Math.random() * numbers.length)];
            } if(options[3].value === "true") {
                strongPassword += numbers[Math.floor(Math.random() * symbols.length)];
            }
            const check = options.map((item)=>{
                return item.value;
            })   
            const crossCheck = ["false","false","false","false"];
            if(check === crossCheck){
                console.log('Select something');
            }
        }
        strongPassword = strongPassword.slice(0, 11);
        generatedPassword.innerHTML = strongPassword;
    }
};

const weak = new Password;
const strong = new Password;

const passwordWeak = () => {
    weak.generateWeakPassword();
}

const strongPassword = () => {
    strong.generateStrongPassword();
}

const console_Password = () => {
    console.log(options)
}

generateWeakPasswordBtn.addEventListener('click', passwordWeak);
generateStrongPasswordBtn.addEventListener('click', strongPassword);