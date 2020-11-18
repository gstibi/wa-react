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
                <a className='nav-item' href='https://github.com/gstibi/wa-react' target='_blank' rel="noreferrer">Source on github</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
