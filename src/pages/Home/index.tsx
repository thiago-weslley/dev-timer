import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  HomeContainer,
  FormContainer,
  TimerContainer,
  Separator,
  StartTimer,
  TaskInput,
  MinutesAmountInput,
} from "./styles";
import { Play } from "phosphor-react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo deve ter no mínimo 5 minutos")
    .max(60, "O ciclo deve ser no máximo 60 minutos"),
});

export function Home() {
  const { register, watch, formState, handleSubmit } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });

  const handleCreateNewCycle = (data: any) => {
    console.log(data);
  };

  const task = watch("task");
  const isSubmitDisabled = !task;
  console.log(formState.errors);
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Informe a tarefa"
            {...register("task")}
          />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <StartTimer type="submit" disabled={isSubmitDisabled}>
          <Play size={28} />
          Começar
        </StartTimer>
      </form>
    </HomeContainer>
  );
}
