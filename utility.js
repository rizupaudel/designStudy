
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
                    lqid: "q11",
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
                    lqid: "q21",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q22",
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
                    lqid: "q31",
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
                    lqid: "q41",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q42",
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
                    lqid: "q51",
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
                    lqid: "q61",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q62",
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
                    lqid: "q71",
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
                    lqid: "q81",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q82",
                    text: "Cinematography",
                }
            ]
        },
        {
            quest: "How are you feeling?",
            qid: "q9",
            likerts: [
                {
                    lowScale: "Not Good",
                    highScale: "Very Good",
                    nScale: 5,
                    lqid: "q91",
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
                    lqid: "q101",
                    text: "Direction",
                },
                {
                    lowScale: "Bad",
                    highScale: "Good",
                    nScale: 5,
                    lqid: "q102",
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
                    lqid: "q111",
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
                    lqid: "q121",
                },
                {
                    lowScale: "Boring",
                    highScale: "Exciting",
                    nScale: 5,
                    lqid: "q122",
                },
                {
                    lowScale: "Not Interesting",
                    highScale: "Interesting",
                    nScale: 5,
                    lqid: "q123",
                },
                {
                    lowScale: "Demotivating",
                    highScale: "Motivating",
                    nScale: 5,
                    lqid: "q124",
                }
            ]
        },
    ];
    return questions;
}

module.exports = {getProgressPercent, getQuestionaires}