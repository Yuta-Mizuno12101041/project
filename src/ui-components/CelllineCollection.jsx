/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Meminfo } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Cellline from "./Cellline";
import { Collection } from "@aws-amplify/ui-react";
export default function CelllineCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Meminfo,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column-reverse"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CelllineCollection")}
    >
      {(item, index) => (
        <Cellline
          meminfo={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Cellline>
      )}
    </Collection>
  );
}
