console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
      event.preventDefault()

//look to see if name is empty or not

var inputName = document.getElementById('name').value.trim();

    if (inputName === '') {
            var noName = document.getElementById('name-field');
            noName.classList.add('input-invalid');
             
            var noNameErr = document.getElementById('name-field');
            var errMsg = document.createElement('div');
            errMsg.classList.add ("newDivClass1")
            noNameErr.appendChild(errMsg);
            var msg = document.querySelector ('.newDivClass1');
            msg.innerText = ('You must enter your name!!')
}
    
              else {
                     var noName = document.getElementById('name-field');
                     noName.classList.add('input-valid');
     
                     var noNameErr = document.getElementById('name-field');
                     var errMsg = document.createElement('div');
                     errMsg.classList.add ("newDivClass1")
                     noNameErr.appendChild(errMsg);
                     var msg = document.querySelector ('.newDivClass1');
                    msg.innerText = ('')
}
          
            
var carYear = document.getElementById('car-year').value.trim();

    if (carYear === '') {                   
            var noYearErr = document.getElementById('car-field');
            var errMsgCar = document.createElement('div');
            errMsgCar.classList.add ("newDivClass2")
            noYearErr.appendChild(errMsgCar);
            var msg = document.querySelector ('.newDivClass2');
            msg.innerText = ('You must enter your Car Year!!')
}              

                else {
                    var noYearErr = document.getElementById('car-field');
                    var errMsg = document.createElement('div');
                    errMsg.classList.add ("newDivClass2")
                    noYearErr.appendChild(errMsg);
                    var msg = document.querySelector ('.newDivClass2');
                    msg.innerText = ('')
}      
   

    var carMake = document.getElementById('car-make').value.trim()

    if (carMake === '') {                   
            var noMakeErr = document.getElementById('car-field');
               var errMsgCar = document.createElement('div');
               errMsgCar.classList.add ("newDivClass3")
               noMakeErr.appendChild(errMsgCar);
               var msg = document.querySelector ('.newDivClass3');
               msg.innerText = ('You must enter your Car Make!!')
    }       
                else {
                    var noYearErr = document.getElementById('car-field');
                    var errMsg = document.createElement('div');
                    errMsg.classList.add ("newDivClass3")
                    noYearErr.appendChild(errMsg);
                    var msg = document.querySelector ('.newDivClass3');
                    msg.innerText = ('')
            }      


    var carModel = document.getElementById('car-model').value.trim()

    if (carModel === '') {                     
            var noModelErr = document.getElementById('car-field');
               var errMsgCar = document.createElement('div');
               errMsgCar.classList.add ("newDivClass4")
               noModelErr.appendChild(errMsgCar);
               var msg = document.querySelector ('.newDivClass4');
               msg.innerText = ('You must enter the Car Model!!')
    }       
                else {        
                    var noModelErr = document.getElementById('car-field');
                    var errMsg = document.createElement('div');
                    errMsg.classList.add ("newDivClass4")
                    noModelErr.appendChild(errMsg);
                    var msg = document.querySelector ('.newDivClass4');
                    msg.innerText = ('')
}      

    var inputDate = document.getElementById('start-date').value;

    if (inputDate === '') {
        var dateField = document.getElementById('start-date-field');
        dateField.classList.add('input-invalid');
    
        var noDateErr = document.getElementById('start-date-field');
        var errMsg = document.createElement('div');
        errMsg.classList.add ("newDivClass5")
        noDateErr.appendChild(errMsg);
        var msg = document.querySelector ('.newDivClass5');
        msg.innerText = ('You must enter a Start Date!!')
    }

            else {
                var inputDate = document.getElementById('start-date').value;
                var dateField = document.getElementById('start-date-field');
                dateField.classList.add('input-valid');

                var noDateErr = document.getElementById('start-date-field');
                var errMsg = document.createElement('div');
                errMsg.classList.add ("newDivClass5")
                noDateErr.appendChild(errMsg);
                var msg = document.querySelector ('.newDivClass5');
                msg.innerText = ('')
}


var inputDays = document.getElementById('days').value;

    if (inputDays === '') {
        var dayField = document.getElementById('days-field');
        dayField.classList.add('input-invalid');
    
        
        var noDayErr = document.getElementById('days-field');
        var errMsg = document.createElement('div');
        errMsg.classList.add ("newDivClass6")
        noDayErr.appendChild(errMsg);
        var msg = document.querySelector ('.newDivClass6');
        msg.innerText = ('You must enter Number of Days!!')
    }

            else {
                var dayField = document.getElementById('days-field');
                dayField.classList.add('input-valid');

                var noDayErr = document.getElementById('days-field');
                var errMsg = document.createElement('div');
                errMsg.classList.add ("newDivClass6")
                noDayErr.appendChild(errMsg);
                var msg = document.querySelector ('.newDivClass6');
                msg.innerText = ('')
}

var inputCard = document.getElementById('credit-card').value;

    if (inputCard === '') {
        var dayField = document.getElementById('credit-card-field');
        dayField.classList.add('input-invalid');
    
        
        var noCardErr = document.getElementById('credit-card-field');
        var errMsg = document.createElement('div');
        errMsg.classList.add ("newDivClass7")
        noCardErr.appendChild(errMsg);
        var msg = document.querySelector ('.newDivClass7');
        msg.innerText = ('You must enter a Credit Card Number!!')
    }

            else {
                var dayField = document.getElementById('credit-card-field');
                dayField.classList.add('input-valid');

                var noCardErr = document.getElementById('credit-card-field');
                var errMsg = document.createElement('div');
                errMsg.classList.add ("newDivClass7")
                noCardErr.appendChild(errMsg);
                var msg = document.querySelector ('.newDivClass7');
                msg.innerText = ('')
}


var inputCvv = document.getElementById('cvv').value;

    if (inputCvv === '') {
        var cvvField = document.getElementById('cvv-field');
        cvvField.classList.add('input-invalid');
        
        var noCvvErr = document.getElementById('cvv-field');
        var errMsg = document.createElement('div');
        errMsg.classList.add ("newDivClass8")
        noCvvErr.appendChild(errMsg);
        var msg = document.querySelector ('.newDivClass8');
        msg.innerText = ('You must enter the CVV!!')
    }

            else {
                var cvvField = document.getElementById('cvv-field');
                cvvField.classList.add('input-valid');

                var noCvvErr = document.getElementById('cvv-field');
                var errMsg = document.createElement('div');
                errMsg.classList.add ("newDivClass8")
                noCvvErr.appendChild(errMsg);
                var msg = document.querySelector ('.newDivClass8');
                msg.innerText = ('')
}


var inputExpiration = document.getElementById('expiration').value;

    if (inputExpiration === '') {
        var ExpirationField = document.getElementById('expiration-field');
        ExpirationField.classList.add('input-invalid');
        
        var noExpErr = document.getElementById('expiration-field');
        var errMsg = document.createElement('div');
        errMsg.classList.add ("newDivClass9")
        noExpErr.appendChild(errMsg);
        var msg = document.querySelector ('.newDivClass9');
        msg.innerText = ('You must enter an Expiration Date!!')
    }

            else {
                var ExpirationField = document.getElementById('expiration-field');
                ExpirationField.classList.add('input-valid');

                var noExpErr = document.getElementById('expiration-field');
                var errMsg = document.createElement('div');
                errMsg.classList.add ("newDivClass9")
                noExpErr.appendChild(errMsg);
                var msg = document.querySelector ('.newDivClass9');
                msg.innerText = ('')
}


    })