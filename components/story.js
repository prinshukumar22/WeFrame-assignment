import { useMemo } from "react";
import { Button } from "@mui/material";

const Story = ({
  rectangle685,
  icbaselineRemoveRedEye,
  statusUp,
  group1000000956,
  propBackgroundColor,
  propBackgroundImage,
  propBackgroundSize,
  propBackgroundRepeat,
  propBackgroundPosition,
}) => {
  const storyStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      backgroundImage: propBackgroundImage,
      backgroundSize: propBackgroundSize,
      backgroundRepeat: propBackgroundRepeat,
      backgroundPosition: propBackgroundPosition,
    };
  }, [
    propBackgroundColor,
    propBackgroundImage,
    propBackgroundSize,
    propBackgroundRepeat,
    propBackgroundPosition,
  ]);

  return (
    <div
      className="rounded-3xs bg-background overflow-hidden flex flex-col items-center justify-start pt-[0.67rem] px-[0.67rem] pb-[0.94rem] box-border relative gap-[15rem] max-w-full text-left text-[0.67rem] text-primary font-urbanist mq450:gap-[7.5rem]"
      style={storyStyle}
    >
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle685}
      />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.39rem]">
        <div className="flex flex-row items-start justify-start gap-[0.22rem]">
          <div className="rounded-8xs bg-gray-300 flex flex-row items-end justify-start py-[0.28rem] px-[0.56rem] gap-[0.28rem] z-[1]">
            <img
              className="h-[0.89rem] w-[0.89rem] relative overflow-hidden shrink-0 min-h-[0.89rem]"
              alt=""
              src={icbaselineRemoveRedEye}
            />
            <div className="h-[0.83rem] w-[1.17rem] relative font-semibold inline-block">
              428
            </div>
          </div>
          <div className="rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-[0.28rem] px-[0.56rem] z-[1]">
            <img
              className="h-[0.89rem] w-[0.89rem] relative"
              alt=""
              src={statusUp}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start py-[0rem] px-[0.39rem] gap-[0.72rem] text-[1.33rem] text-background">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h3 className="m-0 w-[16.78rem] h-[4rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block z-[1] mq450:text-[1.06rem] mq450:leading-[1.61rem]">
            <p className="m-0">How 7 lines code turned into</p>
            <p className="m-0">$36 Billion Empire</p>
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
            <Button className="h-[2.22rem] flex-1 z-[1]" variant="contained">
              Published
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
              src={group1000000956}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
