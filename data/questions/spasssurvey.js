var questions = [
    {
        "qid": 1,
        "text": "Let’s say you just got a new game to play on the computer, but you need a password to use it. " + 
        "Please make up a new password using the technique you have just learnt. " + 
        "(Remember don’t write down one of your real passwords)",
        "subquestions": [
            {
                "sid": 1,
                "type": "textbox",
                "keyword": "Password"
            }
        ],
    },
    {
        "qid": 2,
        "text": "Password I have just created is __________.",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "keyword": "Password Strength",
                "elements": ['Very Strong', 'Strong', 'Medium', 'Weak', 'Very Weak']
            }
        ]
    },
    {
        "qid": 3,
        "text": "I will ___________ remember the password I have just created.",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "keyword": "Memorability",
                "elements": ['Definitely not', 'Probably not', 'Maybe', 'Probably', 'Definitely']
            }
        ],
        
    },
    {
        "qid": 4,
        "text": "It was easy to think of a personal memory that I have not shared with anyone.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Easy to think memory",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 5,
        "text": "It was difficult to choose the words.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Difficulty Choosing words",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    }
];

exports.questions = questions;
