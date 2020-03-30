const input = document.querySelector('#email-input');
const field = document.querySelector('#form-field');


//Images==============

let activeImg = ``;

function searchImages(){
    var clientId = '7mLGkdcJUsLvwq_PO2_pa3s_nkXqiQhac32gYI_0RKs';
    var query =  document.querySelector('#query-input').value;
    var url = 'https://api.unsplash.com/photos/random/?client_id='+clientId+'&query='+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            let result = `<img src="${data.urls.regular}">`;
            activeImg = `${data.urls.regular}`;
            $('.photo-frame').html(result);
        });

    

}
//save active image
function saveImage(){

    //check if element exists with that email as ID
    if(document.getElementById(`${input.value}`)) {

      //prepend to that list item //console.log("dupe")
      var liActive = document.getElementById(`${input.value}`);
      var image = document.createElement("img");
      image.src = activeImg;
      liActive.prepend(image);

      //if it doesnt
    } else {
      //log action to console
      console.log(input.value+" saved: "+activeImg);

      //cache elements
      var li = document.createElement("li");
      var img = document.createElement("img");
      var p = document.createElement("p");

      p.textContent = input.value;
      img.src = activeImg;
      li.appendChild(img);
      li.appendChild(p);
      li.id = input.value;

      $("#saveList").prepend(li);
    }



    
}

//make sure the form is valid before continue
function checkForm(form)
  {
    // validation fails if the input is blank
    if(input.value == "") {
      field.classList.add('empty-invalid');
      form.inputfield.focus();

      return false;
    }

    // regular expression to match only email addresses.
    var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    // validation fails if the input doesn't match regular expression
    if(!re.test(input.value)) {
      field.classList.add('email-invalid');
      input.focus();
      return false;
    }

    // validation was successful
    return true;
  
  }



//define Buttons =============

$('#form-field').submit(function(event){
    event.preventDefault();
    // clear 'invalid' style from form element
    field.className = "";

    // run the function
    checkForm();
    if(checkForm() == true){
        //Save the active image
        saveImage();
    }
});

$('#searchField').submit(function(event){
    event.preventDefault();
    searchImages();
})

