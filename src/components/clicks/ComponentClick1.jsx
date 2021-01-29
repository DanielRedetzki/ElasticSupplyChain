function ComponentClick1() {
    
    let move=false;

    function clickHandler(){
        
        move = !move

        if (move===true) {
            document.querySelector("img").className = "App-Bike-Move-Forward";
            console.log(true)
        } else if(move===false){
            document.querySelector("img").className = "App-Bike-Move-Backward";
            console.log(false)
        }
    }
    
    
    return (
        <div class="item-1" onClick={clickHandler}>
            <img src="images/Component_1.JPG" className="App-logo-static" alt="logo" width="120px" height="120px" />
        </div>
    )
}

export default ComponentClick1