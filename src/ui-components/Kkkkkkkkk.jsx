/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Kkkkkkkkk(props) {
  const { memberInfo, overrides, ...rest } = props;
  return (
    <View
      width="555px"
      height="44px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Kkkkkkkkk")}
    >
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="118px"
        height="44px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={memberInfo?.MemCode}
        {...getOverrideProps(overrides, "SSS109136")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="118px"
        height="44px"
        position="absolute"
        top="0px"
        left="118px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={memberInfo?.MemName}
        {...getOverrideProps(overrides, "SSS109156")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="118px"
        height="44px"
        position="absolute"
        top="0px"
        left="219px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={memberInfo?.MemDiv}
        {...getOverrideProps(overrides, "SSS109157")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="118px"
        height="44px"
        position="absolute"
        top="0px"
        left="337px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={memberInfo?.StartDate}
        {...getOverrideProps(overrides, "SSS109158")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="118px"
        height="44px"
        position="absolute"
        top="0px"
        left="438px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={memberInfo?.EndDate}
        {...getOverrideProps(overrides, "SSS109159")}
      ></Text>
    </View>
  );
}
