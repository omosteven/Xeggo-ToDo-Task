import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const gridCut = 100 / 12;

const animateBody = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const PageTransition = styled.div`
  animation-name: ${animateBody};
  animation-duration: 2s;
  @media screen and (max-width: 720px) {
    animation-name: ${animateBody};
  }
`;

export const Grid = styled("div")<{
  flex?: boolean;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  spacing?: number;
  grid?: boolean;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  cardWidth?: string;
}>`
  display: ${(props) => (props.flex ? "flex" : "block")};
  display: ${(props) => props.grid && "inline-grid"};
  grid-template-columns: ${(props) =>
    props.grid ? "repeat(auto-fit, minmax(300px, 1fr))" : "none"};
  width: ${(props) => (props.lg ? `${props.lg * gridCut}%` : "100%")};
  width: ${(props) => props.cardWidth && `${props.cardWidth}`};
  column-gap: ${(props) => (props.spacing ? `${props.spacing}em` : "0")};
  justify-content: ${(props) => (props.spacing ? "space-between" : "none")};

  margin-top: ${(props) => (props.top ? `${props.top}` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0em")};
  margin-left: ${(props) => (props.left ? "auto" : "0em")};
  margin-right: ${(props) => (props.right ? "auto" : "0em")};

  @media screen and (min-width: 992px) {
    width: ${(props) => (props.md ? `${props.md * gridCut}%` : "100%")};
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.sm ? `${props.sm * gridCut}%` : "100%")};
  }
  @media screen and (max-width: 767px) {
    width: ${(props) => (props.xs ? `${props.xs * gridCut}%` : "100%")};
    flex-direction: ${(props) =>
      props.xs ? props?.xs > 12 && "column" : "row"};
  }
`;

const primaryColor = "#2042e3";
const secondaryColor = "#035FA1";
// const altColor = "";
const whiteColor = "#FFFFFF";
const darkColor = "#333333";

export const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 5em;
  top: 0em;
  z-index: 10000;
  background: white;
  //   border-bottom: 1px solid rgba(34,100,209,0.2);
  box-shadow: 20px 20px 100px rgba(5, 5, 5, 0.1), -20px -20px 10px #ffffff;
  background: linear-gradient(
      359.45deg,
      #4a99d3 -24.57%,
      rgba(74, 153, 211, 0) 76.31%
    ),
    #ffffff;
`;

export const PageFooter = styled.footer`
  width: 100%;
  height: auto;
  z-index: 1000000;
  background: ${darkColor};
  position: absolute;
  z-index: 1000;
`;

export const CentreAuthCard = styled.div`
  border-radius: 1em;
  border: 0.5px solid ${primaryColor};
  @media screen and (max-width: 768px) {
    border: none;
  }
`;

// --- Button ---
export const Button = styled("button")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  center?: boolean;
  radius?: string;
  size?: string;
  border?: string;
}>`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "40px")};
  color: ${(props) => (props.color ? `${props.color}` : whiteColor)};
  background: ${(props) =>
    props.background ? `${props.background}` : darkColor};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.center ? "auto" : "0px")};
  margin-right: ${(props) => (props.center ? "auto" : "0px")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0.5px")};
  box-sizing: border-box;
  border: none;
  display: block;
  font-size: ${(props) => props.size && `${props.size}`};
  border: ${(props) => props.border && `${props.border}`};
  font-weight: bold;
  margin-left: ${(props) => props.left && props.left};
  margin-right: ${(props) => props.right && props.right};
  cursor: pointer;
  outline: none;
  transition: 0.5s opacity;
  &:hover {
    opacity: 0.5;
  }
`;

// --- Button ---
export const Label = styled("label")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  center?: boolean;
  radius?: string;
  size?: string;
  border?: string;
  position?: string;
}>`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "40px")};
  color: ${(props) => (props.color ? `${props.color}` : whiteColor)};
  background: ${(props) =>
    props.background ? `${props.background}` : primaryColor};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.center ? "auto" : "0px")};
  margin-right: ${(props) => (props.center ? "auto" : "0px")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0.5px")};
  box-sizing: border-box;
  border: none;
  display: flex;
  align-items: center;
  align-self: center;
  font-size: ${(props) => props.size && `${props.size}`};
  border: ${(props) => props.border && `${props.border}`};
  font-weight: bold;
  margin-left: ${(props) => props.left && props.left};
  margin-right: ${(props) => props.right && props.right};
  text-align: ${(props) => props.position && props.position};
  cursor: pointer;
  outline: none;
  padding: 0.1px 0.1px;
  transition: 0.5s opacity;
  &:hover {
    opacity: 0.5;
  }
`;

export const Card = styled("div")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  center?: boolean;
  radius?: string;
  border?: string;
  shadow?: boolean;
  shadowAlt?: string;
  flex?: boolean;
  bgImg?: string;
  bgSize?: string;
  padding?: string;
  verticalCenter?: string;
  spaceBetween?: boolean;
  flexEnd?: boolean;
  borderColor?: string;
  overflowX?: string;
  overflowY?: string;
  animateZoom?: string;
  hideOnMobile?: boolean;
  widthResponsive?: boolean;
  xsWidth?: string;
  smWidth?: string;
  mdWidth?: string;
  lgWidth?: string;
}>`
  width: ${(props) => (props.width ? `${props.width}` : "initial")};
  height: ${(props) => (props.height ? `${props.height}` : "fit-content")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  box-shadow: ${(props) =>
    props.shadow ? `0px 8px 15px rgba(0, 0, 0, 0.1)` : "none"};
  box-shadow: ${(props) => props.shadowAlt && `${props.shadowAlt}`};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.center ? "center" : "none")};
  text-align: ${(props) => (props.center ? "center" : "none")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  background-image: ${(props) => props.bgImg && `${props.bgImg}`};
  background-size: ${(props) => props.bgSize && `${props.bgSize}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0.1px")};
  text-align: ${(props) => props.center && "center"};
  align-items: ${(props) => (props.verticalCenter ? "center" : "none")};
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "none"};

  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};

  border-radius: ${(props) => (props.radius ? `${props.radius}` : "none")};

  // --- For right align on display flex ----
  justify-content: ${(props) => props.flexEnd && "flex-end"};
  display: ${(props) => props.flexEnd && "flex"};

  border: ${(props) => (props.borderColor ? `${props.borderColor}` : "none")};

  overflowx: ${(props) => props.overflowX && props.overflowX};
  overflow-x: ${(props) => props.overflowY && props.overflowY};

  transition: 0.5s zoom 0.5s background;
  &:hover {
    zoom: ${(props) => props.animateZoom && 1.1};
  }

  // --- Responsive Parts ----
  margin-left: ${(props) => props.widthResponsive && "auto"};
  margin-right: ${(props) => props.widthResponsive && "auto"};
  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  @media screen and (max-width: 992px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
  }
  @media screen and (max-width: 481px) {
    width: ${(props) => props.xsWidth && `${props.xsWidth}`};
  }

  //   ----- To control screen size ----
  @media screen and (max-width: 992px) {
    display: ${(props) => props?.hideOnMobile && "none"};
  }
`;

export const TitleText = styled("h3")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  position?: string;
  heavy?: boolean;
  lineHeight?: string;
  transform?: string;
  fontFamily?: string;
  cursor?: boolean;
}>`
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  line-height: 45px;
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  font-weight: ${(props) => (props.heavy ? `bold` : "normal")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  line-height: ${(props) => props.lineHeight && `${props.lineHeight}`};
  text-transform: ${(props) => props.transform && `${props.transform}`};
  // --- For centralization ---
  text-align: ${(props) => props.center && "center"};
  font-family: ${(props) => props?.fontFamily && props?.fontFamily};
  font-style: normal;
  cursor: ${(props) => props.cursor && "pointer"};
`;

export const Text = styled("p")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  position?: string;
  heavy?: boolean;
  lineHeight?: string;
  transform?: string;
  fontFamily?: string;
  cursor?: boolean;
}>`
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  font-weight: ${(props) => (props.heavy ? `bold` : "normal")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  line-height: ${(props) => props.lineHeight && `${props.lineHeight}`};
  text-transform: ${(props) => props.transform && `${props.transform}`};
  // --- For centralization ---
  text-align: ${(props) => props.center && "center"};
  font-family: ${(props) => props?.fontFamily && props?.fontFamily};
  font-style: normal;
  cursor: ${(props) => props.cursor && "pointer"};
`;

// ---to be updated later --
export const LinkText = styled(Link)<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  position?: string;
  heavy?: boolean;
  lineHeight?: string;
  transform?: string;
  fontFamily?: string;
  noUnderline?: boolean;
  inline?: boolean;
}>`
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "14px")};
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  font-weight: ${(props) => (props.heavy ? `bold` : "normal")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  line-height: ${(props) => props.lineHeight && `${props.lineHeight}`};
  text-decoration: ${(props) => props.noUnderline && "none"};

  // --- For centralization ---
  text-align: ${(props) => props.center && "center"};
  margin-left: ${(props) => props.center && "auto"};
  margin-right: ${(props) => props.center && "auto"};
  font-style: normal;
  display: ${(props) => !props.inline && "block"};
  font-family: ${(props) => props?.fontFamily && props?.fontFamily};
  // width: fit-content;
  cursor: pointer;
`;

export const Avatar = styled.div`
  background: ${secondaryColor};
  border-radius: 50%;
  width: 2.5px;
  height: 2.5px;
`;

export const Divider = styled("hr")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  size?: string;
}>`
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : secondaryColor)};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
`;

export const TextField = styled("input")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  size?: string;
  border?: string;
  radius?: string;
  noBorder?: boolean;
  cursor?: boolean;
}>`
  box-sizing: border-box;
  border-radius: ${(props) => (props.radius ? props?.radius : "5px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : primaryColor)};
  border: ${(props) => props.noBorder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "48px")};
  background: ${(props) =>
    props.background ? `${props.background}` : whiteColor};
  outline: none;
  font-style: normal;
  line-height: 32px;
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  // &::placeholder {
  //   padding: 16px 15px;
  // };
  padding: 16px 15px;
  transition: 0.5s;

  &:hover {
    border-bottom: 1px solid ${secondaryColor};
  }
`;

export const TextAreaField = styled("textarea")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  size?: string;
  border?: string;
  radius?: string;
  noBorder?: boolean;
  width?: string;
  height?: string;
}>`
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : primaryColor)};
  border: ${(props) => props.noBorder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "10em")};
  outline: none;
  font-style: normal;
  // font-weight: 600;
  line-height: 32px;
  color: ${darkColor};
  &::placeholder {
    padding: 16px 15px;
  }

  transition: 0.5s;
  &:hover {
    border-bottom: 1px solid ${secondaryColor};
  }
`;

export const SelectField = styled("select")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  border?: string;
  radius?: string;
  noBorder?: boolean;
  heavy?: boolean;
  width?: string;
  height?: string;
}>`
  border: 1px solid #cbd2d9;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : secondaryColor)};
  background: ${(props) =>
    props.background ? `${props.background}` : whiteColor};
  padding: 0.5px 0.5px;
  font-weight: ${(props) => (props.heavy ? "bold" : "normal")};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "3.5em")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  outline: none;
`;

export const Option = styled("option")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  border?: string;
  radius?: string;
  noBorder?: boolean;
  heavy?: boolean;
  width?: string;
  height?: string;
}>`
  border: 1px solid #cbd2d9;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "16px")} solid
    ${(props) => (props.color ? `${props.color}` : secondaryColor)};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "3px")};
  outline: none;
`;

// --- Screen width display control ---
export const ScreenControl = styled("div")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  lineHeight?: string;
  transform?: string;
  fontFamily?: string;
  border?: string;
  radius?: string;
  noBorder?: boolean;
  heavy?: boolean;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  lg?: boolean;
  md?: boolean;
  all?: boolean;
  sm?: boolean;
  xs?: boolean;
}>`
  display: none;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  display: ${(props) => props.all && "initial"};

  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};

  display: ${(props) => props.lg && "initial"};
  @media screen and (max-width: 1200px) {
    display: none;
    display: ${(props) => props.md && "initial"};
  }
  @media screen and (max-width: 960px) {
    display: none;
    display: ${(props) => props.sm && "initial"};
  }
  @media screen and (max-width: 600px) {
    display: none;
    display: ${(props) => props.xs && "initial"};
  }
`;

export const Main = styled("main")<{
  top?: string;
  background?: string;
  fontFamily?: string;
}>`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  margin-top: ${(props) => (props?.top ? props?.top : "0px")};
  background: ${(props) =>
    props?.background ? props?.background : whiteColor};
  position: absolute;
`;

export const SearchField = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3px;
  background: ${whiteColor};
  padding: 0.5px 1px;
  border-radius: 0.5px;
  @media screen and (max-width: 992px) {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const MainSection = styled("section")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  background?: string;
  size?: string;
  width?: string;
  height?: string;
  verticalCenter?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}` : "90%")};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
  display: ${(props) => props.verticalCenter && "flex"};
  align-items: ${(props) => props.verticalCenter && "center"};
  background: ${(props) => props.background && props.background};
  height: 100%;
  height: ${(props) => props.height && props.height};
`;

export const ModalCard = styled("div")<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  radius?: string;
  height?: string;
  shadowAlt?: string;
  shadow?: boolean;
  flex?: boolean;
  bgImg?: string;
  bgSize?: string;
  padding?: string;
  verticalCenter?: boolean;
  spaceBetween?: boolean;
  flexEnd?: boolean;
  borderColor?: string;
  overflowX?: string;
  overflowY?: string;
}>`
  height: ${(props) => (props.height ? `${props.height}` : "fit-content")};
  background: ${(props) =>
    props.background ? `${props.background}` : whiteColor};
  box-shadow: ${(props) =>
    props.shadow ? `0px 8px 15px rgba(0, 0, 0, 0.1)` : "none"};
  box-shadow: ${(props) => props.shadowAlt && `${props.shadowAlt}`};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.center ? "center" : "none")};
  text-align: ${(props) => (props.center ? "center" : "none")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  background-image: ${(props) => props.bgImg && `${props.bgImg}`};
  background-size: ${(props) => props.bgSize && `${props.bgSize}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0.1px")};
  text-align: ${(props) => props.center && "center"};
  align-items: ${(props) => (props.verticalCenter ? "center" : "none")};
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "none"};

  border-radius: ${(props) => (props.radius ? `${props.radius}` : "none")};

  // --- For right align on display flex ----
  justify-content: ${(props) => props.flexEnd && "flex-end"};
  display: ${(props) => props.flexEnd && "flex"};

  border: ${(props) => (props.borderColor ? `${props.borderColor}` : "none")};

  overflowx: ${(props) => props.overflowX && props.overflowX};
  overflow: ${(props) => props.overflowY && props.overflowY};
  // --- Responsive Parts ----
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  position: fixed;
  top: 50%;
  left: 50%;
  // max-height:100%;
  overflow: scroll;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 992px) {
    width: 80%;
    // margin-top:10vh;
    // margin-bottom:10vh !important;
    // height:80vh;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 481px) {
    width: 90%;
  }
`;

export const GoBack = () => {
  //   const history = useHistory();
  return (
    // <>
    //   <LinkText
    //     to={url ? url : "/user/"}
    //     nounderline={"true"}
    //     color={"#670150"}
    //     left={"auto"}
    //   >
    <Button
      border={`1px solid ${secondaryColor}`}
      width={"10em"}
      background={whiteColor}
      color={primaryColor}
      left={"auto"}
      //   onClick={() => history.goBack()}
    >
      Go Back
    </Button>
    // </LinkText>
    // </>
  );
};
