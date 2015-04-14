/**
 * @JSDOC3
 * @URL http://www.chartjs.org/docs/
 *
 */
(function () {

    _g_.ui.mGcanvas.fInitialize = function () {
        var oSelf = this;
        /**
         * 보는것처럼 $$$ 는 아무의미 없음.
         * this도 oSelf 의 의미가 강함 (= 문맥 context이 바뀌는 것 window -> 함수 안으로 )
         */
        oSelf.$$$$$$$$$init.apply(oSelf, arguments);
    };

    _g_.ui.mGcanvas.fInitialize.prototype = {
        ctx: {},
        $$$$$$$$$init: function () {
            this._setCanvasSize();
            this._setCanvasContext();
            this._setChartData(this);
            this._generateSampleDate(this);
            this._attachedEvent(this);
        },
        _setCanvasSize: function(){
            $('#gCanvas').width($(document).width());
            $('#gCanvas').height($(document).height() * 0.4);
        },
        _attachedEvent: function () {
            window.onload = function () {
                new Chart(this.ctx).Line(this.data, this.options);
            }.bind(this);
        },
        _setCanvasContext: function () {
            this.ctx = document.getElementById("gCanvas").getContext("2d");
        },
        _setChartData: function (oCtx) {
            this.options = {
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleShowGridLines: false,
                bezierCurve: true,
                tooltipXOffset: 1,
                tooltipCaretSize: 1,
                pointDotRadius: 1,
                pointHitDetectionRadius: 1
            }
            this.data = {
                labels: [],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: []
                    }
                ]
            };
        },
        _generateSampleDate: function (oCtx) {
            for (var nGenerateIndex = 0; nGenerateIndex < 100; nGenerateIndex++) {
                this.data.labels.push(nGenerateIndex);
                this.data.datasets[0].data[nGenerateIndex] = Math.sin(nGenerateIndex * 10);
            }
        }
    }

    new _g_.ui.mGcanvas.fInitialize();
})()