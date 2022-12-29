var questions = [
    {
        "qid": 1,
        "text": "The password I have created is: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "strength of password",
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
                "title": "motivated after going through design",
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
        "text": "The password I have created is: ",
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
                "title": "Can be easily guessed by a hacker ",
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
        "text": "Please select the second option which tells us you are paying attention: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "second option",
                "elements": {
                    "low": "Option One",
                    "high": "Option Seven"
                }
            }
        ]
    },
];

exports.questions = questions;