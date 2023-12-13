var questions = [
    {
        "qid": 1,
        "text": "The password I have created is:",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "Strength of password",
                "keyword": "Password Strength",
                "elements": {
                    "low": "Weak",
                    "high": "Strong"
                }
            }
        ],
    },
    {
        "qid": 2,
        "text": "I felt motivated to create a strong password after going through this design.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "Motivation",
                "keyword": "Motivation After Design",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 3,
        "text": "The password I have created is:",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "Hard to remember",
                "keyword": "Hard to Remember",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "Can be easily guessed by a hacker",
                "keyword": "Guessed by Hacker",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "Can be easily guessed by my close friends or family members",
                "keyword": "Guessed by FnF",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 4,
                "type": "likert",
                "title": "Stronger than the passwords I usually use",
                "keyword": "Stronger than Usual",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ],
        
    },
    {
        "qid": 4,
        "text": "Please select the second option which tells us you are paying attention.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "Second option",
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
                "title": "Helpful",
                "keyword": "Helpful",
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
                "title": "Easy to think personal memory",
                "keyword": "Easy to think memory",
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
                "title": "Difficult for number and character",
                "keyword": "Difficult for num&char",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 8,
        "text": "What was your strategy in creating the password?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "Strategy in creating password",
                "keyword": "Password Creation Strategy",
                // "custom": true,
                "elements": ["I used the same strategy presented in the design.", "I used a variation of the strategy presented in the design.", "I used a totally different strategy."]
            }
        ]
    }
];

exports.questions = questions;