/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Cell from "./Cell";
import { Flex } from "@aws-amplify/ui-react";
export default function Cellline(props) {
  const { Mem, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="567px"
      height="64px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      aria-labelledby={Mem?.id}
      {...rest}
      {...getOverrideProps(overrides, "Cellline")}
    >
      <Cell
        display={Mem?.id}
        gap="10px"
        width="100%"
        alignItems="center"
        grow="1"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(179,179,179,1)"
        padding="13px 13px 13px 13px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "cell133")}
      ></Cell>
      <Cell
        display="flex"
        gap="10px"
        width="100%"
        alignItems="center"
        grow="1"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(179,179,179,1)"
        padding="13px 13px 13px 13px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "cell137")}
      ></Cell>
      <Cell
        display="flex"
        gap="10px"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(179,179,179,1)"
        padding="13px 13px 13px 13px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "cell141")}
      ></Cell>
      <Cell
        display="flex"
        gap="10px"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(179,179,179,1)"
        padding="13px 13px 13px 13px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "cell145")}
      ></Cell>
      <Cell
        display="flex"
        gap="10px"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(179,179,179,1)"
        padding="13px 13px 13px 13px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "cell1111")}
      ></Cell>
    </Flex>
  );
}
