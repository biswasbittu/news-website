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

    // All news swing in card........
    
    
    const newsContainer=document.getElementById('all-news');
    newsContainer.innerHTML="";

    data.forEach(singleNews=>{
        // console.log(singleNews);
        // console.log(singleNews.thumbnail_url);
        // console.log(singleNews.title);
        // console.log(singleNews.details);
        // console.log(singleNews.author);
        // console.log(singleNews.author.img);
        // console.log(singleNews.author.name);
        // console.log(singleNews.total_view);
        // console.log(singleNews.rating.number );
        
        const card=document.createElement('div');
        card.classList.add("card","mb-3");
        card.innerHTML=`<div class="row g-0">
        <div class="col-md-4">
          <img src="${singleNews.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${singleNews.title}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>`;

      newsContainer.appendChild(card);


    })

}