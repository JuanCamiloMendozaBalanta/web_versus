//REACT
import React, { PureComponent } from 'react';
import history from '../../history';

//UTILS
import { routes } from '../../utils';

//STYLE
import './nav.scss';

//IMG
import logo from '../../assets/logo.svg';
class Nav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      routes
    };
  }

  initRoutes = () => {
    const { pathname } = history.location;
    const urlRoute = pathname.split('/').pop();
    const route = routes.find(ele => ele.route === urlRoute);
    if (route) {
      this.setCurrentRoute(urlRoute);
    }
  };
  componentWillMount = () => {
    this.initRoutes();
  };

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
      case 'settings':
        icon = 'settings';
        break;
      default:
        break;
    }
    return icon;
  };

  setCurrentRoute = async route => {
    const { routes } = this.state;
    const newRoutes = routes.map(ele => {
      if (ele.route === route) {
        ele.state = 1;
      } else {
        ele.state = 0;
      }
      return ele;
    });
    this.setState({
      routes: newRoutes
    });
    await history.push(`/${route}`);
  };

  setShowNav = showNav => {
    this.setState({
      showNav: !showNav
    });
  };

  render() {
    const { showNav, routes } = this.state;
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
                    onClick={() => this.setCurrentRoute(item.route)}
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
