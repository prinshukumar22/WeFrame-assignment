import { useState } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Project from "../components/project";
import Article from "../components/article";
import Story from "../components/story";
import FrameComponent from "../components/frame-component";

const ContentManagement = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[0rem] pb-[3.17rem] pr-[0rem] pl-[0.06rem] box-border gap-[2.28rem] tracking-[normal] text-left text-[0.87rem] text-grey font-poppins mq750:gap-[1.11rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-full">
          <main className="w-[120.44rem] flex flex-row items-start justify-start max-w-[113%] shrink-0 text-center text-[0.78rem] text-black-50 font-urbanist">
            <div className="w-[16.44rem] bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[7.11rem] pb-[36.39rem] pr-[1.72rem] pl-[1.78rem] box-border gap-[7.22rem] mq750:pt-[3rem] mq750:pb-[15.39rem] mq750:box-border mq1250:hidden mq1250:pt-[4.61rem] mq1250:pb-[23.67rem] mq1250:box-border mq450:gap-[3.61rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.94rem]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.11rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                    <input
                      className="m-0 h-[1.33rem] w-[1.33rem] relative"
                      type="checkbox"
                    />
                    <div className="h-[0.94rem] w-[3.89rem] relative font-semibold inline-block">
                      Dashboard
                    </div>
                  </div>
                </div>
                <Button
                  className="self-stretch h-[3.11rem]"
                  variant="contained"
                >
                  Content
                </Button>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.11rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                    <img
                      className="h-[1.33rem] w-[1.33rem] relative"
                      loading="eager"
                      alt=""
                      src="/profile2user.svg"
                    />
                    <div className="h-[0.94rem] w-[2.06rem] relative font-semibold inline-block">
                      Team
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.11rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                    <img
                      className="h-[1.33rem] w-[1.33rem] relative"
                      loading="eager"
                      alt=""
                      src="/usersquare.svg"
                    />
                    <div className="h-[0.94rem] w-[1.61rem] relative font-semibold inline-block">
                      User
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.11rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                    <img
                      className="h-[1.33rem] w-[1.33rem] relative"
                      loading="eager"
                      alt=""
                      src="/monitormobbile.svg"
                    />
                    <div className="h-[0.94rem] w-[3.33rem] relative font-semibold inline-block">
                      App/Web
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.11rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.94rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                      <img
                        className="h-[1.33rem] w-[1.33rem] relative min-h-[1.33rem]"
                        alt=""
                        src="/statusup.svg"
                      />
                      <div className="h-[0.94rem] w-[3.17rem] relative font-semibold inline-block">
                        Analytics
                      </div>
                      <div className="w-[1.33rem] rounded-481xl bg-lavender overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[0.22rem] px-[0.22rem] pb-[0.28rem] box-border text-[0.67rem] text-blueviolet-100 font-paragraph-2-regular">
                        <div className="h-[0.83rem] w-[0.44rem] relative inline-block">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                      <input
                        className="m-0 h-[1.33rem] w-[1.33rem] relative min-h-[1.33rem]"
                        type="checkbox"
                      />
                      <div className="h-[0.94rem] w-[2.22rem] relative font-semibold inline-block">
                        Media
                      </div>
                      <div className="w-[1.33rem] rounded-481xl bg-lavender overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[0.22rem] px-[0.22rem] pb-[0.28rem] box-border text-[0.67rem] text-blueviolet-100 font-paragraph-2-regular">
                        <div className="h-[0.83rem] w-[0.78rem] relative inline-block">
                          16
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                      <img
                        className="h-[1.33rem] w-[1.33rem] relative"
                        alt=""
                        src="/notification.svg"
                      />
                      <div className="h-[0.94rem] w-[4rem] relative font-semibold inline-block">
                        Notification
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.89rem]">
                      <img
                        className="h-[1.33rem] w-[1.33rem] relative"
                        alt=""
                        src="/iconlylightsetting.svg"
                      />
                      <div className="h-[0.94rem] w-[2.89rem] relative font-semibold inline-block">
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-lavender flex flex-row items-center justify-start py-[0.61rem] px-[0.89rem] gap-[0.67rem] whitespace-nowrap text-left text-black-100 font-paragraph-2-regular">
                <img
                  className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/fiheadphones.svg"
                />
                <div className="h-[0.94rem] w-[6.11rem] relative inline-block">
                  Contact Support
                </div>
              </div>
            </div>
            <section className="flex-1 flex flex-col items-start justify-start gap-[3.22rem] max-w-[calc(100%_-_296px)] text-left text-[1.33rem] text-dark font-urbanist mq750:gap-[1.61rem] mq1250:max-w-full">
              <header className="w-[90.17rem] h-[5.11rem] rounded-xl bg-background overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[0.89rem] pb-[1rem] pr-[3.72rem] pl-[4.11rem] box-border gap-[1.11rem] top-[0] z-[99] sticky max-w-full text-left text-[0.89rem] text-gray-200 font-urbanist mq1250:pl-[2.06rem] mq1250:pr-[1.83rem] mq1250:box-border">
                <TextField
                  className="[border:none] bg-[transparent] h-[2.83rem] w-[22rem] font-nunito font-medium text-[0.78rem] text-lightgray"
                  sx={{ width: 396 }}
                  variant="outlined"
                />
                <div className="h-[3.11rem] w-[37.5rem] flex flex-row items-center justify-start gap-[1.78rem] max-w-full mq750:gap-[0.89rem] mq1100:w-[18.28rem]">
                  <div className="flex-1 rounded-3xs bg-gray-100 box-border flex flex-row items-end justify-start py-[0.89rem] pr-[1.61rem] pl-[1.56rem] gap-[1.11rem] max-w-full border-[1px] border-solid border-grey mq1100:hidden">
                    <div className="h-[3rem] w-[19.22rem] relative rounded-3xs bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-grey" />
                    <div className="h-[1.22rem] flex-1">
                      <DatePicker
                        value={frameDateTimePickerValue}
                        onChange={(newValue) => {
                          setFrameDateTimePickerValue(newValue);
                        }}
                        slotProps={{
                          textField: {
                            variant: "standard",
                            size: "medium",
                            fullWidth: true,
                          },
                        }}
                      />
                    </div>
                    <div className="h-[1.06rem] w-[1.11rem] relative font-semibold inline-block whitespace-nowrap z-[1]">
                      OR
                    </div>
                    <div className="h-[1.22rem] flex-1">
                      <DatePicker
                        value={frameDateTimePicker1Value}
                        onChange={(newValue) => {
                          setFrameDateTimePicker1Value(newValue);
                        }}
                        slotProps={{
                          textField: {
                            variant: "standard",
                            size: "medium",
                            fullWidth: true,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="self-stretch w-[16.5rem] flex flex-row items-center justify-start text-[0.56rem] text-darkslategray">
                    <div className="h-[3.28rem] flex-1 rounded-lg bg-gray1 box-border flex flex-row items-center justify-start py-[0.56rem] pr-[0.5rem] pl-[0.39rem] gap-[0.56rem] border-[1px] border-solid border-aliceblue">
                      <img
                        className="h-[1.84rem] w-[1.84rem] relative rounded-8xs object-cover"
                        alt=""
                        src="/image-11@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start mq750:hidden">
                        <div className="self-stretch h-[0.78rem] relative font-medium inline-block whitespace-nowrap">
                          Welcome back,
                        </div>
                        <FormControl
                          className="self-stretch h-[1.33rem] relative"
                          variant="standard"
                        >
                          <InputLabel color="success" />
                          <Select color="success" />
                          <FormHelperText />
                        </FormControl>
                      </div>
                      <img
                        className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0"
                        alt=""
                        src="/arrow--down-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </header>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="w-[102.22rem] flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.11rem] box-border gap-[1.61rem] max-w-full">
                  <div className="w-[84.67rem] flex flex-col items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[1.67rem] min-h-[14.78rem] max-w-full text-[1.94rem]">
                    <div className="flex flex-col items-start justify-start">
                      <h1 className="m-0 w-[10.89rem] h-[2.94rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq750:text-[1.56rem] mq750:leading-[2.33rem] mq450:text-[1.17rem] mq450:leading-[1.72rem]">
                        Hello Admin,
                      </h1>
                      <div className="w-[13.89rem] h-[1.44rem] relative text-[0.94rem] leading-[150%] text-grey inline-block">
                        This is what we got you for today.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.17rem] pl-[0rem] box-border gap-[1.89rem] max-w-full text-[1.52rem] text-darkslateblue mq750:gap-[0.94rem] mq1250:flex-wrap">
                      <Project
                        projectIcon="/project-icon.svg"
                        articles="Articles"
                        newUpdates="4,950 New Updates"
                        propGap="0.81rem"
                        propColor="#212121"
                        propColor1="#212121"
                      />
                      <div className="flex-1 rounded-xl bg-background overflow-hidden flex flex-row items-start justify-start pt-[1.94rem] px-[1.56rem] pb-[1.89rem] box-border gap-[0.67rem] min-w-[12.61rem] max-w-full mq450:flex-wrap">
                        <img
                          className="h-[4.31rem] w-[4.31rem] relative min-h-[4.33rem]"
                          loading="eager"
                          alt=""
                          src="/notificaton-icon.svg"
                        />
                        <div className="flex flex-col items-start justify-start gap-[0.39rem]">
                          <div className="w-[7.44rem] h-[2.33rem] relative leading-[150%] font-semibold inline-block mq450:text-[1.22rem] mq450:leading-[1.83rem]">
                            Categories
                          </div>
                          <div className="w-[8.44rem] h-[1.44rem] relative text-[0.94rem] leading-[150%] inline-block">
                            10,275 New Updates
                          </div>
                        </div>
                      </div>
                      <Project
                        projectIcon="/client-icon.svg"
                        articles="Stories"
                        newUpdates="4,193 New Updates"
                        propGap="0.61rem"
                        propColor="#22285e"
                        propColor1="#22285e"
                      />
                      <div className="rounded-xl bg-background overflow-hidden flex flex-row items-start justify-start pt-[1.94rem] pb-[1.89rem] pr-[2.06rem] pl-[1.5rem] box-border gap-[0.61rem] max-w-full text-[1.56rem] text-dark mq450:flex-wrap">
                        <img
                          className="h-[4.31rem] w-[4.31rem] relative min-h-[4.33rem]"
                          alt=""
                          src="/client-icon-1.svg"
                        />
                        <div className="flex flex-col items-start justify-start gap-[0.39rem]">
                          <h2 className="m-0 w-[10.94rem] h-[2.33rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.22rem] mq450:leading-[1.89rem]">
                            Advertisements
                          </h2>
                          <div className="w-[7.39rem] h-[1.44rem] relative text-[0.94rem] leading-[150%] text-darkslateblue inline-block">
                            928 New Updates
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[84.67rem] flex flex-row items-center justify-between py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[1.11rem] max-w-full mq450:flex-wrap">
                    <h3 className="m-0 h-[2rem] w-[7.06rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                      Top Articles
                    </h3>
                    <div className="h-[1.67rem] w-[3.33rem] relative text-[1.11rem] leading-[150%] font-semibold text-primary inline-block mq450:text-[0.89rem] mq450:leading-[1.33rem]">
                      See all
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.61rem] pr-[1.11rem] pl-[0rem] box-border max-w-full text-[0.89rem] text-grey">
                    <div className="w-[87.28rem] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[1.11rem] max-w-full">
                      <div className="h-[27.78rem] w-[26.22rem] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                        <img
                          className="absolute top-[1.06rem] left-[1.06rem] rounded-3xs w-[24.17rem] h-[12.67rem] overflow-hidden object-cover"
                          alt=""
                          src="/frame-1000001069@2x.png"
                        />
                        <div className="absolute top-[14.78rem] left-[1.06rem] leading-[150%] font-extrabold text-primary">
                          BUSINESS
                        </div>
                        <div className="absolute top-[16.94rem] left-[1.06rem] text-[1.33rem] leading-[150%] font-semibold text-darkslateblue mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                          7 Rules of Effective Branding
                        </div>
                        <div className="absolute top-[19.22rem] left-[1.06rem] leading-[150%]">
                          Why Branding matters for your Business
                        </div>
                        <div className="absolute top-[16.83rem] left-[19.22rem] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem] text-mediumseagreen">
                          <div className="h-[1.11rem] w-[3.78rem] relative font-semibold inline-block">
                            Published
                          </div>
                        </div>
                        <div className="absolute top-[20.94rem] left-[1.06rem] rounded-8xs bg-whitesmoke flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem]">
                          <div className="h-[1.11rem] w-[3.61rem] relative font-semibold inline-block">
                            Branding
                          </div>
                        </div>
                        <div className="absolute top-[20.94rem] left-[7.5rem] rounded-8xs bg-whitesmoke flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem]">
                          <div className="h-[1.11rem] w-[6.28rem] relative font-semibold inline-block">
                            Communication
                          </div>
                        </div>
                        <div className="absolute top-[20.94rem] left-[16.61rem] rounded-8xs bg-whitesmoke flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem]">
                          <div className="h-[1.11rem] w-[3.61rem] relative font-semibold inline-block">
                            Branding
                          </div>
                        </div>
                        <div className="absolute top-[14.78rem] left-[21.06rem] leading-[150%] font-semibold text-black">
                          Maria Doe
                        </div>
                        <img
                          className="absolute top-[14.44rem] left-[18.78rem] rounded-[50%] w-[1.67rem] h-[1.67rem] object-cover"
                          alt=""
                          src="/ellipse-2@2x.png"
                        />
                        <div className="absolute top-[14.78rem] left-[6.28rem] leading-[150%] font-semibold text-right">
                          20 Sep 2022
                        </div>
                        <div className="absolute top-[24rem] left-[1.06rem] w-[24.17rem] h-[3.06rem] text-[1rem] text-blueviolet-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-lavender w-full h-full" />
                          <div className="absolute top-[0.94rem] left-[10.94rem] font-semibold">{`View `}</div>
                        </div>
                        <div className="absolute top-[15.17rem] left-[5.5rem] rounded-[50%] bg-gainsboro w-[0.28rem] h-[0.28rem]" />
                      </div>
                      <div className="h-[27.78rem] w-[26.22rem] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                        <div className="absolute top-[1.06rem] left-[1.06rem] rounded-3xs bg-whitesmoke w-[24.17rem] h-[12.67rem] overflow-hidden">
                          <img
                            className="absolute top-[0rem] left-[0rem] rounded-t-mini rounded-b-none w-full h-full object-cover"
                            alt=""
                            src="/rectangle-684@2x.png"
                          />
                          <img
                            className="absolute top-[0rem] left-[0rem] rounded-t-mini rounded-b-none w-full h-full object-cover"
                            alt=""
                            src="/rectangle-685@2x.png"
                          />
                        </div>
                        <div className="absolute top-[14.78rem] left-[1.06rem] leading-[150%] font-extrabold text-primary">
                          ECONOMY
                        </div>
                        <div className="absolute top-[16.94rem] left-[1.06rem] text-[1.33rem] leading-[150%] font-semibold text-darkslateblue mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                          Research on biodiversity an...
                        </div>
                        <div className="absolute top-[19.22rem] left-[1.06rem] leading-[150%]">
                          Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div className="absolute top-[16.83rem] left-[19.22rem] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem] text-mediumseagreen">
                          <div className="h-[1.11rem] w-[3.78rem] relative font-semibold inline-block">
                            Published
                          </div>
                        </div>
                        <div className="absolute top-[20.94rem] left-[1.06rem] rounded-8xs bg-whitesmoke flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem]">
                          <div className="h-[1.11rem] w-[2.33rem] relative font-semibold inline-block">
                            World
                          </div>
                        </div>
                        <div className="absolute top-[20.94rem] left-[6.22rem] rounded-8xs bg-whitesmoke flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem]">
                          <div className="h-[1.11rem] w-[4.17rem] relative font-semibold inline-block">
                            Population
                          </div>
                        </div>
                        <div className="absolute top-[14.78rem] left-[21.06rem] leading-[150%] font-semibold text-black">
                          Maria Doe
                        </div>
                        <img
                          className="absolute top-[14.44rem] left-[18.78rem] rounded-[50%] w-[1.67rem] h-[1.67rem] object-cover"
                          alt=""
                          src="/ellipse-2@2x.png"
                        />
                        <div className="absolute top-[14.78rem] left-[6.56rem] leading-[150%] font-semibold text-right">
                          20 Sep 2022
                        </div>
                        <div className="absolute top-[24rem] left-[1.06rem] w-[24.17rem] h-[3.06rem] text-[1rem] text-blueviolet-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-lavender w-full h-full" />
                          <div className="absolute top-[0.94rem] left-[10.94rem] font-semibold">{`View `}</div>
                        </div>
                        <div className="absolute top-[15.17rem] left-[5.78rem] rounded-[50%] bg-gainsboro w-[0.28rem] h-[0.28rem]" />
                      </div>
                      <div className="h-[27.78rem] w-[26.22rem] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                        <div className="absolute top-[1.06rem] left-[1.06rem] rounded-3xs bg-whitesmoke w-[24.17rem] h-[12.67rem] overflow-hidden">
                          <img
                            className="absolute top-[0rem] left-[0rem] rounded-t-mini rounded-b-none w-full h-full object-cover"
                            alt=""
                            src="/rectangle-684@2x.png"
                          />
                          <img
                            className="absolute top-[0rem] left-[0rem] rounded-t-mini rounded-b-none w-full h-full object-cover"
                            alt=""
                            src="/rectangle-685-1@2x.png"
                          />
                        </div>
                        <div className="absolute top-[14.78rem] left-[1.06rem] leading-[150%] font-extrabold text-primary">
                          POLITICS
                        </div>
                        <div className="absolute top-[16.94rem] left-[1.06rem] text-[1.33rem] leading-[150%] font-semibold text-darkslateblue mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                          Close and historical ties to h...
                        </div>
                        <div className="absolute top-[19.22rem] left-[1.06rem] leading-[150%]">
                          Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div className="absolute top-[16.83rem] left-[19.22rem] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem] text-mediumseagreen">
                          <div className="h-[1.11rem] w-[3.78rem] relative font-semibold inline-block">
                            Published
                          </div>
                        </div>
                        <div className="absolute top-[20.94rem] left-[1.06rem] rounded-8xs bg-whitesmoke flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem]">
                          <div className="h-[1.11rem] w-[2.67rem] relative font-semibold inline-block">
                            Politics
                          </div>
                        </div>
                        <div className="absolute top-[20.94rem] left-[6.56rem] rounded-8xs bg-whitesmoke flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem]">
                          <div className="h-[1.11rem] w-[3.33rem] relative font-semibold inline-block">
                            Defence
                          </div>
                        </div>
                        <div className="absolute top-[14.78rem] left-[21.06rem] leading-[150%] font-semibold text-black">
                          Maria Doe
                        </div>
                        <img
                          className="absolute top-[14.44rem] left-[18.78rem] rounded-[50%] w-[1.67rem] h-[1.67rem] object-cover"
                          alt=""
                          src="/ellipse-2@2x.png"
                        />
                        <div className="absolute top-[14.78rem] left-[6rem] leading-[150%] font-semibold text-right">
                          20 Sep 2022
                        </div>
                        <div className="absolute top-[24rem] left-[1.06rem] w-[24.17rem] h-[3.06rem] text-[1rem] text-blueviolet-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-lavender w-full h-full" />
                          <div className="absolute top-[0.94rem] left-[10.94rem] font-semibold">{`View `}</div>
                        </div>
                        <div className="absolute top-[15.17rem] left-[5.22rem] rounded-[50%] bg-gainsboro w-[0.28rem] h-[0.28rem]" />
                      </div>
                      <div className="w-[26.22rem] rounded-3xs bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.06rem] pb-[0.72rem] pr-[1rem] pl-[1.06rem] box-border gap-[0.78rem] z-[1] text-primary">
                        <img
                          className="self-stretch h-[12.67rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-1000001069@2x.png"
                        />
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.39rem] max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[0.72rem] max-w-full">
                            <div className="self-stretch flex flex-row items-end justify-between gap-[1.11rem] mq450:flex-wrap">
                              <div className="flex flex-row items-center justify-start gap-[0.39rem]">
                                <div className="h-[1.33rem] w-[4.17rem] relative leading-[150%] font-extrabold inline-block">
                                  BUSINESS
                                </div>
                                <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.28rem]">
                                  <div className="w-[0.28rem] h-[0.28rem] relative rounded-[50%] bg-gainsboro" />
                                </div>
                                <div className="h-[1.33rem] w-[5.06rem] relative leading-[150%] font-semibold text-grey text-right inline-block">
                                  20 Sep 2022
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-start gap-[0.61rem] text-black">
                                <img
                                  className="h-[1.67rem] w-[1.67rem] relative rounded-[50%] object-cover"
                                  alt=""
                                  src="/ellipse-2@2x.png"
                                />
                                <div className="h-[1.33rem] w-[4.17rem] relative leading-[150%] font-semibold inline-block">
                                  Maria Doe
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.17rem] max-w-full text-[1.33rem] text-darkslateblue">
                              <div className="flex flex-row items-center justify-start gap-[1.22rem] mq750:flex-wrap">
                                <h3 className="m-0 h-[2rem] w-[16.94rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                                  7 Rules of Effective Branding
                                </h3>
                                <Button
                                  className="h-[2.22rem] w-[5.5rem]"
                                  sx={{ width: 99 }}
                                  variant="contained"
                                >
                                  Created
                                </Button>
                              </div>
                              <div className="w-[15.33rem] h-[1.33rem] relative text-[0.89rem] leading-[150%] text-grey inline-block">
                                Why Branding matters for your Business
                              </div>
                            </div>
                          </div>
                          <div className="w-[21.39rem] flex flex-row flex-wrap items-start justify-start gap-[0.61rem] max-w-full">
                            <Button
                              className="h-[2.22rem] w-[5.83rem]"
                              sx={{ width: 105 }}
                              variant="contained"
                            >
                              Branding
                            </Button>
                            <Button
                              className="h-[2.22rem] flex-1"
                              variant="contained"
                            >
                              Communication
                            </Button>
                            <Button
                              className="h-[2.22rem] w-[5.83rem]"
                              sx={{ width: 105 }}
                              variant="contained"
                            >
                              Branding
                            </Button>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border max-w-full">
                          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[0.56rem] max-w-full">
                            <Button
                              className="h-[3.06rem] flex-1"
                              variant="contained"
                            >{`View `}</Button>
                            <div className="h-[3.06rem] w-[3.28rem] rounded-3xs bg-gray-100 flex flex-row items-center justify-center p-[0.83rem] box-border">
                              <img
                                className="h-[0.32rem] w-[1.13rem] relative"
                                alt=""
                                src="/group-1000000956.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Article
                        shapeGroup="/rectangle-684@2x.png"
                        textGroup="/rectangle-685@2x.png"
                        eCONOMY="ECONOMY"
                        ellipse2="/ellipse-2@2x.png"
                        researchOnBiodiversityAn="Research on biodiversity an..."
                        languageSelection="World"
                        frame1000001030="Population"
                        propGap="0.44rem"
                        propPadding="0rem 0rem 0.31rem"
                        propGap1="1.19rem"
                        propWidth="13rem"
                        propWidth1="5.13rem"
                      />
                      <Article
                        shapeGroup="/rectangle-684@2x.png"
                        textGroup="/rectangle-685-1@2x.png"
                        eCONOMY="POLITICS"
                        ellipse2="/ellipse-2@2x.png"
                        researchOnBiodiversityAn="Close and historical ties to h..."
                        languageSelection="Politics"
                        frame1000001030="Defence"
                        propGap="0.22rem"
                        propPadding="0rem 0.28rem 0.28rem 0rem"
                        propGap1="0.78rem"
                        propWidth="11.06rem"
                        propWidth1="4.89rem"
                      />
                      <div className="w-[26.22rem] rounded-3xs bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.06rem] pb-[0.72rem] pr-[1rem] pl-[1.06rem] box-border gap-[1.06rem] text-primary">
                        <img
                          className="self-stretch h-[12.67rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-1000001069@2x.png"
                        />
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.78rem] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                            <img
                              className="h-[1.67rem] w-[1.67rem] absolute my-0 mx-[!important] top-[-0.33rem] right-[4.78rem] rounded-[50%] object-cover"
                              alt=""
                              src="/ellipse-2@2x.png"
                            />
                            <div className="flex-1 flex flex-row items-start justify-between gap-[1.11rem] max-w-full mq450:flex-wrap">
                              <div className="h-[1.33rem] w-[10.28rem] flex flex-row items-start justify-start gap-[1.06rem]">
                                <div className="h-[1.33rem] w-[4.17rem] relative leading-[150%] font-extrabold inline-block">
                                  BUSINESS
                                </div>
                                <div className="self-stretch flex-1 relative leading-[150%] font-semibold text-grey text-right">
                                  20 Sep 2022
                                </div>
                              </div>
                              <div className="h-[1.33rem] w-[4.17rem] relative leading-[150%] font-semibold text-black inline-block">
                                Maria Doe
                              </div>
                            </div>
                            <div className="h-[0.28rem] w-[0.28rem] absolute my-0 mx-[!important] top-[0.39rem] left-[4.44rem] rounded-[50%] bg-gainsboro" />
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[0.39rem] max-w-full text-[1.33rem] text-darkslateblue">
                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.22rem]">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem] min-w-[11rem]">
                                <h3 className="m-0 self-stretch h-[2rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                                  7 Rules of Effective Branding
                                </h3>
                                <div className="w-[15.33rem] h-[1.33rem] relative text-[0.89rem] leading-[150%] text-grey inline-block">
                                  Why Branding matters for your Business
                                </div>
                              </div>
                              <div className="h-[2.22rem] w-[6rem] rounded-8xs bg-lightcyan flex flex-row items-center justify-center p-[0.56rem] box-border text-[0.89rem] text-mediumseagreen">
                                <div className="self-stretch w-[3.78rem] relative font-semibold inline-block">
                                  Published
                                </div>
                              </div>
                            </div>
                            <div className="w-[21.39rem] flex flex-row flex-wrap items-start justify-start gap-[0.61rem] max-w-full text-[0.89rem] text-grey">
                              <div className="w-[5.83rem] rounded-8xs bg-whitesmoke flex flex-row items-center justify-center p-[0.56rem] box-border">
                                <div className="h-[1.11rem] w-[3.61rem] relative font-semibold inline-block">
                                  Branding
                                </div>
                              </div>
                              <div className="flex-1 rounded-8xs bg-whitesmoke flex flex-row items-center justify-center p-[0.56rem] box-border min-w-[5.5rem]">
                                <div className="h-[1.11rem] w-[6.28rem] relative font-semibold inline-block">
                                  Communication
                                </div>
                              </div>
                              <div className="h-[2.22rem] w-[5.83rem] rounded-8xs bg-whitesmoke flex flex-row items-center justify-center p-[0.56rem] box-border">
                                <div className="self-stretch w-[3.61rem] relative font-semibold inline-block">
                                  Branding
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[3.06rem] rounded-3xs bg-lavender flex flex-row items-center justify-center pt-[0.94rem] px-[0.89rem] pb-[0.89rem] box-border max-w-full whitespace-nowrap text-[1rem] text-blueviolet-200">
                            <div className="h-[3.06rem] w-[24.17rem] relative rounded-3xs bg-lavender hidden max-w-full" />
                            <div className="self-stretch w-[2.28rem] relative font-semibold inline-block z-[1]">{`View `}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[84.67rem] flex flex-row items-center justify-between py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[1.11rem] max-w-full mq450:flex-wrap">
                    <h3 className="m-0 h-[2rem] w-[6.72rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                      Top Stories
                    </h3>
                    <div className="h-[1.67rem] w-[3.33rem] relative text-[1.11rem] leading-[150%] font-semibold text-primary inline-block mq450:text-[0.89rem] mq450:leading-[1.33rem]">
                      See all
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.67rem] max-w-full text-[0.89rem] text-background">
                    <div className="flex-1 grid flex-row items-start justify-start gap-[1.67rem] min-w-[52.33rem] max-w-full grid-cols-[repeat(4,_minmax(255px,_1fr))] z-[1] mq750:grid-cols-[minmax(255px,_1fr)] mq1100:min-w-full mq1250:justify-center mq1250:grid-cols-[repeat(2,_minmax(255px,_442px))]">
                      <div className="h-[27.78rem] w-[18.89rem] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                        <img
                          className="absolute top-[0rem] left-[0rem] rounded-3xs w-full h-full object-cover"
                          alt=""
                          src="/rectangle-685-4@2x.png"
                        />
                        <div className="absolute top-[23.78rem] left-[1.11rem] w-[16.72rem] h-[3.06rem] text-[1rem] text-blueviolet-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-lavender w-full h-full" />
                          <div className="absolute top-[0.94rem] left-[7.22rem] font-semibold">{`View `}</div>
                        </div>
                        <div className="absolute top-[17.11rem] left-[1.06rem] text-[1.33rem] leading-[150%] font-semibold mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                          <p className="m-0">How 7 lines code turned into</p>
                          <p className="m-0">$36 Billion Empire</p>
                        </div>
                        <div className="absolute top-[21.39rem] left-[1.06rem] leading-[150%] font-black">
                          BUSINESS
                        </div>
                        <div className="absolute top-[21.39rem] left-[6.28rem] leading-[150%] font-semibold text-grey text-right">
                          20 Sep 2022
                        </div>
                        <div className="absolute top-[21.78rem] left-[5.5rem] rounded-[50%] bg-gainsboro w-[0.28rem] h-[0.28rem]" />
                        <div className="absolute top-[20.83rem] left-[11.83rem] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem] text-mediumseagreen">
                          <div className="h-[1.11rem] w-[3.78rem] relative font-semibold inline-block">
                            Published
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[12.17rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] gap-[0.28rem] text-[0.67rem] text-primary">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative overflow-hidden shrink-0 min-h-[0.89rem]"
                            alt=""
                            src="/icbaselineremoveredeye.svg"
                          />
                          <div className="h-[0.83rem] w-[1.17rem] relative font-semibold inline-block">
                            428
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[15.83rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem]">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative"
                            alt=""
                            src="/statusup-1.svg"
                          />
                        </div>
                      </div>
                      <div className="h-[27.78rem] w-[18.89rem] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                        <img
                          className="absolute top-[0rem] left-[0rem] rounded-3xs w-full h-full object-cover"
                          alt=""
                          src="/rectangle-685-5@2x.png"
                        />
                        <div className="absolute top-[23.78rem] left-[1.11rem] w-[16.72rem] h-[3.06rem] text-[1rem] text-blueviolet-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-lavender w-full h-full" />
                          <div className="absolute top-[0.94rem] left-[7.22rem] font-semibold">{`View `}</div>
                        </div>
                        <div className="absolute top-[17.11rem] left-[1.06rem] text-[1.33rem] leading-[150%] font-semibold inline-block w-[16.78rem] mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                          Chez pierre restaurant in Monte Carlo by Vuidafieri
                        </div>
                        <div className="absolute top-[21.39rem] left-[1.06rem] leading-[150%] font-black">
                          BUSINESS
                        </div>
                        <div className="absolute top-[21.39rem] left-[6.28rem] leading-[150%] font-semibold text-grey text-right">
                          20 Sep 2022
                        </div>
                        <div className="absolute top-[21.78rem] left-[5.5rem] rounded-[50%] bg-gainsboro w-[0.28rem] h-[0.28rem]" />
                        <div className="absolute top-[20.83rem] left-[11.83rem] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem] text-mediumseagreen">
                          <div className="h-[1.11rem] w-[3.78rem] relative font-semibold inline-block">
                            Published
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[12.17rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] gap-[0.28rem] text-[0.67rem] text-primary">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative overflow-hidden shrink-0 min-h-[0.89rem]"
                            alt=""
                            src="/icbaselineremoveredeye.svg"
                          />
                          <div className="h-[0.83rem] w-[1.17rem] relative font-semibold inline-block">
                            428
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[15.83rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem]">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative"
                            alt=""
                            src="/statusup-1.svg"
                          />
                        </div>
                      </div>
                      <div className="h-[27.78rem] w-[18.89rem] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                        <img
                          className="absolute top-[0rem] left-[0rem] rounded-3xs w-full h-full object-cover"
                          alt=""
                          src="/rectangle-685-6@2x.png"
                        />
                        <div className="absolute top-[23.78rem] left-[1.11rem] w-[16.72rem] h-[3.06rem] text-[1rem] text-blueviolet-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-lavender w-full h-full" />
                          <div className="absolute top-[0.94rem] left-[7.22rem] font-semibold">{`View `}</div>
                        </div>
                        <div className="absolute top-[17.11rem] left-[1.06rem] text-[1.33rem] leading-[150%] font-semibold mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                          <p className="m-0">{`Teknion wins Gold at 2022 `}</p>
                          <p className="m-0">International Design Awards</p>
                        </div>
                        <div className="absolute top-[21.39rem] left-[1.06rem] leading-[150%] font-black">
                          Politics
                        </div>
                        <div className="absolute top-[21.39rem] left-[5.17rem] leading-[150%] font-semibold text-grey text-right">
                          20 Sep 2022
                        </div>
                        <div className="absolute top-[21.78rem] left-[4.39rem] rounded-[50%] bg-gainsboro w-[0.28rem] h-[0.28rem]" />
                        <div className="absolute top-[20.83rem] left-[11.83rem] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem] text-mediumseagreen">
                          <div className="h-[1.11rem] w-[3.78rem] relative font-semibold inline-block">
                            Published
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[12.17rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] gap-[0.28rem] text-[0.67rem] text-primary">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative overflow-hidden shrink-0 min-h-[0.89rem]"
                            alt=""
                            src="/icbaselineremoveredeye.svg"
                          />
                          <div className="h-[0.83rem] w-[1.17rem] relative font-semibold inline-block">
                            428
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[15.83rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem]">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative"
                            alt=""
                            src="/statusup-1.svg"
                          />
                        </div>
                      </div>
                      <div className="h-[27.78rem] w-[18.89rem] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                        <img
                          className="absolute top-[0rem] left-[0rem] rounded-3xs w-full h-full object-cover"
                          alt=""
                          src="/rectangle-685-4@2x.png"
                        />
                        <div className="absolute top-[23.78rem] left-[1.11rem] w-[16.72rem] h-[3.06rem] text-[1rem] text-blueviolet-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-lavender w-full h-full" />
                          <div className="absolute top-[0.94rem] left-[7.22rem] font-semibold">{`View `}</div>
                        </div>
                        <div className="absolute top-[17.11rem] left-[1.06rem] text-[1.33rem] leading-[150%] font-semibold mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                          <p className="m-0">How 7 lines code turned into</p>
                          <p className="m-0">$36 Billion Empire</p>
                        </div>
                        <div className="absolute top-[21.39rem] left-[1.06rem] leading-[150%] font-black">
                          BUSINESS
                        </div>
                        <div className="absolute top-[21.39rem] left-[6.28rem] leading-[150%] font-semibold text-grey text-right">
                          20 Sep 2022
                        </div>
                        <div className="absolute top-[21.78rem] left-[5.5rem] rounded-[50%] bg-gainsboro w-[0.28rem] h-[0.28rem]" />
                        <div className="absolute top-[20.83rem] left-[11.83rem] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-[0.56rem] px-[1.11rem] text-mediumseagreen">
                          <div className="h-[1.11rem] w-[3.78rem] relative font-semibold inline-block">
                            Published
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[12.17rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] gap-[0.28rem] text-[0.67rem] text-primary">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative overflow-hidden shrink-0 min-h-[0.89rem]"
                            alt=""
                            src="/icbaselineremoveredeye.svg"
                          />
                          <div className="h-[0.83rem] w-[1.17rem] relative font-semibold inline-block">
                            428
                          </div>
                        </div>
                        <div className="absolute top-[0.67rem] left-[15.83rem] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem]">
                          <img
                            className="h-[0.89rem] w-[0.89rem] relative"
                            alt=""
                            src="/statusup-1.svg"
                          />
                        </div>
                      </div>
                      <Story
                        rectangle685="/rectangle-685-8@2x.png"
                        icbaselineRemoveRedEye="/icbaselineremoveredeye.svg"
                        statusUp="/statusup-1.svg"
                        group1000000956="/group-1000000956.svg"
                        propBackgroundColor="#fff"
                      />
                      <div className="rounded-3xs overflow-hidden flex flex-col items-center justify-start pt-[0.67rem] px-[0.67rem] pb-[0.94rem] box-border relative gap-[15rem] bg-[url('/rectangle-685-9@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-[0.67rem] text-primary mq450:gap-[7.5rem]">
                        <img
                          className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src="/rectangle-685-9@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.39rem]">
                          <div className="flex flex-row items-start justify-start gap-[0.22rem]">
                            <div className="rounded-8xs bg-gray-300 flex flex-row items-end justify-start py-[0.28rem] px-[0.56rem] gap-[0.28rem] z-[1]">
                              <img
                                className="h-[0.89rem] w-[0.89rem] relative overflow-hidden shrink-0 min-h-[0.89rem]"
                                alt=""
                                src="/icbaselineremoveredeye.svg"
                              />
                              <div className="h-[0.83rem] w-[1.17rem] relative font-semibold inline-block">
                                428
                              </div>
                            </div>
                            <div className="rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] z-[1]">
                              <img
                                className="h-[0.89rem] w-[0.89rem] relative"
                                alt=""
                                src="/statusup-1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-end justify-start py-[0rem] px-[0.39rem] gap-[0.72rem] text-[1.33rem] text-background">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <h3 className="m-0 w-[16.78rem] h-[4rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block z-[1] mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                              Chez pierre restaurant in Monte Carlo by
                              Vuidafieri
                            </h3>
                            <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.44rem] mt-[-5px] text-[0.89rem]">
                              <div className="flex flex-col items-start justify-start pt-[0.22rem] px-[0rem] pb-[0rem]">
                                <div className="w-[4.06rem] h-[1.33rem] relative leading-[150%] font-black inline-block z-[1]">
                                  BUSINESS
                                </div>
                              </div>
                              <div className="h-[0.28rem] w-[0.28rem] relative rounded-[50%] bg-gainsboro z-[1]" />
                              <div className="flex flex-col items-start justify-start pt-[0.22rem] px-[0rem] pb-[0rem] text-right text-grey">
                                <div className="w-[5.06rem] h-[1.33rem] relative leading-[150%] font-semibold inline-block z-[1]">
                                  20 Sep 2022
                                </div>
                              </div>
                              <Button
                                className="h-[2.22rem] flex-1 z-[1]"
                                variant="contained"
                              >
                                Created
                              </Button>
                            </div>
                          </div>
                          <div className="self-stretch h-[3.06rem] flex flex-row items-start justify-start gap-[0.56rem]">
                            <Button
                              className="h-[3.06rem] flex-1 z-[1]"
                              variant="contained"
                            >{`View `}</Button>
                            <button className="cursor-pointer [border:none] p-[0.83rem] bg-gray-100 self-stretch w-[3.28rem] rounded-3xs flex flex-row items-center justify-center box-border z-[1]">
                              <img
                                className="h-[0.32rem] w-[1.13rem] relative"
                                alt=""
                                src="/group-1000000956.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-3xs bg-background overflow-hidden flex flex-col items-center justify-start pt-[0.67rem] px-[0.67rem] pb-[0.94rem] box-border relative gap-[15rem] max-w-full text-[0.67rem] text-primary mq450:gap-[7.5rem]">
                        <img
                          className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src="/rectangle-685-10@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.39rem]">
                          <div className="flex flex-row items-start justify-start gap-[0.22rem]">
                            <div className="rounded-8xs bg-gray-300 flex flex-row items-end justify-start py-[0.28rem] px-[0.56rem] gap-[0.28rem] z-[1]">
                              <img
                                className="h-[0.89rem] w-[0.89rem] relative overflow-hidden shrink-0 min-h-[0.89rem]"
                                alt=""
                                src="/icbaselineremoveredeye.svg"
                              />
                              <div className="h-[0.83rem] w-[1.17rem] relative font-semibold inline-block">
                                428
                              </div>
                            </div>
                            <div className="rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] z-[1]">
                              <img
                                className="h-[0.89rem] w-[0.89rem] relative"
                                alt=""
                                src="/statusup-1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-end justify-start py-[0rem] px-[0.39rem] gap-[0.72rem] text-[1.33rem] text-background">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <h3 className="m-0 w-[16.78rem] h-[4rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block z-[1] mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                              <p className="m-0">{`Teknion wins Gold at 2022 `}</p>
                              <p className="m-0">International Design Awards</p>
                            </h3>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[1.61rem] mt-[-5px] text-[0.89rem]">
                              <div className="flex flex-col items-start justify-start pt-[0.22rem] px-[0rem] pb-[0rem]">
                                <div className="flex flex-row items-center justify-start gap-[0.56rem]">
                                  <div className="h-[1.33rem] w-[2.72rem] relative leading-[150%] font-black inline-block z-[1]">
                                    Politics
                                  </div>
                                  <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.28rem]">
                                    <div className="w-[0.28rem] h-[0.28rem] relative rounded-[50%] bg-gainsboro z-[1]" />
                                  </div>
                                  <div className="h-[1.33rem] w-[5.06rem] relative leading-[150%] font-semibold text-grey text-right inline-block z-[1]">
                                    20 Sep 2022
                                  </div>
                                </div>
                              </div>
                              <Button
                                className="h-[2.22rem] w-[6rem] z-[1]"
                                sx={{ width: 108 }}
                                variant="contained"
                              >
                                Draft
                              </Button>
                            </div>
                          </div>
                          <div className="self-stretch h-[3.06rem] flex flex-row items-start justify-start gap-[0.56rem]">
                            <Button
                              className="h-[3.06rem] flex-1 z-[1]"
                              variant="contained"
                            >{`View `}</Button>
                            <button className="cursor-pointer [border:none] p-[0.83rem] bg-gray-100 self-stretch w-[3.28rem] rounded-3xs flex flex-row items-center justify-center box-border z-[1]">
                              <img
                                className="h-[0.32rem] w-[1.13rem] relative"
                                alt=""
                                src="/group-1000000956.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <Story
                        rectangle685="/rectangle-685-11@2x.png"
                        icbaselineRemoveRedEye="/icbaselineremoveredeye.svg"
                        statusUp="/statusup-1.svg"
                        group1000000956="/group-1000000956.svg"
                        propBackgroundColor="unset"
                        propBackgroundImage="url('/rectangle-685-11@2x.png')"
                        propBackgroundSize="cover"
                        propBackgroundRepeat="no-repeat"
                        propBackgroundPosition="top"
                      />
                    </div>
                    <div className="w-[18.89rem] rounded-3xs bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[0.67rem] px-[0.67rem] pb-[0.94rem] box-border relative gap-[15rem] max-w-full text-[0.67rem] text-primary mq450:gap-[7.5rem]">
                      <img
                        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/rectangle-685-5@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.39rem]">
                        <div className="w-[5.67rem] flex flex-row items-start justify-start gap-[0.22rem]">
                          <div className="h-[1.44rem] flex-1 rounded-8xs bg-gray-300 flex flex-row items-center justify-end pt-[0.33rem] pb-[0.28rem] pr-[0.56rem] pl-[1.72rem] box-border relative gap-[0.28rem] z-[1]">
                            <img
                              className="h-[0.89rem] w-[0.89rem] absolute my-0 mx-[!important] top-[calc(50%_-_8px)] left-[0.56rem] overflow-hidden shrink-0"
                              alt=""
                              src="/icbaselineremoveredeye.svg"
                            />
                            <div className="self-stretch flex-1 relative font-semibold">
                              428
                            </div>
                          </div>
                          <div className="rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] z-[1]">
                            <img
                              className="h-[0.89rem] w-[0.89rem] relative"
                              alt=""
                              src="/statusup-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start pt-[3.72rem] px-[0.39rem] pb-[0rem] gap-[0.72rem] text-[0.89rem] text-background">
                        <div className="self-stretch flex flex-row items-start justify-start relative">
                          <div className="h-[0.28rem] w-[0.28rem] absolute my-0 mx-[!important] top-[0.94rem] left-[4.44rem] rounded-[50%] bg-gainsboro z-[1]" />
                          <div className="flex-1 flex flex-row items-center justify-start relative gap-[1.28rem]">
                            <h3 className="my-0 mx-[!important] h-[4rem] w-full absolute top-[-3.72rem] left-[0rem] text-[1.33rem] leading-[150%] font-semibold font-inherit inline-block z-[1] mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                              Chez pierre restaurant in Monte Carlo by
                              Vuidafieri
                            </h3>
                            <div className="flex flex-col items-start justify-start pt-[0.22rem] px-[0rem] pb-[0rem]">
                              <div className="w-[3.94rem] h-[1.33rem] relative leading-[150%] font-black inline-block z-[1]">
                                BUSINESS
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem] text-right text-grey">
                              <div className="h-[1.56rem] w-[5.06rem] flex flex-col items-start justify-start pt-[0.22rem] px-[0rem] pb-[0rem] box-border">
                                <div className="self-stretch flex-1 relative leading-[150%] font-semibold z-[1]">
                                  20 Sep 2022
                                </div>
                              </div>
                              <div className="h-[2.22rem] flex-1 rounded-8xs bg-lightcyan flex flex-row items-center justify-center p-[0.56rem] box-border z-[2] text-left text-mediumseagreen">
                                <div className="self-stretch w-[3.78rem] relative font-semibold inline-block">
                                  Published
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[3.06rem] rounded-3xs bg-lavender flex flex-row items-center justify-center pt-[0.94rem] px-[0.89rem] pb-[0.89rem] box-border whitespace-nowrap z-[1] text-[1rem] text-blueviolet-200">
                          <div className="h-[3.06rem] w-[16.72rem] relative rounded-3xs bg-lavender hidden" />
                          <div className="self-stretch w-[2.28rem] relative font-semibold inline-block z-[2]">{`View `}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <div className="w-[90.44rem] h-[6.11rem] relative hidden max-w-full">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-background shadow-[0px_4px_10px_rgba(182,_182,_182,_0.1)]" />
          <div className="absolute h-[45.45%] w-[30.77%] top-[27.27%] right-[65.97%] bottom-[27.27%] left-[3.26%] rounded-[9.99px] bg-whitesmoke shadow-[0px_0px_5.56px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden border-[0.6px] border-solid border-grey">
            <div className="absolute top-[0.8rem] left-[0.93rem] w-[5.24rem] h-[1.29rem]">
              <img
                className="absolute h-[95.28%] w-[23.52%] top-[2.58%] right-[76.48%] bottom-[2.15%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/iconlylightsearch.svg"
              />
              <div className="absolute top-[0rem] left-[2.16rem] leading-[150%]">
                Search
              </div>
            </div>
          </div>
          <div className="absolute w-[11.98%] top-[calc(50%_-_23.8px)] right-[3.5%] left-[84.52%] flex flex-row items-center justify-start py-[0rem] pr-[0.39rem] pl-[0rem] box-border gap-[0.56rem] text-center text-[1.21rem] font-urbanist">
            <div className="flex-1 flex flex-row items-center justify-start gap-[0.83rem]">
              <div className="h-[1.22rem] flex-1 relative leading-[1.21rem] font-medium inline-block mq450:text-[0.94rem] mq450:leading-[0.94rem]">
                <span>{`Hi, `}</span>
                <span className="text-dark">Admin</span>
              </div>
              <div className="h-[2.64rem] w-[2.64rem] relative text-background">
                <div className="absolute top-[0rem] left-[0rem] rounded-[6.81px] bg-primary w-full h-full" />
                <b className="absolute top-[0.72rem] left-[0.44rem] leading-[1.21rem] mq450:text-[0.94rem] mq450:leading-[0.94rem]">
                  AD
                </b>
              </div>
            </div>
            <img
              className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0"
              alt=""
              src="/evaarrowdownfill.svg"
            />
          </div>
        </div>
        <FrameComponent />
      </div>
    </LocalizationProvider>
  );
};

export default ContentManagement;
