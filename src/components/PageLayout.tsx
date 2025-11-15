import type {JSX, ReactElement} from 'react';
import { Box, Stack, Inline } from '@atlaskit/primitives/compiled';
import AppBanner from './AppBanner';
import AppTopNav from './AppTopNav';
import  type { BannerValues, PageLayoutProps} from '../scripts/DataTypes';
import AppMainContent from './AppMainContent';
import AppSideNav from './AppSideNav';
import AppSidePanel from './AppSidePanel';
import AppContent from './AppContent';
import { GoAlertFill } from "react-icons/go";
import { FaCircleInfo } from "react-icons/fa6";
import { BsFillXCircleFill } from "react-icons/bs";
import SpaceMargins from './SpaceMargins';


function PageLayout({banner, topNav, sideNav,
                        children, asideNav, panelNav,
                         pageName, childPage,
                        parentPage, breadCrumb}: PageLayoutProps): JSX.Element {
     const appearance: BannerValues = banner.type;
    const message: string = banner.message;
    const isBannerVisible: boolean = banner.visibility;
    const appLayoutStyles = {
  padding: 'space.025',
  backgroundColor: 'color.background.neutral',
  width: 'auto',
  top: '0',
  display: 'grid',
  gap: 'space.025',
  overflow: 'scroll',
};
    const determineBannerType:() => ReactElement = (): ReactElement => {
        let getBanner: ReactElement;
        if (banner.type === "announcement") {
            getBanner = <FaCircleInfo />
        }
        else if (banner.type === "warning") {
            getBanner = <GoAlertFill />
        }
        else {
            getBanner = <BsFillXCircleFill />
        }
        return getBanner
    }
    const showIcon: ReactElement = determineBannerType();
    return (
       <Stack space={"space.025"}>
            <Box testId={"PageLayout-testId"} style={appLayoutStyles}>
           {isBannerVisible && <AppBanner appearance={appearance} message={message} icon={showIcon} />}
           {topNav && <AppTopNav />}

            <Inline alignBlock={"start"} testId={"bodyContent-sideNav-mainContent-asideNav"}>
           <AppContent>
               <Box style={{ border: "2px solid red"}}>{sideNav && <AppSideNav />}</Box>

             <Box style={{ border: "2px solid yellow"}}>
                 <AppMainContent>
                     <SpaceMargins pageTitle={pageName}
                     childPage={childPage}
                    parentPage={parentPage}
                    visibility={breadCrumb}
                     />
                            {children}
                 </AppMainContent>
             </Box>
            <AppSidePanel aside={asideNav} panel={panelNav} />
           </AppContent>
            </Inline>
        </Box>
        </Stack>

    );
}

export default PageLayout;