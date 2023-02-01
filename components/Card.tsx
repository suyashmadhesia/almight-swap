import { Card, Container, Text, Input } from "@nextui-org/react";
import CustomButton from "./Button";
import CustomDropdown from "./Dropdown";
import React from "react";

interface CustomCardProp {
  fromCurrency?: string;
  toCurrency?: string;
}

function Divider () {
    return  <Card.Divider css={{
        background:"$gray800",
      }} />
}

export default function CustomCard({
  fromCurrency = "ETH",
  toCurrency = "ALM",
}: CustomCardProp) {

  const [selected1, setSelected1] = React.useState(new Set(["USDT"]));
  const selectedValue1 = Array.from(selected1);

  const [selected2, setSelected2] = React.useState(new Set(["ALM"]));
  const selectedValue2 = Array.from(selected2);

  return (
    <Card
      css={{
        mw: "400px",
        background: "#16181A",
        border: "none",
      }}
    >
      <Card.Header>
        <Text
          css={{
            color: "White",
          }}
          h3
        >
          Swap
        </Text>
      </Card.Header>
      <Divider />
      <Card.Body
        css={{
          marginTop: "$10",
          marginBottom: "$10",
          width: "100%",
        }}
      >
        <div className="flex justify-between">
            <Input width="250px" placeholder="0" />
            <CustomDropdown selected={selected1} selectedValue={selectedValue1} setSelected={setSelected1} />
        </div>
        <div className="flex justify-between mt-10">
            <Input width="250px" placeholder="0" />
            <CustomDropdown selected={selected2} selectedValue={selectedValue2} setSelected={setSelected2} />
        </div>
        <div className="mt-10">

        </div>
        <CustomButton size="lg" name="Connect Wallet" />
      </Card.Body>
    </Card>
  );
}
