export const generate = (state: any) => {
  let commands: Array<string> = [];
  Object.keys(state.app.steps).forEach((step: any) => {
    let command = state.app.steps[step].command;
    if (state.app.steps[step].variables)
      state.app.steps[step].variables.forEach((variable: any) => {
        if (variable === "command")
          command = command.replace(
            `{{${variable}}}`,
            JSON.stringify(state[variable].split(" "))
          );
        else command = command.replace(`{{${variable}}}`, state[variable]);
      });
    commands.push(command + "\n");
  });
  return commands;
};
