import type {JSX } from "react";
import {
	ButtonItem,
	Section,
} from '@atlaskit/side-navigation';
import { FaListAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";


function AppMenu(): JSX.Element {
    return (
          <Section>
              <ButtonItem iconBefore={<FaListAlt />}>Dashboard</ButtonItem>
              <ButtonItem iconBefore={<FaBook />}>Audit logs</ButtonItem>
          </Section>
    );
}

export default AppMenu;