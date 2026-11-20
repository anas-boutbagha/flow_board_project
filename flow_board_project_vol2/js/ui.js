import { delet, modifier_data } from './api.js';
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
            sec01.innerHTML += `<div id="ff${id}" class="card w-full border-2 border-cyan-500 rounded-b-xl">
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
                        <span class="priority_span p-2 pb-2.5 bg-red-800 border-2 border-cyan-700 rounded-4xl">${priority}</span><button class="modif btn btn-active btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" id="${id}">modifier</button>
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
            sec02.innerHTML += `<div id="ff${id}" class="card w-full border-2 border-cyan-500 rounded-b-xl">
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
                        <span class="priority_span p-2 pb-2.5 bg-red-800 border-2 border-cyan-700 rounded-4xl">${priority}</span><button class="modif btn btn-active btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" id="${id}">modifier</button>
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
            sec03.innerHTML += `<div id="ff${id}" class="card w-full border-2 border-cyan-500 rounded-b-xl">
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
                        <span class="priority_span p-2 pb-2.5 bg-red-800 border-2 border-cyan-700 rounded-4xl">${priority}</span><button class="modif btn btn-active btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" id="${id}">modifier</button>
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
    console.log("wa naaary rasi tab");
    
}
export function delete_btn(tab) {
    let btn_del = document.querySelectorAll('.delete')
    for (let i = 0; i < btn_del.length; i++) {
        btn_del[i].addEventListener('click', () => {
            btn_del[i].parentElement.parentElement.remove();
            delet(i)
        })
    }
}
function verification(obj) {
    let cnt = 0
    let title_inp = obj.titre
    let discription_inp = obj.discription

    function discription_verif(discription_inp) {
        cnt = 0
        const discription_regex = /^(?=[\s\S]{3,300}$)(?=[\s\S]*[A-Za-zÀ-ÖØ-öø-ÿŒœ])[A-Za-zÀ-ÖØ-öø-ÿŒœ0-9\s.,;:!?'’"«»()\-&%€\/]+$/;
        if (!discription_inp) {
            cnt++
        }
        if (!discription_regex.test(discription_inp)) {
            cnt++
        }

    }
    function name_verif(title_inp) {
        cnt = 0
        const title_regex = /^(?=.{3,50}$)[A-Za-zÀ-ÖØ-öø-ÿŒœ]+(?:[ '’\-&.][A-Za-zÀ-ÖØ-öø-ÿŒœ]+)*$/;
        if (!title_inp) {
            cnt++
        }
        if (!title_regex.test(title_inp)) {
            cnt++
        }

    }
    function date_verif() {
        let date_inp = obj.dueDate
        cnt = 0
        function todayString() {
            const now = new Date();
            const y = now.getFullYear();
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const d = String(now.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
        }
        if (!date_inp) {
            cnt++
        }
        if (date_inp < todayString()) {
            cnt++
        }

    }
    date_verif()
    name_verif(title_inp)
    discription_verif(discription_inp)

    return cnt
}
export function modifier(tab) {
    let cards = document.querySelectorAll('.card')

    for (let i = 0; i < cards.length; i++) {
        
        
        function change_local_data(tab,btn_modif) {
            let id = btn_modif.getAttribute('id').replace(/\D/g, "")
            console.log(id);
                tab[id-1].title = document.querySelector('#swal_titre').value.trim();
                tab[id-1].assignee = document.querySelector('#swal_assignee').value;
                tab[id-1].discription = document.querySelector('#swal_description').value.trim();
                tab[id-1].priority = document.querySelector('#swal_priority').value.trim();
                tab[id-1].tags = document.querySelector('#swal_tags').value.split(" ");
                tab[id-1].dueDate = document.querySelector('#swal_date').value;
                afichage_des_cards(tab)
        }
        let main = document.querySelector('main')
        main.addEventListener('click', (event) => {
             let id = i+1
             let btn_modif = event.target.closest('.modif')
             let tab_index = btn_modif.getAttribute('id').replace(/\D/g, "")
        
            let titre = tab[tab_index-1].title
            let assignee = tab[tab_index-1].assignee
            let discription = tab[tab_index-1].description
            let priority = tab[tab_index-1].priority
            let tags = tab[tab_index-1].tags
            let dueDate = tab[tab_index-1].dueDate
            let status = tab[tab_index-1].status


            Swal.fire({
                title: 'User Details',
                html: `
    <input type="text" id="swal_titre" class="swal2-input"  value="${titre}">
    <input type="date" id="swal_date" class="swal2-input"  value="${dueDate}">
    <select id="swal_assignee" class="swal2-select">
        <option value="" disabled >-- Choose assignee --</option>
        <option value="Thomas Leroy" ${assignee === 'Thomas Leroy' ? 'selected' : ''}>Thomas Leroy</option>
        <option value="Amina Haddad" ${assignee === 'Amina Haddad' ? 'selected' : ''}>Amina Haddad</option>
        <option value="Lucas Martin" ${assignee === 'Lucas Martin' ? 'selected' : ''}>Lucas Martin</option>
        <option value="Yasmine Benali" ${assignee === 'Yasmine Benali' ? 'selected' : ''}>Yasmine Benali</option>
    </select>
    <input type="text" id="swal_description" class="swal2-input"  value="${discription}">
    <input type="text" id="swal_tags" class="swal2-input"  value="${tags}">
    <select id="swal_priority" class="swal2-select">
        <option value="" disabled >-- Choose assignee --</option>
        <option value="high" ${assignee === 'high' ? 'selected' : ''}>high</option>
        <option value="medium" ${assignee === 'medium' ? 'selected' : ''}>medium</option>
        <option value="low" ${assignee === 'low' ? 'selected' : ''}>low</option>
    </select>             `,
                showCancelButton: true,
                focusConfirm: false,

            })

            let imputs = document.querySelectorAll('.swal2-input')
            for (let i = 0; i < imputs.length; i++) {
                imputs[i].addEventListener('input', (e) => {
                    e.stopPropagation()
                    let id = btn_modif.getAttribute('id').replace(/\D/g, "")
                    let imputs_data = {
                        titre: document.querySelector('#swal_titre').value,
                        assignee: document.querySelector('#swal_assignee').value,
                        discription: document.querySelector('#swal_description').value,
                        priority: document.querySelector('#swal_priority').value,
                        tags: document.querySelector('#swal_tags').value,
                        dueDate: document.querySelector('#swal_date').value,
                    }
                    let imputs_data_obj = {
                        title: document.querySelector('#swal_titre').value.trim(),
                        assignee: document.querySelector('#swal_assignee').value,
                        discription: document.querySelector('#swal_description').value,
                        priority: document.querySelector('#swal_priority').value.trim(),
                        tags: document.querySelector('#swal_tags').value.split(" "),
                        dueDate: document.querySelector('#swal_date').value,
                        status: status,
                    }
                    console.log(imputs_data_obj);
                    

                    if (verification(imputs_data) == 0) {
                        Swal.enableButtons()
                        let swal_submit = document.querySelector('.swal2-confirm')
                        swal_submit.addEventListener('click', () => {
                            modifier_data(id, imputs_data_obj)
                            change_local_data(tab,btn_modif)
                            
                        })

                    }
                    if (verification(imputs_data) != 0) {
                        Swal.disableButtons()
                    }


                })

            }

        })
    }
}

