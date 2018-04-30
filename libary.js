let myLibrary = [];
let Form = document.getElementsByTagName('form');
let Body = document.getElementsByTagName('body');
// let clone = document.getElementsByClassName("rows")[0].cloneNode(true);
//Constructor function for Book object
function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function FetchBooks(){
  //Get All Books in storage Till now
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  if(JSON.parse(localStorage.getItem('myLibrary')) !== null){
    console.log("sdas");
      let All_Current_Books = JSON.parse(localStorage.getItem('myLibrary'));

      let container = document.getElementsByClassName('container')[0];
      container.innerHTML = "";
      //Build The Container
      for(let i = 0 ; i < All_Current_Books.length ; i++){
        let Title = myLibrary[i].title;
        let Author = myLibrary[i].author;
        let pages = myLibrary[i].pages
        container.innerHTML +=      '<div class="rows">'+
                                        '<div class="row_1">'+
                                            '<header>'+
                                              '<h3>'+Title+'</h3>'+
                                              '<div class="cancle_button" onclick="DeleteBook(\''+Title+'\')">x</div>'+
                                          '  </header>'+
                                        '  </div>'+
                                        ' <div class="row_2">'+
                                            '<main>'+
                                              '<img src="#" alt="pic of book">'+
                                           ' </main>'+
                                         ' </div>'+
                                          '<div class="row_3"> '+
                                            '<footer>'+
                                              '<div class="left_footer">'+
                                                '<p>'+Author+'</p>'+
                                             '</div>'+
                                              '<div class="right_footer">'+
                                                '<p>'+pages+'</p>'+
                                              '</div>'+
                                            '</footer>'+
                                          '</div>'+
                                        '</div>';
        //Set Data_attribute
        document.getElementsByClassName("rows")[i].setAttribute("data-value",i);
      }
    }
}
document.getElementById("button").onclick = function(e){
      //Get Values From Form
      let title = document.getElementById('title').value;
      let author = document.getElementById('author').value;
      let pages = document.getElementById('pages').value;
      //Validate The Form
      if(title == "" || author == "" || !isNaN(pages)){
        alert("fill  form correctly");
        return false;
      }
      //Create New Book
      let current_book = new Book(title,author,pages);
      if(JSON.parse(localStorage.getItem('myLibrary')) === null){
          myLibrary = [];
          myLibrary.push(current_book);
          console.log(nuulll);
          //push to sorage
        
        localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
          }
      else{
            console.log(myLibrary);
            mylibrary = JSON.parse(localStorage.getItem('myLibrary'));

            myLibrary.push(current_book);
            console.log(myLibrary);
          
            //push to sorage
          
            localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
      }


      console.log(JSON.parse(localStorage.getItem('myLibrary')));

      FetchBooks();
      //Make the Form display none again
      document.getElementsByClassName("form")[0].style.display = "none";

      e.preventDefault();
}

function DeleteBook(data_att){
  console.log(myLibrary);
     for(let i = 0 ; i < myLibrary.length ; i++){
         if(myLibrary[i].title == data_att){
            myLibrary.splice(i,1);

            localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
         }
    }
    FetchBooks();
}
//Changing The Form properties on clicking the newButton 
      document.getElementById("btn2").onclick = function(){
      Form[0].style.margin = "10% auto";
      document.getElementsByClassName("form")[0].style.display = "block";
      document.getElementsByClassName("form")[0].style.background = "rgba(0,0,0,0.6)";  
}