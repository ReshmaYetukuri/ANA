import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

export const TabsContainer = styled.div`
  .nav-tabs {
    line-height: 0.1rem;
    font-size: ${constants.standardSubTextsize};
    li button {
      height: 2rem;
    }
  }

  .nav-link.active {
    background-color: ${constants.basicColor};
    border-color: ${constants.basicColor};
    color: ${constants.contentColor};
  }
  .nav-link {
    border: 1px solid ${constants.basicColor};
    color: ${constants.standardTextColor};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    background: ${constants.basicBgColorInputField};
  }
  .nav-link:hover {
    box-shadow: 2px 0px ${constants.dimmedTextColor};
    border: 1px solid ${constants.basicColor};
  }
  .tab-content {
    background-color: ${constants.basicColor};
    color: ${constants.contentColor};
    font-size: ${constants.standardSubTextsize};
    padding: 10px;
  }
`;
