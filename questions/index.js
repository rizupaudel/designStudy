var questions = [
    {
       "qid": 1,
        "text": "What do you do on computers? Please select all that apply.",
        "subquestions": [
            {
                "sid": 1,
                "type": "checkbox",
                "title": "",
                "elements": [ 'Schoolwork', 'Assignments and homework', 'Games', 'Use Internet', 'Entertainment (for example, YouTube) ', 'Email', 'Texting', 'Social media', 'Are there other things that you do on computers? If yes, write them down:']
            }
        ]
        
    },
    {
        "qid": 2,
        "text": "About how much time do you spend on computers each day?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Less than 1 hour per day', '1 to 2 hours per day', '3 to 5 hours per day', 'More than 5 hours per day']
            }
        ]
    }
];

exports.questions = questions;