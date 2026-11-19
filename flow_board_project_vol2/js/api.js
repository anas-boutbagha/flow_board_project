
export async function recuper(rejected, resolved, priority = "", assignee = "", q = "") {
    let obj = {}
    if (priority.trim()) {
        obj.priority = priority
    }
    if (assignee.trim()) {
        obj.assignee = assignee
    }
    if (q.trim()) {
        obj.q = q
    }
    try {
        let results = await axios.get('https://flowboard-api-virid.vercel.app/cards', {
            Headers: {
                'X-Workspace': 'public'
            },
            params: obj
        })

        resolved(results.data);

    } catch (error) {
        rejected(error)
    }
}

export async function delet(id) {
    const options = {
  method: 'DELETE',
  url: 'https://flowboard-api-virid.vercel.app/cards/'+id,
  headers: {
    'X-Workspace': 'public'
  }
}

// try {
//   const { data } = await axios.request(options)
//   console.log(data)
// } catch (error) {
//   console.error(error)
// }
}