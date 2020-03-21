export interface ICarouselData {
  titleTK?: string;
  title?: string;
  textTK?: string;
  text?: string;
  imageId?: string;
  imageSvg?: string;
  subText?: string;
}

export interface IEduCarouselProps {
  currentIndex?: number;
  data: ICarouselData[];
  onIndexChange?: (index: number) => void;
  itemWidth?: number;
  distanceBetweenItems?: number;
  marginHorizontal?: number;
  height?: number;
  dotJustify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  backgroundColor?: string;
  marginBottom?: number;
  noTouch?: boolean;
}
