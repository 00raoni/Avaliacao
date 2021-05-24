import {http} from './config'

export default{
    list:()=>{
        return http.get('chat')
    },
    insert:(chat)=>{
        return http.post('chat',chat)
    }
}
