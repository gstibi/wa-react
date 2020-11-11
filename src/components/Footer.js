import React from 'react'

function Footer() {
  return (
    <footer className="fixed-bottom">
    <hr></hr>
        <div className="row">
            <div className="col-sm-6 justify-content-end">
                <p className="text-right">Weather app created by gstibi</p>
            </div>
            <div className="col-sm-6">
                <a className='nav-item' href='https://github.com/gstibi/wa-react'>Source on github</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
