$(document).ready(function() {

var maxHeight = 300;
  var margin = {
      top: 20,
      right: 120,
      bottom: 20,
      left: 120
    },
    width = 960 - margin.right - margin.left,
    height = maxHeight - margin.top - margin.bottom;

  var i = 0,
    duration = 750,
    root;

  var tree = d3.layout.tree()
    .size([height, width]);

  var diagonal = d3.svg.diagonal()
    .projection(function(d) {
      return [d.y, d.x];
    });

  var svg = d3.select("svg.tree-chart")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  function isScrolledIntoView(elem)
  {
      var $elem = $(elem);
      var $window = $(window);

      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

  d3.json("assets/js/analysis.json", function(error, data) {
    root = data;
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      }
      update(d, function() {
        // console.log('done collapse', d, arguments);
        if (d._children) {
          d._children.forEach(collapse);
        }
      });
    }

    function expand(d) {
      if (d._children) {
        d.children = d._children;
        d._children = null;
      }
      update(d, function() {
        // console.log('done expand', d, arguments);
        if (d.children) {
          d.children.forEach(expand);
        }
      });
    }

    function refresh() {
      if (isScrolledIntoView("svg.tree-chart") ){
        expand(root);
        // console.log('show!', root);
      } else {
        collapse(root);
        // console.log('hide', root);
      }
    }

    $(window).scroll(refresh);
    refresh();

  });

  d3.select(self.frameElement).style("height", maxHeight+'px');

  function update(source, cb) {

    cb = cb || function() {
      console.log('end', arguments);
    };

    var nodeSize = function(d) {
      return d.value;
    };

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
      .data(nodes, function(d) {
        return d.id || (d.id = ++i);
      });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on("click", click);

    nodeEnter.append("circle")
      .attr("r", nodeSize)
      .style("fill", function(d) {
        return d.level;
        // return d._children ? d.level : "#fff";
      });

    nodeEnter.append("text")
      .attr("x", function(d) {
        return d.children || d._children ?
          (d.value + 4) * -1 : d.value + 4;
      })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function(d) {
        return d.name;
      })
      .style("fill-opacity", 1);

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    nodeUpdate.select("circle")
      .attr("r", nodeSize)
      .style("fill", function(d) {
        return d.level;
        // return d._children ? d.level : "#fff";
      });

    nodeUpdate.select("text")
      .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    nodeExit.select("circle")
      .attr("r", nodeSize);

    nodeExit.select("text")
      .style("fill-opacity", nodeSize);

    // Update the links…
    var link = svg.selectAll("path.link")
      .data(links, function(d) {
        return d.target.id;
      });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {
          x: source.x0,
          y: source.y0
        };
        return diagonal({
          source: o,
          target: o
        });
      });

    // Transition links to their new position.
    link.transition()
      .duration(duration)
      .attr("d", diagonal)
      .each('end', cb);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {
          x: source.x,
          y: source.y
        };
        return diagonal({
          source: o,
          target: o
        });
      })
      .remove()
      .each('end', cb);

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }


});
