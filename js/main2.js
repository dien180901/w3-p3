let newsList=[];
let count=1;
const callApi=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542`
    let data=await fetch(url)
    let result = await data.json()
    newsList=result.articles
   
    render(newsList);
}
const render=(list)=>{

   console.log(list);
    let newsHTML=list.map(item=>{
        return `<div class="card card1" style="width: 18rem;">
        <img src="${item.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="${item.url}"><h5 class="card-title">${item.title}</h5></a>
          <p class="card-text">${item.description}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${moment(item.publishedAt).fromNow()}</li>
          <li class="list-group-item">${item.source.name}</li>
          <li class="list-group-item">${item.author}</li>
        </ul>
       
      </div>`;
    }).join("");
    console.log(newsHTML);

    document.getElementById("newsListArea").innerHTML=newsHTML;
}
const more=async()=>{
    count++;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&pageSize=18&page=${count}`
//    url += `&q=${input}`
   
   
    let data=await fetch(url)
    let result = await data.json()
    
    let a=result.articles;
    for (let i=0;i<a.length;i++){
        newsList.push(a[i]);
    }
    
    render(newsList);
}
let searchList;
const search=async()=>
{
    let a=document.getElementById("input");
    let input=a.value;
    console.log(input);
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const sportClick=async()=>
{
    let input=`business`;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&category=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const politicalClick=async()=>
{
    let input=`entertainment`;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&category=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const educationClick=async()=>
{
    let input=`general`;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&category=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const internetClick=async()=>
{
    let input=`health`;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&category=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const financeClick=async()=>
{
    let input=`science`;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&category=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const covidClick=async()=>
{
    let input=`sports`;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&category=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const currencyClick=async()=>
{
    let input=`technology`;
    let url=`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c4baf4822ae842e2b726b8cb0b587542&category=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
callApi();
