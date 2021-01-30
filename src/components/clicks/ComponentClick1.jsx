function ComponentClick1() {
    
    let move=false;

    function clickHandler(clicked_id) {

        move = !move

        if (move===true) {

            const clickedPicture = clicked_id.target.id
            //console.log(clicked_id.target.id)

            const componentPictures = document.querySelectorAll("img")
            //console.log(componentPictures)

            for(const componentPicture of componentPictures) {
                //console.log(componentPicture.id)

                
                        if (componentPicture.id !== clickedPicture) {
                            componentPicture.className = "App-Bike-Move-Forward";
                        } else if (componentPicture.id === clickedPicture) {
                            componentPicture.className = "App-logo-static";
                        } 

            }

            // document.querySelector('#Component2').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component3').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component4').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component5').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component6').className = "App-Bike-Move-Forward";
            // console.log(move)
        } else if(move===false){
            document.querySelector('#Component2').className = "App-Bike-Move-Backward";
            document.querySelector('#Component3').className = "App-Bike-Move-Backward";
            document.querySelector('#Component4').className = "App-Bike-Move-Backward";
            document.querySelector('#Component5').className = "App-Bike-Move-Backward";
            document.querySelector('#Component6').className = "App-Bike-Move-Backward";
            console.log(move)
        }
    }
    
    
    return (
        <div id="1" className="item-1" onClick={clickHandler}>
            <img id="Component1" src="images/Component_1.JPG" className="App-logo-static" alt="logo" width="120px" height="120px" />
        </div>
    )
}

export default ComponentClick1