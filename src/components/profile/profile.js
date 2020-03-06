//REACT
import React, { PureComponent } from 'react';

//STYLE
import './profile.scss';

//IMG
import logo from '../../assets/logo.svg';
class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: false
    };
  }

  setShowProfile = showProfile => {
    this.setState({
      showProfile: !showProfile
    });
  };

  render() {
    const { showProfile } = this.state;
    const { user } = this.props;
    return (
      <div className={`Profile-box ${showProfile ? 'Active-profile' : ''}`}>
        <div className={`Profile-icon`}>
          {!showProfile ? (
            <i
              className={`material-icons Profile-person-icon`}
              onClick={() => this.setShowProfile(showProfile)}
            >
              person_outline
            </i>
          ) : (
            <i
              className={`material-icons Profile-person-close`}
              onClick={() => this.setShowProfile(showProfile)}
            >
              close
            </i>
          )}
        </div>
        {showProfile && (
          <div className="Profile-content">
            <header className="Profile-header">
              <img className="Profile-photo" src={logo} alt="profile" />
              {console.log('===>', user)}
              <p className="Profile-name">{user.name}</p>
            </header>
            {/*<ul className="Nav-routes">
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
            </ul>*/}
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
