const loadNewsCatagorisData = async () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCatagories(data.data))



    const showCatagories = data => {
        console.log(data)

        const newsCatagorisContainer = document.getElementById('news-catagoris-container');
        data.news_category.forEach(singleCatagories => {
            // console.log(singleCatagories.category_name);
            newsCatagorisContainer.innerHTML += `<a class="nav-link" href="#">${singleCatagories.category_name}</a>`

        })
    }




}




