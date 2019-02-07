// Mengakses Nilai Dalam Array

function balikString(str){
    var balik = " ";
      for(var i=str.length-1 ; i>=0 ; i--){
          balik += str[i];
      }
      return balik;
  }
  
console.log(balikString("hello world!"));