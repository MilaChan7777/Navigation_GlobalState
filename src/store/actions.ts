export const changeBackgroud = (payload: any) => {
	return {
		action: 'changeBackgroud',
		payload: payload,
	};
};

export const navigate = (screen: any) => {
	return {
		action: 'navigate',
		payload: screen,
	};
};
