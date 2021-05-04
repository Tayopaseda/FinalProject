import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';

describe(`Snapshot test of App`, () => {

  test(` App should match the snapshot every time it is rendered`, () => {
    const instance = create(<App/>).toJSON(); 
    expect(instance).toMatchSnapshot();
  });
});
