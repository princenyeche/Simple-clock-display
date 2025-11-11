import {type JSX} from "react";
import {
    Header
} from '@atlaskit/side-navigation';
import AiAgentIcon from '@atlaskit/icon/core/ai-agent';
import {Box} from '@atlaskit/primitives';


function AppSideHeader(): JSX.Element {
    return (
        <Box> <Header component={({children, ...props}) => (
                   <>
                       <a href={"https://github.com/princenyeche"} {...props}>
                           {children}
                       </a>
                   </>
               )}
               iconBefore={<AiAgentIcon label={"Simple Clock"}/>}
             description={"A dashboard for clocks"}
               >
                 Simple Digital Clock
               </Header></Box>
    );
}

export default AppSideHeader;