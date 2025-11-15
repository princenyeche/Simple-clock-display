import AsideNavPanel from './AsideNavPanel';
import PanelNav from './PanelNav';
import  {type JSX} from 'react';
import type {AppSidePanelProps} from '../scripts/DataTypes';

function AppSidePanel({aside, panel}: AppSidePanelProps): JSX.Element {

    return (
        <>
            {aside && <AsideNavPanel />}
            {panel &&  <PanelNav />}
        </>
    );
}

export default AppSidePanel;