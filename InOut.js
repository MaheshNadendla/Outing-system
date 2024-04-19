// localStorage.clear();
let MenuCount=1;
function copyLinkedList(sourceList, destinationList) {
  
  clearLinkedList(destinationList);

  let currentSource = sourceList.head;

  while (currentSource) {
      
      const newNode = new StudentNode(
          currentSource.id,
          currentSource.intiming,
          currentSource.name,
          currentSource.outtiming,
          currentSource.status

      );

      
      destinationList.insertNode(newNode.id, newNode.intiming, newNode.name, newNode.outtiming, newNode.status);

      currentSource = currentSource.nextStudent;
  }
}

function clearLinkedList(linkedList) {
  linkedList.head = null;
}

function Exit()
{

  document.querySelector(".Main").innerHTML = `<div class="Main"><img  class="JntuLogo"src="jntuhces_logo-removebg-preview.png" alt=""></div></div>`;
  Countgoing = 0;
  CountComing = 0;
}

function ResetApp()
{
  document.querySelector(".SetTitle").innerHTML=``;
  resetUnderLine();
    
  clearLinkedList(outStudentsList);

  
  clearLinkedList(inStudentsList);

  
  clearLinkedList(historyList);

  copyLinkedList(studentsList, inStudentsList);




  clearLinkedList(GirlsOutStudentsList);

  
  clearLinkedList(GirlsInStudentsList);

  
  clearLinkedList(GirlsHistoryList);

  copyLinkedList(GirlsStudentsList, GirlsInStudentsList);

  

  clearLinkedList(BoysHomeoutStudentsList);

  
  clearLinkedList(BoysHomeinStudentsList);

  
  clearLinkedList(BoysHomehistoryList);

  copyLinkedList(studentsList,BoysHomeinStudentsList);



  clearLinkedList(GirlsHomeoutStudentsList);

  
  clearLinkedList(GirlsHomeinStudentsList);

  
  clearLinkedList(GirlsHomehistoryList);

  copyLinkedList(GirlsStudentsList,GirlsHomeinStudentsList);



  clearLinkedList(StaffoutList);


  clearLinkedList(StaffinList);

  
  clearLinkedList(StaffhistoryList);

  copyLinkedList(StaffList,StaffinList);


  let display = document.querySelector(".Main");
  display.innerHTML = `<span id="ReverseBtn2" onclick=Exit()><img class="Reverse" src="BackBtn-removebg-preview.png" alt=""></span>  <div class="ResetMessageDiv"><span class="ResetMessage">Reseted sucessfully </span> </div>`;

}


function SearchStudent(Location)
{

  let display = document.querySelector(".Main");
  display.innerHTML = `<span id="ReverseBtn2" onclick=Exit()><img class="Reverse" src="BackBtn-removebg-preview.png" alt=""></span>  <div class="ResetMessageDiv"><span class="ResetMessage">${Location}</span> </div>`;
}


class StudentNode {
  constructor(id, intiming, name, outtiming, status, phone,place) {
    this.id = id;
    this.intiming = intiming;
    this.name = name;
    this.outtiming = outtiming;
    this.status = status;
    this.phone = phone;
    this.place=place;
    this.nextStudent = null;
  }
}

class LinkedList {
  constructor(name) {
    this.name = name;
    this.head = null;
  }

  insertNode(id, intiming, name, outtiming, status,phone,place) {
    const newNode = new StudentNode(id, intiming, name, outtiming, status,phone,place);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextStudent) {
        current = current.nextStudent;
      }
      current.nextStudent = newNode;
    }

    
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

    
    this.saveToLocalStorage();
  }

  // Save the linked list to local storage
  saveToLocalStorage() {
    const listData = JSON.stringify(this.head);
    localStorage.setItem(this.name, listData);
  }

  
  loadFromLocalStorage() {
    const listData = localStorage.getItem(this.name);
    if (listData) {
      this.head = JSON.parse(listData);
    }
  }
}


let Countgoing = 0;
let CountComing = 0;


let studentsList = new LinkedList('studentsList');
let outStudentsList = new LinkedList('outStudentsList');
let inStudentsList = new LinkedList('inStudentsList');
let historyList = new LinkedList('historyList');


let GirlsStudentsList = new LinkedList('GirlsStudentsList');
let GirlsOutStudentsList = new LinkedList('GirlsOutStudentsList');
let GirlsInStudentsList = new LinkedList('GirlsInStudentsList');
let GirlsHistoryList = new LinkedList('GirlsHistoryList');



let BoysHomeoutStudentsList = new LinkedList('BoysHomeoutStudentsList');
let BoysHomeinStudentsList = new LinkedList('BoysHomeinStudentsList');
let BoysHomehistoryList = new LinkedList('BoysHomehistoryList');

let GirlsHomeoutStudentsList = new LinkedList('GirlsHomeoutStudentsList');
let GirlsHomeinStudentsList = new LinkedList('GirlsHomeinStudentsList');
let GirlsHomehistoryList = new LinkedList('GirlsHomehistoryList');


let StaffList = new LinkedList('StaffList');
let StaffoutList = new LinkedList('StaffoutList');
let StaffinList = new LinkedList('StaffinList');
let StaffhistoryList = new LinkedList('StaffhistoryList');


let VisitorsList = new LinkedList('VisitorsList');
let VisitorsoutList = new LinkedList('VisitorsoutList');
let VisitorsinList = new LinkedList('VisitorsinList');
let VisitorshistoryList = new LinkedList('VisitorshistoryList');





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

GirlsHomeoutStudentsList.loadFromLocalStorage();
GirlsHomeinStudentsList.loadFromLocalStorage();
GirlsHomehistoryList.loadFromLocalStorage();


StaffList.loadFromLocalStorage();
StaffoutList.loadFromLocalStorage();
StaffinList.loadFromLocalStorage();
StaffhistoryList.loadFromLocalStorage();



VisitorsList.loadFromLocalStorage();
VisitorsoutList.loadFromLocalStorage();
VisitorsinList.loadFromLocalStorage();
VisitorshistoryList.loadFromLocalStorage();




let defaultStudentsAdded1 = false;
let defaultStudentsAdded2 = false;
let defaultStudentsAdded3 = false;
let defaultStudentsAdded4 = false;
let defaultStudentsAdded5 = false;
let defaultStudentsAdded6 = false;
let defaultStudentsAdded7 = false;
let defaultStudentsAdded8 = false;




if (!studentsList.head && !defaultStudentsAdded1) {
  studentsList.insertNode(1,"-", "Mahesh","-" , "-","01234","xyz");
  studentsList.insertNode(2, "-", "Vamshi", "-", "-","01234","xyz");
  studentsList.insertNode(3, "-", "Sai kiran", "-", "-","01234","xyz");
  studentsList.insertNode(4, "-", "Eshwar", "-", "-","01234","xyz");
  studentsList.insertNode(5, "-", "Vikram", "-", "-","01234","xyz");

  
  defaultStudentsAdded1 = true;
}

if (!inStudentsList.head && !defaultStudentsAdded2) {
  inStudentsList.insertNode(1, "-", "Mahesh", "-", "-","01234","xyz");
  inStudentsList.insertNode(2, "-", "Vamshi", "-", "-","01234","xyz");
  inStudentsList.insertNode(3, "-", "Sai kiran", "-", "-","01234","xyz");
  inStudentsList.insertNode(4, "-", "Eshwar", "-", "-","01234","xyz");
  inStudentsList.insertNode(5, "-", "Vikram", "-", "-","01234","xyz");

  
  defaultStudentsAdded2 = true;
}


if (!GirlsStudentsList.head && !defaultStudentsAdded3) {
  GirlsStudentsList.insertNode(6,"-", "JanU","-" , "-","01234","xyz");
  GirlsStudentsList.insertNode(7, "-", "Kushi", "-", "-","01234","xyz");
  GirlsStudentsList.insertNode(8, "-", "Lav", "-", "-","01234","xyz");
  GirlsStudentsList.insertNode(9, "-", "Rupa", "-", "-","01234","xyz");
  GirlsStudentsList.insertNode(10, "-", "sreya", "-", "-","01234","xyz");

  
  defaultStudentsAdded3 = true;
}

if (!GirlsInStudentsList.head && !defaultStudentsAdded4) {
  GirlsInStudentsList.insertNode(6, "-", "JanU", "-", "-","01234","xyz");
  GirlsInStudentsList.insertNode(7, "-", "Kushi", "-", "-","01234","xyz");
  GirlsInStudentsList.insertNode(8, "-", "Lav", "-", "-","01234","xyz");
  GirlsInStudentsList.insertNode(9, "-", "Rupa", "-", "-","01234","xyz");
  GirlsInStudentsList.insertNode(10, "-", "sreya", "-", "-","01234","xyz");

  
  defaultStudentsAdded4 = true;
}

if (!BoysHomeinStudentsList.head && !defaultStudentsAdded5) {
  BoysHomeinStudentsList.insertNode(1, "-", "Mahesh", "-", "-","01234","xyz");
  BoysHomeinStudentsList.insertNode(2, "-", "Vamshi", "-", "-","01234","xyz");
  BoysHomeinStudentsList.insertNode(3, "-", "Sai kiran", "-", "-","01234","xyz");
  BoysHomeinStudentsList.insertNode(4, "-", "Eshwar", "-", "-","01234","xyz");
  BoysHomeinStudentsList.insertNode(5, "-", "Vikram", "-", "-","01234","xyz");

  
  defaultStudentsAdded5 = true;
}

if (!GirlsHomeinStudentsList.head && !defaultStudentsAdded6) {
  GirlsHomeinStudentsList.insertNode(6, "-", "JanU", "-", "-","01234","xyz");
  GirlsHomeinStudentsList.insertNode(7, "-", "Kushi", "-", "-","01234","xyz");
  GirlsHomeinStudentsList.insertNode(8, "-", "Lav", "-", "-","01234","xyz");
  GirlsHomeinStudentsList.insertNode(9, "-", "Rupa", "-", "-","01234","xyz");
  GirlsHomeinStudentsList.insertNode(10, "-", "sreya", "-", "-","01234","xyz");
  
  defaultStudentsAdded6 = true;
}


if (!StaffList.head && !defaultStudentsAdded7) {
    StaffList.insertNode(11,"-", "Staff1","-" , "-","01234","xyz");
    StaffList.insertNode(12, "-", "Staff2", "-", "-","01234","xyz");
    StaffList.insertNode(13, "-", "Staff3", "-", "-","01234","xyz");
    StaffList.insertNode(14, "-", "Staff4", "-", "-","01234","xyz");
    StaffList.insertNode(15, "-", "Staff5", "-", "-","01234","xyz");
  
    
    defaultStudentsAdded7 = true;
  }

  if (!VisitorsList.head && !defaultStudentsAdded8) {
    VisitorsList.insertNode(16,"-", "Visitors1","-" , "-","01234","xyz");
    VisitorsList.insertNode(17, "-", "Visitors2", "-", "-","01234","xyz");
    VisitorsList.insertNode(18, "-", "Visitors3", "-", "-","01234","xyz");
    VisitorsList.insertNode(19, "-", "Visitors4", "-", "-","01234","xyz");
    VisitorsList.insertNode(20, "-", "Visitors5", "-", "-","01234","xyz");
  
    
    defaultStudentsAdded8 = true;
  }




function DateTime() {
  const currentDateTime = new Date();
  const date = currentDateTime.toDateString();
  let hours = currentDateTime.getHours();
  let minutes = currentDateTime.getMinutes();
  let seconds = currentDateTime.getSeconds();

  
  const formattedDateTime = "Time :  "+ date + " " + hours + ":" + minutes + ":" + seconds;
  return formattedDateTime;
}


function updateDateTime() {
  const dateTime = DateTime();
  document.getElementById("datetime-display").innerHTML = dateTime;
}
setInterval(updateDateTime, 1000);

function BackButton() {
  document.querySelector(".Main").innerHTML = `<div class="Main">
    <button onclick="StudentsList()">List</button>
    <button onclick="InComing()">In</button>
    <button onclick="OutGoing()">Out</button>
    <button onclick="CheckBalance()">Check</button>
    <button onclick="History()">History</button>
  </div>`;
  Countgoing = 0;
  CountComing = 0;
}

function Submit2() 
{
  let id = document.querySelector('.InputBox2');
  let RollNumber = id.value;



  let currentStudent;
  let currentInStudent;
  let currentOutStudent;
  let TotalHistList;
  let TotalOutList;
  let TotalInList;
  let TotalHomeList;


  if(MenuCount===1)
  {
    currentStudent = studentsList.head;
    currentInStudent=inStudentsList.head;
    currentOutStudent=outStudentsList.head;
    TotalHomeList=BoysHomeoutStudentsList.head;


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

    TotalHomeList=GirlsHomeoutStudentsList.head;


    TotalHistList=GirlsHistoryList;
    TotalOutList=GirlsOutStudentsList;
    TotalInList=GirlsInStudentsList;

  }
  else if(MenuCount===3)
  {
    currentStudent = studentsList.head;
    currentInStudent=BoysHomeinStudentsList.head;
    currentOutStudent=BoysHomeoutStudentsList.head;


    TotalHomeList=outStudentsList.head;

    TotalHistList=BoysHomehistoryList;
    TotalOutList=BoysHomeoutStudentsList;
    TotalInList=BoysHomeinStudentsList;

  }
  else if(MenuCount===4)
  {
    currentStudent = GirlsStudentsList.head;
    currentInStudent=GirlsHomeinStudentsList.head;
    currentOutStudent=GirlsHomeoutStudentsList.head;

    TotalHomeList=GirlsOutStudentsList.head;

    TotalHistList=GirlsHomehistoryList;
    TotalOutList=GirlsHomeoutStudentsList;
    TotalInList=GirlsHomeinStudentsList;
  }

  else if(MenuCount===5)
  {
    currentStudent = StaffList.head;
    currentInStudent=StaffinList.head;
    currentOutStudent=StaffoutList.head; 
    TotalHistList=StaffhistoryList;
    TotalOutList=StaffoutList;
    TotalInList=StaffinList;

  }

  else if(MenuCount===6)
  {
    currentStudent = VisitorsList.head;
    currentInStudent=VisitorsinList.head;
    currentOutStudent=VisitorsoutList.head;
    TotalHistList=VisitorshistoryList.head;
    TotalOutList=VisitorsoutList;
    TotalInList=VisitorsinList;

  }






  let flag = false;
  let flag2=false;
  let flag3=false;


  while (TotalHomeList) 
  {
    if (RollNumber == TotalHomeList.id) 
    {
      flag3 = true;
      break;
    }
    if (TotalHomeList.nextStudent) 
    {
      TotalHomeList = TotalHomeList.nextStudent;
    } else 
    {
      TotalHomeList = null;
    }
  }


  //by yataku vellada  
  while (currentOutStudent) 
  {
    if (RollNumber == currentOutStudent.id) 
    {
      flag2 = true;
      break;
    }
    if (currentOutStudent.nextStudent) 
    {
      currentOutStudent = currentOutStudent.nextStudent;
    } else 
    {
      currentOutStudent = null;
    }
  }

  


  // Total list lo unnada
          while (currentStudent) 
          {
          if (RollNumber == currentStudent.id) 
          {
            flag = true;
            break;
          }

          if (currentStudent.nextStudent) 
          {

            currentStudent = currentStudent.nextStudent;
          } else 
          {
            currentStudent = null;
          }
        }
        
        if(MenuCount===1 || MenuCount===2)
        {
          if(flag2===true)
          {
            document.querySelector(".DisplayError2").innerHTML = `Is at Out`;
          }
          else if(flag3===true)
          {
            document.querySelector(".DisplayError2").innerHTML = `He is at Home`;
          }
        }
        if(MenuCount===3 || MenuCount===4)
        {
          if(flag3===true )
          {
            document.querySelector(".DisplayError2").innerHTML = `Already gone`;
          }
          else if(flag2===true )
          {
            document.querySelector(".DisplayError2").innerHTML = `He is at Home`;
          }
        }
        else
        {
          if(flag2===true)
          {
            document.querySelector(".DisplayError2").innerHTML = `Is at Out`;
          }
        }
        
        

    //bayata ledu kani student list lo unnadu 

  if (flag && !flag2 && !flag3) {
    console.log(currentStudent.id);

    let newStudent = new StudentNode(RollNumber,currentStudent.outtiming, currentStudent.name,DateTime(), currentStudent.status,currentStudent.phone,currentStudent.place);
    TotalHistList.insertNode(newStudent.id, newStudent.intiming, newStudent.name, newStudent.outtiming, "out",newStudent.phone,document.querySelector('.InputBox4').value);
    
    
    if(MenuCount===3 || MenuCount===4)
    {
      TotalOutList.insertNode(Number(newStudent.id), newStudent.intiming, newStudent.name, newStudent.outtiming, "out",newStudent.phone,newStudent.place);
    }
    else
    {
      TotalOutList.insertNode(Number(newStudent.id), newStudent.intiming, newStudent.name, newStudent.outtiming, "out",newStudent.phone,newStudent.place);
    }

    TotalInList.deleteNode(Number(newStudent.id));
    console.log(typeof(newStudent.id));
    
    document.querySelector(".DisplayError2").innerHTML = `Submitted successfully`;
  } 

  // Total list lo ledu Out list lo ledu

  if(!flag && !flag2){

    document.querySelector(".DisplayError2").innerHTML = `ID not found`;
    
  }

  id.value = "";
  document.querySelector('.InputBox4').value="";
}


function Submit1() {
  
  


  let id = document.querySelector('.InputBox1');
  let RollNumber = id.value;

  let currentStudent;
  let currentMainStudent;

  let TotalOutList;
  let TotalHistList;
  let TotalInList;
  let TotalHomeList;
  
  if(MenuCount===1)
  {
    currentStudent = outStudentsList.head;
    currentMainStudent = studentsList.head;
    
    TotalHomeList=BoysHomeoutStudentsList.head;

    TotalHistList=historyList;
    TotalInList=inStudentsList;
    TotalOutList=outStudentsList;
  }
  else if(MenuCount===2)
  {
    currentStudent = GirlsOutStudentsList.head;
    currentMainStudent = GirlsStudentsList.head;

    TotalHomeList=GirlsHomeoutStudentsList.head;
    

    TotalHistList=GirlsHistoryList;
    TotalInList=GirlsInStudentsList;
    TotalOutList=GirlsOutStudentsList;
  }
  else if(MenuCount===3)
  {
    currentStudent = BoysHomeoutStudentsList.head;
    currentMainStudent = studentsList.head;

    TotalHomeList=outStudentsList.head;

    TotalHistList=BoysHomehistoryList;
    TotalInList=BoysHomeinStudentsList;
    TotalOutList=BoysHomeoutStudentsList;
  }


  else if(MenuCount===4)
  {
    currentStudent = GirlsHomeoutStudentsList.head;
    currentMainStudent = GirlsStudentsList.head;

    TotalHomeList=GirlsOutStudentsList.head;

    TotalHistList=GirlsHomehistoryList;
    TotalInList=GirlsHomeinStudentsList;
    TotalOutList=GirlsHomeoutStudentsList;
  }

  else if(MenuCount===5)
  {
    currentStudent = StaffoutList.head;
    currentMainStudent = StaffList.head;

    TotalHistList=StaffhistoryList;
    TotalInList=StaffinList;
    TotalOutList=StaffoutList;
  }

  else if(MenuCount===6 )
  {
    currentStudent = VisitorsoutList.head;
    currentMainStudent = VisitorsList.head;

    TotalHistList=VisitorshistoryList;
    TotalInList=VisitorsinList;
    TotalOutList=VisitorsoutList;
  }

  
  let flag = false;
  let flag2 = false;
  let flag3=false;



  while (TotalHomeList) {
    if (RollNumber == TotalHomeList.id) {
      flag3 = true;
      break;
    }
    if (TotalHomeList.nextStudent) {
      TotalHomeList = TotalHomeList.nextStudent;
    } else {
      TotalHomeList = null;
    }
  }




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
    console.log(flag);



  if (flag) {
    console.log(currentStudent.id);
    
    let newStudent = new StudentNode(RollNumber,currentStudent.outtiming, currentStudent.name,currentStudent.intiming, currentStudent.status,currentStudent.phone,currentStudent.place);
    
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
    TotalInList.insertNode(Number(newStudent.id),/*newStudent.intiming*/"-", newStudent.name,/*newStudent outtiming*/"-", "in",newStudent.phone,newStudent.place);

    TotalOutList.deleteNode(Number(newStudent.id));
    console.log(newStudent.id);

    
    document.querySelector(".DisplayError1").innerHTML = `Submitted successfully`;
} 
else 
{
    let PrintError="ID not found";
    if(MenuCount===1 || MenuCount===2)
    {
          if(flag2 && !flag3)
          {
            PrintError="Already In";
          }
          else if(flag2 && flag3)
          {
            PrintError="At Home Come In Home List";
          }
    }
    else if(MenuCount===3 || MenuCount===4)
    {
          if(flag2 && !flag3)
          {
            PrintError="Already In";
            console.log("yp");
          }
          else if(flag2 && flag3)
          {
            PrintError="At Outing, Come In Outing In List";
          }
    }
    else{
      if(flag2)
      {
        PrintError="Already In";
      }
    }
    
    document.querySelector(".DisplayError1").innerHTML = `${PrintError}`;
}

  id.value = "";
}


function StudentsPrintList(printingList) {
  let currentStudent = printingList.head;
  let x = "<table border="+"2"+">"+"<label id="+"Label1"+">"+" Student List: "+" </label>"+"<br>" + 
  "<tr class="+"tableRow"+">"+"<td>"+"Name:  "+ "</td>"+"<td>"+"Id: "+"</td>"+"<td>"+"OutTime: "+"</td>"+"<td>"+"InTime: "+"</td>"+"<td>"+"Status: "+"</td>"+"<td>"+"Phone: "+"</td>"+"<td>"+"place: "+"</td>"+"</tr>";

  while (currentStudent) {
    x += "<tr>"+"<td>" + currentStudent.name + "</td>";
    x += "<td>" + currentStudent.id + "</td>";
    x += "<td>" + currentStudent.outtiming + "</td>";
    x += "<td>" + currentStudent.intiming + "</td>";
    x += "<td>" + currentStudent.status + "</td>";
    x += "<td>" + currentStudent.phone + "</td>";
    x += "<td>" + currentStudent.place + "</td>"+ "</tr>";

    if (currentStudent.nextStudent) {
      currentStudent = currentStudent.nextStudent;
    } else {
      currentStudent = null;
    }
  }

  let display = document.querySelector(".Main");
  display.innerHTML = `<span id = "ReverseBtn" onclick=BackButton()> <img class="Reverse" src="BackBtn-removebg-preview.png" alt=""> </span> ${x}</table>`;
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
  else if(MenuCount===4)
  {
    StudentsList1=GirlsStudentsList;
  }
  else if(MenuCount===5)
  {
    StudentsList1=StaffList;
  }
  else if(MenuCount===6)
  {
    StudentsList1=VisitorsList;
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
  else if(MenuCount===4)
  {
    StudentsInList1=GirlsHomeinStudentsList;
  }
  else if(MenuCount===5)
  {
    StudentsInList1=StaffinList;
  }
  else if(MenuCount===6)
  {
    StudentsInList1=VisitorsinList;
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
  else if(MenuCount===4)
  {
    StudentsOutList1=GirlsHomeoutStudentsList;
  }
  else if(MenuCount===5)
  {
    StudentsOutList1=StaffoutList;
  }
  else if(MenuCount===6)
  {
    StudentsOutList1=VisitorsoutList;
  }
  StudentsPrintList(StudentsOutList1);

}



function OutGoing() {
  Countgoing = Countgoing + 1;

  if (Countgoing % 2 === 1) {
    document.querySelector(".Main").innerHTML = `<div class="OutgoingDiv"><span 
    id="ReverseBtn"
    class="OutgoingBackButton" onclick=BackButton()>  <img class="Reverse" src="BackBtn-removebg-preview.png" alt=""> </span><input class="InputBox2" placeholder="Enter Roll No"/> </span><input class="InputBox4" placeholder="Enter Place"/> <span class="DisplayError2"></span> <Button class="IncomingSubmitButton"  onclick="Submit2()">Submit</Button> </div>`;
  } else {
    Countgoing = 0;
    document.querySelector(".Main").innerHTML = `<button onclick=BackButton()>  <img class="Reverse" src="BackBtn-removebg-preview.png" alt="">  </Button>`;
  }
  console.log(Countgoing);
}

function InComing() {
  CountComing = CountComing + 1;

  if (CountComing % 2 === 1) {
    document.querySelector(".Main").innerHTML = `<div class="IncomingDiv"><span 
    id="ReverseBtn"
    class="IncomingBackButton" onclick=BackButton()>   <img class="Reverse" src="BackBtn-removebg-preview.png" alt="">  </span><input class="InputBox1" placeholder="Enter Roll No"/> <span class="DisplayError1"></span> <Button class="IncomingSubmitButton" onclick=Submit1()>Submit</Button> </div>`;
  } else {
    CountComing = 0;
    document.querySelector(".Main").innerHTML = `<button onclick=BackButton()> <img class="Reverse" src="BackBtn-removebg-preview.png" alt=""> </Button>`;
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
  else if(MenuCount===4)
  {
    StudentsHistoryList1=GirlsHomehistoryList;
    console.log("hello12345");
  }
  else if(MenuCount===5)
  {
    StudentsHistoryList1=StaffhistoryList;
    console.log("hello12345");
  }
  else if(MenuCount===6)
  {
    StudentsHistoryList1=VisitorshistoryList;
    console.log("hello12345");
  }

  
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
  else if(MenuCount===4)
  {
    TakingOutList=GirlsHomeoutStudentsList;
  }
  else if(MenuCount===5)
  {
    TakingOutList=StaffoutList;
  }
  else if(MenuCount===6)
  {
    TakingOutList=VisitorsoutList;
  }
  StudentsPrintList(TakingOutList);
}

function MainDiv()
{

  document.querySelector(".Main").innerHTML=`
  <button onclick="StudentsList()">List</button>
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
function GirlsHome()
{
    resetUnderLine();
    document.querySelector(".underLine4").classList.add("man4");
    document.querySelector(".SetTitle").innerHTML=`Girls Home`;
    MenuCount=4;
    MainDiv();

}
function StaffInOut()
{
    resetUnderLine();
    document.querySelector(".underLine5").classList.add("man5");
    document.querySelector(".SetTitle").innerHTML=`Staff List`;
    MenuCount=5;
    MainDiv();

}
function VisitorsInOut()
{
    resetUnderLine();
    document.querySelector(".underLine6").classList.add("man6");
    document.querySelector(".SetTitle").innerHTML=`Visitors List`;
    MenuCount=6;
    MainDiv();

}


function FindRoll(FindStudent,RollNumber)
{
  while (FindStudent) 
  {
      if (RollNumber == FindStudent.id) 
      {
        console.log(FindStudent);
        return FindStudent;
      }
      if (FindStudent.nextStudent) 
      {
        FindStudent = FindStudent.nextStudent;
      } else 
      {
        FindStudent = null;
      }
  }
  return false;
}

function Search()
{

  document.querySelector(".SetTitle").innerHTML=``;



  
  let SearchRoll=document.querySelector('.FinalSerch').value;
  console.log(SearchRoll);

  

  let flag= FindRoll(outStudentsList.head,SearchRoll);
  let flag2= FindRoll(inStudentsList.head,SearchRoll);
  let flag3= FindRoll(BoysHomeoutStudentsList.head,SearchRoll);


  let flag4= FindRoll(GirlsOutStudentsList.head,SearchRoll);
  let flag5= FindRoll(GirlsInStudentsList.head,SearchRoll);
  let flag6= FindRoll(GirlsHomeoutStudentsList.head,SearchRoll);



  let flag7= FindRoll(StaffoutList.head,SearchRoll);
  let flag8= FindRoll(StaffinList.head,SearchRoll);

  console.log(flag);
  
  console.log(flag2);
  console.log(flag3);
  console.log(flag4);
  console.log(flag5);
  console.log(flag6);
  console.log(flag7);
  console.log(flag8);


  resetUnderLine();
  if(flag2 && flag3)
  {
    
    SearchStudent(` Type : Boys Gone Home <br/> RollNo : ${flag3.id} <br/> Name : ${flag2.name}   <br/> OT : ${flag2.outtiming}  `);

  }
  else if(flag5 && flag6)
  {
    
    SearchStudent(` Type : Girl Gone Home <br/> RollNo : ${flag.id} <br/> Name : ${flag5.name}   <br/> OT : ${flag5.outtiming} `);

  }
  else if(flag)
  {
    
    SearchStudent(` Type : Boy Outing <br/> RollNo : ${flag.id} <br/> Name : ${flag.name}   <br/> OT : ${flag.outtiming}    `);
  }
  else if(flag2)
  {

    SearchStudent(` Type : Boy In College <br/> RollNo : ${flag2.id} <br/> Name : ${flag2.name}   <br/> OT : ${flag2.intiming}  `);
    
  }
  else if(flag4)
  {

    SearchStudent(` Type : Girl Outing <br/> RollNo : ${flag4.id} <br/> Name : ${flag4.name}   <br/> OT : ${flag4.outtiming} `);
    
  }
  else if(flag5)
  {

    SearchStudent(` Type : Girl In College <br/> RollNo : ${flag5.id} <br/> Name : ${flag5.name}  <br/> OT : ${flag5.intiming}  `);
    
  }
  else if(flag7)
  {

    SearchStudent(` Type : Staff Gone Home <br/> RollNo : ${flag7.id} <br/> Name : ${flag7.name}   <br/> OT : ${flag7.outtiming} `);
    
  }
  else if(flag8)
  {

    SearchStudent(` Type : Staff In College <br/> RollNo : ${flag8.id} <br/> Name : ${flag8.name}  <br/> OT : ${flag8.intiming}  `);
    
  }
  else
  {
    
    SearchStudent("Id not Found");
  }

}
        
