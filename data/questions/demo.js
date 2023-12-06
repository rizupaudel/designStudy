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
                "elements": ['1', 'H2', '3', '4', '5', '6', '7', '8', '9', '10', '10+']
            }
        ]
    }
];

exports.questions = questions;
