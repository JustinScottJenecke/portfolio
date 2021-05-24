
 export function storyParaTabs (){ 
    const storyButtons = document.querySelectorAll('.story-button')
    const storyParagraphs = document.querySelectorAll('.story-p')

    console.log(storyButtons)
    console.log(storyParagraphs)

    storyButtons.forEach(storyBtn => {
        storyBtn.addEventListener('click', () => {

            if (storyBtn.classList.contains('story-activeButton')){

                storyBtn.classList.remove('story-activeButton')

                storyParagraphs.forEach(paragraph => {
                    if (paragraph.dataset.storypno == storyBtn.dataset.storybtn){
                        paragraph.classList.remove('story-activeP')
                    }
                })

            } else {

                storyParagraphs.forEach(paragraph => {
                    paragraph.classList.remove('story-activeP')
                })

                storyParagraphs.forEach(paragraph => {
                    if (paragraph.dataset.storypno == storyBtn.dataset.storybtn){
                        paragraph.classList.add('story-activeP')
                    }
                })

                storyButtons.forEach(sbtn => {
                    sbtn.classList.remove('story-activeButton')
                })

                storyBtn.classList.add('story-activeButton')
            }
        })
    })

    console.log()

 }