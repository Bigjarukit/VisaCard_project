import React from "react";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';

export default function BenzTW() {
    return (
        <div>
            {/* component header 1 */}
            <div class="flex flex-row w-full px-28  h-24 bg-black">
                <div class="flex w-full justify-between  items-center">

                    {/* component header 1 ส่วนหน้า */}
                    <div class="flex flex-row items-center">
                        <img class="h-24 " src={"benz.jpg"} />
                        <div class="text-white scroll-px-10 w-full px-8">
                            <span>Mercedes-Benz.</span>
                        </div>
                    </div>
                    {/* component header 1  ส่วนท้าย */}
                    <div class="flex flex-row items-center ">
                        <span class=" text-white pr-2 text-sm pr-8 text-zinc-300">
                            Copyrighted 2022. Mercedes-Benz (Thailand) Limited
                            ขอสงวนสิทธิ์ทั้งหมด (ผู้จัดทำ)
                        </span>
                        {/* component language */}
                        <div class="pr-2 text-white ">
                            <div class="bg-zinc-700 rounded-sm  px-1">
                                <span className="text-sm">TH</span>
                            </div>
                        </div>

                        <div class="px-2 text-white pr-8">
                            <div class="bg-zinc-700 rounded-sm  px-1">
                                <span className="text-sm">EN</span>
                            </div>
                        </div>

                        {/* <span>ค้นหา </span> */}
                        <div class="flex flex-row  bg-zinc-700 rounded-sm h-12 items-center ">

                            <div class="p-2 bg-none border-r indigo-500 " >
                                <input placeholder="ค้นหา" class=" bg-zinc-700 text-white" />
                            </div>

                            <div class="text-zinc-300 px-2">
                                < SearchIcon />
                            </div>
                        </div>

                        <div class="text-white px-8">
                            <a href="#about">< StarIcon /></a>
                        </div>
                        <div class="text-white ">
                            <a href="#about">< PersonIcon /></a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="pt-[1px]  bg-zinc-600"></div>

            {/* component header 2  ส่วนท้าย */}
            <div class="flex flex-row w-full px-28  h-16 bg-black">
                <div class="flex w-full  items-center">
                    <div class="pr-6 text-zinc-300">
                        <a href="#about">< TimeToLeaveIcon /></a>
                    </div>
                    <a href="#about" class="pr-6 text-zinc-300">รุ่นรถยนต์</a>
                    <a href="#about" class="pr-6 text-zinc-300">การซื้อ</a>
                    <a href="#about" class="pr-6 text-zinc-300">บริการทางการเงิน</a>
                    <a href="#about" class="pr-6 text-zinc-300">บริการหลังการขายและอะไหล่</a>
                    <a href="#about" class="pr-6 text-zinc-300">แบรนด์ของเรา</a>
                </div>
            </div>

            <div class="pt-[1px]"></div>

            <div class="flex justify-center w-full px-28  h-12 bg-black text-white items-center">
                <span >รับข้อเสนอที่ดีที่สุดผ่านโชว์รูมออนไลน์ที่นี่</span>
            </div>

            <div class="pt-[1px]"></div>

            {/* className="bg-image" คือรูปพื้นหลัง */}
            <div class="bg-[url('https://www.mercedes-benz.co.th/content/thailand/th/passengercars/_jcr_content/root/responsivegrid/simple_stage.component.damq6.3339432745906.jpg/Expo_Oneweb_Desktop_2050x1151.jpg')] h-[720px] bg-cover bg-center " >
                <div class="flex flex-col px-28 pt-64">
                    <div class="font-sans text-5xl text-white">Motor Expo 2022</div>
                    <div className="titer-text-2" style={{ color: "white" }}>VISION OF THE BEYOND.</div>

                    <div class="pt-8 ">
                        <button class="button">ข้อมูลเพิ่มเติม</button>
                    </div>
                </div>
            </div>

            <div class="font-sans text-4xl pt-14 px-28 pb-11" >
                <p>ข้อมูลล่าสุด</p>
            </div>

            <div class="flex flex-row flex-wrap items-center pl-36">

                {/* Card Items ส่วนโฆษณารถยนต์ */}
                <div class="pr-8">
                    <div class="flex flex-col w-[380px] h-[668px] bg-white shadow-md border border-zinc-200">
                        <div className="bg-image-s1" ></div>
                        <div class="pt-6 px-8">
                            <div class="flex flex-wrap text-2xl">
                                Every action counts.
                            </div>

                            <div class="flex flex-wrap">
                                <p>Join our journey to a fully electric future.
                                    Our co-promotion with Avatar: The Way of Water messaging focuses on responsibility to our planet.
                                </p>
                            </div>
                        </div>
                        <div class="flex mt-auto mb-12 justify-center ">
                            <button class="button" style={{ height: "50px", width: "80%" }}>ข้อมูลเพิ่มเติม</button>
                        </div>
                    </div>
                </div>

                <div class="pr-8">
                    <div class="flex flex-col w-[380px] h-[668px] bg-white shadow-md border border-zinc-200">
                        <div className="bg-image-s2" ></div>
                        <div class="pt-6 px-8">
                            <div class="flex flex-wrap text-2xl">
                                The new C-Class Plug-in Hybrid. Stay in your comfort zone.
                            </div>

                            <div class="flex flex-wrap">
                                <p>สัมผัสบรรยากาศที่ดีในพื้นที่ส่วนตัว กับ The new C-Class Plug-in Hybrid.
                                    อีกขั้นกับระบบขับเคลื่อนไฟฟ้าที่มาพร้อมการออกแบบภายนอก และภายในที่โฉบเฉี่ยว
                                    พร้อมเทคโนโลยีอัจฉริยะที่ซัพพอร์ตทุกการใช้งาน
                                </p>
                            </div>
                        </div>
                        <div className="bt-car pt-6">
                            <button class="button" style={{ height: "50px", width: "80%" }}>ข้อมูลเพิ่มเติม</button>
                        </div>
                    </div>


                </div>

                <div class="pr-8">
                    <div class="flex flex-col w-[380px] h-[668px] bg-white shadow-md border border-zinc-200">
                        <div className="bg-image-s3" ></div>
                        <div class="pt-6 px-8">
                            <div class="flex flex-wrap text-2xl">
                                The new Vito. All The Unexpected Desires.
                            </div>

                            <div class="flex flex-wrap">
                                <p>The new Vito จาก Mercedes-Benz โฉบเฉี่ยวคล่องตัวบนทุกเส้นทาง โดนเด่น
                                    ทั้งภายนอกและภายใน ห้องโดยสารกว้าง 11 ที่นั่ง ปรับฟังก์ชันตอบโจทย์ได้ทุกช่วงเวลาสำคัญ
                                </p>
                            </div>
                        </div>
                        <div className="bt-car pt-6">
                            <button class="button" style={{ height: "50px", width: "80%" }}>ข้อมูลเพิ่มเติม</button>
                        </div>
                    </div>
                </div>

                <div class="pr-8">
                    <div class="flex flex-col w-[380px] h-[668px] bg-white shadow-md border border-zinc-200">
                        <div className="bg-image-s4" ></div>
                        <div class="pt-6 px-8">
                            <div class="flex flex-wrap text-2xl">
                                Mercedes-EQ Technology. Welcome to the Magical Garage.
                            </div>

                            <div class="flex flex-wrap">
                                <p>สัมผัสสถานที่มหัศจรรย์ซึ่งทุกสิ่งเป็นไปได้ นวัตกรรมสำหรับการขับเคลื่อนแห่งอนาคตรอคุณอยู่ที่นี่
                                </p>
                            </div>
                        </div>
                        <div className="bt-car pt-6">
                            <button class="button" style={{ height: "50px", width: "80%" }}>ข้อมูลเพิ่มเติม</button>
                        </div>
                    </div>
                </div>


            </div>

            <div class="font-sans text-4xl pt-20 px-28 pb-11" >
                <p>รถยนต์ Mercedes-Benz</p>
            </div>

            {/* component ปุ่มหมวดหมู่รถ */}
            <div class="flex flex-row flex-wrap items-center pl-36">
                <div class="flex justify-center py-4 px-6 w-fit bg-white text-black  rounded-sm hover:bg-zinc-400 active:bg-zinc-600 box-shadow1 border border-zinc-200" >
                    <h3>รถยนต์ทุกรุ่น</h3>
                </div>
                <div class="flex justify-center py-4 px-6 w-fit bg-white text-black  rounded-sm hover:bg-zinc-400 active:bg-zinc-600 box-shadow1 border border-zinc-200">
                    <h3>Mercedes-EQ</h3>
                </div>
                <div class="flex justify-center py-4 px-6 w-fit bg-white text-black  rounded-sm hover:bg-zinc-400 active:bg-zinc-600 box-shadow1 border border-zinc-200">
                    <h3>Mercedes-AMG</h3>
                </div>
                <div class="flex justify-center py-4 px-6 w-fit bg-white text-black  rounded-sm hover:bg-zinc-400 active:bg-zinc-600 box-shadow1 border border-zinc-200">
                    <h3>รุ่นใหม่ล่าสุด</h3>
                </div>
            </div>

            <div class="flex flex-row">

                {/* component ฝั่งซ้ายเลือกประเภท */}
                <div class="flex flex-col justify-start items-start border-r-2 indigo-500 pl-28 pt-7 pr-12 w-1/4">
                    <h3 class="text-xl py-4">ระบบเชื้อเพลิง</h3>

                    {/* checkbox */}
                    <label class="container pb-2">
                        <span style={{ fontSize: "17px" }}>รถยนต์ไฟฟ้า</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="container pb-2">
                        <span style={{ fontSize: "17px" }}>รถยนต์ไฮบริด</span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    {/* ประเภทรถ */}
                    <h3 class="text-xl py-4">ประเภทของรถยนต์</h3>
                    <div class="flex flex-row flex-wrap items-center">
                        < LocalShippingIcon />
                        <p class="text-xl py-1 px-6">ซาลูน</p>
                    </div>
                    <div class="flex flex-row flex-wrap items-center">
                        < AirportShuttleRoundedIcon />
                        <p class="text-xl pb-6 px-6">เอสยูวี</p>
                    </div>
                    <div class="py-1 border-t-2 indigo-500">
                        <p class="text-xl py-2 ">ดูทั้งหมด</p>
                    </div>

                </div>

                <div class="flex flex-row flex-wrap items-center justify-start">

                    {/* Car Items */}
                    <div class="flex flex-col flex-wrap w-96 bg-white items-center m-4">
                        <span class="flex justify-center flex-wrap text-2xl">EQS Saloon</span>
                        <div class="text-zinc-500 py-2 text-center">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 7,900,000 บาท</div>
                        <div className="bg-image-s5 " ></div>
                    </div>

                    <div class="flex flex-col flex-wrap w-96 bg-white items-center  m-4">
                        <span class="flex justify-center flex-wrap text-2xl">A-Class Saloon</span>
                        <div class="text-zinc-500 py-2 text-center">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 1,990,000.00 บาท</div>
                        <div className="bg-image-s6 " ></div>
                    </div>

                    <div class="flex flex-col flex-wrap w-96 bg-white items-center  m-4">
                        <span class="flex justify-center flex-wrap text-2xl">A-Class Saloon</span>
                        <div class="text-zinc-500 py-2 text-center">ราคา (รวมภาษีมูลค่าเพิ่ม) เริ่มต้นที่ 5,900,000</div>
                        <div className="bg-image-s7 " ></div>
                    </div>
                </div>

            </div>

            {/* หมายเหตุ */}
            <div class="px-28 ">
                <h2 class="pt-20">หมายเหตุ</h2>
                <div class="border-b border-black w-full h-1 pb-4 "></div>
                <p class="text-zinc-500 py-4 text-md ">ราคาทั้งหมดที่แสดงอยู่คือราคาแนะนำข้างต้นรวมภาษีมูลค่าเพิ่มร้อยละเจ็ด บริษัท
                    เมอร์เซเดส-เบนซ์ (ประเทศไทย) จำกัด ขอสงวนสิทธิ์ในการเปลี่ยนแปลงราคาแนะนำและอุปกรณ์ โดยมิต้องแจ้งให้ทราบล่วงหน้า
                    ภาพประกอบอาจแสดงอุปกรณ์เสริมและรายการของอุปกรณ์เสริมซึ่งไม่ได้เป็นส่วนหนึ่งของข้อกำหนดมาตรฐาน กับประเภทของรุ่นรถยนต์ ลักษณะ อุปกรณ์เสริม และ
                    /หรือสีที่มีให้ในแต่ละประเทศ รถยนต์บางรุ่นอาจจะไม่มีประเภท ลักษณะ อุปกรณ์เสริม และ /หรือสีที่แสดงในประเทศของคุณหรืออาจมีรายละเอียดเฉพาะที่แตกต่างกัน
                    นอกจากนี้รถยนต์บางรุ่น ลักษณะ อุปกรณ์เสริม และ /หรือสีอาจมีใช้ร่วมกับรุ่นอื่นเท่านั้น สำหรับข้อมูลที่เป็นปัจจุบันและเฉพาะเจาะจงมากขึ้นเกี่ยวกับประเภทของรุ่น
                    ลักษณะ อุปกรณ์เสริม และ /หรือสีที่มีในประเทศของคุณและการกำหนดราคานั้น สามารถติดต่อผู้จำหน่ายเมอร์เซเดส-เบนซ์อย่างเป็นทางการใกล้บ้านคุณ</p>

            </div>

            <div class="flex flex-row justify-between items-center px-28 py-16">

                <div class="border border-zinc-300 px-6 py-4 rounded-sm ">
                    <div class="flex flex-row  justify-between ">
                        <div class="px-4">
                            < LocalGroceryStoreOutlinedIcon />
                        </div>
                        <div class="flex flex-col flex-wrap pr-20" >
                            <span class="text-xl">จองออนไลน์</span>
                            <span>ค้นหา Mercedes คันใหม่ของคุณ</span>
                        </div>
                    </div>
                </div>

                <div class="border border-zinc-300 px-6 py-4 rounded-sm ">
                    <div class="flex flex-row  justify-between ">
                        <div class="px-4">
                            < FormatAlignLeftOutlinedIcon />
                        </div>
                        <div class="flex flex-col flex-wrap pr-20">
                            <span class="text-xl">โบรชัวร์และใบเสนอราคา</span>
                            <span>ดาวน์โหลดตอนนี้</span>
                        </div>
                    </div>
                </div>

                <div class="border border-zinc-300 px-6 py-4 rounded-sm ">
                    <div class="flex flex-row  justify-between ">
                        <div class="px-4">
                            < StoreOutlinedIcon />
                        </div>
                        <div class="flex flex-col flex-wrap pr-20" >
                            <span class="text-xl">ค้นหาผู้จำหน่ายฯ</span>
                            <span>Mercedes</span>
                        </div>
                    </div>
                </div>

                <div class="border border-zinc-300 px-6 py-4 rounded-sm ">
                    <div class="flex flex-row  justify-between ">
                        <div class="px-4">
                            < CalculateOutlinedIcon />
                        </div>
                        <div class="flex flex-col flex-wrap pr-20" >
                            <span class="text-xl">บริการทางการเงิน</span>
                            <span>ค้นหาผลิตภัณฑ์ทางการเงินที่เหมาะสม</span>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex w-full flex-col h-full bg-black">
                <div class="flex flex-col  text-white w-full pt-20">
                    <div class="flex justify-center pb-4"><  KeyboardArrowUpOutlinedIcon /></div>
                    <h3 class="flex justify-center text-2xl pb-20">กลับขึ้นด้านบน</h3>

                </div>

                {/* component  บริการต่างๆ*/}
                <div class="flex flex-row w-full justify-between px-28 pb-20 ">

                    {/* service Items */}
                    <div class="flex flex-col flex-wrap text-start w-60  ">
                        <span class="flex flex-wrap text-2xl  text-white py-2">ซื้อรถยนต์</span>
                        <span class="flex flex-wrap text-md  text-zinc-300 py-2 hover:underline">ค้นหารถยนต์ใหม่</span>
                        <span class="flex flex-wrap text-md  text-zinc-300 py-2 hover:underline">จองการทดลองขับ</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2 hover:underline">ค้นหารถยนต์ใช้แล้ว</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2 hover:underline">ออกแบบรถของคุณ</span>
                        <span class="flex flex-wrap text-md  text-zinc-300 py-2 hover:underline">ใบรายการราคาและโบรชัวร์</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2 hover:underline">โปรโมชัน</span>
                    </div>

                    <div class="flex flex-col flex-wrap text-start w-60  ">
                        <span class="flex flex-wrap text-2xl  text-white py-2 hover:underline">บริการทางการเงิน</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2 hover:underline">บริการทางการเงินและเครื่องมือคำนวณค่างวด</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2 hover:underline">ค้นหาตัวแทนจำหน่ายใกล้บ้านคุณ</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2 hover:underline">บริการประกันภัย</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2 hover:underline">บริการลูกค้าออนไลน์</span>
                    </div>

                    <div class="flex flex-col flex-wrap text-start w-60 ">
                        <span class="flex flex-wrap text-2xl  text-white py-2">การบริการลูกค้า</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">การนัดหมายวันเข้ารับบริการ</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">การช่วยเหลือเมื่อรถเสียและเกิดอุบัติเหตุ</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">ข้อเสนอการบริการ</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">อะไหล่แท้และสินค้าประดับยนต์</span>
                        <span class="flex flex-wrap text-md  text-zinc-300 py-2">เซมิคอนดักเตอร์</span>
                    </div>

                    <div class="flex flex-col flex-wrap text-start w-60 ">
                        <span class="flex flex-wrap text-2xl  text-white py-2">เทคโนโลยี</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">การขับเคลื่อนด้วยพลังงานไฟฟ้า</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">การชาร์จไฟและบริการสถานีชาร์จ</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">เกี่ยวกับ Mercedes me</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">คำถามที่พบบ่อยเกี่ยวกับ Mercedes me</span>
                    </div>

                    <div class="flex flex-col flex-wrap text-start w-60 ">
                        <span class="flex flex-wrap text-2xl  text-white py-2">รุ่นรถยอดนิยม</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">รถยนต์ไฟฟ้า</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">รุ่น Plug-in Hybrid</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">เกี่ยวกับ รุ่น Mercedes-Benz AMG me</span>
                    </div>

                    <div class="flex flex-col flex-wrap text-start w-60 ">
                        <span class="flex flex-wrap text-2xl  text-white py-2">เกี่ยวกับเรา</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">เกี่ยวกับบริษัท</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">ติดต่อเรา</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">ข่าวสารและกิจกรรม</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">ร่วมงานกับเรา</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 py-2">ศูนย์นโยบายความเป็นส่วนตัว</span>
                    </div>

                </div>

                <div class="h-[1px]  bg-zinc-600"></div>

                <div class="flex flex-row w-full justify-between px-28  ">
                    <div class="flex flex-row flex-wrap items-center py-6">
                        <span class="flex flex-wrap text-md   text-zinc-300 pr-6">Copyrighted 2022. Mercedes-Benz (Thailand) Limited ขอสงวนสิทธิ์ทั้งหมด (ผู้จัดทำ)</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 pr-6">คุกกี้</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 pr-6">การคุ้มครองข้อมูล</span>
                        <span class="flex flex-wrap text-md   text-zinc-300 pr-6">หมายเหตุทางกฎหมาย</span>
                    </div>
                    <div class="flex flex-row flex-wrap items-center py-6" >
                        <div class="flex flex-wrap text-md   text-zinc-300 pr-6">
                            <a href="#about"><FacebookIcon /></a>
                        </div>
                        <div class="flex flex-wrap text-md   text-zinc-300 pr-6">
                            <a href="#about"><YouTubeIcon /></a>
                        </div>
                        <div class="flex flex-wrap text-md   text-zinc-300 pr-6">
                            <a href="#about">< InstagramIcon /></a>
                        </div>
                        <div class="flex flex-wrap text-md   text-zinc-300 pr-6">
                            <a href="#about"><ChatIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}