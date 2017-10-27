import React, { Component } from 'react';
import NavItem from './NavItem';

class NavigationBar extends Component {
    render() {
        const style = {
            navbar: {
                marginBottom: 0
            }
        }

        function createLinkItem(item, index) {
            return <NavItem
                key={item.title + index}
                href={item.href}
                title={item.title}
            />
        }
      return (
           <div>
               <nav className="navbar navbar-light" style={style.navbar}>
                   <div className="navbar-header">
                       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">RealDeal</a> 
                   </div>
                   <div className="collapse navbar-collapse" id="nav-collapse">
                       <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
                    </div>
                </nav>
           </div>
        );
    }
}

export default NavigationBar;