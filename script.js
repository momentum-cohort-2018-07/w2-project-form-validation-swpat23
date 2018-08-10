console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
      event.preventDefault()

//look to see if name is empty or not

var inputName = document.getElementById('name').value.trim();

    if (inputName == '') {

           var noName = document.getElementById('name-field');
               noName.classList.add('input-invalid');
            
             
               var noNameErr = document.getElementById('name-field');
               var errMsg = document.createElement('div');
               errMsg.classList.add ("newDivClass1")
               noNameErr.appendChild(errMsg);
               var msg = document.querySelector ('.newDivClass1');
               msg.innerText = ('You must enter your name!!')
    }
    
        //   else (inputName !== '') {
            else {
                 var noName = document.getElementById('name-field');
                 noName.classList.add('input-valid');
     
      
                //  var clearNoNameErr = document.getElementById('newDivClass1');
                 var clearMsg = document.querySelector ('.newDivClass1');
                 clearMsg.innerText = ('')

                 
                


    }
    
           

            
var carYear = document.getElementById('car-year').value.trim()

    if (carYear == '') {                     
   
        
            var noYearErr = document.getElementById('car-field');
               var errMsgCar = document.createElement('div');
               errMsgCar.classList.add ("newDivClass2")
               noYearErr.appendChild(errMsgCar);
               var msg = document.querySelector ('.newDivClass2');
               msg.innerText = ('You must enter your Car Year!!')
    }        
        else {document.getElementsByClassName('newDivClass2').innerText=''

        }  
   

    var carMake = document.getElementById('car-make').value.trim()

    if (carMake == '') {                     
   
        
            var noMakeErr = document.getElementById('car-field');
               var errMsgCar = document.createElement('div');
               errMsgCar.classList.add ("newDivClass3")
               noMakeErr.appendChild(errMsgCar);
               var msg = document.querySelector ('.newDivClass3');
               msg.innerText = ('You must enter your Car Make!!')
    }       


    var carModel = document.getElementById('car-model').value.trim()

    if (carModel == '') {                     
   
        
            var noModelErr = document.getElementById('car-field');
               var errMsgCar = document.createElement('div');
               errMsgCar.classList.add ("newDivClass4")
               noModelErr.appendChild(errMsgCar);
               var msg = document.querySelector ('.newDivClass4');
               msg.innerText = ('You must enter the Car Model!!')
    }       








//    var parkingDate = document.getElementById('start-date-field').value.trim()

//    cosole.log('good job steve');

    //   if   (parkingDate == '') {
    

        //    var noDate = document.getElementById('start-date-field');
            //    noDate.classList.add('input-invalid');
            
    // }

             
            //    var noNameErr = document.getElementById('name-field');
            //    var errMsg = document.createElement('div');
            //    errMsg.classList.add ("newDivClass")
            //    noNameErr.appendChild(errMsg);
            //    var msg = document.querySelector ('.newDivClass');
            //    msg.innerText = ('You must enter your name!!');
   
   
   
    
            //    console.log('good job');



    


    
//insert 'input-invalid' to DOM
        //class input-field

//inputName.addEventListener("")

    })