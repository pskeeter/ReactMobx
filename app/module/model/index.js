import { observable, computed, autorun, action } from 'mobx'

class HostUser {
  @observable defaultVal = 'abc'
}

export default new HostUser()