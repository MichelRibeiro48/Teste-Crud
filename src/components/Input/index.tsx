import { forwardRef } from "react";
import { InputProps } from "@/types/Input";
import { Container, LabelInput, StyledInput, ErrorMessage } from "./styles";

const InputEquipment = forwardRef<
  HTMLInputElement,
  InputProps & { error?: string }
>(
  (
    {
      value,
      onChange,
      label,
      id,
      type,
      showLabel = true,
      error,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <Container>
        {showLabel && <LabelInput htmlFor={id}>{label}</LabelInput>}
        <StyledInput
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          ref={ref}
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
);

InputEquipment.displayName = "InputEquipment";

export default InputEquipment;
