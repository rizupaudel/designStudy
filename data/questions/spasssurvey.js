var questions = [
    {
        "qid": 1,
        "text": "The password I have created is: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "Weak",
                    "high": "Strong"
                }
            }
        ],
    },
    {
        "qid": 2,
        "text": "I felt motivated to create a strong password after going through this design",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 3,
        "text": "The password I have created is: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "hard to remember",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "can be easily guessed by a hacker ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "can be easily guessed by my close friends or family members",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 4,
                "type": "likert",
                "title": "stronger than the passwords I usually use",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ],
        
    },
    {
        "qid": 4,
        "text": "Please select the second option which tells us you are paying attention:",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "Option One",
                    "high": "Option Seven"
                }
            }
        ]
    },
    {
        "qid": 5,
        "text": "The design helped me to create a strong password.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 6,
        "text": "It was easy to think of a personal memory that is not shared with anyone or posted online.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 7,
        "text": "It was difficult to find a place to add number and special character that will be memorable.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 8,
        "text": "What was your strategy in creating the password? (Select one)",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "custom": true,
                "elements": ["I used the same strategy presented in the design", "I used a variation of the strategy presented in the design", "I used a totally different strategy"]
            }
        ]
    },
    {
        "qid": 9,
        "text": "I am open to adopt a new password creation strategy to create a strong and memorable password based on the advice from a security expert.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
];

exports.questions = questions;