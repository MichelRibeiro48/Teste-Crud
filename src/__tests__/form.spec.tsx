import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormNewEquipment from "@/components/Form";

let queryClient: QueryClient;
let buttonAdd: HTMLButtonElement;

describe("Form New Equipment", () => {
  beforeEach(() => {
    queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FormNewEquipment />
      </QueryClientProvider>
    );
    buttonAdd = screen.getByRole("button", { name: "Adicionar" });
  });

  afterEach(cleanup);

  it("should render main title", () => {
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Adicione um novo equipamento",
      })
    ).toBeDefined();
  });

  it("should render inputs", () => {
    const inputName = screen.getByLabelText("Nome");
    const inputType = screen.getByLabelText("Tipo");
    const inputBrand = screen.getByLabelText("Marca");
    const inputDate = screen.getByLabelText("Data de aquisição");

    expect(inputName).toBeDefined();
    expect(inputType).toBeDefined();
    expect(inputBrand).toBeDefined();
    expect(inputDate).toBeDefined();
  });

  it("should render errors when inputs are empty", async () => {
    await userEvent.click(buttonAdd);

    expect(screen.getByText("O nome é obrigatório")).toBeDefined();
    expect(screen.getByText("A marca é obrigatória")).toBeDefined();
    expect(screen.getByText("O tipo é obrigatório")).toBeDefined();
  });
});
