import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let { title, description, imageurl, urlnews ,author ,publishedAt} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageurl ? "https://media.istockphoto.com/id/827247322/vector/danger-sign-vector-icon-attention-caution-illustration-business-concept-simple-flat-pictogram.jpg?s=612x612&w=0&k=20&c=BvyScQEVAM94DrdKVybDKc_s0FBxgYbu-Iv6u7yddbs=" : imageurl}
            className="card-img-top" alt="..." style={{ height: "200px", width: "100%", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            {/* <a href={urlnews} target="_blank" className="btn btn-sm btn-dark">Read More</a> */}
            <a href={urlnews} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown Author":author} at {publishedAt=new Date(publishedAt).toGMTString()}  </small></p>

          </div>
        </div>
      </div>
    )
  }
}
