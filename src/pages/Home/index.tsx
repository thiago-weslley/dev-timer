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

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="De um nome para sua tarefa" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
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

        <StartTimer type="submit" disabled>
          <Play size={28} />
          Começar
        </StartTimer>
      </form>
    </HomeContainer>
  );
}
