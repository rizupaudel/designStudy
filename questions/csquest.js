var questions = [
    {
        "qid": 1,
        "text": "In my opinion, the presentation of the design is:",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Aesthetics",
                "elements": {
                    "low": "ugly",
                    "high": "beautiful "
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "keyword": "Aesthetics",
                "elements": {
                    "low": "lacking style",
                    "high": "stylish"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "keyword": "Aesthetics",
                "elements": {
                    "low": "unappealing",
                    "high": "appealing"
                }
            },
            {
                "sid": 4,
                "type": "likert",
                "keyword": "Aesthetics",
                "elements": {
                    "low": "unpleasant",
                    "high": "pleasant"
                }
            }
        ]
    },
    {
        "qid": 2,
        "text": "The design <b>captures my attention</b>.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Attention",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 3,
        "text": "The presentation of the design is <b>engaging</b>.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Engaging",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
        ]
    },
    {
        "qid": 4,
        "text": "Can you explain your above ratings, like why you think one of these designs is better than other ones in <b>capturing your attention, and keeping you engaged with design</b>?",
        "subquestions": [
            {
                "sid": 1,
                "type": "textarea",
                "title": "",
            },
        ]
    },
    {
        "qid": 5,
        "text": "To encourage and teach me about strong password, the design is:",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Usefulness",
                "elements": {
                    "low": "useless",
                    "high": "useful"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "keyword": "Usefulness",
                "elements": {
                    "low": "not helpful",
                    "high": "helpful"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "keyword": "Usefulness",
                "elements": {
                    "low": "not beneficial ",
                    "high": "beneficial "
                }
            },
            {
                "sid": 4,
                "type": "likert",
                "keyword": "Usefulness",
                "elements": {
                    "low": "not rewarding",
                    "high": "rewarding"
                }
            }
        ]
    },
    {
        "qid": 6,
        "text": "The design <b>raises my awareness</b> about what can happen if my password is weak.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Awareness",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
        ]
    },
    {
        "qid": 7,
        "text": "The design <b>motivates</b> me to create a strong password.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Motivation",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ]
    },
    {
        "qid": 8,
        "text": "Can you explain your above ratings, like why you think one of these designs is better than other ones in <b>raising your awareness and motivation to create strong password</b>?",
        "subquestions": [
            {
                "sid": 1,
                "type": "textarea",
                "title": "",
            },
        ]
    },
    {
        "qid": 9,
        "text": "It is <b>easy to understand</b> the message shown in the design.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Understandability",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
        ]
    },
    {
        "qid": 10,
        "text": "The design <b>improves my skills</b> on creating a strong and memorable password.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "keyword": "Skills",
                "elements": {
                    "low": "Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
        ]
    },
    {
        "qid": 11,
        "text": "Can you explain your above ratings, like why you think one of these designs is better than other ones in <b>understanding how to create a strong password</b>?",
        "subquestions": [
            {
                "sid": 1,
                "type": "textarea",
                "title": "",
            },
        ]
    },
    {
        "qid": 12,
        "text": "Please rank these designs based on your <b>liking</b>. Rank 1 for the one you like the most and 3 for the one you like the least.",
        "subquestions": [
            {
                "sid": 1,
                "type": "textbox",
                "title": "",
            },
        ]
    },
    {
        "qid": 13,
        "text": "Please explain your ranking, like which features in a design you liked more than the other ones.",
        "subquestions": [
            {
                "sid": 1,
                "type": "textarea",
                "title": "",
            },
        ]
    },
]

exports.questions = questions;