!function(){"use strict";function e(e){var a=n.filter(function(a){return+a.id===+e})[0],t="<h2>"+a.title+'</h2><img src="images/carousel/car_'+e+'.png" alt="'+a.title+'"><p>'+a.description+"</p>";$(".popup .content").html(t)}function a(e){return e.length>0}function t(e){var a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(e)}function i(e){return e.length>0}function r(e,r,n){return a(e)&&t(r)&&i(n)}var n=[{id:1,title:"1",description:"Cuba esculpida em pedra natural de rio."},{id:2,title:"2",description:"Cuba esculpida em pedra natural de rio."},{id:3,title:"3",description:"Cuba esculpida em pedra natural de rio."},{id:4,title:"4",description:"Cuba esculpida em pedra natural de rio."},{id:5,title:"5",description:"Cuba esculpida em pedra natural de rio."}],o=n.map(function(e){return'<div><img src="images/carousel/car_'+e.id+'.png"alt="'+e.title+'"data-id="'+e.id+'"></div>'}).reduce(function(e,a){return e+a});$(".carousel").html(o),$(".carousel").slick({dots:!1,speed:200,infinite:!0,autoplay:!0,slidesToShow:4,slidesToScroll:1,autoplaySpeed:2100,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:340,settings:{slidesToShow:1}}]}),$(".slick-slide").on("click","img",function(a){a.preventDefault(),e($(this).data("id")),$("body").removeClass().addClass("pop-open")}),$(".close-popup").on("click",function(e){e.preventDefault(),$("body").removeClass()}),$(".close-menu").on("click",function(e){e.preventDefault(),$("body").removeClass()}),$(".open-menu").on("click",function(e){e.preventDefault(),$("body").addClass("in")}),$("form").on("submit",function(e){e.preventDefault(),$('input[name="name"]').removeClass("error"),$('input[name="email"]').removeClass("error"),$('textarea[name="message"]').removeClass("error");var n=$('input[name="name"]').val(),o=$('input[name="email"]').val(),s=$('textarea[name="message"]').val();if(r(n,o,s)){var l={name:n,email:o,message:s};$.ajax({url:"//formspree.io/leonardopeta@live.co.uk",method:"POST",data:l,dataType:"json"}).done(function(){$("form").hide(),$(".form-success").show()}).error(function(){$("form").hide(),$(".form-error").show()})}else a(n)||$('input[name="name"]').addClass("error"),t(o)||$('input[name="email"]').addClass("error"),i(s)||$('textarea[name="message"]').addClass("error")})}();