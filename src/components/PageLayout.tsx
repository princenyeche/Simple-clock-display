import type {JSX } from "react";
import { Box, Stack, Inline } from '@atlaskit/primitives/compiled';
import AppBanner from "./AppBanner";
import AppTopNav from "./AppTopNav";
import  type { BannerValues, PageLayoutProps} from "../scripts/DataTypes";
import AppMainContent from "./AppMainContent";
import AppSideNav from "./AppSideNav";
import AppSidePanel from "./AppSidePanel";


function PageLayout({banner, topNav, sideNav, children, asideNav, panelNav}: PageLayoutProps): JSX.Element {
     const appearance: BannerValues = banner.type;
    const message: string = banner.message;
    const isBannerVisible = banner.visibility;
    const appLayoutStyles = {
  padding: 'space.025',
  backgroundColor: 'color.background.neutral',
  width: 'auto',
  top: '0',
  display: 'grid',
  gap: 'space.025',
  overflow: 'scroll',
  maxWidth: '100%'
};
    return (
        <Stack space={"space.025"}>
            <Box testId={"PageLayout-testId"} style={appLayoutStyles}>
           {isBannerVisible && <AppBanner appearance={appearance} message={message} icon={<></>} />}
           {topNav && <AppTopNav />}

            <Inline alignBlock={"start"} testId={"bodyContent-sideNav-mainContent-asideNav"}>
           <Box style={{ border: "2px solid red"}}>{sideNav && <AppSideNav />}</Box>
          <Box style={{ border: "2px solid yellow"}}>  <AppMainContent>
                            {children}
            </AppMainContent></Box>

            <AppSidePanel aside={asideNav} panel={panelNav} />
            </Inline>

        </Box>
        </Stack>
    );
}

export default PageLayout;