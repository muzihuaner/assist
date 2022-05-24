import { cookie, addEvent, removeEvent } from './utils'
import audioTabText from './constans'
import Audio from './Audio';

const ZoomPage = {
    init(core) {
        const { namespace } = core.config
        this.size = cookie.get('zomm',namespace) || 1.0
        this.ignore = ['LINK','SCRIPT']
        this.namespace = namespace
        this.set()
       
    },
    setEvents(core) {
       const { namespace } = core.config
       document.getElementById(`${namespace}-zoom-out`).onclick = () => {
        this.zoomOut(core) 
       }

       document.getElementById(`${namespace}-zoom-min`).onclick = () => {
        this.zoomMin(core) 
       }
       addEvent(window,'DOMContentLoaded',()=>{
           this.updateZoomState(core)
       })
    },
    updateZoomState(core) {
        let { message } = core
        message.publish('zoomState',this.size)
    },
    zoomOut(core) {
        if(this.size >= 1.3) {
            console.log('已最大')
            Audio.playAudio(audioTabText.zoomOutEnd)
            this.updateZoomState(core)
            return
        }
        this.size = parseFloat((this.size+0.1).toFixed(10));  
        this.updateZoomState(core)
        this.set(); 
        Audio.playAudio(audioTabText.zoomOut)
    },
    zoomMin(core) {
        if(this.size <= 1.0) {
            console.log('已最小')
            Audio.playAudio(audioTabText.zoomMinEnd)
            this.updateZoomState(core)
            return
        }
        this.size = parseFloat((this.size-0.1).toFixed(10));  
        this.updateZoomState(core)
        this.set(); 
        Audio.playAudio(audioTabText.zoomMin)
    },
    set() {  
        [].forEach.call( document.body.children, (el)=> {
            const __el = el.tagName.toUpperCase()
            if(this.ignore.indexOf(__el) > -1 || el.id == this.namespace) {
                return
            }
            el.style.zoom = this.size;
          //  el.style.transform = `scale(${this.size})`
            //el.style.transformOrigin = '0px 0px'
        });
        cookie.set('zomm', this.size, this.namespace)
    },
    reset() {
        this.size = 1.0
        this.set()
    }   
        
};

export default ZoomPage;