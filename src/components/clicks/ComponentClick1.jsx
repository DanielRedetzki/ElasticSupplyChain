function ComponentClick1() {
    
    let move=false;

    function clickHandler(){
        
        move = !move

        if (move===true) {
            document.querySelector('#Component2').className = "App-Bike-Move-Forward";
            document.querySelector('#Component3').className = "App-Bike-Move-Forward";
            document.querySelector('#Component4').className = "App-Bike-Move-Forward";
            document.querySelector('#Component5').className = "App-Bike-Move-Forward";
            document.querySelector('#Component6').className = "App-Bike-Move-Forward";
            console.log(true)
        } else if(move===false){
            document.querySelector('#Component2').className = "App-Bike-Move-Backward";
            document.querySelector('#Component3').className = "App-Bike-Move-Backward";
            document.querySelector('#Component4').className = "App-Bike-Move-Backward";
            document.querySelector('#Component5').className = "App-Bike-Move-Backward";
            document.querySelector('#Component6').className = "App-Bike-Move-Backward";
            console.log(false)
        }
    }
    
    
    return (
        <div className="item-1" onClick={clickHandler}>
            <img id="Component1" src="images/Component_1.JPG" className="App-logo-static" alt="logo" width="120px" height="120px" />
        </div>
    )
}

export default ComponentClick1