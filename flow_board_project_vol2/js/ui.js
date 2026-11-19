import { delet } from './api.js';
export function afichage_des_cards(tab) {
    let sec01 = document.querySelector('.todo')
    let sec02 = document.querySelector('.in_progress')
    let sec03 = document.querySelector('.done')
    sec01.innerHTML = ""
    sec02.innerHTML = ""
    sec03.innerHTML = ""
    for (let i = 0; i < tab.length; i++) {
        let id = "ff" + tab[i].id
        let titre = tab[i].title
        let assignee = tab[i].assignee
        let discription = tab[i].description
        let priority = tab[i].priority
        let tags = tab[i].tags

        let dueDate = tab[i].dueDate
        if (tab[i].status == "todo") {
            sec01.innerHTML += `<div id="ff${id}" class="w-full border-2 border-cyan-500 rounded-b-xl">
                <div class="w-full flex justify-between">
                    <p class="m-1.5">${titre}</p>
                    <img class="delete " src="./ressources/delete_img.jpg" alt="delete_img">
                </div>
                <div class="w-full flex flex-col ">
                    <p>${dueDate}</p>
                    <p class="mt-1.5">${assignee}</p>
                    <p class="mt-1.5">${discription}</p>
                </div>
                <div class="w-full flex flex-col">
                    <div class="tags_div flex mt-1.5">
                        
                    </div>
                    <div class="mt-3.5 flex justify-between">
                        <span class="priority_span p-2 pb-2.5 bg-red-800 border-2 border-cyan-700 rounded-4xl">${priority}</span><button class="modif btn btn-active btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">modifier</button>
                    </div>
                </div>
            </div>`
            let tag_div = document.querySelector(`#ff${id} .tags_div `)
            for (let i = 0; i < tags.length; i++) {
                const tag = document.createElement('span')
                tag.textContent = `${tags[i]}`
                tag.classList += " bg-cyan-400 ml-2.5 rounded-2xl"
                tag_div.append(tag)
            }
        }
        if (tab[i].status == "in-progress") {
            sec02.innerHTML += `<div id="ff${id}" class="w-full border-2 border-cyan-500 rounded-b-xl">
                <div class="w-full flex justify-between">
                    <p class="m-1.5">${titre}</p>
                    <img class="delete " src="./ressources/delete_img.jpg" alt="delete_img">
                </div>
                <div class="w-full flex flex-col ">
                    <p>${dueDate}</p>
                    <p class="mt-1.5">${assignee}</p>
                    <p class="mt-1.5">${discription}</p>
                </div>
                <div class="w-full flex flex-col">
                    <div class="tags_div mt-1.5">
                        
                    </div>
                    <div class="mt-3.5 flex justify-between">
                        <span class="priority_span p-2 pb-2.5 bg-red-800 border-2 border-cyan-700 rounded-4xl">${priority}</span><button class="modif btn btn-active btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">modifier</button>
                    </div>
                </div>
            </div>`
            let tag_div = document.querySelector(`#ff${id} .tags_div `)
            for (let i = 0; i < tags.length; i++) {
                let tag = document.createElement('span')
                tag.textContent = `${tags[i]}`
                tag.classList += " bg-cyan-400 ml-2.5 rounded-2xl"
                tag_div.append(tag)
            }
        }
        if (tab[i].status == "done") {
            sec03.innerHTML += `<div id="ff${id}" class="w-full border-2 border-cyan-500 rounded-b-xl">
                <div class="w-full flex justify-between">
                    <p class="m-1.5">${titre}</p>
                    <img class="delete " src="./ressources/delete_img.jpg" alt="delete_img">
                </div>
                <div class="w-full flex flex-col ">
                    <p>${dueDate}</p>
                    <p class="mt-1.5">${assignee}</p>
                    <p class="mt-1.5">${discription}</p>
                </div>
                <div class="w-full flex flex-col">
                    <div class="tags_div mt-1.5">
                        
                    </div>
                    <div class="mt-3.5 flex justify-between">
                        <span class="priority_span p-2 pb-2.5 bg-red-800 border-2 border-cyan-700 rounded-4xl">${priority}</span><button class="modif btn btn-active btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">modifier</button>
                    </div>
                </div>
            </div>`
            let tag_div = document.querySelector(`#ff${id} .tags_div `)
            for (let i = 0; i < tags.length; i++) {
                let tag = document.createElement('span')
                tag.textContent = `${tags[i]}`
                tag.classList += " bg-cyan-400 ml-2.5 rounded-2xl "
                tag_div.append(tag)
            }
        }
    }
}
export function delete_btn(tab) {
    let btn_del = document.querySelectorAll('.delete')
    for (let i = 0; i < btn_del.length; i++) {
        btn_del[i].addEventListener('click', () => {
            let id = '#ffff' + (i + 1)
            let deleted_dev = document.querySelector(`${id}`)
            deleted_dev.remove()
            tab.splice(i,1)
            delet(i)            
        })
    }
}

export function modifier(tab){
    let btn_modif = document.querySelectorAll('.modif')
    let modal = document.querySelector('.modal')
    for (let i = 0; i < btn_modif.length; i++) {
        btn_modif[i].addEventListener('click',()=>{
        let id = '#ffff' + (i + 1) 
          modal.innerHTML = `<div class="bg-white">
          <div class="search_barre_div">
            <h1 class="search_barre_h1">-----search barre------</h1>
        </div>
        <div class="search_bar_div">
            <label for="search_bar">
                <input class="s_b" type="search" name="search_bar" id="search_bar"
                    placeholder="  search here..."></label>
        </div>
        </div>`
// litterly mfhmtch 3lach katkhcha mn moraha
        })        
    }    
}