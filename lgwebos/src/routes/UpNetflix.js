import React, {Component} from "react";
import UN from '../../Data/August Update.json';
import ItemCard from "../components/itemcard";
import '../components/itemcard.css';

const data = [];

class upNetflix extends Component {


    loadItem = UN.map((netflix, index) => {

        index = netflix.date;
        for (let i = 0; i < netflix.data.length; i++) {
            var ndata = {"date": index, "data": netflix.data[i]};
            data.push(ndata);
        }
    })


    render() {
        console.log(data);
        return (
            <div className="Netflix">
                <br/>
                <h1>Netflix Upcoming Contents</h1>
                <br/>
                <div className="netflix_view">
                    {data.map(netflix => {
                        return <ItemCard
                            Date={netflix.date}
                            Description={netflix.data.description}
                            ImageURL={netflix.data.poster}
                            Title={netflix.data.title}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default upNetflix;