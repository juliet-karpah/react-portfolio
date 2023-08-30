export const getOne =(list, id, isLoading)=> {
    if(isLoading == false){
        const result = list.filter(renter => renter.id === id)
        return result[0]
    }

  }

export const calculatePrice = (duration, price) => {
    let total = (duration * price)
    return parseFloat(total).toFixed(2)
}
