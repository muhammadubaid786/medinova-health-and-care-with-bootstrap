function increase(){
    let num = parseInt(document.querySelector('#txt').value);
    num++;
    document.querySelector('#txt').value = num;
}
function decrease(){
    let num = parseInt(document.querySelector('#txt').value);
    num--;
    if (num<0){
        return
    }

    document.querySelector('#txt').value = num;
}


function replace(){
   let img = document.querySelector('#image')
   img.setAttribute('src', './assests/image 13.png')
}
function place(){
    let img = document.querySelector('#image')
    img.setAttribute('src', './assests/image 12.jpeg')
 }



 function replace1(){
    let imag = document.querySelector('#imag')
    imag.setAttribute('src', './assests/image 13.png')
 }
 function place2(){
     let imag = document.querySelector('#imag')
     imag.setAttribute('src', './assests/image 12.jpeg')
  }




  function replace3(){
    let iage = document.querySelector('#iage')
    iage.setAttribute('src', './assests/image 13.png')
 }
 function place4(){
     let iage = document.querySelector('#iage')
     iage.setAttribute('src', './assests/image 12.jpeg')
  }




  function replace5(){
   let imge = document.querySelector('#imge')
   imge.setAttribute('src', './assests/image 13.png')
}
function place6(){
    let imge = document.querySelector('#imge')
    imge.setAttribute('src', './assests/image 12.jpeg')
 }