import React from "react";
import "./accordion.css";
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    fontSize:"22px",
    border:"none"
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary  expandIcon={<FontAwesomeIcon className="productAccordionArrow" icon="fa-solid fa-chevron-right" />}

        {...props}
    />
))(({theme}) => ({
    backgroundColor:"#f0f6f8",
    fontSize:"26px",
    borderRadius:"16px",
    padding:"15px 45px 15px 20px",
    margin:" 0 0 15px 0",
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(2),

    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    border:"none",
    fontSize:"26px",
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="row accordion">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{fontSize:"24px",fontFamily:"Open Sans"}} >Tour overview</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"14px", fontFamily:"Open Sans"}}>
                        Join a pilot on a unique flight and share the cost with them, a nice way to discover the city
                        skyline aboard a private plane. Your pilot will happily share their passion for flying and take
                        you on a memorable trip around London's area, providing stunning views of the capital's suburbs.
                        Please note this aircraft is not allowed to fly over London and the flight schedule is subject
                        to changes depending on the pilot’s availability. Wingly is the leading Flight Sharing platform
                        in Europe. This is not a commercial flight but a private flight operated under the European cost
                        sharing rule (EASA). We provide an insurance by Allianz on each flight. Be aware that
                        cost-shared flights don’t have the same safety rules as commercial air transport flights. The
                        risks involved can be higher, as private pilots are not subject to the same level of continuous
                        checks and strict oversight rules from the authority. They still apply safety checks for every
                        flight and are responsible for passengers safety.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                border:"white"
            }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary sx={{
                    border:"white"
                }} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{fontSize:"24px",fontFamily:"Open Sans"}}>What included</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                    border:"none"
                }}>
                    <Typography sx={{fontSize:"14px"}}>
                        Join a pilot on a unique flight and share the cost with them, a nice way to discover the city
                        skyline aboard a private plane. Your pilot will happily share their passion for flying and take
                        you on a memorable trip around London's area, providing stunning views of the capital's suburbs.
                        Please note this aircraft is not allowed to fly over London and the flight schedule is subject
                        to changes depending on the pilot’s availability. Wingly is the leading Flight Sharing platform
                        in Europe. This is not a commercial flight but a private flight operated under the European cost
                        sharing rule (EASA). We provide an insurance by Allianz on each flight. Be aware that
                        cost-shared flights don’t have the same safety rules as commercial air transport flights. The
                        risks involved can be higher, as private pilots are not subject to the same level of continuous
                        checks and strict oversight rules from the authority. They still apply safety checks for every
                        flight and are responsible for passengers safety.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{fontSize:"24px",fontFamily:"Open Sans"}}>Cancelation info</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                    border:"white"
                }}>
                    <Typography>
                        Join a pilot on a unique flight and share the cost with them, a nice way to discover the city
                        skyline aboard a private plane. Your pilot will happily share their passion for flying and take
                        you on a memorable trip around London's area, providing stunning views of the capital's suburbs.
                        Please note this aircraft is not allowed to fly over London and the flight schedule is subject
                        to changes depending on the pilot’s availability. Wingly is the leading Flight Sharing platform
                        in Europe. This is not a commercial flight but a private flight operated under the European cost
                        sharing rule (EASA). We provide an insurance by Allianz on each flight. Be aware that
                        cost-shared flights don’t have the same safety rules as commercial air transport flights. The
                        risks involved can be higher, as private pilots are not subject to the same level of continuous
                        checks and strict oversight rules from the authority. They still apply safety checks for every
                        flight and are responsible for passengers safety.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}






