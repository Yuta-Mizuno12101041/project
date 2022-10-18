/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MemCellH(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1629px"
      height="193px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(97,218,251,1)"
      {...rest}
      {...getOverrideProps(overrides, "MemCellH")}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="338px"
        height="163px"
        position="absolute"
        top="15px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="参加者コード"
        {...getOverrideProps(overrides, "\u53C2\u52A0\u8005\u30B3\u30FC\u30C9")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="338px"
        height="163px"
        position="absolute"
        top="15px"
        left="338px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="参加者名"
        {...getOverrideProps(overrides, "\u53C2\u52A0\u8005\u540D")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="338px"
        height="163px"
        position="absolute"
        top="15px"
        left="688px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="参加者区分"
        {...getOverrideProps(overrides, "\u53C2\u52A0\u8005\u533A\u5206")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="338px"
        height="163px"
        position="absolute"
        top="15px"
        left="1026px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="開始日"
        {...getOverrideProps(overrides, "\u958B\u59CB\u65E5")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="338px"
        height="163px"
        position="absolute"
        top="15px"
        left="1291px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="終了日"
        {...getOverrideProps(overrides, "\u7D42\u4E86\u65E5")}
      ></Text>
    </View>
  );
}
