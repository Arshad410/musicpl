import React from 'react';

export default function Artist(props) {
    if(!props.artist) return null;
    const {id, name, images, genres, followers} = props.artist;
    return(
        <div className="row">
            <div className="col-md-6 col-md-offset-3 well well-lg">
                <h1 className="text-center">{name}</h1>
                <img className="img-responsive img-circle" src={images[1].url} alt=""/>
                <ul className="list-group">
                    <li className="list-group-item">Followers <span className="pull-right">{followers.total}</span></li>
                    <li className="list-group-item">Genres <span className="pull-right">{genres.join(",")}</span></li>
                </ul>
            </div>
        </div>
    );
}