const mainBox = document.getElementsByClassName('container')[0];
const buttons = document.getElementsByClassName('buttons')[0];
let karde = false;

async function fetchData(start, end){
    const fetched = await fetch('https://jsonplaceholder.typicode.com/posts') 
    const data = await fetched.json();
    console.log(document.getElementsByClassName('items'));
    // let end = start+10; 
    if(karde){
        const items = document.getElementsByClassName('items');
        for(let i = 0 ; i < 10 ; i++){
            // console.log(items[0]);
            items[0].remove();
        }
    }
    for(start ; start < end ; start++){
        const item = document.createElement('div');
        const title = document.createElement('p');
        const details = document.createElement('p');

        item.setAttribute('class','items');

        title.innerHTML = data[start].title ;
        details.innerHTML = data[start].body ;
        // item.innerHTML = data[start].id ;

        item.appendChild(title);        
        item.appendChild(details);       
        mainBox.appendChild(item); 
    }
    if(start === 90){
        start = 0;
    }
    karde = false;
}
fetchData(0,10);

for(let i = 0 ; i < 10 ; i++){
    const item = document.createElement('button');
    item.setAttribute('class' , 'slides');
    item.innerHTML = i+1;
    buttons.appendChild(item);
}

const slides = document.getElementsByClassName('slides');
// console.log(slides[1]);
for(let i = 0 ; i < 10 ; i++){
    slides[i].addEventListener('click', () => {
        karde = true;
        fetchData(i*10 , i*10 + 10);
    })
}







// const createPage = (start,end) => {
//     for(let i = start ; i < end ; i++){
//         const item = document.createElement('div');
//         item.innerHTML = i ;
//         mainBox.appendChild(item);
//     }
// }

// createPage(0,10);