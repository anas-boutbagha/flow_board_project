import { data_tab } from './api.js'
console.log(data_tab);
let colume01 = document.querySelector('.colume01')
let colume02 = document.querySelector('.colume02')
let colume03 = document.querySelector('.colume03')


function affichage(tab) {

    for (let i = 0; i < tab.length; i++) {
        let val_id = tab[i].id
        let title = tab[i].title
        let description = tab[i].description
        let status = tab[i].status
        let priority = tab[i].priority
        let assignee = tab[i].assignee
        let dueDate = tab[i].dueDate
        let tags = tab[i].tags
        if (status == "todo") {
            colume01.innerHTML += `<div class="choice_card " id="${val_id}">
                    <div class="first_div">
                        <p class="boldy2">title: </p>     <span class="non_boldy2">${title}</span>
     +                   <p class="boldy2">description: </p> <span class="non_boldy2">${description}</span>
                        <p class="boldy2">status: </p>     <span class="non_boldy2">${status}</span>
                        <p class="boldy2">priority:</p><span class="non_boldy2">${priority}</span>
                        <p class="boldy2">assignee to:</p><span class="non_boldy2">${assignee}</span>
                        <p class="boldy2">dueDate:</p><span class="non_boldy2">${dueDate}</span>
                        <p class="boldy2 tags_area">tags:</p><span class="tags_span${val_id} tags_area"></span>

                    </div>`
            let tags_space = document.querySelector(`.tags_span${val_id}`)
            for (let i = 0; i < tags.length; i++) {
                
                let tag_var = document.createElement('span')
                tag_var.textContent = (tags[i]+ " ")
                if (tags[i]) {        
                    tags_space.append(tag_var)
                }
                
            }
        }
        if (status == "in-progress") {
            colume02.innerHTML += `<div class="choice_card " id="${val_id}">
                    <div class="first_div">
                        <p class="boldy2">title: </p>     <span class="non_boldy2">${title}</span>
                        <p class="boldy2">description: </p> <span class="non_boldy2">${description}</span>
                        <p class="boldy2">status: </p>     <span class="non_boldy2">${status}</span>
                        <p class="boldy2">priority:</p><span class="non_boldy2">${priority}</span>
                        <p class="boldy2">assignee to:</p><span class="non_boldy2">${assignee}</span>
                        <p class="boldy2">dueDate:</p><span class="non_boldy2">${dueDate}</span>
                        <p class="boldy2">tags:</p><span class="tags_span${val_id}"></span>

                    </div>`
            let tags_space = document.querySelector(`.tags_span${val_id}`)
            for (let i = 0; i < tags.length; i++) {
                
                let tag_var = document.createElement('span')
                tag_var.textContent = (tags[i]+ " ")
                if (tags[i]) {        
                    tags_space.append(tag_var)
                }
                
            }
        }
        if (status == "done") {
            colume03.innerHTML += `<div class="choice_card " id="${val_id}">
                    <div class="first_div">
                        <p class="boldy2">title: </p>     <span class="non_boldy2">${title}</span>
                        <p class="boldy2">description: </p> <span class="non_boldy2">${description}</span>
                        <p class="boldy2">status: </p>     <span class="non_boldy2">${status}</span>
                        <p class="boldy2">priority:</p><span class="non_boldy2">${priority}</span>
                        <p class="boldy2">assignee to:</p><span class="non_boldy2">${assignee}</span>
                        <p class="boldy2">dueDate:</p><span class="non_boldy2">${dueDate}</span>
                        <p class="boldy2">tags:</p><span class="tags_span${val_id}"></span>

                    </div>`
            let tags_space = document.querySelector(`.tags_span${val_id}`)
            for (let i = 0; i < tags.length; i++) {
                
                let tag_var = document.createElement('span')
                tag_var.textContent = (tags[i]+ " ")
                if (tags[i]) {        
                    tags_space.append(tag_var)
                }
                
            }
        }

    }
}
function search_modal_on_off() {
    let live_search = document.querySelector('.ico')
live_search.addEventListener('click', () => {
  let the_modal = document.querySelector('.modal')
  the_modal.classList.toggle('hiding')
})
}
affichage(data_tab)
search_modal_on_off()