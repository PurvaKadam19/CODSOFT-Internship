const questions = [
    {
        q: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "None"
        ],
        answer: 0
    },
    {
        q: "Which language is used for styling?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: 1
    },
    {
        q: "Which is used for interactivity?",
        options: ["CSS", "HTML", "JavaScript", "C++"],
        answer: 2
    }
];

let index = 0;
let score = 0;
let selected = -1;

function startQuiz(){
    document.getElementById("home").classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");
    loadQuestion();
}

function loadQuestion(){
    selected = -1;

    document.getElementById("question").innerText =
        (index+1) + ". " + questions[index].q;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questions[index].options.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.innerText = opt;

        btn.onclick = () => {
            selected = i;

            document.querySelectorAll("#options button")
            .forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");
        };

        optionsDiv.appendChild(btn);
    });
}

function nextQuestion(){
    if(selected === -1){
        alert("Select an option!");
        return;
    }

    if(selected === questions[index].answer){
        score++;
    }

    index++;

    if(index < questions.length){
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult(){
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");
    document.getElementById("score").innerText =
        "Your Score: " + score + " / " + questions.length;
}