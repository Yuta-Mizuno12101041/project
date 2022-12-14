/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SS(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(179,179,179,1)"
      padding="13px 13px 13px 13px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SS")}
    >
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="セル"
        {...getOverrideProps(overrides, "\u30BB\u30EB")}
      ></Text>
    </Flex>
  );
}
