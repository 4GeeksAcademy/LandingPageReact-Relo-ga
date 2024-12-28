import React from "react";

const Jumbotron = () =>{
    return(
        <>
            <div className="h-100 p-5 bg-body-tertiary border rounded-3 col-12 mx-auto">
                <h2>A Warms welcome!</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <button className="btn btn-primary" type="button">Call to action!</button>
            </div>
        </>
    );
}

export default Jumbotron;