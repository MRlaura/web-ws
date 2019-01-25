var students = [
    {id: 123,name: "John", score: 90 }, 
    {id: 124,name: "Larry", score: 60 }, 
    {id: 135,name: "Joseph", score: 50 }, 
    {id: 142,name: "Ana", score: 70 }, 
];

//document.writeln(students.length);
/*
document.write("<pre>");
document.write(JSON.stringify(students, undefined, 2));
document.write("</pre>");
*/

//document.writeln(`<pre>${JSON.stringify(students,null,2)}</pre>`);


var names = [];

//document.writeln(names);
var display=false

function displayAverage() {
    // called by button average
display =!display; // display the average only one time, if the average is already there, do not change
var resultSection= document.getElementById("resultAverage");
resultSection.classList.add("alert");
resultSection.classList.add("alert-info");

    var paragraph= document.getElementById("parrafo");
    paragraph.classList.add("badge");
    paragraph.classList.add("badge-info"); 
    paragraph.innerText= ("The average is " + calculateAverage());
    resultSection.appendChild(paragraph)
     
}
/*
document.writeln("<pre>")
document.writeln("Average: ",calculateAverage() )
document.writeln(`Average: ${calculateAverage()}`)
document.writeln("</pre>")
*/
function calculateAverage() {
    //var i=0
    let average=0
    let suma=0 
    let len=0
    students.forEach(student => {
        suma=suma+ student.score;
        len++
    });
   average = (suma/len)
   return average.toFixed(2)
 
}



function loadJSON() {
    let JaS= document.getElementById("JsonData");
    JaS.innerHTML= `<div class="col"><h3>JSON</h3></div>
    <div class="alert alert-danger"> <pre>${JSON.stringify(students,null,2)} </pre></div>`
    loadStudent()
}
function loadStudent(){
        
    let dataList = document.getElementById('listContainer');
    var title = document.createElement("section");
    title.classList.add('row');

    title.innerHTML=`<div class="col"><h5>Student id</h5></div> 
    <div class="col"><h5>Name</h5></div> 
    <div class="col"><h5>Grade</h5></div>`;
    dataList.append(title);


    students.forEach(student => {
        var listItem = document.createElement("section");
        listItem.classList.add('row');
       // listItem.classList.add('border');

    let passScore= parseInt(document.getElementById("passScore").value);


     if (student.score < passScore){ 
            listItem.innerHTML = `<div class="col">${student.id}</div>
            <div class="col">${student.name}</div>
            <div class="col score" >${student.score}</div>`;

        dataList.append(listItem);

        }else {
            listItem.innerHTML = `<div class="col">${student.id}</div>
            <div class="col">${student.name}</div>
            <div class="col">${student.score}</div>`;

            dataList.append(listItem);
       }

    });

    // for (const student of students) {              
    //     var listItem = document.createElement("section");
    //     listItem.classList.add('row');
    //    // listItem.classList.add('border');

    // let passScore= document.getElementById("passScore").value;


    //  if (student.score < passScore){ 
    //         listItem.innerHTML = `<div class="col">${student.id}</div>
    //         <div class="col">${student.name}</div>
    //         <div class="col score" >${student.score}</div>`;

    //     dataList.append(listItem);

    //     }else {
    //         listItem.innerHTML = `<div class="col">${student.id}</div>
    //         <div class="col">${student.name}</div>
    //         <div class="col">${student.score}</div>`;

    //         dataList.append(listItem);
    //    }  } 
    } //function load

    // function displayPassScore(){
    //     var passScore= document.getElementById("passScore").value;
    //     //alert (passScore)
    //    var childDivs = document.getElementById('listContainer').getElementsByTagName('div');

    //     for( i=0; i< childDivs.length; i++ )
    //     {
    //     var childDiv = childDivs[i];
    //     console.log(childDiv);
    //     }   // }

    function displayPassScore(){
       // var passScore= document.getElementById("passScore").value;
        let textTable = document.getElementById("listContainer");
      //  alert (passScore)
        while (textTable.hasChildNodes()) {
            textTable.removeChild(textTable.lastChild);
        }
        loadStudent()
     
        //id.childnodes[i].childnodes[i]
    }

    function newStudent() {
        var newId= document.getElementById("addStudentId").value;
        var newName= document.getElementById("addStudentName").value;
        var newScore= parseInt(document.getElementById("addStudentScore").value);

        students.push({id:newId, name:newName, score:newScore});
        displayPassScore()
        }

  

 
