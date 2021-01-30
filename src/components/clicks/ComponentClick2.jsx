function ComponentClick2() {
    
    let move=false;

    function clickHandler(clicked_id){
        
        move = !move

        if (move===true) {

            console.log(clicked_id.target.id)

            document.querySelector('#Component1').className = "App-Bike-Move-Forward";
            document.querySelector('#Component3').className = "App-Bike-Move-Forward";
            document.querySelector('#Component4').className = "App-Bike-Move-Forward";
            document.querySelector('#Component5').className = "App-Bike-Move-Forward";
            document.querySelector('#Component6').className = "App-Bike-Move-Forward";
            console.log(true)
        } else if(move===false){
            document.querySelector('#Component1').className = "App-Bike-Move-Backward";
            document.querySelector('#Component3').className = "App-Bike-Move-Backward";
            document.querySelector('#Component4').className = "App-Bike-Move-Backward";
            document.querySelector('#Component5').className = "App-Bike-Move-Backward";
            document.querySelector('#Component6').className = "App-Bike-Move-Backward";
            console.log(false)
        }
    }
    
    
    return (
        <div className="item-2" onClick={clickHandler}>
            <img id="Component2" src="images/Component_2.JPG" className="App-logo-static" alt="logo" width="360px" height="240px"/>
        </div>
    )
}

export default ComponentClick2