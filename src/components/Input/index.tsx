import { InputProps } from "@/types/Input";
import { Container, LabelInput, StyledInput } from "./styles";

export default function InputEquipment({
  value,
  onChange,
  label,
  id,
  showLabel = true,
}: InputProps) {
  return (
    <Container>
      {showLabel && <LabelInput>{label}</LabelInput>}
      <StyledInput
        id={id}
        type={id === "acquisitionDate" ? "date" : "text"}
        value={value}
        onChange={(e) => onChange(e)}
        required
      />
    </Container>
  );
}
