import './itemcard.css'


function ItemCard({ImageURL, Title, Description, Date, Link}) {
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
                            Title : <span className="text--brand">{Title}</span>
                        </h3>
                    </tr>
                    <br/>
                    <tr>
                        <p><h4>Description :</h4> {Description}</p>
                        <p>{Link}</p>
                    </tr>
                    <br/>
                    <tr>
                        <h5>Date : {Date}</h5>
                    </tr>
                </tr>
            </table>
        </div>
    );
}

export default ItemCard;