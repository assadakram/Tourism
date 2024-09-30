"use client";
import { useState } from "react";
import Popover from "../popover";
import PopoverButton from "./PopoverButton";
import List from "./List";
import Badge from "./Badge";
import { HorizontalLine } from "./styles";
import Icons, { PenIcon } from "../icons";

export const Category = ({ setCatId, catId, id, name, items, icon, delay }) => {
  // State to track selected items
  const [selectedItems, setSelectedItems] = useState(new Set());

  const togglePopover = (item) => {
    if (item) {
      setCatId((pre) => (pre === item ? 0 : item));
    } else {
      setCatId(0);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = new Set(prevSelectedItems);
      if (newSelectedItems.has(id)) {
        newSelectedItems.delete(id);
      } else {
        newSelectedItems.add(id);
      }
      return newSelectedItems;
    });
  };

  const IconComponent = Icons[icon];
  const isOpen = catId === id;
  return (
    <Popover
      isopen={isOpen}
      onClose={() => togglePopover(0)}
      placement="bottom-start"
      offsetX={0}
      offsetY={9}
      width={"auto"}
      renderTargetContent={() => (
        <PopoverButton
          isopen={isOpen}
          selecteditems={selectedItems}
          delay={delay}
          onClick={() => togglePopover(id)}
        >
          <IconComponent
            fill={
              isOpen ? "white" : selectedItems.size !== 0 ? "black" : "grey"
            }
          />
          {name}
          <HorizontalLine isOpen={!!isOpen} selecteditems={selectedItems} />
          <Badge
            backgroundcolor={
              isOpen
                ? "white"
                : selectedItems.size !== 0
                  ? "black"
                  : "transparent"
            }
          >
            {isOpen ? <PenIcon fill="grey" /> : selectedItems.size}
          </Badge>
        </PopoverButton>
      )}
      renderPopoverContent={() => (
        <List
          name={name}
          onClose={() => togglePopover(0)}
          items={items}
          selectedItems={selectedItems}
          onChange={handleCheckboxChange}
        />
      )}
    />
  );
};

export default Category;
