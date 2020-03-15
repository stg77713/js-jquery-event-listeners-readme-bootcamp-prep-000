//define functions here
function getIt(){
 return $('p').on('click', window.alert("Hey!"));
}

function frameIt(){
  return  $('img').on('load',
  function(key){
    return  $('img').addClass($('.tasty'))
  });
}

function pressIt(){
  return $('input').on('keydown',
  function(key){
    if(key.which == 71){
      alert('G was pressed');
    }
  });
}

function submitIt(){
  return $('form').on('submit',
  function(key){
    alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
