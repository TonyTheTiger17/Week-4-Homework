<!DOCTYPE html>
<html>
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="style.css" >
<title>Week 4</title>
</head>
<header class="headers">Bootstrap and JS/jQuery Worksheet</header>
<body>

    <h6>Bootstrap and Js/JQuery Worksheet</h6>
    <h4>Week 3 Class Work</h4>
    <div class="container">
        <div class="row boxes">
          <div class="col-sm red">
          </div>
          <div class="col-sm blue">
          </div>
          <div class="col-sm green">
          </div>
        </div>
      </div>
    <h5 class="changeB">Change Buttons</h5>
    <div class="container">
        <div class="row changeBut">
            <div class="col"><span class="changeBtn1">Change Box 1</span></div>
            <div class="col"><span class="changeBtn2">Change Box 2</span></div>
            <div class="col"><span class="changeBtn3">Change Box 3</span></div>
            <div class="col"><span class="changeAll">  Change All  </span></div>
        </div>
    </div>
    <h6 class="hideB">Hide Buttons</h6>
    <div class="container">
        <div class="row hideBut">
            <div class="col"><span class="hideBtn1">Hide Box 1</span></div>
            <div class="col"><span class="hideBtn2">Hide Box 2</span></div>
            <div class="col"><span class="hideBtn3">Hide Box 3</span></div>
            <div class="col"><span class="hideAll">Hide All</span></div>
        </div>
        <div class="row showall">
            <div class="col"><span class="resetcol">Reset colors</span></div>
            <div class="col"><span class="showall">Show all</span></div>
        </div>
    </div>
    </div>

    <script   src="https://code.jquery.com/jquery-3.5.1.min.js"   integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="   crossorigin="anonymous"></script>
    
    <script>
$(document).ready(function(){
// The colored boxes
    $('.changeBtn1').on('click',function() {
        $('.red').css('background-color', 'green');
    });
    $('.changeBtn2').on('click',function() {
        $('.blue').css('background-color', 'yellow');
    });
    $('.changeBtn3').on('click',function() {
        $('.green').css('background-color', 'purple');
    });
    $('.changeAll').on('click',function() {
        $('.green, .blue, .red').css('background-color', 'goldenrod');
    });
//Hide boxes
$('.hideBtn1').on('click',function() {
    $('.red').hide();
});
$('.hideBtn2').on('click',function() {
    $('.blue').hide();
});
$('.hideBtn3').on('click',function() {
    $('.green').hide();
});
$('.hideAll').on('click',function() {
    $('.red, .blue, .green').hide();
});
// Reset Colors
$('.resetcol').on('click',function() {
    $('.red').css('background-color', 'red');
    $('.blue').css('background-color', 'blue');
    $('.green').css('background-color', 'green');
});
})
//Show All
$('.showall').on('click',function() {
    $('.red, .blue, .green').show();
});
    </script>

    </body
</html></meta>


















