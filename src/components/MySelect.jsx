import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySelect = ({ options, defaultValue, value, onChange }) => {

    return (
        <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" disabled value=''>
                    {defaultValue}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={value}
                    onChange={event => onChange(event.target.value)}>
                    {options.map(option =>
                        <MenuItem key={option.value} value={option.value}>
                            {option.name}
                        </MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    )
}

export default MySelect;

{/* <Select value={value}
        onChange={event => onChange(event.target.value)} >
    <option disabled value=''>{defaultValue}</option>
    {options.map(option =>
        <MenuItem key={option.value} value={option.value}>
            {option.name}
        </MenuItem>)}
</Select> */}
