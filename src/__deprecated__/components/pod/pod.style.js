import styled, { css } from 'styled-components';

import Link from '../../../components/link';
import Icon from '../../../components/icon';

const StyledPod = styled.div`
  text-align: ${({ alignTitle }) => alignTitle};
  ${({ internalEditButton }) => internalEditButton && 'position: relative'};
  ${({ internalEditButton, isHovered }) => isHovered
    && internalEditButton
    && css`
      color: #003349;

      * {
        color: #003349;
      }
    `};

  display: flex;
`;

const blockThemes = {
  secondary: 'background-color: #f2f5f6',
  tertiary: 'background-color: #e6ebed',
  transparent: 'background-color: transparent',
  tile: 'box-shadow: 0 2px 3px 0 rgba(2, 18, 36, 0.2)'
};

const internalEditHoverBackgrounds = {
  secondary: 'background-color: #f2f5f6',
  tertiary: 'background-color: #e6ebed',
  transparent: 'background-color: transparent',
  tile: 'transparent'
};

const StyledBlock = styled.div`
  /* width: 100%; */
  /* background-color: $white; */

  background-color: ${({ theme }) => theme.colors.white};
  /* border: 1px solid $border-color; */
  border: 1px solid #ccd6db;

  width: 100%;
  ${({ podTheme }) => blockThemes[podTheme]};
  ${({ noBorder }) => noBorder && 'border: none'}
  ${({ editable, fullWidth, internalEditButton }) => (editable && (fullWidth || internalEditButton) ? 'width: 100%' : 'width: auto')}
  ${({ isHovered }) => isHovered && 'cursor: pointer'}
  ${({ contentTriggersEdit, isHovered, theme }) => isHovered
    && css`
      background-color: ${contentTriggersEdit ? theme.colors.primary : '#E5EAEC'};
      ${contentTriggersEdit
        && css`
          * {
            color: ${theme.colors.white};
          }
        `}
    `}
  ${({ internalEditButton, isHovered, podTheme }) => internalEditButton
    && isHovered
    && css`
      background-color: ${internalEditHoverBackgrounds[podTheme]};
    `}
`;

const contentPaddings = {
  'extra-small': '6px',
  small: '10px',
  medium: '15px',
  large: '30px 25px',
  'extra-large': '40px'
};

const StyledContent = styled.div`
  text-align: left;
  padding: ${({ padding }) => contentPaddings[padding] || 0};
  ${({ hasFooter, podTheme }) => hasFooter && podTheme === 'tile' && 'border-bottom: 1px solid #ccd6db'};
`;

const StyledCollapsibleContent = styled.div``;

const StyledDescription = styled.div`
  background: none;
  margin-bottom: 10px;
  font-size: 13px;
`;

const footerPaddings = {
  small: '10px',
  medium: '10px 15px',
  large: '15px 25px',
  'extra-large': '20px 40px'
};

const StyledFooter = styled.div`
  background-color: $pod-footer;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: inset 0px 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: ${({ padding }) => footerPaddings[padding] || 0};
`;

const StyledEditContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  ${({ internalEditButton }) => internalEditButton
    && css`
      position: absolute;
      right: 1px;
      top: 1px;
      z-index: 10;
    `}
`;

const editPaddings = {
  'extra-small': '6px',
  small: '10px',
  medium: '15px',
  large: '15px',
  'extra-large': '15px'
};

const editThemes = {
  secondary: 'background-color: #f2f5f6',
  tertiary: 'background-color: #e6ebed',
  transparent: 'background-color: transparent'
};

const StyledEditAction = styled(Link)`
  /* background-color: $white; */
  background-color: ${({ theme }) => theme.colors.white};;
  border: 1px solid #ccd6db;
  /* border-radius: 4px; */
  box-sizing: content-box;
  margin-left: 8px;
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: top;

  ${({ podTheme }) => editThemes[podTheme]};

  ${({ noBorder }) => noBorder && 'border: none'}
  ${({ internalEditButton }) => internalEditButton && 'border: none'}
  padding: ${({ padding }) => editPaddings[padding] || 0};

  ${({ displayOnlyOnHover, isHovered }) => displayOnlyOnHover && !isHovered && 'display: none'}

  ${({ isHovered, theme }) => isHovered
    && css`
      ${'' /* background-color: $blue-dark;
    color: $white; */}
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      [data-component='icon'] {
        color: ${theme.colors.white}
      }
    `}

  .carbon-link__content {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute;
  }
`;

const headerRightAlignmentMargins = {
  'extra-small': '20px',
  small: '25px',
  medium: '30px',
  large: '30px',
  'extra-large': '30px'
};

const StyledHeader = styled.div`
  margin-bottom: 15px;
  text-align: ${({ alignTitle }) => alignTitle};
  ${({ isCollapsed }) => isCollapsed === true
    && css`
      margin-bottom: 0;
      cursor: pointer;
    `};
  ${({ isCollapsed }) => isCollapsed === false && 'cursor: pointer'};
  ${({ alignTitle, internalEditButton, padding }) => alignTitle === 'right'
    && internalEditButton
    && css`
      margin-right: ${headerRightAlignmentMargins[padding]};
    `};
`;

const StyledSubtitle = styled.h5`
  margin-top: 8px;
  font-size: 14px;
  font-weight: normal;
`;

const StyledTitle = styled.h4`
  background: none;
  /* color: $grey-dark; */
  color: ${({ theme }) => theme.colors.slate};
  display: inline;
  font-size: 18px;
  font-weight: 600;
`;

const StyledArrow = styled(Icon).attrs({ type: 'dropdown' })`
  display: inline-block;
  position: relative;
  top: -1px;

  ${({ isCollapsed }) => isCollapsed && 'transform: rotate(180deg)'};
`;

export {
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
};
