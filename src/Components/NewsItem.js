import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjnAY3Jrrsu0LIObGTnBSF31MW23lFryE7A&usqp=CAU"}
            className="card-img-top"
            alt="news pic"
            width="50px"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
