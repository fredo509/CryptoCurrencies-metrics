import React from 'react';
// eslint-disable-next-line
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';

const HomeItem = (props) => {
  const { crypto } = props;

  const {
    id, name, symbol, price, img, rank,
  } = crypto;

  return (
    <li className="listItem">
      <div
        className="homeItem"
        id={id}
      >
        <div className="home-item-img">
          <Link
            to={`/details/${id}`}
          >
            <img src={img} alt={name} />
          </Link>
        </div>
        <div className="home-item-info">
          <p>
            #
            {rank}
          </p>
          <h3 className="name">{name}</h3>
          <p className="symbol">{symbol}</p>
          <p>
            $
            {price}
          </p>
        </div>
        <Link
          to={`/details/${id}`}
        >
          <icon className="fontIcon" />
        </Link>
      </div>
    </li>
  );
};

HomeItem.propTypes = {
  crypto: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    symbol: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    img: propTypes.string.isRequired,
    rank: propTypes.number.isRequired,
  }).isRequired,
};

export default HomeItem;
