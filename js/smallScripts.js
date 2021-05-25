
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

 }

 //======================== Contact Details =====================================//

 
 export function contactInfoFunctionality (){ 
    const smLabels = document.querySelectorAll('.sm-item > p')
    const smDetails = document.querySelectorAll('.sm-itemDetails')

    smLabels.forEach(label => {
        label.addEventListener('click', () => {

            if (label.classList.contains('sm-itemActive')){

                label.classList.remove('sm-itemActive')

                smDetails.forEach(detail => {
                    if (detail.dataset.smdetailno == label.dataset.smlabelno){
                        detail.classList.remove('sm-itemDetailsActive')
                    }
                })

            } else {

                smDetails.forEach(detail => {
                    if (detail.dataset.smdetailno == label.dataset.smlabelno){
                        detail.classList.add('sm-itemDetailsActive')
                    }
                })
                /*
                storyButtons.forEach(sbtn => {
                    sbtn.classList.remove('story-activeButton')
                })*/

                label.classList.add('sm-itemActive')
            }
        })
    })
}
/*
export function clipCopy() {

    const contactInfoDetailsCopy = document.querySelectorAll('.sm-itemDetails span')
    //const aaa = document.querySelector('#clipboard-value')
    const detailsTexts = document.querySelectorAll('.sm-itemDetails input')

    contactInfoDetailsCopy.forEach(ciDetailsCopy => {
        //console.log(ciDetailsCopy)
        //console.log(ciDetails.previousSibling)
        //console.log(ciDetailsCopy.previousElementSibling)
        ciDetailsCopy.addEventListener('click', () => {

            detailsTexts.forEach(detailText => {
                //console.log(detailsText)
                if (detailText.dataset.sid == ciDetailsCopy.dataset.did) {
                    detailText.select();
                    document.execCommand('copy')
                }
            })

            
            let detailsText = ciDetailsCopy.nextSibling
            console.log(ciDetailsCopy.nextSibling)
            console.log(detailsText)
            detailsText.select()
            document.execCommand('Copy')
            

            if (ciDetailsCopy.previousElementSibling != null) {

                console.log(ciDetailsCopy.previousElementSibling.textContent)
                const copyContent = ciDetailsCopy.previousSibling.textContent

            } 
            else if (ciDetailsCopy.previousSibling != null) {

                console.log(ciDetailsCopy.previousSibling.textContent)
                const copyContent = ciDetailsCopy.previousSibling.textContent

            }
        })
    })
}*/