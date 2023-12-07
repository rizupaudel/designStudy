var questions = [
    {
        "qid": 1,
        "text": "Are you a:",
        "keyword": "gender",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Boy', 'Girl', 'Other', 'Prefer not to answer']
            }
        ]  
    },
    {
        "qid": 2,
        "text": "How old are you?",
        "keyword": "age",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['8 years old', '9 years old', '10 years old', '11 years old', '12 years old', 'Prefer not to answer']
            }
        ]
    },
    {
        "qid": 3,
        "text": "What grade are you in?",
        "keyword": "grade",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": [ '2', '3', '4', '5', '6']
            }
        ]
        
    },
    {
        "qid": 4,
        "text": "How many passwords do you have?",
        "keyword": "passwords number",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+']
            }
        ]
    },
    {
        "qid": 5,
            "text": "How do you get your passwords?",
            "subquestions": [
                {
                    "sid": 1,
                    "type": "checkbox",
                    "title": "",
                    "elements": ['I am given a password by school', 'I make my own passwords by myself', 'My parents/guardian make password for me', 'My parents/guardian make password for me', 'Are there any other ways you make a password? If yes, write them down:']
                }
            ]
    },
    {
        "qid": 6,
        "text": "It is easy to make my password.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Ease to make password",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 7,
        "text": "How old were you when you first created your password on your own?",
        "keyword": "age",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['4 years old', '5 years old', '6 years old', '7 years old', '8 years old', '9 years old', '10 years old', '11 years old', '12 years old']
            }
        ]
    },
    {
        "qid": 8,
        "text": "The most recent password I created by myself, is _________.",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "keyword": "Recent password strength",
                "elements": ['Very Strong', 'Strong', 'Medium', 'Weak', 'Very Weak']
            }
        ]
    },
    {
        "qid": 9,
        "text": "How do you remember your passwords? Please select all that apply.",
        "subquestions": [
            {
                "sid": 1,
                "type": "checkbox",
                "title": "",
                "elements": ['I memorize the passwords', 'I let the computers save the password and fill it in for me', 'I write my passwords down on paper', 'A family member remembers my passwords for me', 'A friend remembers my passwords for me', 'I save my passwords in a file on a computer', 'I save my passwords in special software for passwords only', 'Are there any other ways that you remember your passwords? If yes, write them down:']
            }
        ]
    },
    {
        "qid": 10,
        "text": "It is easy to remember my password.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Ease to remember password",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 11,
        "text": "Why do you think people should use passwords?",
        "subquestions": [
            {
                "sid": 1,
                "type": "textbox",
                "keyword": "Password usage"
            }
        ],
    }
];

exports.questions = questions;
