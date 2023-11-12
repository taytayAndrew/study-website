import ajax from'@/utils/ajax'
export function newClass(data){
    return ajax({
        url:'/api/course/mostNew',
        method:'post',
        data
    })
}