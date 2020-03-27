const input = document.querySelector('#email-input');
const field = document.querySelector('#form-field');

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
    //   alert("Error: Input contains invalid characters!");
      field.classList.add('email-invalid');
      input.focus();
      return false;
    }

    // validation was successful
    return true;
  }



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
    console.log("saved:"+activeImg);
}

//define Buttons =============

$('#form-field').submit(function(event){
    event.preventDefault();
    // clear 'invalid' style from form element
    field.className = "";

    // run the function
    checkForm();
    if(checkForm){
        //Save the active image
        saveImage();
    }
});

$('#searchField').submit(function(event){
    event.preventDefault();
    searchImages();
})

