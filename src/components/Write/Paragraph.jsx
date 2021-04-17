import React from 'react';
import './write.css'
import { Grid, Typography } from '@material-ui/core';
import { ThemeContext } from '../../context/Theme'
import { GlobalContext } from '../../context/Global'
import EditIcon from '@material-ui/icons/Edit';

export default function Paragraph({ paragraph }) {
    const { ui } = React.useContext(ThemeContext);
    const { editParagraph } = React.useContext(GlobalContext);

    return (
        <Grid className='paragraph-write' item>
            <Grid style={{backgroundColor: ui.second }} className='write-paragraph-title-wrapper'>

                <Typography style={{ color: ui.fontColor1 }}
                    className='write-paragraph-title'
                    variant="h5" >
                    {paragraph.title}</Typography>
                    <EditIcon className="save-write-item" onClick={() => editParagraph(paragraph)}/>
                    
            </Grid>
            {
                paragraph.text.map((t, i) => {
                    return <Typography key={i}
                        style={{ color: ui.fontColor1 }}
                        variant="subtitle1"
                        className='write-paragraph-text'
                    >{t}</Typography>
                })
            }
        </Grid>
    )
}