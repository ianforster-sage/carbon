import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import I18n from 'i18n-js';
import Event from '../../../utils/helpers/events';
import { validProps } from '../../../utils/ether';
import tagComponent from '../../../utils/helpers/tags';
import {
  StyledBlock,
  StyledCollapsibleContent,
  StyledContent,
  StyledDescription,
  StyledEditAction,
  StyledEditContainer,
  StyledFooter,
  StyledPod,
  StyledHeader,
  StyledSubtitle,
  StyledTitle,
  StyledArrow
} from './pod.style.js';

import './pod.scss';

class Pod extends React.Component {
  static propTypes = {
    /**
     * Enables/disables the border around the pod.
     */
    border: PropTypes.bool,

    /**
     * Children elements
     */
    children: PropTypes.node,

    /**
     * Custom className
     */
    className: PropTypes.string,

    /**
     * Determines the padding around the pod.
     * Values: 'none', 'small', 'medium' or 'large'.
     */
    padding: PropTypes.string,

    /**
     * Applies a theme to the Pod.
     * Value: primary, secondary, tile
     */
    as: PropTypes.string,

    /**
     * The collapsed state of the pod
     *
     * undefined - Pod is not collapsible
     * true - Pod is closed
     * false - Pod is open
     */
    collapsed: PropTypes.bool,

    /**
     * Title for the pod h4 element
     * always shown
     */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * Optional subtitle for the pod
     */
    subtitle: PropTypes.string,

    /**
     * Aligns the title to left, right or center
     */
    alignTitle: PropTypes.string,

    /**
     * Description for the pod
     * Not shown if collapsed
     */
    description: PropTypes.string,

    /**
     * A component to render as a Pod footer.
     */
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * Supplies an edit action to the pod.
     */
    onEdit: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

    /**
     * Determines if the editable pod content should be full width.
     */
    editContentFullWidth: PropTypes.bool,

    /**
     * Determines if the edit button should be hidden until the user
     * hovers over the content.
     */
    displayEditButtonOnHover: PropTypes.bool,

    /**
     * Determines if clicking the pod content calls the onEdit action
     */
    triggerEditOnContent: PropTypes.bool,

    /**
     * Resets edit button styles to an older version
     */
    internalEditButton: PropTypes.bool
  };

  static defaultProps = {
    border: true,
    as: 'primary',
    padding: 'medium',
    alignTitle: 'left'
  };

  state = {
    collapsed: this.props.collapsed
  };


  UNSAFE_componentWillReceiveProps() {
    if (this.state.hoverEdit) {
      this.toggleHoverState(false);
    }
  }

  get podHeader() {
    if (!this.props.title) {
      return null;
    }

    const isCollapsable = this.state.collapsed !== undefined;

    // headerProps.className = this.headerClasses;

    return (
      <StyledHeader
        className={ this.headerClasses }
        alignTitle={ this.props.alignTitle }
        internalEditButton={ this.props.internalEditButton }
        padding={ this.props.padding }
        isCollapsed={ this.state.collapsed }
        onClick={ isCollapsable && this.toggleCollapse }
      >
        <StyledTitle className='carbon-pod__title' data-element='title'>
          {this.props.title}
        </StyledTitle>
        {this.props.subtitle && (
          <StyledSubtitle className='carbon-pod__subtitle' data-element='subtitle'>
            {this.props.subtitle}
          </StyledSubtitle>
        )}
        {isCollapsable && (
          <StyledArrow
            className={ `carbon-pod__arrow carbon-pod__arrow--${this.state.collapsed}` }
            isCollapsed={ this.state.collapsed }
          />
        )}
      </StyledHeader>
    );
  }

  get podDescription() {
    if (this.props.description) {
      return (
        <StyledDescription data-element='description' className='carbon-pod__description'>
          {this.props.description}
        </StyledDescription>
      );
    }
    return null;
  }

  get podContent() {
    return (
      <StyledCollapsibleContent className='carbon-pod__collapsible-content'>
        {this.podDescription}
        {/* <div className='carbon-pod__content'> */}
        <div>{this.props.children}</div>
      </StyledCollapsibleContent>
    );
  }

  toggleCollapse = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  // get mainClasses() {
  //   return classNames('carbon-pod', this.props.className, `carbon-pod--${this.props.alignTitle}`, {
  //     'carbon-pod--editable': this.props.onEdit,
  //     'carbon-pod--is-hovered': this.state.hoverEdit,
  //     'carbon-pod--content-triggers-edit': this.shouldContentHaveEditProps,
  //     'carbon-pod--internal-edit-button': this.props.internalEditButton
  //   });
  // }

  // get blockClasses() {
  //   return classNames(
  //     'carbon-pod__block',
  //     `carbon-pod__block--padding-${this.props.padding}`,
  //     `carbon-pod__block--${this.props.as}`,
  //     {
  //       'carbon-pod__block--no-border': !this.props.border,
  //       'carbon-pod__block--full-width': this.props.editContentFullWidth,
  //       'carbon-pod__block--footer': this.props.footer
  //     }
  //   );
  // }

  // get headerClasses() {
  //   return classNames('carbon-pod__header', `carbon-pod__header--${this.props.alignTitle}`, {
  //     [`carbon-pod__header--${this.state.collapsed}`]: this.state.collapsed !== undefined
  //   });
  // }

  // get contentClasses() {
  //   return classNames(
  //     'carbon-pod__content',
  //     `carbon-pod__content--${this.props.as}`,
  //     `carbon-pod__content--padding-${this.props.padding}`,
  //     {
  //       'carbon-pod__content--footer': this.props.footer,
  //       'carbon-pod--no-border': !this.props.border
  //     }
  //   );
  // }

  /**
  //  */
  // get footerClasses() {
  //   return classNames(
  //     'carbon-pod__footer',
  //     `carbon-pod__footer--${this.props.as}`,
  //     `carbon-pod__footer--padding-${this.props.padding}`, {
  //       'carbon-pod--no-border': !this.props.border
  //     }
  //   );
  // }

  get footer() {
    if (!this.props.footer) {
      return null;
    }

    return (
      <StyledFooter
        // className={ this.footerClasses }
        data-element='footer'
        padding={ this.props.padding }
      >
        {this.props.footer}
      </StyledFooter>
    );
  }

  get editActionClasses() {
    return classNames(
      'carbon-pod__edit-action',
      `carbon-pod__edit-action--${this.props.as}`,
      `carbon-pod__edit-action--padding-${this.props.padding}`,
      {
        'carbon-pod__edit-action--no-border': !this.props.border,
        'carbon-pod__display-on-hover': this.props.displayEditButtonOnHover
      }
    );
  }

  get edit() {
    if (!this.props.onEdit) {
      return null;
    }

    return (
      <StyledEditContainer
        // className='carbon-pod__edit-button-container'
        { ...this.hoverOverEditEvents }
        internalEditButton={ this.props.internalEditButton }
      >
        <StyledEditAction
          icon='edit'
          // className={ this.editActionClasses }
          podTheme={ this.props.as }
          internalEditButton={ this.props.internalEditButton }
          { ...this.linkProps() }
          padding={ this.props.padding }
          noBorder={ !this.props.border }
          displayOnlyOnHover={ this.props.displayEditButtonOnHover }
          isHovered={ this.state.hoverEdit }
        >
          {I18n.t('actions.edit', { defaultValue: 'Edit' })}
        </StyledEditAction>
      </StyledEditContainer>
    );
  }

  linkProps = () => {
    let props = {
      'data-element': 'edit'
    };

    if (typeof this.props.onEdit === 'string') {
      props.to = this.props.onEdit;
    } else if (typeof this.props.onEdit === 'object') {
      props = this.props.onEdit;
    }

    return props;
  };

  get hoverOverEditEvents() {
    const props = {
      onMouseEnter: this.toggleHoverState.bind(this, true),
      onMouseLeave: this.toggleHoverState.bind(this, false),
      onFocus: this.toggleHoverState.bind(this, true),
      onBlur: this.toggleHoverState.bind(this, false)
    };

    if (typeof this.props.onEdit === 'function') {
      props.onClick = this.processPodEditEvent;
      props.onKeyDown = this.processPodEditEvent;
    }

    return props;
  }

  get shouldContentHaveEditProps() {
    return (this.props.triggerEditOnContent || this.props.displayEditButtonOnHover) && this.props.onEdit;
  }

  /**
   * Processes the edit event only on certain event types
   *
   * @method processPodEditEvent
   * @param {Object} the event
   */
  processPodEditEvent = (ev) => {
    if (Event.isEnterKey(ev) || !Event.isEventType(ev, 'keydown')) {
      ev.preventDefault();
      this.props.onEdit(ev);
    }
  };

  toggleHoverState = (val) => {
    this.setState({ hoverEdit: val });
  };

  render() {
    let content;
    let hoverOverEditEvents = {};

    const { ...props } = validProps(this);

    delete props.className;

    if (!this.state.collapsed) {
      content = this.podContent;
    }

    if (this.shouldContentHaveEditProps) {
      hoverOverEditEvents = this.hoverOverEditEvents;
      hoverOverEditEvents.tabIndex = '0';
    }

    return (
      <StyledPod
        className={ this.mainClasses }
        { ...props }
        internalEditButton={ this.props.internalEditButton }
        isHovered={ this.state.hoverEdit }
        { ...tagComponent('pod', this.props) }
      >
        <StyledBlock
          className={ this.blockClasses }
          podTheme={ this.props.as }
          noBorder={ !this.props.border }
          internalEditButton={ this.props.internalEditButton }
          isHovered={ this.state.hoverEdit }
          contentTriggersEdit={ this.shouldContentHaveEditProps }
          editable={ this.props.onEdit }
          fullWidth={ this.props.editContentFullWidth }
          { ...hoverOverEditEvents }
        >
          <StyledContent
            data-element='content'
            className={ this.contentClasses }
            padding={ this.props.padding }
            hasFooter={ this.props.footer }
            podTheme={ this.props.as }
          >
            {this.podHeader}
            {content}
          </StyledContent>
          {this.footer}
        </StyledBlock>

        {this.edit}
      </StyledPod>
    );
  }
}

export default Pod;
