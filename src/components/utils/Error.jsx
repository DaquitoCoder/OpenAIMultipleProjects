import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

function Error({ message }) {
  return (
    <div className='alert alert-danger d-flex align-items-center my-3' role='alert'>
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <div className='ms-2'>{message}</div>
    </div>
  );
}
export default Error;
