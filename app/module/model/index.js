import {observable, computed, reaction} from 'mobx'

export default class ObservableTodoStore {
	@observable todos = [];
    @observable pendingRequests = 0;
}


// const observableTodoStore = new ObservableTodoStore();