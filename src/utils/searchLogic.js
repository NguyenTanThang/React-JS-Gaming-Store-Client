const searchLogic = (list, search_object) => {
    const {min_price, max_price, searched_name, search_genre} = search_object;

    if (search_genre){
        list = list.filter(item => {
            let tof = false;
            item.genres.forEach(genre => {
                if (genre.genre == search_genre){
                    tof = true;
                }
            })
            return tof;
        })
    }

    if (min_price){
        list = list.filter(item => {
            return Math.round(parseFloat(item.productPrice)) >= parseInt(min_price);
        })
    }

    if (max_price){
        list = list.filter(item => {
            return Math.round(parseFloat(item.productPrice)) <= parseInt(max_price);
        })
    } 

    if (searched_name){
        list = list.filter(item => {
            return item.productName.toLowerCase().includes(searched_name.toLowerCase())
        })
    } 

    return list;
}

export default searchLogic;