import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span class=" badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://cdn.mos.cms.futurecdn.net/uxbURQNyremsMuyYJovCEE-1200-80.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5  className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem