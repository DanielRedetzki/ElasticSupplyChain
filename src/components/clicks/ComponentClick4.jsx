function ComponentClick4() {
    
    let move=false;

    function clickHandler(){
        
        move = !move

        if (move===true) {
            document.querySelector('#Component1').className = "App-Bike-Move-Forward";
            document.querySelector('#Component2').className = "App-Bike-Move-Forward";
            document.querySelector('#Component3').className = "App-Bike-Move-Forward";
            document.querySelector('#Component5').className = "App-Bike-Move-Forward";
            document.querySelector('#Component6').className = "App-Bike-Move-Forward";
            console.log(true)
        } else if(move===false){
            document.querySelector('#Component1').className = "App-Bike-Move-Backward";
            document.querySelector('#Component2').className = "App-Bike-Move-Backward";
            document.querySelector('#Component3').className = "App-Bike-Move-Backward";
            document.querySelector('#Component5').className = "App-Bike-Move-Backward";
            document.querySelector('#Component6').className = "App-Bike-Move-Backward";
            console.log(false)
        }
    }
    
    
    return (
        <div className="item-4 component" onClick={clickHandler}>
            <img id="Component4" src="images/Component_4.JPG" className="App-logo-static" alt="logo" width="240px" height="120px"/>
        </div>
    )
}

export default ComponentClick4