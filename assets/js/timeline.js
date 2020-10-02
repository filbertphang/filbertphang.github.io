var timeline = document.getElementsByClassName("timeline")[0]
// var first_flexbox = document.getElementsByClassName("timeline-flexbox")[0]
// var first_node = document.getElementsByClassName("node")[0]

function extendTimeline() {
    // node_top_offset = first_node.offsetTop - first_flexbox.offsetTop + 32
    parent_height = document.getElementsByClassName("timeline-container")[0].scrollHeight - 32
    timeline.style.height = parent_height + "px";
    // timeline.style.marginTop = node_top_offset + "px"
}

document.getElementsByTagName("BODY")[0].onresize = function () { extendTimeline() }

extendTimeline()