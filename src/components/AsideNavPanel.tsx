import {Aside } from '@atlaskit/navigation-system';
import {Box} from '@atlaskit/primitives';
import {token} from "@atlaskit/tokens";

function AsideNavPanel() {
    const appAsideStyles = {
    height: '100%',
    width: 'auto',
    border: '2px solid orange',
    minWidth: '120px',
        backgroundColor: token('elevation.surface')
}
    return (
        <Box style={appAsideStyles}>
            <Aside>
                <></>
            </Aside>
        </Box>

    );
}

export default AsideNavPanel;