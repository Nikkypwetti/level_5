import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state:() => ({
        count: 0,
        items: [
            {id: 1, name: "Rice", available:true},
            {id: 2, name: "Beans", available:true},
            {id: 3, name: "Shirt", available:true},
            {id: 4, name: "Pilers", available:true},
            {id: 5, name: "Coffee  ", available:true},
        ]
    }),
    getters: {
        multiplyCount() {
            return this.count * 2;
        }
    },
    actions: {
        deleteItem(id) {
            console.log(id);
            this.items = this.items.filter((item)=> item.id!== id)
        }
    }
})