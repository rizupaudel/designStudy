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
        "text": "Please select the second option which tells us you are paying attention: ",
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
];

exports.questions = questions;