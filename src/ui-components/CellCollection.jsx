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
import Cell from "./Cell";
import { Collection } from "@aws-amplify/ui-react";
export default function CellCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Meminfo,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      templateRows="1fr 1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="right"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CellCollection")}
    >
      {(item, index) => (
        <Cell
          meminfo={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Cell>
      )}
    </Collection>
  );
}
