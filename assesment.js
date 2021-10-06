function averagePair(arr,hasil){
	let kiri=0
	let kanan = arr.length-1
  
  while (kiri < kanan ){
  	if(arr[kiri] + arr[kanan]/2===hasil){
    return true
    }
    else if (arr[kiri] + arr[kanan]/2>hasil){
    kanan--
    }
  	else if(arr[kiri] + arr[kanan]/2<hasil){
    kiri++
    }
  }
  return false
}

console.log(averagePair([-1,0,3,4,5,6],4.1))
