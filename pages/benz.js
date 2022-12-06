import logo from "../public/benz.jpg";
import React from "react";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChatIcon from '@mui/icons-material/Chat';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

export default function Benz() {
    return (
        <div>
            <div className="Boxbenz">
                <div className="flex-container-row-5" style={{ alignItems: "center", justifyContent: "space-between" }} >

                    <div className="flex-items-3" >
                        <img style={{ height: "80px" }} src={"benz.jpg"} />
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span style={{ color: "white" }}>Mercedes-Benz.</span>
                        </div>

                    </div>

                    <div className="flex-container-row-5" style={{ alignItems: "center" }} >
                        <span className="flex-items-3" style={{ padding: "0px 30px" }}>
                            Copyrighted 2022. Mercedes-Benz (Thailand) Limited
                            ขอสงวนสิทธิ์ทั้งหมด (ผู้จัดทำ)
                        </span>
                        <div style={{ paddingRight: "10px" }}>
                            <Paper
                                component="form"
                                sx={{ p: "2px 4px", display: "flex", alignItems: "center", backgroundColor: "#383838" }}>
                                <span style={{ color: "white" }}>EN</span>
                            </Paper>
                        </div>
                        <div style={{ paddingRight: "30px" }}>
                            <Paper
                                component="form"
                                sx={{ p: "2px 4px", display: "flex", alignItems: "center", backgroundColor: "#383838" }}>
                                <span style={{ color: "white" }}>TH</span>
                            </Paper>
                        </div>
                        <div style={{ paddingRight: "30px" }}>
                            <Paper
                                component="form"
                                sx={{ p: "2px 4px", display: "flex", alignItems: "center", backgroundColor: "#383838" }}>
                                <div class="search" style={{ padding: "5px 0px" }}>
                                    <div className="fcC-7">
                                        <input type="text" class="searchTerm" placeholder="ค้นหา" style={{ backgroundColor: "#383838", borderWidth: "0px" }} />
                                    </div>
                                    <IconButton type="button" sx={{ p: "10px", color: "white" }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </div>
                            </Paper>
                        </div>
                        <div className="flex-items-4">
                            <a href="#about">< StarIcon /></a>

                        </div>
                        <div className="flex-items-4">
                            <a href="#about">
                                <PersonIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "2px" }}></div>
            <div className="Boxbenz-2">
                <div className="flex-container-row-3">
                    <div className="flex-items-4">
                        <a href="#about">< TimeToLeaveIcon /></a>
                    </div>
                    <a href="#about" className="flex-items-4">รุ่นรถยนต์</a>
                    <a a href="#about" className="flex-items-4">การซื้อ</a>
                    <a href="#about" className="flex-items-4">บริการทางการเงิน</a>
                    <a href="#about" className="flex-items-4">บริการหลังการขายและอะไหล่</a>
                    <a href="#about" className="flex-items-4">แบรนด์ของเรา</a>
                </div>
            </div>
            <div style={{ paddingTop: "2px" }}></div>
            <div className="Boxbenz-3">
                <div className="flex-container-center">
                    รับข้อเสนอที่ดีที่สุดผ่านโชว์รูมออนไลน์ที่นี่
                </div>
            </div>
            <div className="bg-image" style={{ height: "720px" }}>
                <div className="flex-container-Column">
                    <div style={{ paddingTop: "250px", paddingLeft: "100px" }}>
                        <div className="titer-text" style={{ color: "white" }}>Motor Expo 2022</div>
                        <div className="titer-text-2" style={{ color: "white" }}>VISION OF THE BEYOND.</div>
                        <div style={{ paddingTop: "32px" }}>
                            <Button variant="contained" style={{ height: "50px", borderRadius: "2px" }}>
                                <h3>ข้อมูลเพิ่มเติม</h3>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="titer-text-3" style={{ paddingTop: "80px", paddingLeft: "100px", paddingBottom: "0px" }}>
                <p>ข้อมูลล่าสุด</p>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////// */}
            <div className="flex-container-row-3" style={{ paddingLeft: "150px" }}>

                <div style={{ paddingRight: "30px" }}>
                    <div className="flex-container-Column2">

                        <div className="bg-image-s1" ></div>

                        <div style={{ padding: "24px 32px 0px " }}>
                            <div className="comtainer-wrap">
                                <h2>Every action counts.</h2>
                            </div>
                            <div className="comtainer-wrap">
                                <p>Join our journey to a fully electric future. Our co-promotion with Avatar: The Way of Water messaging focuses on responsibility to our planet.
                                </p>
                            </div>
                        </div>
                        <div className="bt-car">
                            <Button variant="contained" style={{ width: "85%", height: "50px", borderRadius: "2px" }}>
                                <h3>ข้อมูลเพิ่มเติม</h3>
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{ paddingRight: "30px" }}>
                    <div className="flex-container-Column2">
                        <div className="bg-image-s2" ></div>
                        <div style={{ padding: "24px 32px 0px " }}>
                            <div className="comtainer-wrap">
                                <h2>The new C-Class Plug-in Hybrid. Stay in your comfort zone.</h2>
                            </div>
                            <div className="comtainer-wrap">
                                <p>สัมผัสบรรยากาศที่ดีในพื้นที่ส่วนตัว กับ The new C-Class Plug-in Hybrid. อีกขั้นกับระบบขับเคลื่อนไฟฟ้าที่มาพร้อมการออกแบบภายนอก และภายในที่โฉบเฉี่ยว พร้อมเทคโนโลยีอัจฉริยะที่ซัพพอร์ตทุกการใช้งาน
                                </p>
                            </div>
                        </div>
                        <div className="bt-car">
                            <Button variant="contained" style={{ width: "85%", height: "50px", borderRadius: "2px" }}>
                                <h3>ข้อมูลเพิ่มเติม</h3>
                            </Button>
                        </div>
                    </div>
                </div>

                <div style={{ paddingRight: "30px" }}>
                    <div className="flex-container-Column2">
                        <div className="bg-image-s3" ></div>
                        <div style={{ padding: "24px 32px 0px " }}>
                            <div className="comtainer-wrap">
                                <h2>The new Vito. All The Unexpected Desires.</h2>
                            </div>
                            <div className="comtainer-wrap">
                                <p>The new Vito จาก Mercedes-Benz โฉบเฉี่ยวคล่องตัวบนทุกเส้นทาง โดนเด่น ทั้งภายนอกและภายใน ห้องโดยสารกว้าง 11 ที่นั่ง ปรับฟังก์ชันตอบโจทย์ได้ทุกช่วงเวลาสำคัญ
                                </p>
                            </div>
                        </div>
                        <div className="bt-car">
                            <Button variant="contained" style={{ width: "85%", height: "50px", borderRadius: "2px" }}>
                                <h3>ข้อมูลเพิ่มเติม</h3>
                            </Button>
                        </div>
                    </div>
                </div>

                <div style={{ paddingRight: "30px" }}>
                    <div className="flex-container-Column2">
                        <div className="bg-image-s4" ></div>
                        <div style={{ padding: "24px 32px 0px " }}>
                            <div className="comtainer-wrap">
                                <h2>Mercedes-EQ Technology. Welcome to the Magical Garage.</h2>
                            </div>
                            <div className="comtainer-wrap">
                                <p>สัมผัสสถานที่มหัศจรรย์ซึ่งทุกสิ่งเป็นไปได้ นวัตกรรมสำหรับการขับเคลื่อนแห่งอนาคตรอคุณอยู่ที่นี่
                                </p>
                            </div>
                        </div>
                        <div className="bt-car">
                            <Button variant="contained" style={{ width: "85%", height: "50px", borderRadius: "2px" }}>
                                <h3>ข้อมูลเพิ่มเติม</h3>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="titer-text-3" style={{ paddingTop: "80px", paddingLeft: "100px" }}>
                <p>รถยนต์ Mercedes-Benz</p>
            </div>

            <div className="flex-container-row-3" style={{ padding: "30px 90px" }}>
                <Button variant="contained" className="bt-catagry">
                    <h3>รถยนต์ทุกรุ่น</h3>
                </Button>
                <Button variant="contained" className="bt-catagry">
                    <h3>Mercedes-EQ</h3>
                </Button>
                <Button variant="contained" className="bt-catagry">
                    <h3>Mercedes-AMG</h3>
                </Button>
                <Button variant="contained" className="bt-catagry">
                    <h3>รุ่นใหม่ล่าสุด</h3>
                </Button>

            </div>
            <div className="flex-container-row-5" >

                <div className="flex-container-Column fcC-6" style={{ paddingTop: "10px", paddingLeft: "100px", paddingBottom: "30px", paddingRight: "50px", width: "45%" }}>
                    <h2>ระบบเชื้อเพลิง</h2>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="รถยนต์ไฟฟ้า" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="รถยนต์ไฮบริด" />
                    </FormGroup>
                    <h2>ประเภทของรถยนต์</h2>
                    <button className="bt-catagry-2 ">ซาลูน</button>
                </div>

                <div className="flex-container-row-3" style={{ justifyContent: "flex-start" }}>

                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">EQS Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 7,900,000 บาท</div>
                        <div className="bg-image-s5 " ></div>
                    </div>
                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">A-Class Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 1,990,000.00 บาท</div>
                        <div className="bg-image-s6 " ></div>
                    </div>
                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">A-Class Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 5,900,000</div>
                        <div className="bg-image-s7 " ></div>
                    </div>
                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">A-Class Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 1,990,000.00 บาท</div>
                        <div className="bg-image-s6 " ></div>
                    </div>
                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">A-Class Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 5,900,000</div>
                        <div className="bg-image-s7 " ></div>
                    </div>
                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">EQS Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 7,900,000 บาท</div>
                        <div className="bg-image-s5 " ></div>
                    </div>
                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">A-Class Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 1,990,000.00 บาท</div>
                        <div className="bg-image-s6 " ></div>
                    </div>
                    <div className="flex-container-Column3 centerLine" style={{ margin: "20px 30px" }}>
                        <span className="set-text-car">A-Class Saloon</span>
                        <div className="set-text-car-2">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 5,900,000</div>
                        <div className="bg-image-s7 " ></div>
                    </div>
                </div>
            </div>

            <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                <h2 >หมายเหตุ</h2>
                <div className="lines"></div>
                <p className="set-text-car-3">ราคาทั้งหมดที่แสดงอยู่คือราคาแนะนำข้างต้นรวมภาษีมูลค่าเพิ่มร้อยละเจ็ด บริษัท เมอร์เซเดส-เบนซ์ (ประเทศไทย) จำกัด ขอสงวนสิทธิ์ในการเปลี่ยนแปลงราคาแนะนำและอุปกรณ์ โดยมิต้องแจ้งให้ทราบล่วงหน้า  ภาพประกอบอาจแสดงอุปกรณ์เสริมและรายการของอุปกรณ์เสริมซึ่งไม่ได้เป็นส่วนหนึ่งของข้อกำหนดมาตรฐาน กับประเภทของรุ่นรถยนต์ ลักษณะ อุปกรณ์เสริม และ /หรือสีที่มีให้ในแต่ละประเทศ รถยนต์บางรุ่นอาจจะไม่มีประเภท ลักษณะ อุปกรณ์เสริม และ /หรือสีที่แสดงในประเทศของคุณหรืออาจมีรายละเอียดเฉพาะที่แตกต่างกัน นอกจากนี้รถยนต์บางรุ่น ลักษณะ อุปกรณ์เสริม และ /หรือสีอาจมีใช้ร่วมกับรุ่นอื่นเท่านั้น สำหรับข้อมูลที่เป็นปัจจุบันและเฉพาะเจาะจงมากขึ้นเกี่ยวกับประเภทของรุ่น ลักษณะ อุปกรณ์เสริม และ /หรือสีที่มีในประเทศของคุณและการกำหนดราคานั้น สามารถติดต่อผู้จำหน่ายเมอร์เซเดส-เบนซ์อย่างเป็นทางการใกล้บ้านคุณ</p>
            </div>

            <div className="flex-container-row " style={{ padding: "60px 100px" }}>
                <div className="boxstyle6" >
                    <div className="flex-container-row-4" >
                        <div style={{ padding: "0px 10px" }}>
                            < LocalGroceryStoreOutlinedIcon />
                        </div>
                        <div className="flex-container-Column5" style={{ paddingRight: "90px" }}>
                            <span className="text-boxstyle6">จองออนไลน์</span>
                            <span>ค้นหา Mercedes คันใหม่ของคุณ</span>
                        </div>
                    </div>
                </div>
                <div className="boxstyle6" >
                    <div className="flex-container-row-4" >
                        <div style={{ padding: "0px 10px" }}>
                            < FormatAlignLeftOutlinedIcon />
                        </div>
                        <div className="flex-container-Column5" style={{ paddingRight: "90px" }}>
                            <span className="text-boxstyle6">โบรชัวร์และใบเสนอราคา</span>
                            <span>ดาวน์โหลดตอนนี้</span>
                        </div>
                    </div>
                </div>
                <div className="boxstyle6" >
                    <div className="flex-container-row-4" >
                        <div style={{ padding: "0px 10px" }}>
                            < StoreOutlinedIcon />
                        </div>
                        <div className="flex-container-Column5" style={{ paddingRight: "90px" }}>
                            <span className="text-boxstyle6">ค้นหาผู้จำหน่ายฯ</span>
                            <span>ค้นหาตัวแทน Mercedes-Benz</span>
                        </div>
                    </div>
                </div>
                <div className="boxstyle6" >
                    <div className="flex-container-row-4" >
                        <div style={{ padding: "0px 10px" }}>
                            < CalculateOutlinedIcon />
                        </div>
                        <div className="flex-container-Column5" style={{ paddingRight: "90px" }}>
                            <span className="text-boxstyle6">บริการทางการเงิน</span>
                            <span>ค้นหาผลิตภัณฑ์ทางการเงินที่เหมาะสม</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Boxbenz-3" style={{ padding: "90px" }}>
                <div className="flex-container-center-2" >
                    <div><  KeyboardArrowUpOutlinedIcon /></div>
                    <h3 style={{ color: "white" }}>กลับขึ้นด้านบน</h3>
                </div>
            </div>

            <div className="Boxbenz-5" style={{ padding: "50px" }}>
                <div className="flex-container-row-4"  >
                    <div></div>
                    <div className="flex-container-Column4">
                        <h2 style={{ color: "white" }}>ซื้อรถยนต์</h2>
                        <span className="flex-items-5">ค้นหารถยนต์ใหม่</span>
                        <span className="flex-items-5">จองการทดลองขับ</span>
                        <span className="flex-items-5">ค้นหารถยนต์ใช้แล้ว</span>
                        <span className="flex-items-5">ออกแบบรถของคุณ</span>
                        <span className="flex-items-5">ใบรายการราคาและโบรชัวร์</span>
                        <span className="flex-items-5">โปรโมชัน</span>
                    </div>
                    <div className="flex-container-Column4">

                        <h2 style={{ color: "white" }}>บริการทางการเงิน</h2>
                        <span className="flex-items-5">บริการทางการเงินและเครื่องมือคำนวณค่างวด</span>
                        <span className="flex-items-5">ค้นหาตัวแทนจำหน่ายใกล้บ้านคุณ</span>
                        <span className="flex-items-5">บริการประกันภัย</span>
                        <span className="flex-items-5">บริการลูกค้าออนไลน์</span>

                    </div>
                    <div className="flex-container-Column4">

                        <h2 style={{ color: "white" }}>การบริการลูกค้า</h2>
                        <span className="flex-items-5">การนัดหมายวันเข้ารับบริการ</span>
                        <span className="flex-items-5">การช่วยเหลือเมื่อรถเสียและเกิดอุบัติเหตุ</span>
                        <span className="flex-items-5">ข้อเสนอการบริการ</span>
                        <span className="flex-items-5">อะไหล่แท้และสินค้าประดับยนต์</span>
                        <span className="flex-items-5">เซมิคอนดักเตอร์</span>

                    </div>
                    <div className="flex-container-Column4">

                        <h2 style={{ color: "white" }}>เทคโนโลยี</h2>
                        <span className="flex-items-5">การขับเคลื่อนด้วยพลังงานไฟฟ้า</span>
                        <span className="flex-items-5">การชาร์จไฟและบริการสถานีชาร์จ</span>
                        <span className="flex-items-5">เกี่ยวกับ Mercedes me</span>
                        <span className="flex-items-5">คำถามที่พบบ่อยเกี่ยวกับ Mercedes me</span>

                    </div>
                    <div className="flex-container-Column4">

                        <h2 style={{ color: "white" }}>รุ่นรถยอดนิยม</h2>
                        <span className="flex-items-5">รถยนต์ไฟฟ้า</span>
                        <span className="flex-items-5">รุ่น Plug-in Hybrid</span>
                        <span className="flex-items-5">เกี่ยวกับ รุ่น Mercedes-Benz AMG me</span>

                    </div>
                    <div className="flex-container-Column4">

                        <h2 style={{ color: "white" }}>เกี่ยวกับเรา</h2>
                        <span className="flex-items-5">เกี่ยวกับบริษัท</span>
                        <span className="flex-items-5">ติดต่อเรา</span>
                        <span className="flex-items-5">ข่าวสารและกิจกรรม</span>
                        <span className="flex-items-5">ร่วมงานกับเรา</span>
                        <span className="flex-items-5">ศูนย์นโยบายความเป็นส่วนตัว</span>

                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "1px" }}></div>
            <div className="Boxbenz-5" style={{ padding: "50px 100px", justifyContent: "space-between" }}>
                <div className="flex-container-row-3">
                    <div className="flex-items-4">Copyrighted 2022. Mercedes-Benz (Thailand) Limited ขอสงวนสิทธิ์ทั้งหมด (ผู้จัดทำ)</div>
                    <div className="flex-items-4">คุกกี้</div>
                    <div className="flex-items-4">การคุ้มครองข้อมูล</div>
                    <div className="flex-items-4">หมายเหตุทางกฎหมาย</div>
                </div>
                <div className="flex-container-row-3">
                    <div className="flex-items-4">
                        <a href="#about"><FacebookIcon /></a>
                    </div>
                    <div className="flex-items-4">
                        <a href="#about"><YouTubeIcon /></a>
                    </div>
                    <div className="flex-items-4">
                        <a href="#about">< InstagramIcon /></a>
                    </div>
                    <div className="flex-items-4">
                        <a href="#about"><ChatIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
