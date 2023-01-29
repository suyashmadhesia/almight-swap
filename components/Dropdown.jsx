import React from "react";
import { Dropdown, Image } from "@nextui-org/react";
import coins from "../utils/coins";

function DropdownItem({img, name}) {
  return <Dropdown.Item icon={
    <Image src={img} alt={name} />
  } key={name}>{name}</Dropdown.Item>
}

export default function CustomDropdown () {
  const topCoins = coins.slice(0, 10);
  const [selected, setSelected] = React.useState(new Set([topCoins[0].asset_id]));
    const selectedValue = Array.from(selected);
    return <Dropdown>
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
        {
          topCoins.map((coin) => 
            <DropdownItem key={coin.asset_id} img={coin.url} name={coin.asset_id} />
          )
        }
      </Dropdown.Menu>
    </Dropdown>
}