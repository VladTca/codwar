function updateLight(current) {

    switch ( true ){

        case current === 'green':
            return 'yellow';
        case current === 'yellow':
            return 'red';
        case current === 'red':
            return 'green';
    }

}