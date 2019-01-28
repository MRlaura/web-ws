const URL = "https://web-students-1aa35.firebaseio.com/group-01.json";

fetchData();

function fetchData(){
 
  var request = new XMLHttpRequest();
  request.open('GET', URL, true); //1

  request.onload = function() { //3
    const OK = 200;
    
    if (request.status !== OK) {
      document.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      return;
    }
    var remoteStudents = JSON.parse(request.responseText);

    remoteStudents.forEach(element => {
      students.push(element);
    });
    //loadDataGrid();
    loadStudent();
    loadJSON();
  };
  request.send(); //2
}
