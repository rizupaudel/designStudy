
function getProgressPercent(val) {
    return val/5*100;
}

function getQuestionaires() {
    var questions = [
        {
            quest: "What do you think about this design?",
            qid: "q8",
            likerts: [
                {
                    lowscale: "Mediocre",
                    highscale: "Exceptional",
                    nscale: 5,
                    lid: "q8-1",
                    text: "Attractiveness",
                },
                {
                    lowscale: "Bad",
                    highscale: "Good",
                    nscale: 5,
                    lid: "q8-2",
                    text: "Stimulation",
                }
            ]
        },
        {
            quest: "Answer these questions based on how you feel towards the design.",
            qid: "q9",
            likerts: [
                {
                    lowscale: "Not Good",
                    highscale: "Very Good",
                    nscale: 5,
                    lid: "q9-1",
                },
                {
                    lowscale: "Intimidating",
                    highscale: "Easy to follow",
                    nscale: 5,
                    lid: "q9-2",
                },
                {
                    lowscale: "Boring",
                    highscale: "Exciting",
                    nscale: 5,
                    lid: "q9-3",
                }
            ]
        },
        {
            quest: "How are you feeling?",
            qid: "q11",
            likerts: [
                {
                    lowscale: "Not Good",
                    highscale: "Very Good",
                    nscale: 5,
                    lid: "q11-1",
                }
            ]
        },
        {
            quest: "What do you think about this design based on stimulation?",
            qid: "q12",
            likerts: [
                {
                    lowscale: "Inferior",
                    highscale: "Valuable",
                    nscale: 5,
                    lid: "q12-1",
                },
                {
                    lowscale: "Boring",
                    highscale: "Exciting",
                    nscale: 5,
                    lid: "q12-2",
                },
                {
                    lowscale: "Not Interesting",
                    highscale: "Interesting",
                    nscale: 5,
                    lid: "q12-3",
                },
                {
                    lowscale: "Demotivating",
                    highscale: "Motivating",
                    nscale: 5,
                    lid: "q12-4",
                }
            ]
        },
    ];
    return questions;
}

module.exports = {getProgressPercent, getQuestionaires}