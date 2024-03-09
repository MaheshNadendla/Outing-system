localStorage.clear();
let MenuCount=1;
function copyLinkedList(sourceList, destinationList) {
  // Clear the destination list before copying
  clearLinkedList(destinationList);

  let currentSource = sourceList.head;

  while (currentSource) {
      // Create a new node with the same data
      const newNode = new StudentNode(
          currentSource.id,
          currentSource.intiming,
          currentSource.name,
          currentSource.outtiming,
          currentSource.status
      );

      // Insert the new node into the destination list
      destinationList.insertNode(newNode.id, newNode.intiming, newNode.name, newNode.outtiming, newNode.status);

      currentSource = currentSource.nextStudent;
  }
}

function clearLinkedList(linkedList) {
  linkedList.head = null;
}

function Exit()
{

  document.querySelector(".Main").innerHTML = `<div class="Main"></div>`;
  Countgoing = 0;
  CountComing = 0;

}

function ResetApp()
{
    // Clear outStudentsList
  clearLinkedList(outStudentsList);

  // Clear inStudentsList
  clearLinkedList(inStudentsList);

  // Clear historyList
  clearLinkedList(historyList);

  copyLinkedList(studentsList, inStudentsList);

  clearLinkedList(GirlsOutStudentsList);

  // Clear inStudentsList
  clearLinkedList(GirlsInStudentsList);

  // Clear historyList
  clearLinkedList(GirlsHistoryList);

  copyLinkedList(GirlsStudentsList, GirlsInStudentsList);

  let display = document.querySelector(".Main");
  display.innerHTML = "<button onclick=Exit()>Back</Button>" + "reseted sucessfully";

}


class StudentNode {
  constructor(id, intiming, name, outtiming, status) {
    this.id = id;
    this.intiming = intiming;
    this.name = name;
    this.outtiming = outtiming;
    this.status = status;
    this.nextStudent = null;
  }
}

class LinkedList {
  constructor(name) {
    this.name = name;
    this.head = null;
  }

  insertNode(id, intiming, name, outtiming, status) {
    const newNode = new StudentNode(id, intiming, name, outtiming, status);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextStudent) {
        current = current.nextStudent;
      }
      current.nextStudent = newNode;
    }

    // Save the updated linked list to local storage
    this.saveToLocalStorage();
  }

  deleteNode(id) {
    if (!this.head) {
      console.log(`List ${this.name} is empty. Cannot delete from an empty list.`);
      return;
    }

    if (this.head.id === id) {
      this.head = this.head.nextStudent;
      console.log(`Node with ID ${id} deleted from ${this.name}.`);
    } else {
      let current = this.head;
      let previous = null;

      while (current && current.id !== id) {
        previous = current;
        current = current.nextStudent;
      }

      if (!current) {
        console.log(`Node with ID ${id} not found in ${this.name}.`);
      } else {
        previous.nextStudent = current.nextStudent;
        console.log(`Node with ID ${id} deleted from ${this.name}.`);
      }
    }

    // Save the updated linked list to local storage
    this.saveToLocalStorage();
  }

  // Save the linked list to local storage
  saveToLocalStorage() {
    const listData = JSON.stringify(this.head);
    localStorage.setItem(this.name, listData);
  }

  // Load the linked list from local storage
  loadFromLocalStorage() {
    const listData = localStorage.getItem(this.name);
    if (listData) {
      this.head = JSON.parse(listData);
    }
  }
}


let Countgoing = 0;
let CountComing = 0;

// Initialize linked lists
let studentsList = new LinkedList('studentsList');
let outStudentsList = new LinkedList('outStudentsList');
let inStudentsList = new LinkedList('inStudentsList');
let historyList = new LinkedList('historyList');


let GirlsStudentsList = new LinkedList('GirlsStudentsList');
let GirlsOutStudentsList = new LinkedList('GirlsOutStudentsList');
let GirlsInStudentsList = new LinkedList('GirlsInStudentsList');
let GirlsHistoryList = new LinkedList('GirlsHistoryList');


//let BoysHomestudentsList = new LinkedList('studentsList');
let BoysHomeoutStudentsList = new LinkedList('BoysHomeoutStudentsList');
let BoysHomeinStudentsList = new LinkedList('BoysHomeinStudentsList');
let BoysHomehistoryList = new LinkedList('BoysHomehistoryList');


// Load data from local storage
studentsList.loadFromLocalStorage();
outStudentsList.loadFromLocalStorage();
inStudentsList.loadFromLocalStorage();
historyList.loadFromLocalStorage();

GirlsStudentsList.loadFromLocalStorage();
GirlsOutStudentsList.loadFromLocalStorage();
GirlsInStudentsList.loadFromLocalStorage();
GirlsHistoryList.loadFromLocalStorage();


BoysHomeoutStudentsList.loadFromLocalStorage();
BoysHomeinStudentsList.loadFromLocalStorage();
BoysHomehistoryList.loadFromLocalStorage();

//console.log(historyList);

// ... (rest of your code remains unchanged)


// Define a flag to check if default students are already added
let defaultStudentsAdded1 = false;
let defaultStudentsAdded2 = false;
let defaultStudentsAdded3 = false;
let defaultStudentsAdded4 = false;
let defaultStudentsAdded5 = false;



// Insert students into the linked list if not already present
if (!studentsList.head && !defaultStudentsAdded1) {
  studentsList.insertNode(1,"-", "Mahesh","-" , "-");
  studentsList.insertNode(2, "-", "Vamshi", "-", "-");
  studentsList.insertNode(3, "-", "Sai kiran", "-", "-");
  studentsList.insertNode(4, "-", "Eshwar", "-", "-");
  studentsList.insertNode(5, "-", "Vikram", "-", "-");

  // Set the flag to true to indicate that default students are added
  defaultStudentsAdded1 = true;
}

if (!inStudentsList.head && !defaultStudentsAdded2) {
  inStudentsList.insertNode(1, "-", "Mahesh", "-", "-");
  inStudentsList.insertNode(2, "-", "Vamshi", "-", "-");
  inStudentsList.insertNode(3, "-", "Sai kiran", "-", "-");
  inStudentsList.insertNode(4, "-", "Eshwar", "-", "-");
  inStudentsList.insertNode(5, "-", "Vikram", "-", "-");

  // Set the flag to true to indicate that default students are added
  defaultStudentsAdded2 = true;
}


if (!GirlsStudentsList.head && !defaultStudentsAdded3) {
  GirlsStudentsList.insertNode(1,"-", "JanU","-" , "-");
  GirlsStudentsList.insertNode(2, "-", "Kushi", "-", "-");
  GirlsStudentsList.insertNode(3, "-", "Lav", "-", "-");
  GirlsStudentsList.insertNode(4, "-", "Rupa", "-", "-");
  GirlsStudentsList.insertNode(5, "-", "sreya", "-", "-");

  // Set the flag to true to indicate that default students are added
  defaultStudentsAdded3 = true;
}

if (!GirlsInStudentsList.head && !defaultStudentsAdded4) {
  GirlsInStudentsList.insertNode(1, "-", "JanU", "-", "-");
  GirlsInStudentsList.insertNode(2, "-", "Kushi", "-", "-");
  GirlsInStudentsList.insertNode(3, "-", "Lav", "-", "-");
  GirlsInStudentsList.insertNode(4, "-", "Rupa", "-", "-");
  GirlsInStudentsList.insertNode(5, "-", "sreya", "-", "-");

  // Set the flag to true to indicate that default students are added
  defaultStudentsAdded4 = true;
}

if (!BoysHomeinStudentsList.head && !defaultStudentsAdded5) {
  BoysHomeinStudentsList.insertNode(1, "-", "Mahesh", "-", "-");
  BoysHomeinStudentsList.insertNode(2, "-", "Vamshi", "-", "-");
  BoysHomeinStudentsList.insertNode(3, "-", "Sai kiran", "-", "-");
  BoysHomeinStudentsList.insertNode(4, "-", "Eshwar", "-", "-");
  BoysHomeinStudentsList.insertNode(5, "-", "Vikram", "-", "-");

  // Set the flag to true to indicate that default students are added
  defaultStudentsAdded5 = true;
}



function DateTime() {
  const currentDateTime = new Date();
  const date = currentDateTime.toDateString();
  let hours = currentDateTime.getHours();
  let minutes = currentDateTime.getMinutes();
  let seconds = currentDateTime.getSeconds();

  // Add leading zero if the value is less than 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Display the date and time in the format "YYYY-MM-DD HH:MM:SS"
  const formattedDateTime = date + " " + hours + ":" + minutes + ":" + seconds;
  return formattedDateTime;
}

// Call updateDateTime function every second
function updateDateTime() {
  const dateTime = DateTime();
  document.getElementById("datetime-display").innerHTML = dateTime;
}
setInterval(updateDateTime, 1000);

function BackButton() {
  document.querySelector(".Main").innerHTML = `<div class="Main">
    <button onclick="StudentsList()">students list</button>
    <button onclick="InComing()">In</button>
    <button onclick="OutGoing()">Out</button>
    <button onclick="CheckBalance()">Check</button>
    <button onclick="History()">History</button>
  </div>`;
  Countgoing = 0;
  CountComing = 0;
}

function Submit2() {
  let id = document.querySelector('.InputBox2');
  let RollNumber = id.value;



  let currentStudent;
  let currentInStudent;
  let currentOutStudent;
  let TotalHistList;
  let TotalOutList;
  let TotalInList;


  if(MenuCount===1)
  {
    currentStudent = studentsList.head;
    currentInStudent=inStudentsList.head;
    currentOutStudent=outStudentsList.head;
    TotalHistList=historyList;
    TotalOutList=outStudentsList;
    TotalInList=inStudentsList;

  }
  else if(MenuCount===2)
  {

    console.log("girls123");

    currentStudent = GirlsStudentsList.head;
    currentInStudent=GirlsInStudentsList.head;
    currentOutStudent=GirlsOutStudentsList.head;
    TotalHistList=GirlsHistoryList;
    TotalOutList=GirlsOutStudentsList;
    TotalInList=GirlsInStudentsList;

  }
  else if(MenuCount===3)
  {
    currentStudent = studentsList.head;
    currentInStudent=BoysHomeinStudentsList.head;
    currentOutStudent=BoysHomeoutStudentsList.head;
    TotalHistList=BoysHomehistoryList;
    TotalOutList=BoysHomeoutStudentsList;
    TotalInList=BoysHomeinStudentsList;

  }
  // else if(MenuCount===3)
  // {

  //   console.log("girls123");

  //   currentStudent = GirlsStudentsList.head;
  //   currentInStudent=GirlsInStudentsList.head;
  //   currentOutStudent=GirlsOutStudentsList.head;
  //   TotalHistList=GirlsHistoryList;
  //   TotalOutList=outStudentsList=GirlsOutStudentsList;
  //   TotalInList=inStudentsList=GirlsInStudentsList;

  // }


  let flag = false;
  let flag2=false;

  while (currentOutStudent) {
    if (RollNumber == currentOutStudent.id) {
      flag2 = true;
      break;
    }
    if (currentOutStudent.nextStudent) {
      currentOutStudent = currentOutStudent.nextStudent;
    } else {
      currentOutStudent = null;
    }
  }

    if(flag2)
    {
        console.log("already there");
    }
    else{
          while (currentStudent) {
          if (RollNumber == currentStudent.id) {
            flag = true;
            break;
          }

          if (currentStudent.nextStudent) {
            currentStudent = currentStudent.nextStudent;
          } else {
            currentStudent = null;
          }
        }
    }



  if (flag) {
    console.log(currentStudent.id);

    let newStudent = new StudentNode(RollNumber,currentStudent.outtiming, currentStudent.name,DateTime(), currentStudent.status);
    TotalHistList.insertNode(newStudent.id, newStudent.intiming, newStudent.name, newStudent.outtiming, "out");

    TotalOutList.insertNode(Number(newStudent.id), newStudent.intiming, newStudent.name, newStudent.outtiming, "out");

    TotalInList.deleteNode(Number(newStudent.id));
    console.log(typeof(newStudent.id));
    
    document.querySelector(".DisplayError2").innerHTML = `Submitted successfully`;
  } else {
    let PrintError="ID not found";
    if(flag2==true)
    {
      PrintError="Already gone";
    }
    document.querySelector(".DisplayError2").innerHTML = `${PrintError}`;
  }

  id.value = "";
}


function Submit1() {
  
  


  let id = document.querySelector('.InputBox1');
  let RollNumber = id.value;

  let currentStudent;
  let currentMainStudent;

  let TotalOutList;
  let TotalHistList;
  let TotalInList;
  
  if(MenuCount===1)
  {
    currentStudent = outStudentsList.head;
    currentMainStudent = studentsList.head;

    TotalHistList=historyList;
    TotalInList=inStudentsList;
    TotalOutList=outStudentsList;
  }
  else if(MenuCount===2)
  {
    currentStudent = GirlsOutStudentsList.head;
    currentMainStudent = GirlsStudentsList.head;
    

    TotalHistList=GirlsHistoryList;
    TotalInList=GirlsInStudentsList;
    TotalOutList=GirlsOutStudentsList;
  }
  else if(MenuCount===1)
  {
    currentStudent = BoysHomeoutStudentsList.head;
    currentMainStudent = studentsList.head;

    TotalHistList=BoysHomehistoryList;
    TotalInList=BoysHomeinStudentsList;
    TotalOutList=BoysHomeoutStudentsList;
  }

  
  let flag = false;
  let flag2 = false;
  let flag3=false;

  while (currentMainStudent) {
    if (RollNumber == currentMainStudent.id) {
      flag2 = true;
      break;
    }
    if (currentMainStudent.nextStudent) {
      currentMainStudent = currentMainStudent.nextStudent;
    } else {
      currentMainStudent = null;
    }
  }
          while (currentStudent) {
          if (RollNumber == currentStudent.id) {
            flag = true;
            break;
          }

          if (currentStudent.nextStudent) {
            currentStudent = currentStudent.nextStudent;
          } else {
            currentStudent = null;
          }
    }



  if (flag) {
    console.log(currentStudent.id);
    
    let newStudent = new StudentNode(RollNumber,currentStudent.outtiming, currentStudent.name,currentStudent.intiming, currentStudent.status);
    /*
    historyList.insertNode(newStudent.id, newStudent.intiming, newStudent.name, newStudent.outtiming, "in"); */
    let currentHistStudent = TotalHistList.head;
    while (currentHistStudent) {
      if (RollNumber == currentHistStudent.id && currentHistStudent.intiming==="-") {
        currentHistStudent.intiming=DateTime()
        currentHistStudent.status="out-in";
        console.log("yesNo");
        historyList.saveToLocalStorage();
        break;
      }

      if (currentHistStudent.nextStudent) {
        currentHistStudent = currentHistStudent.nextStudent;
      } else {
        currentHistStudent = null;
      }
    }


    console.log("flag : "+flag3);
    //<--console.log(currentHistStudent.outtiming);
    TotalInList.insertNode(Number(newStudent.id),/*newStudent.intiming*/"-", newStudent.name,/*newStudent outtiming*/"-", "in");

    TotalOutList.deleteNode(Number(newStudent.id));
    console.log(newStudent.id);

    
    document.querySelector(".DisplayError1").innerHTML = `Submitted successfully`;
  } else {
    let PrintError="ID not found";
    if(flag2==true)
    {
      PrintError="Already In";
    }
    document.querySelector(".DisplayError1").innerHTML = `${PrintError}`;
  }

  id.value = "";
}


function StudentsPrintList(printingList) {
  let currentStudent = printingList.head;
  let x = "<table border="+"2"+">"+"Student List: "+"<br>" + 
  "<tr class="+"tableRow"+">"+"<td>"+"Name:  "+ "</td>"+"<td>"+"Id: "+"</td>"+"<td>"+"OutTime: "+"</td>"+"<td>"+"InTime: "+"</td>"+"<td>"+"Status: "+"</td>"+"</tr>";

  while (currentStudent) {
    x += "<tr>"+"<td>" + currentStudent.name + "</td>";
    x += "<td>" + currentStudent.id + "</td>";
    x += "<td>" + currentStudent.outtiming + "</td>";
    x += "<td>" + currentStudent.intiming + "</td>";
    x += "<td>" + currentStudent.status + "</td>"+ "</tr>";

    if (currentStudent.nextStudent) {
      currentStudent = currentStudent.nextStudent;
    } else {
      currentStudent = null;
    }
  }

  let display = document.querySelector(".Main");
  display.innerHTML = "<button onclick=BackButton()>Back</Button>" + x+"</table>";
}



function StudentsList() {
  let StudentsList1;
  if(MenuCount===1)
  {
    StudentsList1=studentsList;
  }
  else if(MenuCount===2)
  {
    StudentsList1=GirlsStudentsList;
  }
  else if(MenuCount===3)
  {
    StudentsList1=studentsList;
  }
  StudentsPrintList(StudentsList1);

}

function StudentsInList() {
  let StudentsInList1;
  if(MenuCount===1)
  {
    StudentsInList1=inStudentsList;
  }
  else if(MenuCount===2)
  {
    StudentsInList1=GirlsInStudentsList;
  }
  else if(MenuCount===3)
  {
    StudentsInList1=BoysHomeinStudentsList;
  }
  StudentsPrintList(StudentsInList1);

}


function StudentsOutList() {

  let StudentsOutList1;
  if(MenuCount===1)
  {
    StudentsOutList1=outStudentsListStudentsList;
  }
  else if(MenuCount===2)
  {
    StudentsOutList1=GirlsOutStudentsList;
  }
  else if(MenuCount===3)
  {
    StudentsOutList1=BoysHomeoutStudentsList;
  }
  StudentsPrintList(StudentsOutList1);

}



function OutGoing() {
  Countgoing = Countgoing + 1;

  if (Countgoing % 2 === 1) {
    document.querySelector(".Main").innerHTML = `<div class="OutgoingDiv"><button class="OutgoingBackButton" onclick=BackButton()>Back</Button><input class="InputBox2" placeholder="Enter Roll No"/> <span class="DisplayError2"></span> <Button class="IncomingSubmitButton"  onclick="Submit2()">Submit</Button> </div>`;
  } else {
    Countgoing = 0;
    document.querySelector(".Main").innerHTML = "<button onclick=BackButton()>Back</Button>";
  }
  console.log(Countgoing);
}

function InComing() {
  CountComing = CountComing + 1;

  if (CountComing % 2 === 1) {
    document.querySelector(".Main").innerHTML = `<div class="IncomingDiv"><Button class="IncomingBackButton" onclick=BackButton()>Back</Button><input class="InputBox1" placeholder="Enter Roll No"/> <span class="DisplayError1"></span> <Button class="IncomingSubmitButton" onclick=Submit1()>Submit</Button> </div>`;
  } else {
    CountComing = 0;
    document.querySelector(".Main").innerHTML = "<button onclick=BackButton()>Back</Button>";
  }
  console.log(CountComing);
}

function History() {
  let StudentsHistoryList1;
  if(MenuCount===1)
  {
    StudentsHistoryList1=historyList;
  }
  else if(MenuCount===2)
  {
    StudentsHistoryList1=GirlsHistoryList;
    console.log("hello12345");
  }
  else if(MenuCount===3)
  {
    StudentsHistoryList1=BoysHomehistoryList;
    console.log("hello12345");
  }

  //document.querySelector(".man").classList.add("man1");
  StudentsPrintList(StudentsHistoryList1);
}

function CheckBalance() {
  let TakingOutList;
  if(MenuCount===1)
  {
    TakingOutList=outStudentsList;
  }
  else if(MenuCount===2)
  {
    TakingOutList=GirlsOutStudentsList;
  }
  else if(MenuCount===3)
  {
    TakingOutList=BoysHomeoutStudentsList;
  }
  StudentsPrintList(TakingOutList);
}

function MainDiv()
{

  document.querySelector(".Main").innerHTML=`
  <button onclick="StudentsList()">students list</button>
  <button onclick="InComing()">In</button>
  <button onclick="OutGoing()">Out</button>
  <button onclick="CheckBalance()">Check</button>
  <button onclick="History()">History</button>`;
}


function resetUnderLine()
{
  document.querySelector(".underLine1").classList.remove("man1");
  document.querySelector(".underLine2").classList.remove("man2");
  document.querySelector(".underLine3").classList.remove("man3");
  document.querySelector(".underLine4").classList.remove("man4");
  document.querySelector(".underLine5").classList.remove("man5");
  document.querySelector(".underLine6").classList.remove("man6");

}

function BoysOuting()
{

  resetUnderLine(); 
  document.querySelector(".underLine1").classList.add("man1");
  document.querySelector(".SetTitle").innerHTML=`Boys Outing`;
  MenuCount=1;
  MainDiv();
}

function GirlsOuting()
{
  resetUnderLine(); 
  document.querySelector(".underLine2").classList.add("man2");
  document.querySelector(".SetTitle").innerHTML=`Girls Outing`;
  MenuCount=2;
  MainDiv();
}
function BoysHome()
{
  resetUnderLine();
  document.querySelector(".underLine3").classList.add("man3");
  document.querySelector(".SetTitle").innerHTML=`Boys Home`;
  MenuCount=3;
  MainDiv();

}
function B()
{
  resetUnderLine();
  document.querySelector(".underLine4").classList.add("man4");

}
function C()
{
  resetUnderLine();
  document.querySelector(".underLine5").classList.add("man5");

}
function D()
{
  resetUnderLine();
  document.querySelector(".underLine6").classList.add("man6");

}
