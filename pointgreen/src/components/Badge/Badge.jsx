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
      earned,
      required,
      type,
      desc
    } = this.props;

    const style = {
      filter: (earned === required || !required)? 'grayscale(0%)' : 'grayscale(100%)'
    };

    let badgeText = "";

    if (required) {
      badgeText = earned + "/" + required;
    } else {
      badgeText = earned;
    }

    return (
      <div className="Badge" title={desc}>
        <div style={style} className="badgeIcon">
          <img alt="icon" src={`/badges/${type}.svg`} />
        </div>
        <div className="badgeProgress">{badgeText}</div>
      </div>
    );
  }
}
export default Badge;
