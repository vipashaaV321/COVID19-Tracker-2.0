import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import { Grid } from '@material-ui/core';
import cx from 'classnames';
import covid from '../../images/covid1.png'
import covid1 from '../../images/rec.png'


const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return 'Loading..!!';

    }
   // console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={10} md={3}  className={cx(styles.card,styles.infected)}>
                <CardContent>
                {/* <img src={covid} ></img> */}
                    <Typography gutterBottom  color="textPrimary">
                        <h3>Infected</h3>
                    </Typography>
                    <Typography gutterBottom variant="h5"  color="textSecondary">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={1}
                            separator=","
                        />
                    </Typography>
                    <Typography gutterBottom color="textSecondary">
                       {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h2" color="textSecondary">
                        Number of Active Cases of Covid-19
                    </Typography>
                 </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                {/* <img src={covid} ></img> */}
                <Typography gutterBottom  color="textPrimary">
                        <h3>Recovered</h3>
                    </Typography>
                    <Typography gutterBottom variant="h5"  color="textSecondary">
                    <CountUp
                            start={0}
                            end={recovered.value}
                            duration={1}
                            separator=","
                        />
                    </Typography>
                    <Typography gutterBottom color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h2" color="textSecondary">
                        Number of Recoverd Cases of Covid-19
                    </Typography>
                 </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                {/* <img src={covid} ></img> */}
                <Typography gutterBottom  color="textPrimary">
                        <h3>Deaths</h3>
                    </Typography>
                    <Typography gutterBottom variant="h5"  color="textSecondary">
                    <CountUp
                            start={0}
                            end={deaths.value}
                            duration={1}
                            separator=","
                        />
                    </Typography>
                    <Typography gutterBottom color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h2" color="textSecondary">
                        Number of Deaths from  Covid-19
                    </Typography>
                 </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;