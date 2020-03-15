//define functions here
function getIt(){
 return $(p).on('click', window.alert("Hey!"));
}

function frameIt(){
  return  $('img').on('load',
  function(key){
    return  $('img').append($('.tasty'))
  });
}

function pressIt(){
  return $('input').on('keydown',
  function(key){
    if(key === 'G'){
      alert('G was pressed')
    }
  })
}

function submitIt(){
  
}
$(document).ready(function(){

// call functions here

});
