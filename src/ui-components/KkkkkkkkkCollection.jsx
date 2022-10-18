/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { MemberInfo } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Kkkkkkkkk from "./Kkkkkkkkk";
import { Collection } from "@aws-amplify/ui-react";
export default function KkkkkkkkkCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: MemberInfo,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "KkkkkkkkkCollection")}
    >
      {(item, index) => (
        <Kkkkkkkkk
          memberInfo={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Kkkkkkkkk>
      )}
    </Collection>
  );
}
