const loadNewsCatagorisData = async () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCatagories(data.data))
}

const showCatagories = data => {
    // console.log(data)
    // console.log(data)
    const catagoriesContainer = document.getElementById('news-catagoris-container');
    data.news_category.forEach(singleCatagories => {
        // console.log(singleCatagories);
        let linkContainer = document.createElement('p');
        linkContainer.innerHTML = `<a class="nav-link fw-bold" href="#" onclick="fatchCatago('${singleCatagories.category_id}','${singleCatagories.category_name}')">${singleCatagories.category_name}</a>`;
        catagoriesContainer.appendChild(linkContainer);

    })
}



// fatch all news ablable..........
const fatchCatago = (category_id,category_name) => {
    
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url).then(res => res.json()).then(data => {
        showAllNews(data.data,category_name)
    })
}

const showAllNews=(data,category_name)=>{
    // console.log(data);
    document.getElementById('news-count').innerText=`${data.length}`
    document.getElementById('catagory-name').innerText=`${category_name}`

}