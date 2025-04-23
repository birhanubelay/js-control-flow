//1 login attempts
const logIn=()=>{
    let loginAttempt=1;
    while(loginAttempt < 4){
        console.log("Please input correct username and password.")
        loginAttempt++;
    };
    console.log("Account locked")
};
logIn();



//2 Voting Feature
const voting=(voteLists)=>{
    let vote=0;
    do{
        console.log(`${voteLists[vote]}`);
        vote++;
    }
    while (vote < voteLists.length);
    console.log("Vote ended.")
};
voting(["Mr. Abdi", "Dr. Hagos", "Mr. Ekubay", "Pr. Mebrahtu"]);



//3 printing number corresponding day name
const correspondDay=(daysArray)=>{
    daysArray.forEach(day=>{
        switch (day){
            case 'day1':
                console.log("Day1:Monday");
                break;
            case 'day2':
                console.log("Day2:Tuesday");
                break;
            case 'day3':
                console.log("Day3:Wednessday");
                break;
            case 'day4':
                console.log("Day4:Thursday");
                break;
            case 'day5':
                console.log("Day5: Friday");
                break;
            case 'day6':
                console.log("Day6:Saturday");
                break;
            case 'day7':
                console.log("Day7:Sunday");
                break;
            default:
                console.log("We don't have another corresponding.");
                break;
        };
    });
};
correspondDay(["day1","day2","day3","day6","day7","day5","day4","days","week"]);



//Checking Password Strength
function checkPasswordSecurity(userPasswords){
    userPasswords.forEach(password=>{
        if (password.length>=8){
            console.log(`${password}: Strong`);
        }else{
            console.log(`${password}: weak`);
        };
    });
};
checkPasswordSecurity(["this23","password45","salemma@","thesis34"]);




//5 Building Multi-lingual Site
const MultilingualGreeting= (greetings)=>{
    greetings.forEach(greeting=>{
        switch (greeting){
            case "en":
                console.log("Hello");
                break;
            case "fr":
                console.log("Bonjour");
                break;
            case "sw":
                console.log("Habari");
                break;
            default:
                console.log("Grammatical error.");
                break;
        };
    });
};
MultilingualGreeting(["en","fr","sw","sn","tig"]);




//6 Building Weather Dashboard 
const classifyWeatherConditions=(measuredTempratures)=>{
    measuredTempratures.forEach(temprature=>{
        if (temprature>30){
            console.log ("High heat alert!");
        }
        else if (temprature<15){
            console.log("Cold alert!");
        }
        else{
            console.log("Normal conditions");
        };
    });
};
classifyWeatherConditions([34,56,23,12,57,7,23, -7]);



//7 printing and Removing user names from a queue
function users(names){
    while (names.length>0){
        let userQueue=names.shift();
        console.log(`${userQueue}`);
        console.log(names);
    };
    console.log("Registration ended.")
};
users(["Birhane","Selam","Hadgu","Selamawit"]);




//8 Students Test Retake
function checkScore(studentsScore){
    studentsScore.forEach(student=>{
        let score=student.score;
        let attempt=1;
        if(score > 50){
            console.log(`Hello ${student.name}, You have passed in the first attempt.`)
        }else{
            do{
                console.log(`Hello ${student.name}, You got ${score} in attempt ${attempt}. You need to retake the test`);
                score=score+10;
                attempt++;
            }
            while (score<50);
            console.log(`Congratuations ${student.name}, You got ${score} after ${attempt} attempts.`);
        }  
    });
};
studentsScore=[{"name":"Selam","score":5},{"name":"Helen","score":4},{"name":"Fiona","score":60},{"name":"Meron","score":7},{"name":"Birhanu","score":3}];
checkScore(studentsScore);