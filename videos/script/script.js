//accordion script
  $(function() {
    $("#accordion").accordion();
  });


function showpara() {
    var rolldown = document.getElementById("rolldown");
    rolldown.style.display = "visibile";    
    }
 

//Autoslider

var myImage = document.getElementById('mainImage');

var imageArray = [
            'imgs/image1.jpg',
            "imgs/image2.jpg",
            "imgs/image3.jpg",
            "imgs/image4.jpg",
            "imgs/image5.jpg",
            "imgs/image6.jpg",
            "imgs/image7.jpg"
            ];

var imageIndex = 0;

function changeImage() {
        mainImage.setAttribute("src",imageArray[imageIndex]);
        imageIndex = (imageIndex + 1) % imageArray.length;
}

setInterval(changeImage, 5000)


/*// Displaying string on the side bar

//var fruits, text, fLen, i; remove // and solve
//fruits = [
    "Banana",
    "Orange", 
    "Apple", 
    "Mango"
];
fLen = fruits.length;
text = "<ul>"; 
for (i = 0; i < fLen; i++) {

    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul> </div>";
document.getElementById("demo").innerHTML = text;

*/


/*Image slide upwards 

window.onscroll.vertical = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 150 || document.getElementById("myImg")> 150) {
        document.getElementById("myImg").className = "slideUp";
    }
}

*/

/*
var open = function() {
    
    var x = document.getElementById('gly');
      
    var y = document.getElementById('menu');
    
   x.onclick = function() {
       y.style.marginleft = "600px";
    
    
}
    
        //when 'gly' is clicked slide inside and then toggle.
        
        
        
}

*/


var main = function() {
  /* Push the body and the nav over by 285px over */
  $('#gly').click(function() {
    $('#menu').animate({
      left: "0px"
    }, 200);
      
       $('body').animate({
      left: "285px"
    }, 200);
  });

  
  /* Then push them back */
  $('#gly1').click(function() {
    $('#menu').animate({
      left: "-285px"
    }, 200);
      
       $('body').animate({
      left: "0px"
    }, 200);
  });

  
  };



$(document).ready(main);

