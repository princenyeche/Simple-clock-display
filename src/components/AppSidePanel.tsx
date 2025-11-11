import AsideNavPanel from "./AsideNavPanel";
import PanelNav from "./PanelNav";
import {Box} from '@atlaskit/primitives';
import type {JSX} from 'react';
import type {AppSidePanelProps} from "../scripts/DataTypes.ts";


function AppSidePanel({aside, panel}: AppSidePanelProps): JSX.Element {
    const appAsideStyles = {
    height: '100%',
    width: '300px',
    border: '2px solid orange',
    maxWidth: '330px'
}

const appPanelNavStyles = {
    height: '100%',
    width: '300px',
    border: '2px solid pink',
    maxWidth: '365px'
}
    return (
        <>
            {aside && <Box style={appAsideStyles}><AsideNavPanel /></Box>}
            {panel &&  <Box style={appPanelNavStyles}><PanelNav /></Box>}
        </>
    );
}

export default AppSidePanel;