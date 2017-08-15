
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');
var nCount = 0;


var arrdup = [];

// console.log("sfdf "+cc)
// console.log("sfdf "+cc)
// console.log("sfdf "+cc)
// console.log("sfdf "+cc)
get_time_int = function (uuid_str) {
        var uuid_arr = uuid_str.split( '-' ),
            time_str = [
                uuid_arr[ 2 ].substring( 1 ),
                uuid_arr[ 1 ],
                uuid_arr[ 0 ]
            ].join( '' );
        return parseInt( time_str, 16 );
    };

get_date_obj = function (uuid_str) {
        var int_time = this.get_time_int( uuid_str ) - 122192928000000000,
            int_millisec = Math.floor( int_time / 10000 );
        return new Date( int_millisec );
    };

for(var i =0;i<10000;i++){
  var option = {
    node: [0x01, 0x11, 0x75, 0x67, 0x89, 0x9b],
    clockseq: 0x1111,
    msecs: new Date().getTime(),
    nsecs: nCount 
  } ;

  arrdup.push(uuidv1(option));
  if(nCount == 9999){
    nCount = 0
  }else{
    nCount++;
  }
  var date_obj = get_date_obj(  arrdup[i] );
  console.log(date_obj.toLocaleString()+" uuidv1 "+arrdup[i])
}

for(var i =0;i<arrdup.length;i++){
  var cc = arrdup[i];
  for(var x = 0;x<arrdup.length;x++){
      if(cc === arrdup[x] && i != x){
        console.log("sfdf "+cc)
        break;
      }
  }
}

