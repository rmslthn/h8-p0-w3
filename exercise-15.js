// Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
    animals.sort();
    var result=[];
    var same=[];
    var firstAlpa=animals[0][0];
    for(var animal of animals){
      if(animal[0]===firstAlpa){
        same.push(animal);
      } else { //Change to a different letter immediately
        result.push(same);
        same=[];
        firstAlpa=animal[0];
        same.push(animal);
      }
    }
    result.push(same)
    return result;
  }
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  //[['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda']]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [['anoa', 'ayam'],['cacing','cicak'],['kancil', 'kuda'],['unta']]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'macan', 'beruang', 'zebra', 'tupai', 'capung', 'kupu-kupu'])); 
  //[['anoa','ayam'],['beruang'],['cacing','capung'],['kancil','kuda','kupu-kupu'],['macan'],['tupai'],['zebra']];