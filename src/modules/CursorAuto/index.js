import { cookie, removeNode } from '../utils'
import audioTabText from '../constans'
import Audio from '../Audio';

import styles from './index.scss'

const CursorAuto = {
    init(core) {
        const { namespace } = core.config
      
    },
    setEvents(core) {
       const { namespace } = core.config
       if(cookie.get('cursor',namespace)) {
          core.creatStyle('cursor-auto-style',styles,true)
       }
       const tabBarBtn = document.getElementById(`${namespace}-cursor-auto`)
       tabBarBtn.onclick = () => {
            const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`)
            if(activeBtn) {
                removeNode(activeBtn)
                cookie.set('cursor', false, namespace)
                Audio.playAudio(audioTabText.cursorAutoClose)
            } else {
                cookie.set('cursor', true, namespace)
                core.creatStyle('cursor-auto-style',styles,true)
                Audio.playAudio(audioTabText.cursorAutoOpen)
            }
       }
    },
    reset(core) {
        const { namespace } = core.config
        const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`)
        activeBtn && removeNode(activeBtn)
    }
        
};

export default CursorAuto;