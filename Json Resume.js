var resume={
    "Basicinformation":{
        "Name":"Guru.S",
        "Age":"24",
        "email":"guru624283@gmail.com",
        "phonenumber":"8754780283"
    },
    "WorkAndExperience":"I am a fresher,willing to work in the role of full stack developer",
    "Education":[
        {
            "School":"government heigher secondary school,bhuvanagiri,608601",
            "year of 10th pass":"2014",
            "year of 12th pass":"2016"
        },
        {
            "college":"Sri ragavendra arts and science college",
            "degree":"bachelor of computer application",
            "department":"BCA",
            "year of passed out":"2019",
        }
    ],
    "Skills":[
        "1.good knowledge in html,css javascript",
        "2.quick leaner",
        "3.good knowledge in frontend language"
    ],
    "Languagesknown":["Tamil,english"],
    "Intrest":[
        "1.learn coding",
        "2.create browser",
        "3.hearing songs",
    ],
}

let Resumejson=JSON.stringify(Resume);
   console.log(Resumejson);

let Resumeobj=JSON.parse(Resumejson);
   console.log(Resumeobj);
