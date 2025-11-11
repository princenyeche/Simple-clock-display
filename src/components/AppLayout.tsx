import type { JSX, CSSProperties } from "react";
import {Box} from '@atlaskit/primitives';
import PageLayout from "./PageLayout";
import type {AppLayoutProps, BannerValues} from "../scripts/DataTypes";

function AppLayout({ topNav,
                        sideBar,
                        pageName,
                        childPage,
                        parentPage,
                        breadCrumbVisible,
                        aside,
                        panel,
                        children }: AppLayoutProps): JSX.Element {
   const banner = {type: "warning",
       message: "This is a sample message that shows how the banner announcement works within the app",
   visibility: true} satisfies { type: BannerValues; message: string; visibility: boolean };

   const appLayoutStyles = {
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
  maxWidth: '100%'
} satisfies CSSProperties | undefined;

    return (
         <Box style={appLayoutStyles}  testId={"App-layout-testId"} >
          <PageLayout banner={banner}
                      topNav={topNav ?? false}
                      sideNav={sideBar ?? true}
                      pageName={pageName ?? ""}
                      parentPage={parentPage ?? ""}
                      childPage={childPage ?? ""}
                      breadCrumb={breadCrumbVisible ?? false}
                      asideNav={aside ?? true}
                      panelNav={panel ?? false}>
               {children}
          </PageLayout>
        </Box>
    );
}

export default AppLayout;