function rentalCarCost(d) {
    switch ( true ){
        case d >= 7:
            return d * 40-50
        case d >= 3:
            return d * 40-20
        default:
            return d * 40
    }
}