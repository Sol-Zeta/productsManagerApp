import {images} from '../assetsRoutes'
export const findImageByName = (name: string) => {
    const product = name.split(' ')[0].toLowerCase()
    switch (product) {
        case 'tomate':
            return images.tomato    
        case 'cebolla':
            return images.onion    
        case 'pimiento':
            return images.pepper    
        case 'lechuga':
            return images.lettuce    
        case 'zanahoria':
            return images.carrot    
        case 'tomate':
            return images.tomato    
        case 'tomate':
            return images.tomato    
        case 'pepino':
            return images.cucumber    
        case 'patata':
            return images.potato    
        default:
            return images.tomato
    }
}