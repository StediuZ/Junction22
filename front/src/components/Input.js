import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 400px;
  font-family: 'Josefin Sans';
  font-size: 30px;
  font-weight: 400;
  line-height: 2.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};

  &:hover {
    /*
    border-color: ${blue[400]};
    */
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3pt solid rgba(159, 176, 219, 1);
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    
  return (
    <InputUnstyled onChange={props.onChange} slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function UnstyledInputBasic(props) {
  return <CustomInput {...props} />;
}
