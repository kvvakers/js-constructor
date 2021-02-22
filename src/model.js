import {TitleBlock, ColumnsBlock, ImageBlock} from './classes/Blocks'
import image from './assets/image.png'
export const model = [
    new TitleBlock('title', {
        tag: 'h2',
        styles: {
            color: 'red',
            border: '1px solid violet',
            'font-style': 'italic'
        }
    }),
    new ColumnsBlock(['col1', 'col2', 'col3']),
    new ImageBlock( image, {
        imageStyle: {
            width: '300px'
        }
    })
]