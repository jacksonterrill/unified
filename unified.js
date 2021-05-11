/*An array containing all the school names*/
var schools = [];
var rankings = [];
var fullCost = [];
var avgCost = [];
var reportedAcceptanceRate = [];
var numStudents = [];
var gpa = [];
var sat = [];
var act = [];
var gender = [];
var fouryear = [];
var sixyear = [];

var tSchools = [];
var tRankings = [];
var tFullCost = [];
var tAvgCost = [];
var tCalculatedAcceptanceRate = [];
var tReportedAcceptanceRate = [];
var tNumStudents = [];
var tGpa = [];
var tSat = [];
var tAct = [];
var tGender = [];
var tFouryear = [];
var tSixyear = [];

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function loadData(input)
{//Harvard|1|.05|...
  var pos = input.indexOf("|");
  while (pos!=-1)
  {
    schools.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    rankings.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    fullCost.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    avgCost.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    reportedAcceptanceRate.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    numStudents.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    gpa.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    sat.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    act.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    gender.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    fouryear.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
    sixyear.push(input.substring(0,pos));
    input = input.substing(pos+1);

    pos = input.indexOf("|");
  }
}

function addSchool(school, schools){
  var index = 0;
  for (var i = 0; i < schools.length; i++) {
    if (schools[i] == (school)){
      tSchools.push(school);
      index = i;
    }
  }

  tRankings.push(rankings[index]);
  tFullCost.push(fullCost[index]);
  tAvgCost.push(avgCost[index]);
  tReportedAcceptanceRate.push(reportedAcceptanceRate[index]);
  tNumStudents.push(numStudents[index]);
  tGpa.push(gpa[index]);
  tSat.push(sat[index]);
  tAct.push(act[index]);
  tGender.push(gender[index]);
  tFouryear.push(fouryear[index]);
  tSixyear.push(sixyear[index]);

  updateTable();
}

function deleteSchool(id){
  var index = id.substring(id.indexOf("-")+1);
  tSchools.splice(index,1);
  tRankings.splice(index,1);
  tFullCost.splice(index,1);
  tAvgCost.splice(index,1);
  tReportedAcceptanceRate.splice(index,1);
  tNumStudents.splice(index,1);
  tGpa.splice(index,1);
  tSat.splice(index,1);
  tAct.splice(index,1);
  tGender.splice(index,1);
  tFouryear.splice(index,1);
  tSixyear.splice(index,1);

  updateTable();

  if (tSchools.length == 0){
    var tableSchool = document.getElementById('table-school');
    tableSchool.innerHTML = '<th> School <form autocomplete="off" action="javascript:submit"><div class="autocomplete"><input id="SchoolInput" type="text" placeholder="Harvard University"></div></form></th><td> Example University </td>';
  autocomplete(document.getElementById("SchoolInput"), schools);

  var tableRankings = document.getElementById('table-rankings');
  tableRankings.innerHTML = '<th> US News Ranking </th><td> 1st </td>';

  var tableFullCost = document.getElementById('table-fullCost');
  tableFullCost.innerHTML = '<th> Full Cost (per year) </th><td> $75,000 </td>';

  var tableAvgCost = document.getElementById('table-avgCost');
  tableAvgCost.innerHTML = '<th> Average Cost (per year) </th><td> $40,000 </td>';

  var tableReportedAcceptanceRate = document.getElementById('table-report-acceptance');
  tableReportedAcceptanceRate.innerHTML = '<th> Reported Acceptance Rate </th><td> .05 </td>';

  var tableNumStudents = document.getElementById('table-num-students');
  tableNumStudents.innerHTML = '<th> Applicants, Accepted, Enrolled </th><td> 43,330, 2,009, 1,649 </td>';

  var tableGpa = document.getElementById('table-gpa');
  tableGpa.innerHTML = '<th> Average GPA (25th, mean, 75th) </th><td> NA, 4.18, NA </td>';

  var tableSat = document.getElementById('table-sat');
  tableSat.innerHTML = '<th> Average SAT (25th, mean, 75th) </th><td> 1460, 1520, 1580 </td>';

  var tableAct = document.getElementById('table-act');
  tableAct.innerHTML = '<th> Average ACT (25th, mean, 75th) </th><td> 1460, 1520, 1580 </td>';

  var tableGender = document.getElementById('table-gender');
  tableGender.innerHTML = '<th> Male-Female Ratio </th><td> 52% / 48% </td>';

  var tableFouryear = document.getElementById('table-4yr-grad');
  tableFouryear.innerHTML = '<th> 4 Year Graduation Rate </th><td> 85% </td>';

  var tableSixyear = document.getElementById('table-6yr-grad');
  tableSixyear.innerHTML = '<th> 6 Year Graduation Rate </th><td> 97% </td>';
  }
}

function updateTable(){
  var row= "";

  var tableSchool = document.getElementById('table-school');
  for (var i = 0; i < tSchools.length; i++) {
    row+= '<td><div class=delete-container><button onclick="deleteSchool(this.id)" class=delete id=delete-'+i+'>x</button></div>' + tSchools[i] + '</td>';
    }
  tableSchool.innerHTML = '<th> School <form autocomplete="off" action="javascript:submit"><div class="autocomplete"><input id="SchoolInput" type="text" placeholder="Harvard University"></div></form></th>' + row;
  autocomplete(document.getElementById("SchoolInput"), schools);

  row = "";
  var tableRankings = document.getElementById('table-rankings');
  for (var i = 0; i < tRankings.length; i++) {
    row+= '<td>' + tRankings[i] + '</td>';
    }
  tableRankings.innerHTML = '<th> US News Ranking </th>' + row;

  row = "";
  var tableFullCost = document.getElementById('table-fullCost');
  for (var i = 0; i < tFullCost.length; i++) {
    row+= '<td>' + tFullCost[i] + '</td>';
    }
  tableFullCost.innerHTML = '<th> Full Cost (per year) </th>' + row;

  row = "";
  var tableAvgCost = document.getElementById('table-avgCost');
  for (var i = 0; i < tAvgCost.length; i++) {
    row+= '<td>' + tFullCost[i] + '</td>';
    }
  tableAvgCost.innerHTML = '<th> Average Cost (per year) </th>' + row;

  row = "";
  var tableReportedAcceptanceRate = document.getElementById('table-report-acceptance');
  for (var i = 0; i < tReportedAcceptanceRate.length; i++) {
    row+= '<td>' + tReportedAcceptanceRate[i] + '</td>';
    }
  tableReportedAcceptanceRate.innerHTML = '<th> Reported Acceptance Rate </th>' + row;

  row = "";
  var tableNumStudents = document.getElementById('table-num-students');
  for (var i = 0; i < tNumStudents.length; i++) {
    row+= '<td>' + tNumStudents[i] + '</td>';
    }
  tableNumStudents.innerHTML = '<th> Applicants, Accepted, Enrolled </th>' + row;

  row = "";
  var tableGpa = document.getElementById('table-gpa');
  for (var i = 0; i < tGpa.length; i++) {
    row+= '<td>' + tGpa[i] + '</td>';
    }
  tableGpa.innerHTML = '<th> Average GPA (25th, mean, 75th) </th>' + row;

  row = "";
  var tableSat = document.getElementById('table-sat');
  for (var i = 0; i < tSat.length; i++) {
    row+= '<td>' + tSat[i] + '</td>';
    }
  tableSat.innerHTML = '<th> Average SAT (25th, mean, 75th) </th>' + row;

  row = "";
  var tableAct = document.getElementById('table-act');
  for (var i = 0; i < tAct.length; i++) {
    row+= '<td>' + tAct[i] + '</td>';
    }
  tableAct.innerHTML = '<th> Average ACT (25th, mean, 75th) </th>' + row;

  row = "";
  var tableGender = document.getElementById('table-gender');
  for (var i = 0; i < tGender.length; i++) {
    row+= '<td>' + tGender[i] + '</td>';
    }
  tableGender.innerHTML = '<th> Male-Female Ratio' + row;

  row = "";
  var tableFouryear = document.getElementById('table-4yr-grad');
  for (var i = 0; i < tFouryear.length; i++) {
    row+= '<td>' + tFouryear[i] + '</td>';
    }
  tableFouryear.innerHTML = '<th> 4 Year Graduation Rate </th>' + row;

  row = "";
  var tableSixyear = document.getElementById('table-6yr-grad');
  for (var i = 0; i < tSixyear.length; i++) {
    row+= '<td>' + tSixyear[i] + '</td>';
    }
  tableSixyear.innerHTML = '<th> 6 Year Graduation Rate </th>' + row;
}



function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "autocomplete-schools");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              addSchool(inp.value, schools);
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

function enforceMinMax(el){
  if(el.value != ""){
    if(parseInt(el.value) < parseInt(el.min)){
      el.value = el.min;
    }
    if(parseInt(el.value) > parseInt(el.max)){
      el.value = el.max;
    }
  }
}

autocomplete(document.getElementById("SchoolInput"), schools);

var file = loadFile("https://jacksonterrill.github.io/unified/Sample College Data.txt");
loadData(file);