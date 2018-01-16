import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Browser from '../../utils/helpers/browser';

class Portal extends React.Component {

  static propTypes = {
    /**
     * The content of the portal.
     *
     * @property children
     * @type {Node}
     */
    children: PropTypes.node
  }

  componentWillUnmount() {
    Browser.getDocument().body.removeChild(this.defaultNode);
    this.defaultNode = null;
  }

  getPortalDiv() {
    if (!this.defaultNode) {
      this.defaultNode = Browser.getDocument().createElement('div');
      this.defaultNode.classList.add('carbon-portal');
      Browser.getDocument().body.appendChild(this.defaultNode);
    }
    return this.defaultNode;
  }

  render() {
    if (!Browser.isDomAvailable()) {
      return null;
    }

    return (
      createPortal(this.props.children, this.getPortalDiv())
    );
  }
}

export default Portal;
