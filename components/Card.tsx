import { Card, Container, Text, Input } from "@nextui-org/react";
import CustomDropdown from "./Dropdown";

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
            <Input placeholder="0" />
            <CustomDropdown />
        </div>
        <div className="flex justify-between">
            <Input placeholder="0" />
        </div>
      </Card.Body>
    </Card>
  );
}
