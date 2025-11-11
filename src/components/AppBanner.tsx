import type { JSX, ReactElement } from "react";
import Banner from "@atlaskit/banner";
import type {BannerValues} from "../scripts/DataTypes";
import { Box } from '@atlaskit/primitives/compiled';


function AppBanner({appearance, message, icon = <></> }:
                   {appearance: BannerValues, icon: ReactElement, message: string }):
    JSX.Element {

  const bannerContentStyles = {
    width: '100%',
    height: '45px',
    display: 'inline-block',
};
    return (
        <Box testId={"Banner-Item-testId"} style={bannerContentStyles}>
           <Banner appearance={appearance} icon={icon}>
            {message}
            </Banner>
         </Box>

    )
}

export default AppBanner;