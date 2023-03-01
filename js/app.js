const loadNewsCatagorisData = async () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCatagories(data.data))
}

const showCatagories = data => {
    // console.log(data)

    const newsCatagorisContainer = document.getElementById('news-catagoris-container');
    data.news_category.forEach(singleCatagories => {
        // console.log(singleCatagories.category_name);
        newsCatagorisContainer.innerHTML += `<a class="nav-link" href="#" onclick="fetchCatagoryNews('${singleCatagories.category_id},'${singleCatagories.category_name}')">
        ${singleCatagories.category_name}</a>`

    })
}

const fetchCatagoryNews =async (category_id,category_name) => {
    //   console.log(category_id);
    const url =  `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(await  (url))
    .then(await (res => res.json()))
    .then(data=>{
        showAllNews(data,category_name);

    })

}

const showAllNews=(data,category_name)=>{
    console.log(data,category_name)
}



