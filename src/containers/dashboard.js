import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log("token is:" , this.props.token)
        return(
            <div>
                <p> This is the Dashboard</p>
                {/* 
                The dashboard will need a placeForm component that can be re-used for both create and update functionality.
                Dashboard will also need a PlacesList and PlaceListItem component to list places, and displays a delete button for individual Places.

                Prospective component tree will be:
                    Dashboard
                    |       |   
            placeForm (C)   |
                        PlacesList <- functions as a container. functionality includes live updating data
                            |-PlaceListItem <-has delete button that sends a destroy req
                                |
                            placeForm (U)
                
                 */}
            </div>

        )
    }
}

export default Dashboard