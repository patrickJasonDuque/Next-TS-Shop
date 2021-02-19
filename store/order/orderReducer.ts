import * as actionTypes from './orderActionTypes';

export interface OrderState {
	orders: actionTypes.OrderType[];
	loading: boolean;
	error: string;
}

const initialState: OrderState = {
	orders: [],
	loading: false,
	error: null
};

const orderReducer = (state = initialState, action: actionTypes.OrderDispatchType): OrderState => {
	const newState = { ...state };

	switch (action.type) {
		case actionTypes.ADD_ORDER_START:
			newState.loading = true;
			break;
		case actionTypes.ADD_ORDER_SUCCESS:
			newState.error = null;
			newState.loading = false;
			break;
		case actionTypes.ADD_ORDER_FAILED:
			newState.loading = false;
			newState.error = action.payload;
			break;
	}

	return newState;
};

export default orderReducer;