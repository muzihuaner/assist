import  './modules/hack';
import Base from './modules/base';
import TopBar from './modules/TopBar';
import Audio from './modules/Audio';
import ZoomPage from './modules/ZoomPage';
import PointerFllow from './modules/PointerFllow';
import CursorAuto from './modules/CursorAuto';
import BigText from './modules/BigText';

const InitModules = [ TopBar, Audio, ZoomPage, PointerFllow, CursorAuto, BigText ]
class Assist extends Base {
  
    constructor(opts = {}) {
      super(opts);
      // 合并参数
      this.mergeConfig(opts);
      // 初始化插件
      this.init();
      this.isShow();
      this.resetAction = this.reset
    }

    init() {
       // 初始化dom
      InitModules.map(item=>this.use(item))
      this.registeStyle()
      this.registeHtml()
      // 初始化事件
      InitModules.map(item=>this.useEvent(item)) 
      // 格式化大段文本
      this.formatLongText()
     
    }
    
    reset() {
      Audio.reset()
      ZoomPage.reset()
      CursorAuto.reset(this)
      PointerFllow.reset(this)
      BigText.reset(this)
    }

  }
  export default Assist;
