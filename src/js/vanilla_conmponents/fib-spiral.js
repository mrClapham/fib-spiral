import Enums from '../Enums.js';

const FibSpiral = {
    config:{},
    preRender:(target)=>{
        const _div = document.createElement("div")
        const _canvas = document.createElement("canvas")
        _canvas.setAttribute("width", "200")
        _canvas.setAttribute("height", "200")
        _div.appendChild(_canvas)
        target.appendChild(_div)
        return _div
    },
    render:function(target = null){
        if ( !target && !this.getTarget() ){
         return;
        };

        this.config.target = target;
        this.preRender(target)
        // let template = `<div class="fib-spiral">
        // <canvas width="400" height="400"></canvas>
        //     <div class="header-text">${this.getText()}</div>
        //     <div class="header-sub-text">${this.getSubText()}</div>
        //     <p>Input header text here:</p>
        //     <input id="header-input" class="no-drag header-textbox form-control"  type="text" value=${'"'+this.getText()+'"'} />

        // </div>`
        // this.getTarget().innerHTML = template;
        // let _input = document.querySelector('#header-input');

        // if(_input) {
        //     _input.addEventListener('input', (e)=>{
        //         this.setText(e.target.value);
        //     });

        //     _input.focus();
        //     var length = _input.value.length;
        //     _input.setSelectionRange(length, length);
        // }
    },
    getTarget:function(){
        return this.config.target || null;
    },
    getText:function(){
        return this.config.text;
    },
    setText:function(value){
        if(typeof value !== 'string'){
            throw new Error('setText requires a String');
        }
        this.config.text = value;
        this.render(this.getTarget());
    },
    setSubText:function(value){
        if(typeof value !== 'string'){
            throw new Error('setSubText requires a String');
        }
        this.config.subText = value;
        this.render();
    },
    getSubText:function(){
        return this.config.subText;
    }
};

export default {create:(config)=>{
    let _config = {
        target: null,
        text: "Default headline text",
        subText:"Default subtext"
    };

    //If there are any config objects -
    const _combinedConfig = Object.assign(_config, config);
    const h = Object.create(FibSpiral);
    h.config = _combinedConfig;
    return h;
} }
