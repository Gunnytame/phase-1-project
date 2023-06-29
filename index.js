let info
document.addEventListener('DOMContentLoaded',() => {
    console.log("hello")
    const categoryImage = {
        "food": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_387,q_65,w_1024/v1/clients/denver/SFN_meal_e145a0d1-07e6-4518-a916-41f6aa15d779.jpg",
        "entertainment": "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,f_avif,h_430,q_80,w_624/https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/cityparkjazz_F9EF3D9D-AA48-C9F6-C5226987D5CE9AE5_f9f7a051-d36b-32f7-d699571ee3126b53.jpg",
        "nature": "https://s3-media0.fl.yelpcdn.com/bphoto/1jpWXZXyqIvbecFc8TdObw/o.jpg"
    }    
    console.log(categoryImage.food)

    function removeChild(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild)
        }
    }

    const denverList = document.querySelector("#denver-list")

    fetch('http://localhost:3000/denver')
        .then (response => response.json())
        .then (data => {
            console.log(data)
        let category = ""
        const food = document.querySelector('#food')
        food.addEventListener("click", event => {
            console.log("hello")
            category = "food"
         removeChild(denverList)
            const filter = data.filter(denver =>{
            // console.log(denver.category===("entertainment"))
            return denver.category===(category)
        })
            console.log(filter)

            filter.forEach(denver => {
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
                console.log(filter)

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
            console.log(filter)

        filter.forEach(denver => {
            addToDenverList(denver)
            })
        })  
        // denverList(data[0])
    })

    function addToDenverList(denver){
            info = denver
            // const denverList = document.querySelector('#denver-list')
            const image = document.createElement('img')
            image.addEventListener('click',e => {
                console.log ('can you see image on nav bar')
                categoryInfo(denver)
            })
            image.src = denver.locImage
            denverList.append(image)
    }
// need to reference category...filter function to pull down only those locations

    function categoryInfo(denver){
        let image = document.querySelector('#category-image')
        let name = document.querySelector('#name')
        let category = document.querySelector('#category')
        let description = document.querySelector('#description')
        let locationImage = document.querySelector('#locImage')
        image.src = denver.image
        name.textContent = denver.name
        category.textContent = denver.category
        description.textContent = denver.description
        image.src = denver.locImage

        // const local = document.getElementById('#name');
        // local.addEventListener("mouseover", event => {
        //     event.target.style.color = "grey";
        //     setTimeout(() => {
        //         event.target.style.color = "";
        //     }, 500);
        // },false);
    }
        //     console.log('is my mouse doing anything')
        // });
        // function event (){
        //     document.getElementById("highlight").innerHTML += "Moused over!<br>";
        // }
})