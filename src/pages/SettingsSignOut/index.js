import React from 'react'
import { PageContainer } from '../../containers/LayoutContainers';
import { SignOutMsg } from './style';

const SettingsSignOut = () => {
  return(
    <PageContainer dark>
      <SignOutMsg>
        <h1>Rokk you soon!</h1>
      </SignOutMsg>
    </PageContainer>
  )
}

export default SettingsSignOut;