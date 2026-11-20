import { recuper } from './api.js';
import { afichage_des_cards , delete_btn , modifier } from './ui.js';

let select_input = document.querySelector('.select_uu')
let priority = ""
let assignee = ""
let q = ""

if (select_input.value == priority) {
    priority = priority
}
if (select_input.value == assignee) {
    assignee = assignee
}
if (select_input.value == q) {
    q = q
}
function error(error) {
    console.log(error);
    
}
let data_tab = []
function resolvedd(data){
data_tab = [...data]
return data_tab
}
await recuper(error, resolvedd, priority , assignee , q )

console.log(data_tab);
afichage_des_cards(data_tab)
delete_btn(data_tab)
modifier(data_tab)
