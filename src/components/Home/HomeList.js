import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import { fetchCoins } from '../../Redux/Crypto/CryptoSlice';

const HomeList = () => {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line
  const Search = (event) => {
    setQuery(event.target.value);
  };

  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => (
    crypto.name.toLowerCase().includes(query.toLowerCase())
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
    // eslint-disable-next-line
  }, [dispatch, fetchCoins]);

  return (
    <>
      <ul className="homeList">
        {filteredCrypto.map((crypto) => <HomeItem key={crypto.id} crypto={crypto} />)}
      </ul>
    </>
  );
};

export default HomeList;
