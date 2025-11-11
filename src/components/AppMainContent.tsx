import type {JSX} from "react";
import {Box} from '@atlaskit/primitives';
import type {ReactNode} from "react";

function AppMainContent({children}: {children: ReactNode}): JSX.Element {
    const appMainStyles = {
    width: '1000px',
    height: '700px',
    overflow: 'scroll',
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%'

};
    return (
        <Box testId={"App-main-content-testId"} style={appMainStyles}>
            {children}
        </Box>
    );
}

export default AppMainContent;