import React from "react";

const Card = () =>{

    const generateCard=()=>{
        const listCard = Array(4).fill("");
        const pintarCard = listCard.map(item =>
                <div className="card col-2 mt-3 text-center" style={{width:'300px'}}>
                    <img src= "https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." style={{ height:'200px', objectFit:'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        );

        return (pintarCard);
    }

    return (
        <div className="col-12 mx-auto my-4 d-flex flex-wrap justify-content-between">
            {generateCard()}
        </div>
    );
}

export default Card;