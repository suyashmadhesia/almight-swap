import React from "react";
import { Dropdown, Image } from "@nextui-org/react";

export default function CustomDropdown () {
  const [selected, setSelected] = React.useState(new Set(["USDT"]));
    const selectedValue = Array.from(selected);
    return <Dropdown className="bg-black">
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
         <Dropdown.Item key="BTC">BTC</Dropdown.Item>
         <Dropdown.Item key="ETH">ETH</Dropdown.Item>
         <Dropdown.Item key="ALM">ALM</Dropdown.Item>
         <Dropdown.Item key="USDT">USDT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}