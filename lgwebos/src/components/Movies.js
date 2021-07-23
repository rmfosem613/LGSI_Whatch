import kind from "@enact/core/kind";
import PropTypes from 'prop-types';

import css from './movie.module.less'

const MoviesBase = kind({
    name: 'movie',

    propTypes:{
        children: PropTypes.string,
        index: PropTypes.number,
        size: PropTypes.number
    },

    defaultProps:{
        size:300
    },

    styles: {
        css,
        className: 'movie'
    },

    computed:{
        url:({index, size}) =>{
            /*return `//loremflickr.com/${size}/${size}/paris?random=${index}`;*/
            return `//loremflickr.com/300/500/paris?random=${index}`;
        }
    },

    render: ({children, url, ...rest})=> {
        delete rest.index;
        delete rest.size;

        return(
            <div {...rest}>
                <img src = {url} alt='movies'/>
                <div>{children}</div>
            </div>
        );
    }
});

export default MoviesBase;
export {MoviesBase as movie};