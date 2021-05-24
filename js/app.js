
//======================== Carousel script =====================================//

import {storyParaTabs} from '../js/storyScript.js';

const projectsBox = document.querySelectorAll('.box')
const projectCarouselIndicators = document.querySelectorAll('.project-indicator')

let activeProjectIndicator = 2
/*let activeSlideIndicator = 2*/

const projects = Array.from(projectsBox)
const indicators = Array.from(projectCarouselIndicators)
//console.log(projects)

const nextProject = document.querySelector('.project-box5')
const previousProject = document.querySelector('.project-box4')

//console.log(indicators)

previousProject.addEventListener('click', () => {
 
    
    activeProjectIndicator--
    
    if(activeProjectIndicator != 0){

        projects.forEach(project => {
            project.classList.remove('activeBox')

        if (project.dataset.tag == activeProjectIndicator)
            project.classList.add('activeBox')
        })

        indicators.forEach(indicator => {
            indicator.classList.remove('activeIndicator')

        if (indicator.dataset.ptag == activeProjectIndicator)
            indicator.classList.add('activeIndicator')
        })

    } else
        activeProjectIndicator++
})

nextProject.addEventListener('click', () => {

    activeProjectIndicator++

    if(activeProjectIndicator <= projects.length){

        projects.forEach(project => {
            project.classList.remove('activeBox')

        if(project.dataset.tag == activeProjectIndicator)
            project.classList.add('activeBox')
        });

        indicators.forEach(indicator => {
            indicator.classList.remove('activeIndicator')
            
        if (indicator.dataset.ptag == activeProjectIndicator)
            indicator.classList.add('activeIndicator')
        })

    } else
        activeProjectIndicator--
})

//======================== Carousel script =====================================//

storyParaTabs()