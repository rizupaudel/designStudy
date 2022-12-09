var questions = [
    {
        "qid": 1,
        "text": "What is your gender?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Woman', 'Man', 'Transgender/Trans woman', 'Transgender/Trans man', 'Non-Binary', 'Other, please specify:', 'I prefer not to answer']
            }
        ]  
    },
    {
        "qid": 2,
        "text": "What is your age range?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": [
                    '18-24 years old', '25-29 years old', '30-34 years old', '35-39 years old', '40-44 years old', '45-49 years old', '50-54 years old', '55-59 years old', '60-64 years old', 'Above 65 years old', 
                    'I prefer not to answer'
                ]
            }
        ]
    },
    {
        "qid": 3,
        "text": "What is your race?",
        "subquestions": [
            {
                "sid": 1,
                "type": "checkbox",
                "title": "",
                "elements": [ 'White', 'Hispanic or Latino', 'Black or African American', 'Native American or American Indian', 'Asian', 'Pacific Islander', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
        
    },
    {
        "qid": 4,
        "text": "What is your highest achieved education level?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Less than High School', 'High School Graduate', 'Two-year College Degree', 'Four-year College Degree', 'Graduate degree (MS/Doctorate)', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
    },
    {
        "qid": 5,
        "text": "What is the primary field of your education?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Computer Science/Engineering, and Information Technology (IT)', 'Other areas of Engineering', 'Agriculture', 'Architecture, Design, and Arts', 'Economics, Humanities and Social Sciences', 'Medicine, Nursing, and Health Sciences', 'Education', 'Law, and Public Administration', 'Mathematics, and Natural Sciences (Physics, Chemistry, Biology)', 'Journalism, Media and Communication', 'Business', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
    },
    {
        "qid": 6,
        "text": "Which of the following best describes your primary occupation?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Student', 'Government', 'Educational institution', 'Business or industry', 'Non-profit organization', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
    }
];

exports.questions = questions;