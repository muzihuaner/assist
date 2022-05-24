               
import { cookie, addEvent, removeEvent } from '../utils'
import audioTabText from '../constans'
import Audio from '../Audio';

import styles from './index.scss'
import tmpl from './index.tmpl.js'
const PointerFllow = {
    init(core) {
        const { namespace } = core.config
        this.body =  document.body
        core.creatStyle('pointer-follow-style',styles)
        core.creatHtml('pointer-follow-html',tmpl)
      
    },
    setEvents(core) {
        const { namespace } = core.config
        if(cookie.get('pointer',namespace)) {
            this.show(core)
        }
        this.togglePointer(core, namespace)
    },
    addEventMove() {
        addEvent(this.body,'mousemove',this.mouseMove)
    },
    removeEventMove() {
        removeEvent(this.body,'mousemove',this.mouseMove)
    },
    togglePointer(core, namespace) {
        const tabBarBtn = document.getElementById(`${namespace}-pointer-follow`)
        const activeBtn =  document.getElementById(`${namespace}-pointer-follow-html`)
        tabBarBtn.onclick = () => {
            if( activeBtn.style.display == 'block' ) {
                this.reset(core)
                Audio.playAudio(audioTabText.pointerFollowClose)
            } else {
                this.show(core)
                Audio.playAudio(audioTabText.pointerFollowOpen)
            }
        }
    },
    mouseMove(event){
        var event = window.event || event;
        var pointerX = document.getElementById("pointer-follow-html-x"),
        pointerY = document.getElementById("pointer-follow-html-y");
        pointerX.style.top = event.clientY - 10 + "px";
        pointerY.style.left = event.clientX - 10 + "px";
    },
    show(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-pointer-follow-html`)
        activeBtn.style.display = 'block'
        this.addEventMove()
        cookie.set('pointer',true,namespace)
    },
    reset(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-pointer-follow-html`)
        activeBtn.style.display = 'none'
        this.removeEventMove()
        cookie.set('pointer',false,namespace)
    }
};

export default PointerFllow;