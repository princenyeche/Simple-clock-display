import {type JSX} from "react";
import AiChatIcon from "@atlaskit/icon/core/ai-chat";
import Link from "@atlaskit/link";
import {Footer} from "@atlaskit/side-navigation";


function AppSideFooter(): JSX.Element {
    return (
        <Footer
               iconBefore={<AiChatIcon label={"Simple Clock display"} />}
               description={
                   <div>
                    <Link href={"https://github.com/princenyeche/simple-clock-display"} target={"_blank"}>
                        Give feedback
                    </Link>{' ∙ '}
                       <Link href={"https://github.com/princenyeche/simple-clock-display"} target={"_blank"}>
                        About this project
                    </Link>
                   </div>
               }
               >
                   Simple Digital Clock
               </Footer>
    );
}

export default AppSideFooter;