import React from 'react'
import './write.css'
import { Grid, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import { ThemeContext } from '../../context/Theme'

export default function CheckedWriteItem({ click, titleText, labelText, htmlFor }) {
    const { ui } = React.useContext(ThemeContext);
    return (
        <Grid className='item-hover'
            style={{ display: 'flex', alignItems: 'center', marginTop: 10, borderBottom: `1px solid ${ui.fontColor1}` }}>
            <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor={htmlFor}>{labelText}</label>
            <Typography variant="h6" style={{ color: ui.fontColor1, margin: '0 auto', }}>{titleText}</Typography>
            <EditIcon className="save-write-item" onClick={click} />
        </Grid>
    )
}