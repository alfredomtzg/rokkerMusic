import styled from 'styled-components';
import {Colors} from '../components/styles/globals'

const MainContainer = styled.div`
  min-height: 100vh;
  padding: 0 5vw;
  background-color: ${props => props.dark ? Colors.G700 : Colors.G100};
`

export default MainContainer; 