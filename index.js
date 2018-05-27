io = require('socket.io-client');
var socket = io.connect('integracion-tarea-3.herokuapp.com',{"path":"/fligths"});

function doStuff(){


//Listener
socket.on('connect', function(){
   try {
      console.log('socket connect');
      socket.emit('configure', {email:myemail, deviceid:device_id});

   } catch(e) {
     console.log(e);
   }
});

socket.emit("/" + device_id, "003021");


}


doStuff();