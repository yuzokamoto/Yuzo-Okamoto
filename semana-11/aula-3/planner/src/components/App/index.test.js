import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import api from '../../api';
import App from './index';

api.get = jest.fn().mockResolvedValue({ data: [] });
api.post = jest.fn().mockResolvedValue();
api.put = jest.fn().mockResolvedValue();
api.delete = jest.fn().mockResolvedValue();

it('renders correctly', () => {
  const {
    getByText,
    getByLabelText,
    getByPlaceholderText,
    getByDisplayValue,
  } = render(<App />);

  // getBy returns an error if no element or more than one element is found
  // we can use it like this to determine if the element exists
  // Title h1
  expect(getByText('Weekly Planner'));

  // Task name input
  expect(getByLabelText('Task Name'));
  expect(getByPlaceholderText('Name...'));

  // Task day select
  expect(getByLabelText('Task Day'));
  expect(getByDisplayValue('Monday'));

  // Task creator button
  expect(getByText('New Task'));

  // Each Day Section
  expect(getByText('Monday', { selector: 'h2' }));
  expect(getByText('Tuesday', { selector: 'h2' }));
  expect(getByText('Wednesday', { selector: 'h2' }));
  expect(getByText('Thursday', { selector: 'h2' }));
  expect(getByText('Friday', { selector: 'h2' }));
  expect(getByText('Saturday', { selector: 'h2' }));
  expect(getByText('Sunday', { selector: 'h2' }));
});
