const formatType = (type: string): string => {
    let color: string;

    switch (type) {
        case 'relou':
            color = 'red lighten-1';
            break;
        case '':
            color = 'blue lighten-1';
            break;
        case '':
            color = 'green lighten-1';
            break;
        case '':
            color = 'brown lighten-1';
            break;
        case '':
            color = 'grey lighten-3';
            break;
        case '':
            color = 'blue lighten-3';
            break;
        case '':
            color = 'deep-purple accent-1';
            break;
        case '':
            color = 'pink lighten-4';
            break;
        case '':
            color = 'deep-purple darken-2';
            break;
        case '':
            color = 'lime accent-1';
            break;
        case '':
            color = 'deep-orange';
            break;
        default:
            color = 'grey';
            break;
    }

    return `chip ${color}`;
}

export default formatType;