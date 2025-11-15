import type {JSX, ReactNode} from 'react';
import {Box} from '@atlaskit/primitives';
import {Main } from '@atlaskit/navigation-system';
import {token} from '@atlaskit/tokens';

function AppMainContent({children}: {children: ReactNode}): JSX.Element {

    const appMainStyles = {
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    display: 'flex',
        minWidth: '1000px',
        backgroundColor: token('elevation.surface'),
        alignItems: 'start',
        marginLeft: '38px'
};
    return (
        <Box testId={"App-main-content-testId"} style={appMainStyles}>
           <Main skipLinkLabel={"Main Content"}>
                {children}
           </Main>
        </Box>
    );
}

export default AppMainContent;