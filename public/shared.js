var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var nav__items = document.querySelector('.mobile-nav__items');

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');

  backdrop.style.display = 'block';
  setTimeout(function() {
    backdrop.classList.add('open');
  }, 10)

})

backdrop.addEventListener("click", function() {
  //mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal()
});


nav__items.addEventListener("click", function() {
  mobileNav.classList.remove('open');
  closeModal()
})

function closeModal() {

  // if(modal) {
  //   modal.classList.remove('open');
  // }
  backdrop.style.display = 'none';
  setTimeout(function() {
    backdrop.classList.remove('open');
  }, 10)
}


const galleryItems = [
  {
      id: 1,
      title: 'Nelson Mandela',
      imageId:'1dTeUJqYDCQgSDFrYZf6sVZj1lXNDnu3M',
      
  },
  {
      id: 2,
      title: 'Volleyball Player 1',
      imageId:'17QhaCTkJ1jhDLWeg9Q2Nv4cgcxRVe0qP',
  },
  {
      id: 3,
      title: 'Volleyball Player 2',
      imageId:'1LPyoH4aHUw_4ZDfZ8uzWu7nIBRz0Cvu5',
  },
  {
      id: 4,
      title: 'Xmas man',
      imageId:'1vxr_XN63ngqLQ2w3NvVyEyJ4auerXDSO',
  },
  {
      id: 5,
      title: 'Birthday card 1',
      imageId:'1ubQXw4SNyAYAt4CDu6m334vnFOnDXY1u',
  },
  {
    id: 6,
    title: 'Nelson Mandela',
    imageId:'1dTeUJqYDCQgSDFrYZf6sVZj1lXNDnu3M',
    
},
{
    id: 7,
    title: 'Volleyball Player 1',
    imageId:'17QhaCTkJ1jhDLWeg9Q2Nv4cgcxRVe0qP',
},
{
    id: 8,
    title: 'Volleyball Player 2',
    imageId:'1LPyoH4aHUw_4ZDfZ8uzWu7nIBRz0Cvu5',
},
{
    id: 9,
    title: 'Xmas man',
    imageId:'1vxr_XN63ngqLQ2w3NvVyEyJ4auerXDSO',
},
{
    id: 10,
    title: 'Birthday card 1',
    imageId:'1ubQXw4SNyAYAt4CDu6m334vnFOnDXY1u',
}
]


//fetch gallery items 
// Function to construct the image URL
const getImageUrl = (imageId) => `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;


const data = galleryItems
  .map((item) => {
    const imageURL = getImageUrl(item.imageId);
    return imageURL ? { ...item, imageURL } : null; // Return modified item or null
  })
 

console.log(data);

const creations = document.querySelector('.creations-list');
console.log(creations)

creations.classList.add('image-list')

creations.innerHTML += data.map((item) => {
  
return (
  `
  <div style="">
    <h3>${item.title}</h3>
    <img 
      src=${item.imageURL}
      onload="adjustGridSpan(this)"
    /> 
  </div>
  `)

}
).join('')

function adjustGridSpan(img) {
  const height = img.clientHeight;
  const spans = Math.ceil(height / 10);
  img.parentElement.style.gridRowEnd = `span ${spans}`;
}



creations.appendChild(creation)



