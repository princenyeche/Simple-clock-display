import {type JSX} from "react";
import { RiMessage2Line } from "react-icons/ri";
import Link from "@atlaskit/link";
import {Footer} from "@atlaskit/side-navigation";


function AppSideFooter(): JSX.Element {
    return (
        <Footer
               iconBefore={<RiMessage2Line />}
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