import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// requires a loader
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaidIcon from '@mui/icons-material/Paid';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Box from '@mui/material/Box';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

export default function VisaDetail() {

  const [age, setAge] = React.useState('10');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (

    <div className='CPNcolor'>
      <Head>
        <title>VisaDetail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Roboto&display=swap" rel="stylesheet" />

      </Head>

      <div style={{ padding: 20 }}>

        <div className='boxbetween'>
          <a href="/" className='iconWhite'>
            <NotesRoundedIcon />
          </a>
          <div className='iconWhite'>
            <EventNoteIcon />
          </div>
        </div>

        <div className='textgreen'>
          <div>Availble balance</div>
        </div>
        <div>
          <div  >
            <div className='textBalance'>
              <div className='iconbule2'>
                <PaidIcon />
              </div>
              <div style={{ padding: "0px 0px 0px 5px", }}>7,392.00</div>
            </div>
            <div className='textgrey'>June 9,2018</div>

          </div>
        </div>

        <div className='BoxCPN'>
          <div style={{ padding: "0px 20px 0px 20px" }}>
          <div className='flex-container-row'>
            <div className='flex-items-2'>42012</div>
            <div className='flex-items-2'>3049</div>
            <div className='flex-items-2'>3049</div>
            <div className='flex-items-2'>9815</div>
          </div>
          <div className='flex-container-row'>
          <div className='textgrey2'>EXPIRE&emsp;*&emsp;02/22</div>
          <div className='textgrey2'>CVC CODE&emsp; *&emsp;230</div>
          </div> 
          </div>

        </div>
        <div style={{ padding: "20px 0px 20px 0px" }}>
          <div className='boxstyle2'>
            <div style={{ width: "50%" }}>
              <div style={{ padding: "0px 40px 5px 40px" }}>
                <div className='boxstyle4'>Income</div>
              </div>
              <div className='divrowgreen'>

                <ArrowDownwardIcon />

                <div style={{ padding: "0px 0px 0px 5px" }}>$9,302.00</div>
              </div>

            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <div style={{ padding: "0px 40px 5px 40px" }}>
                <div className='boxstyle4'>Expense</div>
              </div>

              <div className='divrowred'>

                <ArrowUpwardIcon />

                <div style={{ padding: "0px 0px 0px 5px" }}>$2,790.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className='boxspace'>
          <div className='boxbetween'>
            <div>
              <div className='textblueh3'> Detail of movements</div>
            </div>
            <Box sx={{ minWidth: 80 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>weekly</MenuItem>
                  <MenuItem value={20}>month</MenuItem>
                  <MenuItem value={30}>year</MenuItem>
                </Select>
              </FormControl>
            </Box>

          </div>

          <div className='boxstyle2' >
            <div className='icon'>
              <RestaurantIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Restaurant Manhattan</div>
              <div class="textleft2">june 10,2018</div>
            </div>
            <div className='divrowred-2'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$170</div>
              <ArrowUpwardIcon />
            </div>
          </div>
        </div>

        <div className='boxspace'>
          <div className='boxstyle2'>
            <div className='icon'>
              <PaidIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Deposit Freeiance</div>
              <div class="textleft2">June 7,2018</div>
            </div>
            <div className='divrowgreen-2'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$800</div>
              <ArrowDownwardIcon />
            </div>
          </div>
        </div>

        <div className='boxspace'>
          <div className='boxstyle2'>
            <div className='icon'>
              <ShoppingBasketIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Central Market</div>
              <div class="textleft2">May 6,2018</div>
            </div>
            <div className='divrowred-2'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$50</div>
              <ArrowUpwardIcon />
            </div>
          </div>
        </div>

        <div className='boxspace'>
          <div className='boxstyle2'>
            <div className='icon'>
              <PaidIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Salary Deposit</div>
              <div class="textleft2">June 1,2018</div>
            </div>
            <div className='divrowgreen-2'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$4,200</div>
              <ArrowDownwardIcon />
            </div>
          </div>
        </div>

        <div className='boxspace' >
          <div className='boxstyle2'>
            <div className='icon'>
              <ShoppingBasketIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Central Market</div>
              <div class="textleft2">June 1,2018</div>
            </div>
            <div className='divrowred-2'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$37</div>
              <ArrowUpwardIcon />
            </div>
          </div>
        </div>
        <div style={{ height: "10px" }}></div>

      </div>
    </div>
  )
}
