import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='container-fluid'>
        <div className='footer-text'>
          <p className='mb-2'>
            Created by{' '}
            <a href='https://github.com/daquitocoder' target='_blank'>
              DaquitoCoder
            </a>{' '}
            and{' '}
            <a href='https://github.com/unknowncoder05' target='_blank'>
              unknowncoder05
            </a>
            .
          </p>
          <p>2023 &copy; All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
