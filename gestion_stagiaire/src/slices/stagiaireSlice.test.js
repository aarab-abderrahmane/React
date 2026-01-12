import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('renders App with Redux', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // You can now safely test components that use useDispatch/useSelector
});
