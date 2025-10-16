import type {JSX} from "react";
import '../App.css';
import {Box, Inline, Stack} from "@atlaskit/primitives/compiled";
import type {DataObjects} from "../scripts/DataTypes";

/**
 * Renders a clock display shape by passing additional datetime info
 * @param dateLine - A string of the date e.g. Wed Oct 11 2025
 * @param timeLine - The actual current time
 * @param colorScheme - Colorscheme control to the display
 * @param face - The face type of the clock
 * @constructor
 * @return {JSX.Element}
 */
function ClockDisplay(
    {dateLine, timeLine, colorScheme, face}: {
        dateLine: string| number,
        timeLine: string | number,
        colorScheme: DataObjects,
        face: DataObjects}
): JSX.Element {
      return (
          <Box testId={"clockType-face-display"}>
              <Inline space={"space.050"} spread={"space-between"}>
                  <Stack space={"space.100"} xcss={`digitalBackground-AppleCorn`}>
                      <Stack alignInline={"start"} xcss={`${face} displayClockDate ${colorScheme ? `${colorScheme.value}` : 'digitalClockColorDefault'}`}>
                          {dateLine}
                      </Stack>

                      <Stack alignInline={"center"} xcss={`${face} displayMainClock ${colorScheme ? `${colorScheme.value}` : 'digitalClockColorDefault'}`}>
                          {timeLine}
                      </Stack>

                  </Stack>
              </Inline>

          </Box>
      )
    }

export default ClockDisplay;