$(document).ready(function() {

  $('#new_product_review').submit(function(){
    var valuesToSubmit = $(this).serialize();
    $.ajax({
      type: "POST",
      url: $(this).attr('action'), //sumbits it to the given url of the form
      data: valuesToSubmit,
      dataType: "script"
    }).success(function(json){

      console.log("success", json);
    });
    return false;
  });

});

