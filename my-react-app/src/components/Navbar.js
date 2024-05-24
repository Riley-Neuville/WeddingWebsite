import React, {useState} from 'react';

function Navbar ()  {
    const linkStyle = {
        color: 'white', // Set the font color to white
        textDecoration: 'none', // Remove underline
        textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' // Add text shadow for black border
    };
return(
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <nav>
                <ul>
                    <li>
                        <a style={linkStyle} href='/'>Home</a>
                    </li>
                    <li>
                        <a style={linkStyle} href='/'>Schedule</a>
                    </li>
                    <li>
                        <a style={linkStyle} href='/'>Travel</a>
                    </li>
                    <li>
                        <a style={linkStyle} href='/'>Registry</a>
                    </li>
                    <li>
                        <a style={linkStyle} href='/'>FAQs</a>
                    </li>
                </ul>
                </nav>
        </div>
    </nav>
    </>
)


}

export default Navbar;