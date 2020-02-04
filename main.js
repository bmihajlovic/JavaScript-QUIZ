function submitAnswers() {
    var total = 5;
    var score = 0;
    
    // unos korisnika
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
    for (var i = 1; i <= total; i++) {
        if (eval('q'+i) == null || eval('q'+i) == '') {
            alert('Niste odgovorili na pitanje ' + i);
            return false;
        }
    }
    //Tacni odgovori
    var answers = ["b", "a", "d", "b", "d"];
    if(q1 == answers[0]) {
        score++;
    }
    if(q2 == answers[1]) {
        score++;
    }
    if(q3 == answers[2]) {
        score++;
    }
    if(q4 == answers[3]) {
        score++;
    }
    if(q5 == answers[4]) {
        score++;
    }
    for(i < 1; i <= total; i++) {
        if(eval('q'+i) == answers[i -1]) {
            score++;
        }
    }
    //prikazivanje rezultata
    var results = document.getElementById('results');
    results.innerHTML = '<h3>Vas rezultat je <span>' + score + '</span> od <span>' + total + '</span></h3>';
    
alert('Vas rezultalt ' + score + ' je ' + total);
return false;
}