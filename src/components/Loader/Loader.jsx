import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function Loader({ top }) {
  return (
    <Dna
      visible={true}
      height="120"
      width="120"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'absolute',
        top: `${top}%`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="dna-wrapper"
    />
  );
}

Loader.propTypes = {
  top: PropTypes.string,
};
