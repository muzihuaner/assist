import { cookie, addEvent,isFirefox,  removeEvent } from '../utils'
import styles from './index.scss'
import tmpl from './index.tmpl.js'
const TopBar = {
    init(core) {
        const { namespace } = core.config
        this.namespace = namespace
        core.creatStyle('topbar-style',styles)
        core.creatHtml('topbar-html',tmpl)
    },
    setEvents(core) {
        const { namespace } = core.config
        const BtnClose = document.getElementById(`${namespace}-close`)
        const BtnReset = document.getElementById(`${namespace}-reset`)
        const HoverItem = document.getElementById(`${namespace}-topbar-html-content`)

        BtnClose.onclick = () => {
            core.close()
        }

        BtnReset.onclick = () => {
            core.resetAction()
        }

        if(isFirefox()) {
            document.getElementById(`${namespace}-zoom-out`).style.display = 'none'
            document.getElementById(`${namespace}-zoom-min`).style.display = 'none'
        }

        [].forEach.call( HoverItem.children, (el)=> {
           addEvent(el,'mouseover',this.mouseOver)
           addEvent(el,'mouseout',this.mouseOut)
        });


    },
    mouseOver(event){
        var event = window.event || event;
        var target = event.target || event.srcElement;
        if(target.tagName !== 'IMG') {
            return
        }
        const __name = target.getAttribute('name')
        const __hover = target.getAttribute('hover-src')

        if(__name == 'audio') {
            if(cookie.get('audio',TopBar.namespace)) {
             target.src = __hover
            } else {
             target.src = target.getAttribute('selected-hover-src')
            }
         
        } else if (__name == 'speed') {
            if(cookie.get('speed',TopBar.namespace) == 'fast' ) {
              target.src = target.getAttribute('selected-hover-src')
            } else {
              target.src = __hover
            }
        } else {
            target.src = __hover
        }

       
    },
    mouseOut(event) {
        var event = window.event || event;
        var target = event.target || event.srcElement;
        if(target.tagName !== 'IMG') {
            return
        }
        const __name = target.getAttribute('name')
        const __source = target.getAttribute('source-src')
       if(__name == 'audio') {
           if(cookie.get('audio',TopBar.namespace)) {
              target.src = __source
           } else {
              target.src = target.getAttribute('selected-src')
           }
        
       } else if (__name == 'speed') {
            if(cookie.get('speed',TopBar.namespace) == 'fast' ) {
               target.src = target.getAttribute('selected-src')
            } else {
               target.src =  __source
            }
       } else {
            target.src = __source
       }
    }
};

export default TopBar;