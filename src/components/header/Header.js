import React from 'react';
import './Style.css'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render() {
        return (
            <div>
                <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                    <li>
                        <Link to="/">Heroes</Link>
                    </li>
                    <li style={{ marginLeft: '60px' }}>
                        <Link to="/recent-comics">Recent Comics</Link>
                    </li>
                    {/* <li>
        <Link to="/topics">Topics</Link>
      </li> */}
                </ul>

                <hr />
            </div>
        )
    }
}

export default Header;
