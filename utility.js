
function getProgressPercent(val) {
    return val/5*100;
}

function getQuestionaires() {
    var questions = [
        {
            quest: "How are you feeling?",
            qid: "q1",
            likerts: [
                {
                    lowScale: "Not Good",
                    highScale: "Very Good",
                    nScale: 5,
                    lqid: "q1-1",
                }
            ]
        },
        {
            quest: "What do you think about this movie?",
            qid: "q2",
            likerts: [
                {
                    lowScale: "Mediocre",
                    highScale: "Exceptional",
                    nScale: 5,
                    lqid: "q2-1",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q2-2",
                    text: "Cinematography",
                }
            ]
        },
        {
            quest: "How are you feeling?",
            qid: "q3",
            likerts: [
                {
                    lowScale: "Not Good",
                    highScale: "Very Good",
                    nScale: 5,
                    lqid: "q3-1",
                }
            ]
        },
        {
            quest: "What do you think about this movie?",
            qid: "q4",
            likerts: [
                {
                    lowScale: "Mediocre",
                    highScale: "Exceptional",
                    nScale: 5,
                    lqid: "q4-1",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q4-2",
                    text: "Cinematography",
                }
            ]
        },
        {
            quest: "How are you feeling?",
            qid: "q5",
            likerts: [
                {
                    lowScale: "Not Good",
                    highScale: "Very Good",
                    nScale: 5,
                    lqid: "q5-1",
                }
            ]
        },
        {
            quest: "What do you think about this movie?",
            qid: "q6",
            likerts: [
                {
                    lowScale: "Mediocre",
                    highScale: "Exceptional",
                    nScale: 5,
                    lqid: "q6-1",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q6-2",
                    text: "Cinematography",
                }
            ]
        },
        {
            quest: "How are you feeling?",
            qid: "q7",
            likerts: [
                {
                    lowScale: "Not Good",
                    highScale: "Very Good",
                    nScale: 5,
                    lqid: "q7-1",
                }
            ]
        },
        {
            quest: "What do you think about this movie?",
            qid: "q8",
            likerts: [
                {
                    lowScale: "Mediocre",
                    highScale: "Exceptional",
                    nScale: 5,
                    lqid: "q8-1",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q8-2",
                    text: "Cinematography",
                }
            ]
        },
        {
            quest: "Answer these questions based on how you feel towards the design.",
            qid: "q9",
            likerts: [
                {
                    lowScale: "Not Good",
                    highScale: "Very Good",
                    nScale: 5,
                    lqid: "q9-1",
                },
                {
                    lowScale: "Intimidating",
                    highScale: "Easy to follow",
                    nScale: 5,
                    lqid: "q9-2",
                },
                {
                    lowScale: "Boring",
                    highScale: "Exciting",
                    nScale: 5,
                    lqid: "q9-3",
                }
            ]
        },
        {
            quest: "What do you think about this movie?",
            qid: "q10",
            likerts: [
                {
                    lowScale: "Mediocre",
                    highScale: "Exceptional",
                    nScale: 5,
                    lqid: "q10-1",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q10-2",
                    text: "Cinematography",
                }
            ]
        },
        {
            quest: "How are you feeling?",
            qid: "q11",
            likerts: [
                {
                    lowScale: "Not Good",
                    highScale: "Very Good",
                    nScale: 5,
                    lqid: "q11-1",
                }
            ]
        },
        {
            quest: "What do you think about this movie based on stimulation?",
            qid: "q12",
            likerts: [
                {
                    lowScale: "Inferior",
                    highScale: "Valuable",
                    nScale: 5,
                    lqid: "q12-1",
                },
                {
                    lowScale: "Boring",
                    highScale: "Exciting",
                    nScale: 5,
                    lqid: "q12-2",
                },
                {
                    lowScale: "Not Interesting",
                    highScale: "Interesting",
                    nScale: 5,
                    lqid: "q12-3",
                },
                {
                    lowScale: "Demotivating",
                    highScale: "Motivating",
                    nScale: 5,
                    lqid: "q12-4",
                }
            ]
        },
    ];
    return questions;
}

module.exports = {getProgressPercent, getQuestionaires}