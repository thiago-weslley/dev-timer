import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { CycleForm } from "./components/CycleForm";
import { Timer } from "./components/Timer";

import { HomeContainer, StartTimerButton, StopTimerButton } from "./styles";
import { HandPalm, Play } from "phosphor-react";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo deve ter no mínimo 5 minutos")
    .max(60, "O ciclo deve ser no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { createNewCycle, interruptNewCycle, activeCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { watch, reset, handleSubmit } = newCycleForm;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data);

    reset();
  };

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <CycleForm />
        </FormProvider>

        <Timer />

        {activeCycle ? (
          <StopTimerButton onClick={interruptNewCycle} type="button">
            <HandPalm size={28} />
            Interromper
          </StopTimerButton>
        ) : (
          <StartTimerButton type="submit" disabled={isSubmitDisabled}>
            <Play size={28} />
            Começar
          </StartTimerButton>
        )}
      </form>
    </HomeContainer>
  );
}
