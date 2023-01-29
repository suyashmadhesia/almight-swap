import { Button } from "@nextui-org/react";

interface ButtonProps {
  color?: "primary" | "secondary" | "gradient";
  onClick?: () => void;
  name?: string;
  size?: "sm" | "lg" | "xl";
}

export default function CustomButton({color="gradient", size="sm",onClick, name }: ButtonProps) {
  return (
    <Button color={color} auto onClick={onClick} size={size}>
      {name}
    </Button>
  );
}
