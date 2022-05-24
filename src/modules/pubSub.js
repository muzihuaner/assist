
export default {
    list: {},
    subscribe: function(key, fn) {
      if (!this.list[key]) this.list[key] = [];
   
      this.list[key].push(fn);
    },
    unsubscribe: function(key, fn) {
      let fnList = this.list[key];

      if (!fnList) return false;
      
      if (!fn) { // 不传入指定的方法，清空所用 key 下的订阅
        fnList && (fnList.length = 0);
      } else {
        fnList.forEach((item, index) => {
          item === fn && fnList.splice(index, 1);
        });
      }
    },
    publish: function(key, ...args) {
        let fnList = this.list[key];
        if (!fnList) return false;

        for (let fn of this.list[key]) {
            !!fn && fn.call(this, ...args);
        }
     
    }
  }