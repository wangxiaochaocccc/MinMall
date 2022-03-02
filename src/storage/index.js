const STROAGE_KEY = 'mall'

export default{
    setItem(key,value,moudle_name) {
        if(moudle_name) {
            let val = this.getItem(moudle_name)
            val[key] = value
            this.setItem(moudle_name,val)
        }else {
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STROAGE_KEY,JSON.stringify(val))
        }
    },
    getItem(key,moudle_name) {
        if(moudle_name) {
            let val = this.getItem(moudle_name)
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STROAGE_KEY))
    },
    clear(key,moudle_name) {
        let val = this.getStorage()
        if(!val) return
        if(moudle_name) {
            delete val[moudle_name][key]
        }else {
            delete val[key]
        }
        window.sessionStorage.setItem(STROAGE_KEY,JSON.stringify(val))
    }
}