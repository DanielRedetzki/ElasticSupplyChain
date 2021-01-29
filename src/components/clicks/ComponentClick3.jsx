function ComponentClick3() {
    
    let move=false;

    function clickHandler(){
        
        move = !move

        if (move===true) {
            document.querySelector('#Component1').className = "App-Bike-Move-Forward";
            document.querySelector('#Component2').className = "App-Bike-Move-Forward";
            document.querySelector('#Component4').className = "App-Bike-Move-Forward";
            document.querySelector('#Component5').className = "App-Bike-Move-Forward";
            document.querySelector('#Component6').className = "App-Bike-Move-Forward";
            console.log(true)
        } else if(move===false){
            document.querySelector('#Component1').className = "App-Bike-Move-Backward";
            document.querySelector('#Component2').className = "App-Bike-Move-Backward";
            document.querySelector('#Component4').className = "App-Bike-Move-Backward";
            document.querySelector('#Component5').className = "App-Bike-Move-Backward";
            document.querySelector('#Component6').className = "App-Bike-Move-Backward";
            console.log(false)
        }
    }
    
    
    return (
        <div className="item-3" onClick={clickHandler}>
            <img id="Component3" src="images/Component_3.JPG" className="App-logo-static" alt="logo" width="120px" height="300px"/>
        </div>
    )
}

export default ComponentClick3