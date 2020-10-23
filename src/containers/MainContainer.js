import styled from 'styled-components';

document.body.style.margin = 0;

const MainContainer = styled.div`
  min-height: 100vh;
  padding: 0 5vw;
  margin: 0;
  background-color: ${props => props.dark ? '#091E42' : '#FAFBFC'};
`

export default MainContainer;