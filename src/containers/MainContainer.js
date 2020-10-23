import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;
  padding: 0 5vw;
  background-color: ${props => props.dark ? '#091E42' : '#FAFBFC'};
`

export default MainContainer;