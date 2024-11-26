const Container = document.getElementById('container');
const displayArea = document.getElementById('display');

//addEventlistener allows me to specify an event like click
Container.addEventListener('click' , e =>{
    if(e.target.nodeName = "BUTTON"){
        switch(e.target.textContent){
            case "C":
              clear();
              break;
            case "DEL":
                deleteOneValue();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);          
        }
    }
})

//this function erases all the numbers
function clear() {
    displayArea.textContent = "";
}

//this function adds value
function addToDisplayArea(value) {
    displayArea.textContent += value;
}

//this function deletes just one number
function deleteOneValue(){
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(0 , currentContent.length - 1);
}

//this function evaluates the operations
function evaluate(){
    try {
        let calculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculation
    }
    catch (error){
       displayArea.textContent = 'Invalid Operation'
       console.error(error);
    }

    
}