import '@testing-library/jest-dom';
import {create} from 'react-test-renderer';
import Banner from '../Components/HomePage/Banner';


  describe(`Test of Banner`, () => {

    test(`Banner should match the snapshot every time it is rendered`, () => {
      const instance = create(<Banner/>).toJSON(); 
      expect(instance).toMatchSnapshot();
    });
  });