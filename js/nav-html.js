$(document).ready(function(){ 
    $.get("../html/nav.txt", function(data) {
      $("#nav").html(data);
    });
  }); 