import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
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
                        PlacesList <- Will need a function to handle live updating data
                            |-PlaceListItem <-has delete button that sends a destroy req
                                |
                            placeForm (U)
                
                 */}
            </div>

        )
    }
}

export default Dashboard