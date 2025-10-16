import {useState, type JSX, useCallback} from 'react';
import Form,  {
  ErrorMessage,
  ValidMessage,
    Field
} from '@atlaskit/form';
import Select, { type OptionsType } from '@atlaskit/select';
import type {DataObjects} from "../scripts/DataTypes";
import {useClock} from "../contexts/ClockProvider";


/**
 * Provides a default list of the various clock faces
 * @return {OptionsType}
 */
const defaultOptions: OptionsType  = [
       {label: "Alarm face", value: "digitalClockAlarm"},
       {label: "Loopy face", value: "digitalClockLoopy"},
       {label: "Radio face", value: "digitalClockRadio"},
       {label: "Clock face", value: "digitalClocking"},
       {label: "Ticking face", value: "digitalClockTicking"},
   ]

/**
 * Creates a Select form button on the page and validates its
 * @constructor
 * @return {JSX.Element}
 */
function ClockFace(): JSX.Element {
    const [ clockFaceSelect, ] = useState<DataObjects | string>(defaultOptions[0]);
    const { getClockFace, onSetClockFace }: any = useClock();


    const handleClockFaceType = useCallback((value?: string | DataObjects) : string | void => {
    if (!value) {
        return 'REQUIRED';
    }
    onSetClockFace(value);
  }, [getClockFace]);

    const handleSubmit = (formState : any): void => {
       console.log('form state', formState);
    };
    return (
      <Form onSubmit={handleSubmit}>
                { ( { formProps }) => (
                    <form name="optionsValidation-select-clockFace" id={"clock-face-id-option"} {...formProps}>
                <Field
          name="select-validation"
          label="Choose a clock face type."
          validate={handleClockFaceType}
          defaultValue={clockFaceSelect}
          isRequired
        >
        {({ fieldProps, error, meta: { valid } }) => (
      <>
                            <Select
                                 {...fieldProps}
                                id="Choose a clock face type."
                                inputId={fieldProps.id}
                                options={defaultOptions}
                                maxMenuHeight={150}
                                placeholder="Select a clock face"
                                 labelId={fieldProps.id}
                                 isClearable
                                />
                                {valid && (
                <ValidMessage>You have entered a valid option</ValidMessage>
              )
                                }

              {error === 'REQUIRED' && (
                <ErrorMessage>This field is required</ErrorMessage>
              )
              }

                            </>
                         )}
                </Field>
            </form>
                )}

            </Form>
    )
}

export default ClockFace;