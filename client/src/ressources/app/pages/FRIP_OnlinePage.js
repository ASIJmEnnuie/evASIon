import React from 'react';
import FRIP_NavbarOnline from '../components/FRIP_Navbar'

const FRIP_OnlinePage = React.createClass({
  render: function() {
    return (
      <div>
        <FRIP_NavbarOnline clickOnLeftButton={null}/>
        {this.props.children}
      </div>
    );
  }
});

export default FRIP_OnlinePage;
