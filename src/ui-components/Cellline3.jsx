/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Cellline2 from "./Cellline2";
import { View } from "@aws-amplify/ui-react";
export default function Cellline3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="567px"
      height="64px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Cellline3")}
    >
      <Cellline2
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "cellline2")}
      ></Cellline2>
    </View>
  );
}
