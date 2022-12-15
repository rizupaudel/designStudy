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
            }
        ],
        
    },
    {
        "qid": 3,
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
    {
        "qid": 4,
        "text": "Which of the following you have used in the password you have created. Please select all that apply.",
        "subquestions": [
            {
                "sid": 1,
                "type": "checkbox",
                "title": "",
                "elements": [ 
                    'My phone number or a part of it',
                    'My address or a part of it',
                    'My name or a part of it',
                    'Keyboard patterns',
                    'Names of family members or pets, or a part of it',
                    'Birthdays',
                    'My Identification (ID) number or a part of it',
                    'Repeated or sequential characters',
                    'Names of the favorite team in sports, player or a part of it',
                    'None of the above'
                ]
            },
        ]
    },
    {
        "qid": 5,
        "text": "Please answer the following questions based on your behavior in real life: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "I do not change my passwords, unless I have to.",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "I use different passwords for different accounts that I have. ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "When I create a new online account, I try to use a password that goes beyond the site’s minimum requirements. ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 4,
                "type": "likert",
                "title": "I do not include special characters in my password if it’s not required. ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ],
        
    },
];

exports.questions = questions;