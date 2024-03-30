var qcodes = 
         [
            {
                "q-code": "CQ <By / Område>",
                "question-form": "Opkald til alle interesserede <By / Område>"
            },
            {
                "q-code": "QRK",
                "question-form": "Forståeligt"
            },
            {
                "q-code": "QRM",
                "question-form": "Forstyrrelse"
            },
            {
                "q-code": "QRN",
                "question-form": "Atmosfærisk støj"
            },
            {
                "q-code": "QRO",
                "question-form": "Forøget sendeeffekt"
            },
            {
                "q-code": "QRP",
                "question-form": "Nedsat sendeeffekt"
            },
            {
                "q-code": "QRT",
                "question-form": "Stands udsendelse"
            },
            {
                "q-code": "QRV",
                "question-form": "Parat (f.eks. 'Jeg lytter')"
            },
            {
                "q-code": "QRX",
                "question-form": "Kalder igen"
            },
            {
                "q-code": "QRZ",
                "question-form": "Hvem kalder"
            },
            {
                "q-code": "QSB",
                "question-form": "Varierende signalstyrke"
            },
            {
                "q-code": "QSL",
                "question-form": "Kvittering"
            },
            {
                "q-code": "QSO",
                "question-form": "Samtale"
            },
            {
                "q-code": "QSY",
                "question-form": "Skift frekvens"
            },
            {
                "q-code": "QTH",
                "question-form": "Position (f.eks. bopæl og spejderhytten)"
            },
            {
                "q-code": "XYL",
                "question-form": "Hustru (Ex-Young-Lady)"
            },
            {
                "q-code": "AR",
                "question-form": "Slut på transmissionen"
            },
            {
                "q-code": "BK",
                "question-form": "Break in, bryde"
            },
            {
                "q-code": "CQ",
                "question-form": "Opkald til alle"
            },
            {
                "q-code": "CW",
                "question-form": "Telegrafi"
            },
            {
                "q-code": "DE(de)",
                "question-form": "Bruges til adskillelse af kaldesignalet på den opkaldte og den kaldende station (her er)"
            },
            {
                "q-code": "K",
                "question-form": "'Kom' - en opfordring til sending"
            },
            {
                "q-code": "MSG",
                "question-form": "Meddelelse, melding"
            },
            {
                "q-code": "PSE",
                "question-form": "Please"
            },
            {
                "q-code": "R",
                "question-form": "Roger - 'modtaget, forstået'"
            },
            {
                "q-code": "RST",
                "question-form": "Læsbarheds-. Signalstyrke-tonerapport"
            },
            {
                "q-code": "RX",
                "question-form": "Modtager"
            },
            {
                "q-code": "TX",
                "question-form": "Sender"
            },
            {
                "q-code": "UR",
                "question-form": "Din"
            },
            {
                "q-code": "VA",
                "question-form": "Arbejdets ophør"
            },
            {
                "q-code": "VY",
                "question-form": "Very"
            },
            {
                "q-code": "51",
                "question-form": "'Hygge hejsa' (kun privatradio)"
            },
            {
                "q-code": "55",
                "question-form": "'Held og lykke' (tysk)"
            },
            {
                "q-code": "73",
                "question-form": "Farvel og på genhør"
            },
            {
                "q-code": "88",
                "question-form": "Kys og kram"
            },
            {
                "q-code": "99",
                "question-form": "Skrup af"
            },
            {
                "q-code": "P35",
                "question-form": "Øl"
            },
            {
                "q-code": "P2000",
                "question-form": "Snaps"
            }
        ]

let phoneticAlphabet = [
        {
            "letter": "A",
            "phonetic": "Alfa/Alpha",
            "morse": "● ▬",
            "pronunciation": "AL FAH"
        },
        {
            "letter": "B",
            "phonetic": "Bravo",
            "morse": "▬ ● ● ●",
            "pronunciation": "BRAH VOH"
        },
        {
            "letter": "C",
            "phonetic": "Charlie",
            "morse": "▬ ● ▬ ●",
            "pronunciation": "CHAR LEE"
        },
        {
            "letter": "D",
            "phonetic": "Delta",
            "morse": "▬ ● ●",
            "pronunciation": "DELL TAH"
        },
        {
            "letter": "E",
            "phonetic": "Echo",
            "morse": ".●",
            "pronunciation": "ECK OH"
        },
        {
            "letter": "F",
            "phonetic": "Foxtrot",
            "morse": "● ● ▬ ●",
            "pronunciation": "FOKS TROT"
        },
        {
            "letter": "G",
            "phonetic": "Golf",
            "morse": "▬ ▬ ●",
            "pronunciation": "GOLF"
        },
        {
            "letter": "H",
            "phonetic": "Hotel",
            "morse": "● ● ● ●",
            "pronunciation": "HOH TELL"
        },
        {
            "letter": "I",
            "phonetic": "India",
            "morse": "● ●",
            "pronunciation": "IN DEE AH"
        },
        {
            "letter": "J",
            "phonetic": "Juliett",
            "morse": "● ▬ ▬ ▬",
            "pronunciation": "JEW LEE ETT"
        },
        {
            "letter": "K",
            "phonetic": "Kilo",
            "morse": "▬ ● ▬",
            "pronunciation": "KEY LOH"
        },
        {
            "letter": "L",
            "phonetic": "Lima",
            "morse": "● ▬ ● ●",
            "pronunciation": "LEE MAH"
        },
        {
            "letter": "M",
            "phonetic": "Mike",
            "morse": "▬ ▬",
            "pronunciation": "MIKE"
        },
        {
            "letter": "N",
            "phonetic": "November",
            "morse": "▬ ●",
            "pronunciation": "NO VEMBER"
        },
        {
            "letter": "O",
            "phonetic": "Oscar",
            "morse": "▬ ▬ ▬",
            "pronunciation": "OSS CAH"
        },
        {
            "letter": "P",
            "phonetic": "Papa",
            "morse": "● ▬ ▬ ●",
            "pronunciation": "PAH PAH"
        },
        {
            "letter": "Q",
            "phonetic": "Quebec",
            "morse": "▬ ▬ ● ▬",
            "pronunciation": "KEH BECK"
        },
        {
            "letter": "R",
            "phonetic": "Romeo",
            "morse": "● ▬ ●",
            "pronunciation": "ROW ME OH"
        },
        {
            "letter": "S",
            "phonetic": "Sierra",
            "morse": "● ● ●",
            "pronunciation": "SEE AIRRAH"
        },
        {
            "letter": "T",
            "phonetic": "Tango",
            "morse": "▬",
            "pronunciation": "TANG OH"
        },
        {
            "letter": "U",
            "phonetic": "Uniform",
            "morse": "● ● ▬",
            "pronunciation": "YOU NEE FORM"
        },
        {
            "letter": "V",
            "phonetic": "Victor",
            "morse": "● ● ● ▬",
            "pronunciation": "VIK TAH"
        },
        {
            "letter": "W",
            "phonetic": "Whiskey",
            "morse": "● ▬ ▬",
            "pronunciation": "WISS KEY"
        },
        {
            "letter": "X",
            "phonetic": "X-ray",
            "morse": "▬ ● ● ▬",
            "pronunciation": "ECKS RAY"
        },
        {
            "letter": "Y",
            "phonetic": "Yankee",
            "morse": "▬ ▬ ● ●",
            "pronunciation": "YANG KEY"
        },
        {
            "letter": "Z",
            "phonetic": "Zulu",
            "morse": "▬ ▬ ▬ ▬ ▬",
            "pronunciation": "ZOO LOO"
        },
        {
            "letter": "Æ",
            "phonetic": "Ægir",
            "morse": "● ▬ ▬ ▬",
            "pronunciation": "Ægir"
        },
        {
            "letter": "Ø",
            "phonetic": "Ødis",
            "morse": "▬ ▬ ▬ ●",
            "pronunciation": "Ødis"
        },
        {
            "letter": "Å",
            "phonetic": "Åse",
            "morse": "● ▬ ▬ ●",
            "pronunciation": "Åse"
        }
]

// Options that is in
let phoneticWrongOptions = {
    "A": [
        "Able",
        "Apple",
        "Ant",
        "Arrow"
    ],
    "B": [
        "Badge",
        "Beagle",
        "Ballerina",
        "Beta"
    ],
    "C": [
        "Candle",
        "Cabbage",
        "Canyon",
        "Carpet"
    ],
    "D": [
        "Daisy",
        "Dragon",
        "Dolphin",
        "Drum"
    ],
    "E": [
        "Elephant",
        "Eagle",
        "Engine",
        "Eruption"
    ],
    "F": [
        "Frog",
        "Feather",
        "Fiddle",
        "Fossil"
    ],
    "G": [
        "Goose",
        "Giraffe",
        "Galaxy",
        "Glacier",
        "Gamma"
    ],
    "H": [
        "Hammer",
        "Harbor",
        "Hippo",
        "Horizon"
    ],
    "I": [
        "Icicle",
        "Island",
        "Ivy",
        "Iceberg"
    ],
    "J": [
        "Jellyfish",
        "Jet",
        "Jacket",
        "Jigsaw"
    ],
    "K": [
        "Kangaroo",
        "Keyboard",
        "King",
        "Kite"
    ],
    "L": [
        "Lemon",
        "Lion",
        "Lighthouse",
        "Leaf"
    ],
    "M": [
        "Magnet",
        "Moon",
        "Mountain",
        "Mushroom"
    ],
    "N": [
        "November",
        "Noodle",
        "Nest",
        "Nectar",
        "Ninja"
    ],
    "O": [
        "Octopus",
        "Olive",
        "Orbit",
        "Oyster"
    ],
    "P": [
        "Penguin",
        "Peach",
        "Pirate",
        "Puzzle"
    ],
    "Q": [
        "Quilt",
        "Queen",
        "Quail",
        "Quartz"
    ],
    "R": [
        "Rabbit",
        "Rocket",
        "Rainbow",
        "Robot"
    ],
    "S": [
        "Squirrel",
        "Sun",
        "Spider",
        "Sailboat"
    ],
    "T": [
        "Tiger",
        "Turtle",
        "Tornado",
        "Telescope"
    ],
    "U": [
        "Umbrella",
        "Unicorn",
        "UFO",
        "Ukelele"
    ],
    "V": [
        "Volcano",
        "Violin",
        "Viking",
        "Virus"
    ],
    "W": [
        "Whale",
        "Wand",
        "Waffle",
        "Walrus"
    ],
    "X": [
        "Xylophone",
        "Xylograph",
        "Xerox",
        "Xenon"
    ],
    "Y": [
        "Yacht",
        "Yogurt",
        "Yoyo",
        "Yield"
    ],
    "Z": [
        "Zebra",
        "Zipper",
        "Zephyr",
        "Zeppelin"
    ],
    "Æ": [
        "Æble",
        "Æsel",
        "Æg",
        "Æblekage",
        "Ænder",
        "Ægon"
    ],
    "Ø": [
        "Ørken",
        "Ørred",
        "Øl",
        "Øje",
        "Øresund",
        "Ørsted"
    ],
    "Å": [
        "Ål",
        "Ånd",
        "Åre",
        "Ål",
        "Åland"
    ]
}



let scoreScreen = (correctAnswers, amountOfQuestions) => {
    let modalBuild = document.createElement('div');
    modalBuild.className = 'modal';
    modalBuild.tabIndex = -1;
    let modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';
    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    let modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    modalHeader.innerHTML = '<h5 class="modal-title">Game Over</htitle>';
    let modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = `You got ${correctAnswers} out of ${amountOfQuestions} correct!`;
    let modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';
    let closeButton = document.createElement('button');
    closeButton.className = 'btn btn-secondary';
    closeButton.type = 'button';
    closeButton.dataset["bs-dismiss"] = 'modal';
    closeButton.innerHTML = 'Close';
    modalFooter.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modalBuild.appendChild(modalDialog);

    let body = document.getElementsByTagName('body')[0];
    body.appendChild(modalBuild);

}

var qcodeFunc = () => {
    let selectedQCode = qcodes[Math.floor(Math.random() * qcodes.length)];
    let isQCode = Math.random() < 0.5;
    let questionKey = isQCode ? "q-code" : "question-form";
    let answerKey = isQCode ? "question-form" : "q-code";

    let question = selectedQCode[questionKey];
    let answer = selectedQCode[answerKey];
    let answerTwo = "";
    let answerThree = "";

    while (answerTwo === "" || answerTwo[answerKey] === answer) {
        answerTwo = qcodes[Math.floor(Math.random() * qcodes.length)][answerKey];
    }

    while (answerThree === "" || answerThree[answerKey] === answer || answerThree[answerKey] === answerTwo) {
        answerThree = qcodes[Math.floor(Math.random() * qcodes.length)][answerKey];
    }

    let options = [
        { name: answer, correct: true },
        { name: answerTwo, correct: false },
        { name: answerThree, correct: false }
    ];

    return {
        question: question,
        options: options
    }
}

var phoneticAlphabetFunc = () => {
    let selectedLetter = phoneticAlphabet[Math.floor(Math.random() * phoneticAlphabet.length)];
    let question = `Hvilket ord bruges til at repræsentere bogstavet ${selectedLetter.letter} i det fonetiske alfabet?`;
    let answer = selectedLetter.phonetic;

    let answerTwo = "";
    let answerThree = "";
    answerTwo = phoneticWrongOptions[selectedLetter.letter][Math.floor(Math.random() * phoneticWrongOptions[selectedLetter.letter].length)];
    while (answerThree === "" || answerThree === answerTwo) {
        answerThree = phoneticWrongOptions[selectedLetter.letter][Math.floor(Math.random() * phoneticWrongOptions[selectedLetter.letter].length)];
    }
    
    let options = [
        { name: answer, correct: true },
        { name: answerTwo, correct: false },
        { name: answerThree, correct: false }
    ];

    return {
        question: question,
        options: options
    }
}
let questions = {
    "qcodes": qcodeFunc,
    "phoneticAlphabet": phoneticAlphabetFunc
}


let startGame = (amountOfQuestions, endOfGameCallback) => {
    let gameQuestions = [];

    while (gameQuestions.length < amountOfQuestions) {
        let questionCode = new URLSearchParams(window.location.search).get('q');
        if (!questionCode || questions[questionCode] == null) {
            questionCode = 'all';
        }
        let question = questions[questionCode];
        gameQuestions.push(question());
    }

    let currentQuestion = 0;
    callBack = (correct) => {
        if (correct) {
            correctAnswers++;
        }
        if (currentQuestion >= amountOfQuestions) {
            scoreScreen(correctAnswers, amountOfQuestions);

        }
    }
    cardReplacer(currentQuestion, gameQuestions[currentQuestion]["question"], gameQuestions[currentQuestion]["options"], callBack);

    let nextQuestion = () => {
        if (currentQuestion >= amountOfQuestions) {
            endOfGameCallback(correctAnswers, amountOfQuestions);
        } else {
            cardReplacer(currentQuestion, gameQuestions[currentQuestion]["question"], gameQuestions[currentQuestion]["options"], callBack);
            currentQuestion++;
        }
    }

}

let game = () => {
    console.log("Beginning game! Welcome :)")
    let amountOfQuestions = 40;
    let correctAnswers = 0;


   
    
    let cardReplacer = (title, question, options, callBack) => {
        let cardTitle = document.getElementById('questionTitle')
        cardTitle.innerHTML = title;
        let cardBody = document.getElementById('questionText');
        cardBody.innerHTML = question;
        let optionBlock = document.getElementById('questionOptions');
        optionBlock.innerHTML = '';

        // scramble answers
        options = options.sort(() => Math.random() - 0.5);
        for (var i = 0; i < options.length; i++) {
            let option = document.createElement('li');
            option.dataset.correct = options[i].correct;
            option.className = 'btn btn-primary' + (options[i].correct ? ' correct' : ' incorrect');
            option.innerHTML = options[i].name;
            option.className = 'btn btn-primary';
            option.onclick = function () {
                let optionBlockChildren = document.getElementById('questionOptions');
                optionBlockChildren.childNodes.forEach((child) => {
                    if (child.tagName === 'BUTTON' || child.tagName === 'INPUT') {
                        child.disabled = true; // Directly setting the disabled property
                    }
                    if (child.dataset.correct === "true") {
                        child.className = 'btn btn-success';
                    } else {
                        child.className = 'btn btn-danger';
                    }
                });
                if (option.dataset.correct === "true") {
                    console.log("Correct Answer");
                    callBack(true);
                } else {
                    console.log("Wrong Answer");
                    callBack(false);
                }
                option.onclick = null;
                sleep(1000).then(() => {
                    nextQuestion();
                });
            }
            optionBlock.appendChild(option);
        }
    }


    

}

    

let buildScoreScreen = () => {
    let scoreScreen = document.createElement('div');
    scoreScreen.className = 'scoreScreen';

    



// on document ready
document.addEventListener('DOMContentLoaded', function () {
    findQuestion();
});



var findQuestion = () => {
    if (questions.length == 0) {
        return;
    }
    // If the query parameter contains a question code, use that question code
    let questionCode = new URLSearchParams(window.location.search).get('q');
    if (!questionCode || questions[questionCode] == null) {
        questionCode = 'all';
    }

    let question = null;

    if (questionCode == 'all') {
        // list of all keys
        let keys = Object.keys(questions);
        // get a random key
        let selectedKey = keys[Math.floor(Math.random() * keys.length)];
        question = questions[selectedKey];
        questionCode = selectedKey;
    } else {
        question = questions[questionCode];
    }
    let title = questionCode;
    var questionObject = question();

    cardReplacer(title, questionObject["question"], questionObject["options"]);
}

var cardReplacer = (title, question, options) => {
    
    let cardTitle = document.getElementById('questionTitle')
    cardTitle.innerHTML = title;
    let cardBody = document.getElementById('questionText');
    cardBody.innerHTML = question;
    let optionBlock = document.getElementById('questionOptions');
    optionBlock.innerHTML = '';

    // scramble answers
    options = options.sort(() => Math.random() - 0.5);
    for (var i = 0; i < options.length; i++) {
        let option = document.createElement('li');
        option.dataset.correct = options[i].correct;
        option.className = 'btn btn-primary' + (options[i].correct ? ' correct' : ' incorrect');
        option.innerHTML = options[i].name;
        option.className = 'btn btn-primary';
        option.onclick = function () {
            let optionBlockChildren = document.getElementById('questionOptions');
            
            optionBlockChildren.childNodes.forEach((child) => {
                console.log("child: ", child)
                if (child.tagName === 'BUTTON' || child.tagName === 'INPUT') {
                    child.disabled = true; // Directly setting the disabled property
                }
                if (child.dataset.correct === "true") {
                    child.className = 'btn btn-success';
                } else {
                    child.className = 'btn btn-danger';
                }
            });
            if (option.dataset.correct === "true") {
                console.log("Correct Answer");
            } else {
                console.log("Wrong Answer");
            }
            option.onclick = null;
            sleep(1000).then(() => {
                findQuestion();
            });
        }
        optionBlock.appendChild(option);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateQueryStringParameter(value) {
    const url = new URL(location.href);
    url.searchParams.set("q", value);
    location.replace(url);
  }