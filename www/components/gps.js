function localiza() {
var onSuccess = function(position)
{
 alert('Latitude:'      + position.coords.latitude +'\n' +  
'Longitude:'            + position.coords.longitude +'\n' );
};
function onError(error) {
alert('code:' + error.code + '\n'+
'message:' + error.message + '\n');
}
navigator.geolocation.getCurrentPosition(onSuccess, onError);
};