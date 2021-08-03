import './itemcard.css'
import {Link} from 'react-router-dom';
import Nlogo from './Netflix_Logo_RGB.png'


function ItemCard({ImageURL, Title, Description, Date, Link}) {
    function handleclick(e){
        window.location.href = {Link}.Link;
    }

    return (
        
        <div className="card">
            
            <table className="component--item_card" >
                <tr >
                    <td rowspan="3" className="poster">
                    <img src={ImageURL} className="image--itemcard"/>
                    </td>
                    <tr  className="tr1">
                        <br/>
                        <h3>
                            <span className="text--brand">{Title}</span>
                        </h3>
                    </tr>

                    <br/>
                    <tr>{
                        (function(){
                            if({Description}.Description == undefined){
                                return(
                                    <button onClick={handleclick} className="NLogoBtn"><img className="NetflixLogo" src = {Nlogo}/></button>
                                )
                            }else{
                                return(
                                    <p><h4>Description :</h4> {Description}</p>
                                )
                            }
                        })()
                        }
                    </tr>
                    <br/>
                    <tr>
                        <h5>Date : {Date}</h5>
                    </tr>
                    <tr >
                        <td className="NDetailLink">
                        <a href="/"><h6>More Information...</h6></a>

                        </td>
                    </tr>
                </tr>
            </table>
            
        </div>
        
    );
}

export default ItemCard;