import("./cmdDo.js").then(cmdDo => startup = cmdDo.startup);
import("../data/cmdList.js").then(data => cmdList = data.cmdList);
import("../node_modules/mcfhighlight/index.js").then(data => mcfhl = data.default);

const start = function( mcf, outEle ){
    if ( mcf == "" ){
        outEle.innerHTML = "#文件不能为空哦w~"
    } else {
        outEle.innerHTML = "#修改后的mcfunctions::\n" + startup( mcf ).cmds + "\n#共检查了 " + startup( mcf ).num + " 次"
    }
    outEle.innerHTML = mcfhl( outEle.innerText );
    return null
}
