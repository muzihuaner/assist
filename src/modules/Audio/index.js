import { cookie, ajax, addEvent, removeEvent, parseTagText, triggerEvent, trim } from '../utils'
import audioTabText,{ symbolsReg } from '../constans'

import styles from './index.scss'
import tmpl from './index.tmpl.js'
const Audio = {
init(core) {
const { namespace, url } = core.config
this.body = document.body
this.namespace = namespace
this.AudioApi = url
core.creatStyle('audio-style',styles)
core.creatHtml('audio-html',tmpl)
this.isAudio = cookie.get('audio',namespace)
this.isOveread = cookie.get('overead',namespace)
},
setEvents(core) {
const { namespace } = core.config
this.registeDom(namespace)
this.toggleAudio()
if(this.isAudio) {
this.addEventMove()
addEvent(document,'click',this.forceSafariPlayAudio) // 苹果浏览器需要用户跟浏览器有个交互才可以播放语音
} else {
this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src')
}

    if(this.isOveread) {
        this.pointeReadTabIcon.src  =  this.pointeReadTabIcon.getAttribute('selected-src')
    } else {
        this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute('source-src')
    }

    if(this.speed == 'fast') {
        this.speedTabImg.src = this.speedTabImg.getAttribute('selected-src')
    } else {
        this.speedTabImg.src = this.speedTabImg.getAttribute('source-src')
    }
},
registeDom(namespace) {
    this.audio = document.getElementById(`${namespace}-audio-media`) || ''
    this.audioTab = document.getElementById(`${namespace}-audio`) || ''
    this.audioTabImg =  this.audioTab.getElementsByTagName('img')[0]

    this.speed =  cookie.get('speed',namespace)
    this.speedTab =  document.getElementById(`${namespace}-audio-speed`) || ''
    this.speedTabImg =   this.speedTab.getElementsByTagName('img')[0]
    this.pointeReadTab =  document.getElementById(`${namespace}-pointeread`) || ''
    this.pointeReadTabIcon = document.querySelector(`#${namespace}-pointeread img`)
},
toggleAudio() {
    const { namespace } = Audio
    this.audioTab.onclick = () => {
        if(this.isAudio) {
            this.closeAudio()
        }else {
            this.showAudio()
            Audio.playAudio(audioTabText.audioOpen)
        }
    } 

    this.speedTab.onclick = () => {
        if(this.speed == 'middle') {
            this.speed = 'fast'
            this.speedTabImg.src =  this.speedTabImg.getAttribute('selected-src')
            Audio.playAudio(audioTabText.speedQuick)
        } else {
            this.speed = 'middle'
            this.speedTabImg.src =  this.speedTabImg.getAttribute('source-src')
            Audio.playAudio(audioTabText.speedMiddle)
        }
        cookie.set('speed', this.speed, namespace)
    }

    this.pointeReadTab.onclick = () => {
        if(this.isAudio) {
            Audio.playAudio(audioTabText.pointereadClose)
            this.closeAudio()
        }else {
            this.showAudio()
            Audio.playAudio(audioTabText.pointeread)
        }
    }



},
showAudio() {
    const { namespace } = Audio
    this.isAudio = true
    this.addEventMove()
    cookie.set('audio', true, namespace)
    cookie.set('overead', true, namespace)
    this.audioTabImg.src = this.audioTabImg.getAttribute('source-src')
    this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute('selected-src')
},
closeAudio() {
    const { namespace } = Audio
    this.isAudio = false
    this.stopAudio()
    this.removeEventMove()
    cookie.set('audio', false, namespace)
    cookie.set('overead', false, namespace)
    this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src')
    this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute('source-src')
},
addEventMove() {
    addEvent(this.body,'mouseover',this.mouseOver)
},
removeEventMove() {
   removeEvent(this.body,'mouseover',this.mouseOver)
},
forceSafariPlayAudio() {
    const { audio } = Audio
    try {
        audio.load();
        audio.play();
    }catch(err) {}
},
mouseOver(event){
    var event = window.event || event;
    var target = event.target || event.srcElement;
    var __text = parseTagText(target).replace(symbolsReg,'')
    var __parentNodeId  =  target.parentNode.id
    var __isAssist = __parentNodeId.indexOf(Audio.namespace) > -1
    
    if(__text == '' || trim(__text) == '文本' || __isAssist ) {
        return
    }
    Audio.playAudio(__text)
},
playAudio(text) {
    if(window.speechSynthesis){
        this.systemAudioAction(text)
    } else {
        this.degradationAudioAction(text)
    }
},
stopAudio() {
     if(window.speechSynthesis){
         window.speechSynthesis.cancel()
     } else {
        this.audio.pause()
     }
},
getWindowVoice(){  // 获取浏览器中语音 (中文 + 本地服务)
    return window.speechSynthesis.getVoices().find(item => item.localService && item.lang === 'zh-CN')
},
systemAudioAction(text) {
    const {  isAudio, speed } = Audio
    if(!isAudio) {
        return
    }
    const __speed = speed == 'middle' ? 1 : 1.5
    const synth = window.speechSynthesis;
    synth.cancel()
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;     // 文字内容
    msg.lang = "zh-CN";  // 使用的语言:中文
    msg.volume = 1;      // 声音音量：1
    msg.rate = __speed;        // 语速：1
    msg.pitch = 1;       // 音高：1
    msg.voice = this.getWindowVoice()  // 使用本地服务合成语音(若是获取不到 请异步获取, 加一个setTimeout)
    synth.speak(msg);    // 播放
},
degradationAudioAction(text) {
    const { namespace, AudioApi, isAudio, audio, speed, forceSafariPlayAudio } = Audio
    if(!isAudio) {
        return
    }
   let __speed = speed == 'middle' ? -150 : 0
   let  AudioParam = `le=zh&audio=${encodeURI(text)}`
   let AudioUrl = `${AudioApi}?${AudioParam}`
    audio.src = AudioUrl
    document.getElementById(`${namespace}-audio-source`).src =  AudioUrl
    document.getElementById(`${namespace}-audio-embed`).src =  AudioUrl
    let playPromise =  audio.play();
    if(playPromise) {
        playPromise.then(_ => {
        // audio.pause();
            removeEvent(document,'click', forceSafariPlayAudio)
        })
        .catch(error => {
            console.log(error)
        });
    }
},
reset() {
    const { namespace } = Audio
    this.closeAudio()
    this.speedTabImg.src = this.speedTabImg.getAttribute('source-src')
    this.speed =  'middle'
    cookie.set('speed', 'middle', namespace)
}   
};

export default Audio;
