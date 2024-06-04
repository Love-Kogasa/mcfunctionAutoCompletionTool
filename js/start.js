import {startup} from "./cmdDo.js";

globalThis.start = function( mcf, outEle ){
    if ( mcf == "" ){
        outEle.innerHTML = "#文件不能为空哦w~"
        return null
    } else {
        outEle.innerHTML = "#修改后的mcfunctions::\n" + startup( mcf ).cmds + "\n#共检查了 " + startup( mcf ).num + " 次"
    }
    return null
}
