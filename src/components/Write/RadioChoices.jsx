import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { ThemeContext } from '../../context/Theme'

export default function RadioChoices({setGist, labelText, name, value}) {
    const { ui } = React.useContext(ThemeContext);

    return (
        <FormControl style={{ margin: '1%', display: 'flex', justifyContent: 'center' }} component="fieldset">
            <FormLabel component="legend" style={{
                color: ui.fontColor1,
                fontSize: '20px'
            }} >{labelText}</FormLabel>
            <RadioGroup style={{ display: 'flex', flexDirection: 'row' }} aria-label="gist"
                name={name} value={value} onChange={(e) => setGist(e.target.value)}>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" style={{ color: ui.fontColor1 }} />
                <FormControlLabel value="No" control={<Radio />} label="No" style={{ color: ui.fontColor1 }} />
            </RadioGroup>
        </FormControl>
    )
}