// selecting our h1 using the element id
console.log(document.getElementById('main-heading'))


// selecting the content of our h1 using the element id
alert(document.getElementById('main-heading').textContent)

//change h1 content
document.getElementById('main-heading').textContent = 'break today'


//creating new content for parapgraph tag with id 'sports' using innerHTML
let sports = '<ul> <li>football</li><li>cricket</li><li>basketball</li></ul>'
document.getElementById('sports').innerHTML = sports

document.title = 'Break time soon in about in an hour'

//changing style of h1 using element id
let h1 = document.getElementById('main-heading')

h1.style.color = 'yellow'

/*
h1 {
 color : yellow

}
 */

//changing image 

let image = document.getElementsByClassName('image-change')[0]
console.log(image)

image.setAttribute('src', 'partey.jpg')

let button = document.getElementById('change-me')
  
button.addEventListener('click', function(){
//alert('This button has been clicked');

image.setAttribute('src','partey.jpg')

})

button.addEventListener('dblclick', function(){
    image.setAttribute('src','kofiannan.jpg')
})


