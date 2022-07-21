import s from "../Partners.module.css"
import {useEffect} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const AvailablePartner = (props)=> {
    useEffect(()=>{
        props.getPartnersList(props.adminPartnerListMeta.current_page,props.token)
    },[])

    return <div className={s.partnerContainer}>
        {props.adminPartnerListData.map(i=> <Card sx={{ width: 200 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Company name
                </Typography>
                <Typography variant="h5" component="div">
                    {i.company_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Create at<br/>{i.created_at}
                </Typography>
                <Typography variant="body2">
                    {i.statusObject.name}
                    <br />
                    {`${i.status}`}
                </Typography>
            </CardContent>
        </Card>
        )}
    </div>
}
export default AvailablePartner