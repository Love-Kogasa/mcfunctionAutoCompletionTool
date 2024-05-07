var cmdList = [
    "?",
    "alwaysday",
    "camera",
    "camerashake",
    "clear",
    "clearspawnpoint",
    "clone",
    "connect",
    "damage",
    "daylock",
    "deop",
    "dialogue",
    "difficulty",
    "effect",
    "enchant",
    "event",
    "execute",
    "fill",
    "fog",
    "function",
    "gamemode",
    "gamerule",
    "gametest",
    "give",
    "help",
    "hud",
    "inputpermission",
    "kick",
    "kill",
    "list",
    "locate",
    "loot",
    "me",
    "mobevent",
    "msg",
    "music",
    "op",
    "particle",
    "playanimation",
    "playsound",
    "recipe",
    "reload",
    "replaceitem",
    "ride",
    "say",
    "schedule",
    "scoreboard",
    "script",
    "scriptevent",
    "setblock",
    "setmaxplayers",
    "setworldspawn",
    "spawnpoint",
    "spreadplayers",
    "stopsound",
    "structure",
    "summon",
    "tag",
    "teleport",
    "tell",
    "tellraw",
    "testfor",
    "testforblock",
    "testforblocks",
    "tickingarea",
    "time",
    "title",
    "titleraw",
    "toggledownfall",
    "tp",
    "w",
    "weather",
    "wsserver",
    "xp"
]

function similar(s, t, f) {
    if (!s || !t) {
        return 0
    }
    var l = s.length > t.length ? s.length : t.length
    var n = s.length
    var m = t.length
    var d = []
    f = f || 3
    var min = function(a, b, c) {
        return a < b ? (a < c ? a : c) : (b < c ? b : c)
    }
    var i, j, si, tj, cost
    if (n === 0) return m
    if (m === 0) return n
    for (i = 0; i <= n; i++) {
        d[i] = []
        d[i][0] = i
    }
    for (j = 0; j <= m; j++) {
        d[0][j] = j
    }
    for (i = 1; i <= n; i++) {
        si = s.charAt(i - 1)
        for (j = 1; j <= m; j++) {
            tj = t.charAt(j - 1)
            if (si === tj) {
                cost = 0
            } else {
                cost = 1
            }
            d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
        }
    }
    let res = (1 - d[n][m] / l)
    return res.toFixed(f)
}

function startup( inputText ){
    let num = 0
    let ret = []
    let commands = inputText.trim().split( "\n" )
    for( cmd of commands ){
        let similarArr = []
        for( tCmd of cmdList ){
            similarArr.push( similar( tCmd, cmd.split(" ")[0] ) )
        }
        let slr = Math.max.apply( null, similarArr )
        if( slr !== 0 && cmd[0] !== "#" ){
            ret.push( cmdList[similarArr.indexOf( slr.toFixed(3) ) ] + " " + cmd.split(" ").slice(1).join(" ") )
            num += 1
        } else ret.push( cmd )
        //console.log( Math.max.apply( null, similarArr ) )
        //use to find bug
        //console.log( similarArr )
    }
    return { cmds: ret.join("\n"), num: num }
}

/*Test::*/
/*console.log(startup(`sa helloWorld
say Wow!!!`).cmds)*/
