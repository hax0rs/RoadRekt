/*
{description}
Copyright (C) 2015 UQ hax0rs

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

// Variables and Constants
var API_PATH = "json/";


function prepare_time_data (json_time_data) {
    var prepared_data = {"labels" : [],
                         "datasets" : [{
                            fillColor : "rgba(192,57,43,0.5)",
                            strokeColor : "rgba(192,57,43,0.8)",
                            highlightFill : "rgba(192,57,43,0.75)",
                            highlightStroke : "rgba(192,57,43,1)",
                            "data" : []
                        }]
                    };

    var data = json_time_data["data"];

    for (var i = 0; i < data.length; i++) {
        prepared_data["labels"].push(data[i]["time"]);
        prepared_data["datasets"][0]["data"].push(data[i]["fatality_count"]);
    }
    return(prepared_data);
}

function get_time_data (path) {
    $.getJSON(path, function( return_feed ) {
            // console.log(return_feed);
            var test = prepare_time_data(return_feed);
            var ctx1 = document.getElementById("time_canvas").getContext("2d");
    window.myBar = new Chart(ctx1).Bar(test, {
      responsive : true
    });
    });
}


var barChartData = get_time_data(API_PATH);

console.log(barChartData);
