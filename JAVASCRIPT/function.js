let studentsDb = [
    {
        name: "Sule",
        age: 22,
        gender: "m",
        course: "maths"
    },
    {
        name: "Chidinma",
        age: 26,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Janet",
        age: 24,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Ojetola",
        age: 19,
        gender: "m",
        course: "psychology"
    }
]

let maths = []
let psychology = []

function alloDept(arrStu){
    for (let student in arrStu){
        if (arrStu[student].course === "maths"){
            maths.push(arrStu[student])
        } else if(arrStu[student].course === "psychology") {
            psychology.push(arrStu[student])
        }
    }
    // console.log("Maths Department:", maths);
    // console.log("Psychology Department:", psychology);
}

alloDept(studentsDb)

//ADDED A NEW STUDENT 
function newStudent (name, age , gender, course){
    let studentId = studentsDb.length +1
    
    let student ={
    name: name,
    age: age,
    gender: gender,
    course: course,
    }
    studentsDb.push(student)
    // console.log(studentsDb)
    }
    newStudent('Benjamin', 25, 'm', 'maths')
    // console.log('update after adding a new student', studentsDb)


    //UPDATED A STUDENT COURSE 
    let benCourse = "geography"
    function updateCourse(studentsDb){
        if(studentsDb.name === "Benjamin"){
            studentsDb.course = benCourse
                console.log(`Benjamin now has a new course ${benCourse}`)
        }
    }
    studentsDb.forEach(updateCourse)
    console.log(studentsDb)

    // let newCourse = "chemistry"
    // function updateCourse(studentsDb){
    //   studentsDb.course = newCourse
    //     console.log(`${studentsDb.name} new course now is ${newCourse}`)
    // }
    // studentsDb.forEach(updateCourse)
    // console.log(studentsDb)

    //DELETING A STUDENT 

    function deleteStudent(studentsDb){
        return studentsDb.filter(studentsDb => studentsDb.name !== "Janet")
      
    }
    console.log(deleteStudent (studentsDb))

    //CREATE A NEW STUDENT AND ADD TO DATA BASE
    //UPDATE THE STUDENT DATA 
    //DELETE A STUDENT 
    //CATEGORIZE STUDENT FOR DIFFERENT DEPARTMENT IN A SINGLE AGE RANGE --------------->
    