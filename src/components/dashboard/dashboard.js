//REACT
import React, { PureComponent } from 'react';

//STYLE
import './dashboard.scss';
class Dashboard extends PureComponent {
  componentDidMount = () => {
    const { setShow } = this.props;
    setShow(true);
  };
  render() {
    return (
      <div className="Dashboard-box Wrap">
        <div className="">Dashboard</div>
      </div>
    );
  }
}

export default Dashboard;
