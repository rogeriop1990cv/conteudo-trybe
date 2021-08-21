import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('Verifica que, quando recebo uma piada, mosto ela na tela.', async () =>{
  const joke = {
    id: '7h3oGtr0fxs',
    joke: 'Whiteboardsare ... remarkable.',
    status: 200,
  };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke)
  });

  render (<App />)
  await waitFor(() => screen.getByText('Whiteboardsare ... remarkable.'))
})
