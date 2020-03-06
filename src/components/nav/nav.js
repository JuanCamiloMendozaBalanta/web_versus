//REACT
import React, { PureComponent } from 'react';

//STYLE
import './nav.scss';

//IMG
import logo from '../../assets/logo.svg';
class Nav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }
  getIcon = name => {
    let icon = '';
    switch (name) {
      case 'dashboard':
        icon = 'dashboard';
        break;
      case 'teams':
        icon = 'group';
        break;
      case 'statistics':
        icon = 'assessment';
        break;
      case 'calendar':
        icon = 'calendar_today';
        break;
      default:
        break;
    }
    return icon;
  };
  setShowNav = showNav => {
    this.setState({
      showNav: !showNav
    });
  };

  render() {
    const { showNav } = this.state;
    const { routes, setCurrentRoute } = this.props;
    return (
      <nav className={`Nav-box ${showNav ? 'Active-nav' : ''}`}>
        <div
          className={`Nav-custom-icon ${showNav ? 'Active-menu' : ''}`}
          onClick={() => this.setShowNav(showNav)}
        >
          <li className="Nav-line"></li>
          <li className="Nav-line"></li>
          <li className="Nav-line"></li>
        </div>
        {showNav && (
          <div className="Nav-content">
            <header className="Nav-header">
              <img className="Nav-logo" src={logo} alt="logo"></img>
              <p className="Nav-name">versus</p>
            </header>
            <ul className="Nav-routes">
              {routes.map((item, i) => {
                return (
                  <li
                    className={`Nav-route ${item.state ? 'isSelected' : ''}`}
                    key={i}
                    onClick={() => setCurrentRoute(item.route)}
                  >
                    <i
                      className={`material-icons ${
                        item.state ? 'isSelectedIcon' : ''
                      }`}
                    >
                      {this.getIcon(item.route)}
                    </i>
                    <span>{item.route}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

export default Nav;
