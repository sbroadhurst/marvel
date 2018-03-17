import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                    <li>
                        Heroes
                    </li>
                    <li style={{ marginLeft: '60px' }}>
                        Recent Comics
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
