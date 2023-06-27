<<<<<<< HEAD
document.addEventListener('DOMContenLoaded',() => {
    fetch('http://localhost:3000/denver')
        .then (response => response.json())
        .then (data => {
            console.log(data)
            data.forEach(denver => {
                addToDenverList(denver)
            });
        })

    function addToDenverList(denver){
            const denverList = document.querySelector('#denver-list')
            const image = document.createElement('img')
            image.addEventListener('click',e => {
                console.log ('can you see image on nav bar')
                categoryInfo(categories)
            })
            image.src = denver.image
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

        const local = document.getElementById('#name');
        local.addEventListener("mouseover", event => {
            event.target.style.color = "grey";
            setTimeout(() => {
                event.target.style.color = "";
            }, 500);
        },false);
    }
        //     console.log('is my mouse doing anything')
        // });
        // function event (){
        //     document.getElementById("highlight").innerHTML += "Moused over!<br>";
        // }
})
=======
goodbye
>>>>>>> sherinas
