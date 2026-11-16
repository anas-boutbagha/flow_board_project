async function data_ret() {
    try {
        const respond = await fetch('https://flowboard-api-virid.vercel.app/cards')
        if (!respond.ok) {
            throw new Error(respond.status + "not found")
        }
        const data = await respond.json()
        return data
    } catch (error) {
       console.log('Errer :', error.message);
        
    }
}
const data = await data_ret()
export const data_tab = [...data]