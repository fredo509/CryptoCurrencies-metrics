import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import { fetchCoins } from '../redux/Crypto/CryptoSlice';
// eslint-disable-next-line
// import Search from './Search';

const HomeList = () => {
  // const query = useState('');

  // // eslint-disable-next-line
  // const onSearch = (event) => {
  //   setQuery(event.target.value);
  // };

  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => (
    crypto.name.toLowerCase().includes()
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch, fetchCoins]);

  return (
    <>
      {/* <Search query={query} onSearch={onSearch} /> */}
      <ul className="homeList">
        {filteredCrypto.map((crypto) => <HomeItem key={crypto.id} crypto={crypto} />)}
      </ul>
    </>
  );
};

export default HomeList;
