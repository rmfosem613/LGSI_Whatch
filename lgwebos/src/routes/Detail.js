import React from 'react';
import './Detail.css';
import Recommand from '../components/Recommand';

export const IMG_API = "https://image.tmdb.org/t/p/w1280";
export const RECOMMEND_API = "https://api.themoviedb.org/3/movie/"
export const RCM_API = "/recommendations?api_key=e1d5657438192648dca986a759fc9c6a&language=en-US&page=1"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
            
        }
    }

    render() {
        const { location } = this.props;

        if (location.state) {
            console.log(location.state.id);
            console.log(typeof(location.state.id));
            // var rec_api = RECOMMEND_API + location.state.id + RCM_API;
        return (
            <div>
        <div className="movie__detail">
            <table>
                <tr>
                    <td>
                        <img className="movie__detail_img" src={(location.state.poster_path ? (IMG_API + location.state.poster_path) :
                                                'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80')}
                                                alt={location.state.title}/>
                    </td>
                    <td>
                        <div className="movie__title">
                            <h3>{location.state.title}</h3>
                            <ul className="movie__vote_average">
                                <img className="star" src="https://image.flaticon.com/icons/png/512/2107/2107957.png"></img>
                                {location.state.vote_average}
                            </ul>
                            <h5>{location.state.release_date}</h5>
                            <h5>{location.state.overview}</h5>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
            <Recommand id = {location.state.id} />
        </div>);


        } else {
            return null;
        }
    }
}

export default Detail;