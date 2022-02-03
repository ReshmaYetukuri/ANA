import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

export const TabsContainer = styled.div`

.nav-tabs{
    height:1.7rem;
    line-height: 0.1rem;
    min-width:4rem;
}
.nav-link.active {
    background-color: #00737d;
    color: ${constants.contentColor};
    height:1.7rem;
}
.nav-link{
    border:0.1px solid #cdf0f7;
    border-top-color: ${constants.dimmedTextColor};
    color:${constants.standardTextColor};
    height:1.7rem;
    width:6rem;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
    border-bottom: 1rem;
    background: ${constants.basicBgColorInputField};   
}
.nav-link:hover{
  border:1px solid #cdf0f7;
  border-top-color:${constants.dimmedTextColor};
  border-bottom: 1rem;
}
.tab-content{
  background-color: #00737d;
  color:${constants.contentColor};
  font-size: 20px;
}
`