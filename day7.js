const left  = document.querySelector('.left')
const right  = document.querySelector('.right')
const container  = document.querySelector('.container')

left.addEventListener('mouseenter', () =>  container.classList.add('hover-left'))
left.addEventListener('mouseleave', () =>  container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () =>  container.classList.add('hover-right'))
right.addEventListener('mouseleave', () =>  container.classList.remove('hover-right'))

//The reason that  this was not working is because i spelled remove wrong. And that  was the issue. Debugging  consists  of  identifying what the program is not doing and then figuring out the piece of code that controls that action. 