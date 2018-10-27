import React, { PureComponent } from 'react';
import './Badge.css';

class Badge extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      redeemed,
      type,
    } = this.props;
    const style = {
      filter: !redeemed ? 'grayscale(100%)' : 'grayscale(0%)',
      width: '40px',
      height: '40px',
    };
    return (
      <div className="badgeCircle">
        <img style={style} alt="icon" src={`/badges/${type}.svg`} />
      </div>
    );
  }
}
export default Badge;
