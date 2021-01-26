import react from 'react'

function PictureClick() {
    
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
            <img src="images/Bike1.JPG" className="App-logo-static" alt="logo" />
        </div>
    )
}

export default PictureClick