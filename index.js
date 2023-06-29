let info
let denverList = document.querySelector("#denver-list")
document.addEventListener('DOMContentLoaded',() => {
    // console.log("hello")
    const categoryImage = {
        "food": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_387,q_65,w_1024/v1/clients/denver/SFN_meal_e145a0d1-07e6-4518-a916-41f6aa15d779.jpg",
        "entertainment": "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,f_avif,h_430,q_80,w_624/https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/cityparkjazz_F9EF3D9D-AA48-C9F6-C5226987D5CE9AE5_f9f7a051-d36b-32f7-d699571ee3126b53.jpg",
        "nature": "https://s3-media0.fl.yelpcdn.com/bphoto/1jpWXZXyqIvbecFc8TdObw/o.jpg"
    }    
    // console.log(categoryImage.food)

    function removeChild(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild)
        }
    }

    fetch('http://localhost:3000/denver')
        .then (response => response.json())
        .then (data => {
            // console.log(`this is first data set from .then`, data)
        let category = ""
        const food = document.querySelector('#food')
        food.addEventListener("click", event => {
            console.log(` this is from food event listener`, "hello")
            category = "food"
        removeChild(denverList)
            const filter = data.filter(denver =>{
            // console.log(denver.category===("entertainment"))
            return denver.category===(category)
        })
            console.log(`this is food  filter`, filter)

            filter.forEach(denver => {
                // console.log(`this is from foreach for food`, denver)
                addToDenverList(denver)
            })
             // denverList(data[0])
        })
        const entertainment = document.querySelector('#entertainment')
            entertainment.addEventListener("click", event => {
                 // console.log("hello")
                category = "entertainment"
             removeChild(denverList)
                const filter = data.filter(denver =>{
                // console.log(denver.category===("entertainment"))
                return denver.category===(category)
            })
                console.log(`this is the entertainment filter`, filter)

            filter.forEach(denver => {
                addToDenverList(denver)
            })
            // denverList(data[0])
        })
        const nature = document.querySelector('#nature')
        nature.addEventListener("click", event => {
            // console.log("hello")
            category = "nature"
         removeChild(denverList)
            const filter = data.filter(denver =>{
            // console.log(denver.category===("entertainment"))
            return denver.category===(category)
        })
            console.log(`this is nature filter`, filter)

        filter.forEach(denver => {
            addToDenverList(denver)
            })
        })  
        // denverList(data[0])
    })

    function addToDenverList(denver){
        console.log ('add to denver list function is being called ')
            info = denver
            let image = document.createElement('img')
            image.classList.add('noColor')
            image.addEventListener('click',(e)=> {
                categoryInfo(denver)
            })
            image.addEventListener('mouseover', e => {
                // console.log(`she werked`)
                changeBorderColor(image)
            })
            image.addEventListener('mouseout', e => {
                // console.log (`he's doing it`)
                changeBack(image)
            })
            image.src = denver.locImage
            console.log(`this is the image`, image) 
            console.log(`denverList`, denverList)
            denverList.appendChild(image)
    }

    function changeBorderColor(image) {
        image.classList.remove(`noColor`)
        image.classList.add('Color')
    }
    function changeBack(image){
        image.classList.remove('Color')
        image.classList.add(`noColor`)
    }

// need to reference category...filter function to pull down only those locations

    function categoryInfo(denver){
        console.log(`categoryInfo is being called`)
        console.log(`this is being passed to catinfofunction`, denver)
        // let image = document.querySelector('#category-image')
        let name = document.querySelector('#h2name')
        let category = document.querySelector('.category')
        let description = document.querySelector('#description')
        let locationImage = document.querySelector('#locImage')
        // image.src = denver.image
        name.textContent = denver.name
        category.textContent = denver.category
        description.textContent = denver.description
        // image.src = denver.locImage

    // let local = document.getElementById('#name');
    //     local.addEventListener("mouseover", event => {
    //         event.target.style.color = "goldenrod";
    //         setTimeout(() => {
    //             event.target.style.color = "";
    //         }, 500);
    //     },false);
    // }
    //     console.log('is my mouse doing anything')
        
    //     function event (){
    //         document.getElementById("highlight").innerHTML += "Moused over!<br>";
        }
})