$(document).ready(function () {

  $("#btnAdd").click(function () {
    add();
  });

});


function add() {
  debugger
 var fileone = $("#js_fstimage")[0].files[0];
 var filetwo = $("#js_scnimage")[0].files[0];
 var filethree = $("#js_trdimage")[0].files[0];

 var form = new FormData();
 form.append('lunesfile',fileone);
 form.append('martesfile',filetwo);
 form.append('miercolesfile',filethree);

 $.ajax({
    url: 'apis/custom.php',
    data: form,
    type: 'POST',
    contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
    processData: false, // NEEDED, DON'T OMIT THIS
    success: function (data) {
      console.log(data);
    }
});
}
