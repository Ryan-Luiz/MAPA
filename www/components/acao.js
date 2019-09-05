// This is a JavaScript file
$(document).ready(function(){
  $(document).on("click","#aqui",function(){
     
        

          var onSuccess = function(position) {
       L.mapquest.key = 'HXuYTVW3v6aMuO13m27U9EXmw8zN9gEy';

        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 100
        });
    };



    navigator.geolocation.getCurrentPosition(onSuccess);
      


});
})



      

