import { AppLogo, AppSwitcher } from '@atlaskit/navigation-system/top-nav-items';
import { SideNavToggleButton } from '@atlaskit/navigation-system/layout/side-nav';
import { BsClockFill } from "react-icons/bs";
import type {JSX} from "react";
import { Box, Text } from '@atlaskit/primitives/compiled';
import { Help } from '@atlaskit/navigation-system';
import { TopNav, TopNavStart, TopNavEnd } from '@atlaskit/navigation-system/layout/top-nav';
import { Notifications, Settings } from '@atlaskit/navigation-system/top-nav-items';
import Badge from '@atlaskit/badge';


function AppTopNav(): JSX.Element {
    return (
        <Box testId={"TopNav-Item-testId"}>
                <TopNav>
                    <TopNavStart sideNavToggleButton={true}>
            <SideNavToggleButton
                expandLabel={"Expand sidebar"}
                collapseLabel={"Collapse sidebar"} />
            <AppSwitcher label={"App switcher"} />
                       <Text color={"color.text"} size={"medium"}> <AppLogo name={"Simple Digital Clock"}
                     label={"Dashboard"}
                     href={"http://localhost:4173"}
                     icon={BsClockFill} /> </Text>
        </TopNavStart>
            <TopNavEnd>
                <Notifications badge={() => <Badge appearance={"important"}>5</Badge>} label={"Notifications"} />
                <Help label={"Help"} />
                <Settings label={"Settings"} />
            </TopNavEnd>
                </TopNav>
            </Box>
    );
}

export default AppTopNav;