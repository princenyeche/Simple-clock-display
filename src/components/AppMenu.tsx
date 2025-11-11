import type {JSX } from "react";
import {
	ButtonItem,
	Section,
} from '@atlaskit/side-navigation';


function AppMenu(): JSX.Element {
    return (
          <Section>
              <ButtonItem>Dashboard</ButtonItem>
              <ButtonItem>Audit logs</ButtonItem>
          </Section>
    );
}

export default AppMenu;