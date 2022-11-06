const APIkey='CA933T4DbfU1FBQpO30vnMXezC3aVvYZ'
const searchBar= document.querySelector('#searchbar')
const body= document.querySelector('body')
const searchButton=document.querySelector('#search')
const removeButton=document.querySelector('#delete')

searchButton.addEventListener('click',function(e){
    e.preventDefault();
    getGIF()
    searchBar.value=''
})

removeButton.addEventListener('click',function(e){
    e.preventDefault();
    const images=document.querySelector('img');
    images.remove();
})


async function getGIF(){
    const res= await axios.get('http://api.giphy.com/v1/gifs/search',{params: {api_key:APIkey,q:searchBar.value}})
    let url=res.data.data[Math.floor((Math.random()*49))].images.fixed_height.url;
    const newIMG= document.createElement('img');
    newIMG.src=url;
    document.body.append(newIMG)
}


