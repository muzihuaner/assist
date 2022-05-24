import reset from '../../assets/reset.png';
import audio from '../../assets/audio.png';
import speed from '../../assets/speed.png';
import zoomout from '../../assets/zoomout.png';
import zoomin from '../../assets/zoomin.png';
import cursor from '../../assets/cursor.png';
import pointer from '../../assets/pointer.png';
import bigtext from '../../assets/bigtext.png';
import pointeread from '../../assets/pointeread.png';
import close from '../../assets/close.png';

import resetHover from '../../assets/reset-hover.png';
import audioHover from '../../assets/audio-hover.png';
import speedHover from '../../assets/speed-hover.png';
import zoomoutHover from '../../assets/zoomout-hover.png';
import zoominHover from '../../assets/zoomin-hover.png';
import cursorHover from '../../assets/cursor-hover.png';
import pointerHover from '../../assets/pointer-hover.png';
import bigtextHover from '../../assets/bigtext-hover.png';
import pointereadHover from '../../assets/pointeread-hover.png';
import closeHover from '../../assets/close-hover.png';

import closeAudio from '../../assets/audio-close.png';
import speedQuick from '../../assets/speed-quick.png';

import closeAudioHover from '../../assets/audio-close-hover.png';
import speedQuickHover from '../../assets/speed-quick-hover.png';

const topBarHtml = (namespace) => {
     return `<div class='topbar-html-content' id='${namespace}-topbar-html-content'>
        <div id='${namespace}-reset' class='topbar-html-content-item'>
          <span>重置</span>
          <img src='${reset}' source-src='${reset}'  hover-src='${resetHover}'></img>
        </div>
        <div id='${namespace}-audio' class='topbar-html-content-item topbar-html-margin0'>
          <span>声音开关</span>
          <img src='${audio}' name='audio' source-src='${audio}'  hover-src='${audioHover}'    selected-src='${closeAudio}'   selected-hover-src='${closeAudioHover}'></img>
        </div>
        <div id='${namespace}-audio-speed' class='topbar-html-content-item topbar-html-mright'>
          <span>语速</span>
          <img src='${speed}' name='speed' source-src='${speed}'  hover-src='${speedHover}'  selected-src='${speedQuick}'   selected-hover-src='${speedQuickHover}'></img>
        </div>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <img src='${zoomout}' source-src='${zoomout}'  hover-src='${zoomoutHover}'></img>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item topbar-html-mright'>
          <span>缩小</span>
          <img src='${zoomin}' source-src='${zoomin}'  hover-src='${zoominHover}'></img>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item topbar-html-margin0'>
          <span>鼠标样式</span>
          <img src='${cursor}' source-src='${cursor}'  hover-src='${cursorHover}'></img>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item'>
          <span>十字线</span>
          <img src='${pointer}' source-src='${pointer}'  hover-src='${pointerHover}'></img>
        </div>
        <div id='${namespace}-bigtext' class='topbar-html-content-item topbar-html-mright'>
          <span>大字幕</span>
          <img src='${bigtext}' source-src='${bigtext}'  hover-src='${bigtextHover}'></img>
        </div>
        <div id='${namespace}-pointeread' class='topbar-html-content-item topbar-html-mright'>
          <span>指读</span>
          <img src='${pointeread}' source-src='${pointeread}'  hover-src='${pointereadHover}'></img>
        </div>
        <div id='${namespace}-close' class='topbar-html-content-item'>
          <span>退出服务</span>
          <img src='${close}' source-src='${close}'  hover-src='${closeHover}'></img>
        </div>
      </div>`
}

export default topBarHtml;