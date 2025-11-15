import { Box } from '@atlaskit/primitives';
import AppProvider, {useColorMode, useSetColorMode } from '@atlaskit/app-provider';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import type {ReactNode, JSX} from "react";


export function ColorModeSwitcher(): JSX.Element {
    const colorMode = useColorMode();
    const setColorMode = useSetColorMode();

    return (
       <Box backgroundColor="elevation.surface" padding="space.200">
      <Box as="h3" paddingBlockEnd="space.200">
        Current color mode: {colorMode}
      </Box>
      <DropdownMenu trigger="Change color mode">
        <DropdownItemGroup>
          <DropdownItem onClick={() => setColorMode('light')}>
            Light
          </DropdownItem>
          <DropdownItem onClick={() => setColorMode('dark')}>Dark</DropdownItem>
          <DropdownItem onClick={() => setColorMode('auto')}>Auto</DropdownItem>
        </DropdownItemGroup>
      </DropdownMenu>
    </Box>
    );
}


function ThemeProvider({children}: {children: ReactNode}): JSX.Element {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    );
}

export default ThemeProvider;