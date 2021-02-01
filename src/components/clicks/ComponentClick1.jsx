function ComponentClick1() {
    
    let move=false;

    function clickHandler(clicked_id) { //clicked_id: der Werte des DIV auf das geklicked worden ist 

        move = !move

        const clickedPicture = clicked_id.target.id //clickedPictured -> clicked.target.id: id des img = "Component1"
            console.log(clicked_id.target.id)
            console.log(clicked_id)

        const componentPictures = document.querySelectorAll("img") //componentPictures: alle Daten der einzelnen img in ein Arry gepackt
            console.log(componentPictures)

        const tests = document.getElementsByClassName("component")
         
        //console.log(tests)

        for (const test of tests) {
            const childrenId = test.children
            console.log(childrenId)
            //test.children.classList.toggle("d-none")
            test.classList.toggle("item-2")
            test.classList.toggle("item-1")
            // test.classList.toggle("item-2")
            // test.classList.toggle("item-3")
            // test.classList.toggle("item-4")
            // test.classList.toggle("item-5")
            // test.classList.toggle("item-6")
            // test.classList.toggle("d-none")
         }   
         

        // const componentPictureCenters = document.querySelectorAll("component")
        // for (componentPictureCenter of componentPictureCenters) {
        //     console.log(componentPictureCenter)
        // }    
        
        if (move===true) {

            for(const componentPicture of componentPictures) { //Alle Teile des Arrays componentPictures durchlaufen und die id prüfen 
                console.log(componentPicture.id)

                
                        if (componentPicture.id !== clickedPicture) {
                            componentPicture.className = "App-Bike-Move-Forward";
                        } //else if (componentPicture.id === clickedPicture) {
                            //componentPicture.className = "d-none";
            }

            // document.querySelector('#Component2').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component3').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component4').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component5').className = "App-Bike-Move-Forward";
            // document.querySelector('#Component6').className = "App-Bike-Move-Forward";
            // console.log(move)
        } else if(move===false){

            for(const componentPicture of componentPictures) {
                //console.log(componentPicture.id)

                
                        if (componentPicture.id !== clickedPicture) {
                            componentPicture.className = "App-Bike-Move-Backward";
                        }
            }

            // document.querySelector('#Component2').className = "App-Bike-Move-Backward";
            // document.querySelector('#Component3').className = "App-Bike-Move-Backward";
            // document.querySelector('#Component4').className = "App-Bike-Move-Backward";
            // document.querySelector('#Component5').className = "App-Bike-Move-Backward";
            // document.querySelector('#Component6').className = "App-Bike-Move-Backward";
            // console.log(move)
        }
    }
    
    
    return (
        <div className="item-1 component" onClick={clickHandler}>
            <img id="Component1" src="images/Component_1.JPG" className="App-logo-static" alt="logo" width="120px" height="120px" />
        </div>
    )
}

export default ComponentClick1