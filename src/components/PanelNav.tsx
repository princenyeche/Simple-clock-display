import {Panel } from '@atlaskit/navigation-system';
import {Box} from "@atlaskit/primitives";
import {token} from "@atlaskit/tokens";

function PanelNav() {
    const appPanelNavStyles = {
    height: '100%',
    width: 'auto',
    border: '2px solid pink',
    minWidth: '120px',
    backgroundColor: token('elevation.surface')
}
    return (
            <Box style={appPanelNavStyles}>
                <Panel>
                    <></>
                </Panel>
            </Box>

    );
}

export default PanelNav;