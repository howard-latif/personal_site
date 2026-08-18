import { useLocation } from "@solidjs/router";
import { AiOutlineMoon, AiOutlineStar } from "solid-icons/ai";
import { FaRegularDotCircle } from "solid-icons/fa";
import { RiOthersFlowerLine } from "solid-icons/ri";
import { Element } from "solid-js";

export const ContentListType = {
  Index: 0,
  Blog: 1,
  Projects: 2,
  Music: 3,
};

export type ContentListType =
  (typeof ContentListType)[keyof typeof ContentListType];

type ContentListTypeData = {
  subpath: string;
  icon: Element;
  col: string;
};

const contentListData: Record<ContentListType, ContentListTypeData> = {
  [ContentListType.Index]: {
    subpath: "",
    icon: <FaRegularDotCircle />,
    col: "gray",
  },
  [ContentListType.Blog]: {
    subpath: "blog",
    icon: <AiOutlineStar />,
    col: "red",
  },
  [ContentListType.Projects]: {
    subpath: "projects",
    icon: <AiOutlineMoon />,
    col: "blue",
  },
  [ContentListType.Music]: {
    subpath: "music",
    icon: <RiOthersFlowerLine />,
    col: "pink",
  },
};

export function useContentListType(): ContentListType {
  const location = useLocation();
  return Number.parseInt(
    Object.entries(contentListData).find(
      ([_, { subpath }]) => location.pathname === `/personal_site/${subpath}`,
    )?.[0] ?? "0",
  );
}

export function getIcon(cl_type: ContentListType) {
  return contentListData[cl_type].icon;
}

export function getColor(cl_type: ContentListType) {
  return contentListData[cl_type].col;
}
