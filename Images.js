let input=document.getElementById("input")
let search=document.getElementById("search")
let loadmore=document.getElementById("btn")
let image=document.getElementById("images")
let page=1;
search.addEventListener("click",()=>{page=1
    fetching()
})

async function fetching(){
    url=`https://api.unsplash.com/search/photos?page=${page}&query=${input.value}&client_id=HU33ZZxgdumBx6cuWDAthFCIxm7bCTZzmZpwt68fe98&per_page=12`
if(page===1){
    image.innerHTML=""
}
    try{
        let response=await fetch(url)
        if(!response.ok){
            console.log("fetching Error")
        }
        else{
            let jsonextract= await response.json()
            console.log(jsonextract)
            
            let x=jsonextract.results;
            x.map((y)=>{
                let createdimg=document.createElement("img")
                createdimg.src=y.urls.small;
                createdimg.id="showImage";
                image.appendChild(createdimg)
                let link=document.createElement("a")
                link.href=y.links.html;
                link.target="_blank";
                link.appendChild(createdimg)
                image.appendChild(link);
            })
            
        }
        loadmore.style.display="block"        
       
     }
    catch(error){
        console.error(error)
    }
    
}
loadmore.addEventListener("click",()=>{
    page++;
    fetching()
})

