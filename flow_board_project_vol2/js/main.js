import { recuper } from './api.js';

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
function resolvedd(data){
const data_tab = [...data]
}
const data = await recuper(error, resolvedd, priority , assignee , q )

