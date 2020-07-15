let newsList=[];
let count=1;
const callApi=async()=>{
    let url=`https://newsapi.org/v2/everything?q=apple&from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542`
    let data=await fetch(url)
    let result = await data.json()
    newsList=result.articles
   
    render(newsList);
}
const render=(list)=>{

    let i=new Date();
    let newsHTML=list.map(item=>{
        return `<div class="card card1" style="width: 18rem;">
        <img src="${item.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="${item.url}"><h5 class="card-title">${item.title}</h5></a>
          <p class="card-text">${item.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${Math.round((i-new Date(item.publishedAt))/3600/24/24)}days ago</li>
          <li class="list-group-item">${item.source.name}</li>
          <li class="list-group-item">${item.author}</li>
        </ul>
       
      </div>`;
    }).join("");
    document.getElementById("newsListArea").innerHTML=newsHTML;
}
const more=async()=>{
    count++;
    let url=`https://newsapi.org/v2/everything?q=apple&from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&pageSize=18&page=${count}`
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
    let input=document.getElementById("input").value;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const sportClick=async()=>
{
    let input=`sport`;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const politicalClick=async()=>
{
    let input=`political`;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const educationClick=async()=>
{
    let input=`education`;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const internetClick=async()=>
{
    let input=`internet`;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const financeClick=async()=>
{
    let input=`finance`;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const covidClick=async()=>
{
    let input=`covid`;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
const currencyClick=async()=>
{
    let input=`currency`;
    let url=`https://newsapi.org/v2/everything?from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=c4baf4822ae842e2b726b8cb0b587542&q=${input}`
    
    let data=await fetch(url)
    let result = await data.json()
    searchList=result.articles;
     render(searchList);
}
callApi();
