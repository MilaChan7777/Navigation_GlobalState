export const reducer = (currentAction: any, currentState: any) => {
	//Payload: es el valor que queremos cambiar o asignar
	const { action, payload } = currentAction;

	switch (action) {
		case 'navigate':
			currentState.screen = payload;
			break;

		case 'changeBackground':
			currentState.background = payload;
			break;
	}

	return currentState;
};
