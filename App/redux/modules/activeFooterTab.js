/*manage ios or android tab*/

/* action = {type:...}*/
const SET_FOOTER_TAB = 'SET_FOOTER_TAB';

/*action creators*/
export function setFooterTab(tab){
	return {
		type: SET_FOOTER_TAB,
		tab,
	}
};

const initialState = 'home';

export refault function activeFooterTabs (state = initialState, action){
	switch(action.type){
		case SET_FOOTER_TAB:
			return action.tab
		default : 
			return state
	}
}