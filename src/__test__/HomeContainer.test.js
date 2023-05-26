import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomeContainer from '../components/Home/HomeContainer';
import store from '../Redux/store';

it('Test HomeContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeContainer />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
