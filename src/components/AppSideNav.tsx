import {type JSX, /*useCallback, useState */} from "react";
import {
	NavigationFooter,
	NavigationHeader,
	NavigationContent,
	SideNavigation,
} from '@atlaskit/side-navigation';
import AppMenu from "./AppMenu";
import AppSideHeader from "./AppSideHeader";
import AppSideFooter from "./AppSideFooter";
import {Box} from '@atlaskit/primitives';

function AppSideNav():JSX.Element {
    // const [ expandCollapse, setExpandCollapse ] = useState<boolean>(false);
    //
    // const onExpand: () => boolean = useCallback((): boolean => {
    //     setExpandCollapse((changeState: boolean): boolean => !changeState);
    //     return expandCollapse;
    // }, [expandCollapse]);

    const appSideNavStyles = {
    height: '100%',
   }

    return (
        <Box style={appSideNavStyles}>
            <SideNavigation label={"sideNavMenu"}>
            <NavigationHeader>
              <AppSideHeader />
            </NavigationHeader>
            <NavigationContent>
                 <AppMenu />
            </NavigationContent>
            <NavigationFooter>
               <AppSideFooter />
            </NavigationFooter>
        </SideNavigation>
        </Box>
    );
}

export default AppSideNav;