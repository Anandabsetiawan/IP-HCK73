import axios from 'axios'

const MenusData = axios.create({
    baseURL: 'https://menus.anandabs.site'
    // baseURL: 'http://localhost:3000'
})
export default MenusData