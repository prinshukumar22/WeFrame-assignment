import { useState } from "react";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const FrameComponent = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-[89rem] flex flex-row items-start justify-start py-[0rem] px-[1.72rem] box-border max-w-full text-left text-[1.33rem] text-dark font-urbanist">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.67rem] max-w-full">
          <div className="w-[83.56rem] flex flex-row items-center justify-between gap-[1.11rem] max-w-full mq450:flex-wrap">
            <h3 className="m-0 h-[2rem] w-[8.11rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
              Advertisment
            </h3>
            <div className="h-[1.67rem] w-[3.33rem] relative text-[1.11rem] leading-[150%] font-semibold text-primary inline-block mq450:text-[0.89rem] mq450:leading-[1.33rem]">
              See all
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.11rem] max-w-full text-darkslateblue">
            <div className="flex-1 rounded-xl bg-background shadow-[0px_0px_10.87px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-[0rem] pr-[1.33rem] pl-[0rem] box-border gap-[1.11rem] min-w-[20.83rem] max-w-full mq750:flex-wrap mq750:p-[1.11rem] mq750:box-border mq750:min-w-full">
              <img
                className="h-[11.78rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[8.17rem]"
                loading="eager"
                alt=""
                src="/da39df3511e5c0c30afdf26cfef40924-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.61rem] px-[0rem] pb-[0rem] box-border min-w-[8.28rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.33rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.56rem]">
                    <h3 className="m-0 w-[11.11rem] h-[2rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                      Build your business
                    </h3>
                    <div className="self-stretch h-[2.78rem] relative text-[0.89rem] leading-[150%] text-grey inline-block shrink-0">
                      Shopify has all the tools you need to start, sell, market,
                      and manage.
                    </div>
                  </div>
                  <div className="w-[12.5rem] h-[3.06rem] flex flex-row items-start justify-start gap-[0.56rem]">
                    <Button className="h-[3.06rem] flex-1" variant="contained">
                      Visit
                    </Button>
                    <div className="self-stretch w-[3.28rem] rounded-3xs bg-gray-100 flex flex-row items-center justify-center p-[0.83rem] box-border">
                      <img
                        className="h-[0.32rem] w-[1.13rem] relative"
                        alt=""
                        src="/group-1000000956.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background shadow-[0px_0px_10.87px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-[0rem] pr-[1.33rem] pl-[0rem] box-border gap-[1.11rem] min-w-[20.83rem] max-w-full mq750:flex-wrap mq750:p-[1.11rem] mq750:box-border mq750:min-w-full">
              <img
                className="h-[11.78rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[8.17rem]"
                alt=""
                src="/da39df3511e5c0c30afdf26cfef40924-1-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.61rem] px-[0rem] pb-[0rem] box-border min-w-[8.28rem]">
                <div className="self-stretch h-[9.72rem]">
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
                        helperText: "Visit",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background shadow-[0px_0px_10.87px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-[0rem] pr-[1.33rem] pl-[0rem] box-border gap-[1.11rem] min-w-[20.83rem] max-w-full mq750:flex-wrap mq750:p-[1.11rem] mq750:box-border mq750:min-w-full">
              <img
                className="h-[11.78rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[8.17rem]"
                alt=""
                src="/da39df3511e5c0c30afdf26cfef40924-1-2@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.61rem] px-[0rem] pb-[0rem] box-border min-w-[8.28rem]">
                <div className="self-stretch h-[9.72rem]">
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
                        helperText: "Visit",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FrameComponent;
