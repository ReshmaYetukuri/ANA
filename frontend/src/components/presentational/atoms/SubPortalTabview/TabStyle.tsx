import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

export const TabsContainer = styled.div`
  .nav-tabs {
    height: 1.7rem;
    line-height: 0.1rem;
    min-width: 4rem;
  }

  .nav-link.active {
    background-color: ${constants.basicColor};
    color: ${constants.contentColor};
    height: 1.7rem;
  }
  .nav-link {
    border: 0.1px solid ${constants.dimmedTextColor};
    color: ${constants.standardTextColor};
    height: 1.7rem;
    width: 6rem;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom: 1rem;
    background: ${constants.basicBgColorInputField};
  }
  .nav-link:hover {
    box-shadow: 2px 0px ${constants.dimmedTextColor};
    border: 0.1px solid ${constants.dimmedTextColor};
    border-bottom: 0.1px solid ${constants.basicColor};
  }
  .tab-content {
    background-color: ${constants.basicColor};
    color: ${constants.contentColor};
    font-size: 20px;
  }
`;
