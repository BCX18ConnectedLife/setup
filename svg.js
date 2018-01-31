var tooltip = d3.select("#tool")

d3.select("#introSvg").select("#polygon-group")
    .selectAll("polygon")
    .on("mouseover", function () {
        tooltip.style("opacity", "1");
        document.getElementById("tool").innerHTML = this.getAttribute("title");
    })
    .on("mousemove", function () {
        tooltip
            .style("left", Math.max(0, d3.event.pageX - 150) + "px")
            .style("top", (d3.event.pageY + 20) + "px");
    })
    .on("mouseout", function () {
        return tooltip.style("opacity", "0");
    });


