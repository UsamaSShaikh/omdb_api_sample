import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from "react-bootstrap";

class Dashboard extends Component {
    render() {
        console.log(this.props.movieList)
        let movieList = this.props.movieList.map(item => {
            return (
                <div className="col-sm-4">
                    <Card className=" movie-cnt">
                        <Card.Img className="img-responsive" variant="top" src={item.Poster} />
                        <Card.Body>
                            <Card.Title>Card Title: {item.title}</Card.Title>
                            <Card.Text>
                                Card Type: {item.Type}
                            </Card.Text>
                            <Card.Text>
                                Card Year: {item.Year}
                            </Card.Text>
                            <Card.Text>
                                Card Imdb ID: {item.imdbID}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                <h1>DashBoard</h1>
                <div className="row">
                    {movieList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        movieList: state.movieList
    }
}

export default connect(mapStateToProps)(Dashboard)