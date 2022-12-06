import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home() {
  return (

    <div >
      <div style={{ paddingLeft: "40px ", paddingTop: "20px " }}>
        <div> Jarukit ngamdee</div>
        <div className='textgrey3' style={{ paddingTop: "10px " }}>Mahasarakham university</div>
      </div>

      <div className='flex-container'>
        <div className='flex-items-1'>
          <a href='/visaHome'>
            <Card sx={{ width: "310px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="visa-4.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    VisaCard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visa Card Quiz 1
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>

        <div className='flex-items-1'>
          <a href='/robot'>
            <Card sx={{ width: "310px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="robot.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Robot Walk
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Robot Walk Quiz 2
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>

        <div className='flex-items-1'>
          <a href='/benz'>
            <Card sx={{ width: "310px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="benz.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                  Mercedes Benz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  รถยนต์ Mercedes-Benz
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>

      </div>
    </div>
  )
}
