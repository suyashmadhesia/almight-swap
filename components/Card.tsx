import { Card, Container, Text, Input } from "@nextui-org/react";
import CustomButton from "./Button";
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
            <Input width="250px" placeholder="0" />
            <CustomDropdown />
        </div>
        <div className="flex justify-between mt-10">
            <Input width="250px" placeholder="0" />
            <CustomDropdown />
        </div>
        <div className="mt-10">

        </div>
        <CustomButton size="lg" name="Connect Wallet" />
      </Card.Body>
    </Card>
  );
}
