import React from 'react'
import {PageContainer, MainContainer} from '../../containers/LayoutContainers'
import {QueueBar, QueueList} from './style'

const FullScreenQueue = () => {
  return(
    <PageContainer>
        <QueueBar>
        </QueueBar>
      <MainContainer>
        <QueueList>
 
        </QueueList>
      </MainContainer>
    </PageContainer>
  )
}

export default FullScreenQueue;