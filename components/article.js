import { useMemo } from "react";
import { Button } from "@mui/material";

const Article = ({
  shapeGroup,
  textGroup,
  eCONOMY,
  ellipse2,
  researchOnBiodiversityAn,
  languageSelection,
  frame1000001030,
  propGap,
  propPadding,
  propGap1,
  propWidth,
  propWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const separatorLineStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const visitLinkStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const languageSelectionStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="w-[26.22rem] rounded-3xs bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.06rem] pb-[0.72rem] pr-[1rem] pl-[1.06rem] box-border gap-[0.72rem] z-[1] text-left text-[0.89rem] text-primary font-urbanist">
      <div className="self-stretch h-[12.67rem] relative rounded-3xs bg-whitesmoke overflow-hidden shrink-0">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-t-mini rounded-b-none w-full h-full object-cover"
          alt=""
          src={shapeGroup}
        />
        <img
          className="absolute top-[0rem] left-[0rem] rounded-t-mini rounded-b-none w-full h-full object-cover z-[1]"
          alt=""
          src={textGroup}
        />
      </div>
      <div className="self-stretch flex flex-row items-end justify-between gap-[1.11rem]">
        <div
          className="flex flex-row items-center justify-start gap-[0.39rem]"
          style={frameDivStyle}
        >
          <div className="h-[1.33rem] w-[4.44rem] relative leading-[150%] font-extrabold inline-block">
            {eCONOMY}
          </div>
          <div
            className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.28rem]"
            style={separatorLineStyle}
          >
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
            src={ellipse2}
          />
          <div className="h-[1.33rem] w-[4.17rem] relative leading-[150%] font-semibold inline-block">
            Maria Doe
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[1.06rem] text-[1.33rem] text-darkslateblue"
        style={frameDiv1Style}
      >
        <div className="flex flex-col items-start justify-start gap-[0.33rem]">
          <h3 className="m-0 w-[17.11rem] h-[2rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
            {researchOnBiodiversityAn}
          </h3>
          <div className="w-[15.61rem] h-[1.33rem] relative text-[0.89rem] leading-[150%] text-grey inline-block">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <div
            className="w-[11.56rem] flex flex-row items-start justify-start gap-[0.61rem]"
            style={visitLinkStyle}
          >
            <Button
              className="h-[2.22rem] w-[4.56rem]"
              sx={{ width: 82 }}
              variant="contained"
              style={languageSelectionStyle}
            >
              {languageSelection}
            </Button>
            <Button className="h-[2.22rem] flex-1" variant="contained">
              {frame1000001030}
            </Button>
          </div>
        </div>
        <Button
          className="h-[2.22rem] w-[6rem]"
          sx={{ width: 108 }}
          variant="contained"
        >
          Published
        </Button>
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
  );
};

export default Article;
