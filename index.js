console.log(" this is magic app project");
 showNote();


let element = document.getElementById("addBtn");
element.addEventListener("click", function (e) {
  let addText = document.getElementById('addText');
  let notes = localStorage.getItem("notes");
  document.body.style.backgroundColor="gray";
  // console.log("first time note value is = ",notes);
  // notesobj = [];

  if (notes == null) {
    notesobj = [];
  }
  else {
    // console.log("else block statement")
    notesobj = JSON.parse(notes);
    // console.log("firts time obj called = ",notesobj);
  }
  let myobj={
    title:addTitle.value,
    text:addText.value
  }
  notesobj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
    addText.value = "";
    addTitle.value = "";
  showNote();
});
 
// function to show element form local storage

function showNote() {
  let notes = localStorage.getItem("notes");
  // console.log( "during showtime time notes value = ",notes);
  if (notes == null){
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
    // console.log(" during shownote calling function noteobj[] = ", notesobj);
  }

  
  let html='';
  notesobj.forEach(function (element, index) {

    html +=`<div class=" noteCard card my-2 mx-3  bg-dark"  style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-white"><u>${element.title}</u></h5>
          <p class="card-text text-primary">${element.text}</p>
          <button id=${index} class="btn btn-success"  onclick=deleteNode(this.id)>Delete Node</button>
        </div>
      </div>`;

  });

  let notesElem = document.getElementById('notes');
      if (notesobj.length != 0)
   {
    
      notesElem.innerHTML = html;
    }
    else
    {
      notesElem.innerHTML=`Nothing to show here! "Use Add Note" Section above to add Note`
    }
}

function deleteNode(index)
{
  // console.log(`index${index} = deleting node`);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }

  notesobj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  showNote();

}


let search=document.getElementById("searchText");

search.addEventListener("input" ,function(element){

  // console.log("calling search ",search.value);
  let inputValue=search.value.toLowerCase();

  let noteCards=document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function(element){

    let cardText=element.getElementsByTagName("p")[0].innerText;
    console.log(cardText);
    if(cardText.includes(inputValue))
    {
      element.style.display="block";
    }
    else
    {
      element.style.display="none";
    }
    
  })

})
























