import react from 'react'

function PictureClick2() {
    
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
        <div onClick={clickHandler}>
            <img src="images/White.JPG" className="App-logo-static2" alt="logo" width="100px" height="50px"/>
        </div>
    )
}

export default PictureClick2