import Cookies from 'js-cookie'
import config from '../config.json';
const __domain = config.domain
const cookie = {
    set:(key,value, namespace) => {
     let memory = {
        show: false,   // 是否展示无障碍
        audio: false,  // 是否开启声音
        speed: 'middle', // 语速
        zomm: 0.1,     // 缩放倍数
        cursor: false, // 是否替换鼠标样式
        pointer: false,// 是否开启十字线
        bigtext: false,// 是否开启大字幕
        overead: false // 是否开启指读
      }

     if(Cookies.get(namespace)) {
        memory = JSON.parse(Cookies.get(namespace))
     }
     memory[key] = value
     Cookies.set(namespace, JSON.stringify(memory) , { domain: __domain })
    },
    get:(key, namespace)=> {
        let __key = ''
       if(Cookies.get(namespace)) {
           __key =  JSON.parse(Cookies.get(namespace))[key]
       }
       return __key
    },
    remove: (namespace) => {
        Cookies.remove(namespace, { domain: __domain})
    },
    setTag: (namespace) => {
        const __key = `${namespace}-ignore`
        let __data = []
        if(Cookies.get(__key)) {
            __data = JSON.parse(Cookies.get(__key))
         }
         const { origin, pathname } = location
         const __ignoreUrl = `${origin}${pathname}`
        !__data.includes(__ignoreUrl) && __data.push(`${origin}${pathname}`)
        Cookies.set(__key, JSON.stringify(__data) , { domain: __domain })
    },
    getTag: (namespace) => {
        const __key = `${namespace}-ignore`
        let __data = []
        if(Cookies.get(__key)) {
            __data = JSON.parse(Cookies.get(__key))
        }
        return __data
    }
}

const addEvent = (element, type, callback) => {
    const ignore = ['DOMContentLoaded']
    let __type = ignore.includes(type) ? type : 'on' + type
    if(element.addEventListener){
        element.addEventListener(type, callback, false);
    } else if(element.attachEvent){
        element.attachEvent(__type, callback);
    } else {
        element[__type] = callback;
    }
}

const removeEvent = (element, type, callback) => {
    const ignore = ['DOMContentLoaded']
    let __type = ignore.includes(type) ? type : 'on' + type
    if(element.removeEventListener){
        element.removeEventListener(type, callback);
    } else if(element.detachEvent){
        element.detachEvent(__type, callback);
    } else {
        element[__type] = null;
    }
}
const ruleType = (target) => {
  const __role = !!target.getAttribute('role') && target.getAttribute('role').toUpperCase() || target.tagName.toUpperCase()
 
  const __roleName = {
    IMG: '图片',
    BUTTON: '按钮',
    INPUT: '输入框',
    CHECKBOX: '复选框',
    RADIO: '单选框',
    OPTION: '下拉框',
    A: '链接'
  }
  if(__role == 'INPUT') {
    if(target.type == 'radio') {
        return '单选框';
    }else if(target.type == 'checkbox') { // button reset file
        return '复选框';
    } else if(target.type == 'text') { // button reset file
        return '文本框';
    } else if(target.type == 'submit') {
        return '提交按钮';
    } else if(target.type == 'reset') {
        return '重置按钮';
    }  else if(target.type == 'password') {
        return '密码输入框';
    } else {
        return '输入框';
    }
  }
  return __roleName[__role] || '文本'
}

const parseTagText = (target) => {
    const __name = ruleType(target)
    const __role = !!target.getAttribute('role') && target.getAttribute('role').toUpperCase() 
  
    if (__role === 'A' || target.tagName === 'A') {
        console.log('这是一个链接:' + target.alt || target.title || target.innerText);
        return `链接 ${target.alt || target.title || target.innerText}`;
    }

    if (target.children.length === 0){
        if (__role === 'IMG' ||target.tagName === 'IMG') {
            console.log('这是一张图片:' + target.alt || target.title);
            return `图片 ${target.alt || target.title}`;
        }
        if (__role === 'BUTTON' ||target.tagName === 'BUTTON') {
            console.log('这是一个按钮:' +  target.innerText);
            return `按钮 ${target.alt || target.title || target.innerText}`;
        }
        if (__role === 'INPUT' ||target.tagName === 'INPUT') {
            console.log(`这是一个${__name}:` + target.alt || target.title || target.value);
            return `${__name} ${target.alt || target.title || target.value}`;
        }

        if (__role === 'LABEL' ||target.tagName === 'LABEL') {
            const __linkId = target.getAttribute('for')
            const __linkDom = document.getElementById(__linkId)
           if(!!__linkDom && !!__linkDom.type && __linkDom.type == 'radio') {
            console.log(`这是一个单选:` + target.alt || target.title || target.innerText);
            return `单选 ${target.alt || target.title || target.innerText}`;
           }
        }

        if (target.alt || target.title || target.innerText){
            console.log(`${__name} ${target.alt || target.title || target.innerText}`);
            return `${__name} ${target.alt || target.title || target.innerText}`;
        }
        return ''
    } 

    if (target.children.length < 5 && (target.alt || target.title || target.innerText)){
        console.log(`${__name} ${target.alt || target.title || target.innerText}`);
        return `${__name} ${target.alt || target.title || target.innerText}`;
    }
    
    return ''
    
}

const trim = (s) => {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

const triggerEvent = (element, eventType) =>{
    var e;
    if(element.dispatchEvent){//正常情况
        e = new Event(eventType);
        element.dispatchEvent(e);
    }else if(element.fireEvent){//IE
        e = document.createEventObject();
        e.button = 1;
        element.fireEvent('on'+eventType,e);
    }else if(element['on'+eventType]){
        element['on'+eventType].call();
    }
}

const ajax = {
    get: (url, fn) => {
      // XMLHttpRequest对象用于在后台与服务器交换数据   
      var xhr = new XMLHttpRequest();            
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        // readyState == 4说明请求已完成
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
          // 从服务器获得数据 
          fn(xhr.responseText);  
        }
      };
      xhr.send();
    },
    // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    post:  (url, data, fn) => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      // 添加http头，发送信息至服务器时内容编码类型
      xhr.setRequestHeader("Content-Type", "application/json");  
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
          fn(xhr.responseText);  
        }
      };
      xhr.send(data);
    }
  }

/**
 * 判断是否是IE
 */
const isIE = () => {
    if (!!window.ActiveXobject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}
/**
 * 判断是否是IE11
 */
const isIE11 = () => {
    if((/Trident\/7\./).test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

const isFirefox = () => {
    const ua = navigator.userAgent
    if(ua.indexOf('Firefox') > -1) {
        return true
    }
    return false
}

const removeNode = (item) => {
　　if( isIE()||isIE11() ) {
        item.removeNode(true);
　　} else {
    　　item.remove();
   }
}
export {
    cookie,
    addEvent,
    removeEvent,
    parseTagText,
    ajax,
    triggerEvent,
    removeNode,
    isFirefox,
    trim
};