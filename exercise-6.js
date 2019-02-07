// Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
    for(var i=num; i<num*2; i++){
      var next = i+1;
      var reverse= String(next).split("").reverse().join("");
      if(Number(reverse) === next){
        return next;
      }
    }
  }
  
  //TEST CASE
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
