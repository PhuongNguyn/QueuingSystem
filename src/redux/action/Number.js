export const openCreateNumber = () =>{
    return {
        type: 'createNumberCard',
        payload: true,
    }
}

export const closeCreateNumber = ()=>{
    return {
        type: 'createNumberCard',
        payload: false
    }
}