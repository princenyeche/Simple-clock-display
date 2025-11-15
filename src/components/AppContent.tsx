import type {JSX, ReactNode} from 'react';
import {Box} from '@atlaskit/primitives';
import { Content } from '@atlaskit/page-layout';
import {token} from "@atlaskit/tokens";


function AppContent({children}: {children: ReactNode}): JSX.Element {
     const appContentStyles = {
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    display: 'flex',
         backgroundColor: token('elevation.surface'),

};
    return (
        <Box style={appContentStyles} testId={"Content window"}>
           <Content>
                {children}
           </Content>
        </Box>
    );
}

export default AppContent;