import type { JSX, CSSProperties } from 'react';
import {Box} from '@atlaskit/primitives';
import PageLayout from './PageLayout';
import type {AppLayoutProps, BannerType} from '../scripts/DataTypes';

function AppLayout({ runBanner,
                       topNav,
                        sideBar,
                        pageName,
                        childPage,
                        parentPage,
                        breadCrumbVisible,
                        aside,
                        panel,
                        children }: AppLayoutProps): JSX.Element {
   const banner: BannerType = runBanner ?? {type: "warning",
       message: "This is a sample message that shows how the banner announcement works within the app",
   visibility: true}

   const appLayoutStyles = {
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
       overflow: 'scroll'
} satisfies CSSProperties | undefined;

    return (
         <Box style={appLayoutStyles}  testId={"App-layout-testId"} >
          <PageLayout banner={banner}
                      topNav={topNav ?? true}
                      sideNav={sideBar ?? true}
                      pageName={pageName ?? ""}
                      parentPage={parentPage ?? ""}
                      childPage={childPage ?? ""}
                      breadCrumb={breadCrumbVisible ?? false}
                      asideNav={aside ?? false}
                      panelNav={panel ?? false}>
               {children}
          </PageLayout>
        </Box>
    );
}

export default AppLayout;