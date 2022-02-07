
        $(document).ready(function () {

            var zoomImg = document.getElementById("zoomimgage");
            var imgageWidth = zoomImg.width;
            var imgageHeight = zoomImg.height;

            $("#product").on("click", function () {
                $("#zoomimgage").add(".closeimg").add(".zoomIn-img").add(".zoomOut-img").fadeIn('fast');
            })
            $(".closeimg").on("click", function () {
                $("#zoomimgage").add(".closeimg").add(".zoomIn-img").add(".zoomOut-img").fadeOut('fast');
                zoomImg.width = 200;
                zoomImg.height = 200;
            })

            $(".zoomIn-img").on("click", function () {
                if (imgageWidth < 2000) {
                    imgageWidth += 100;
                    zoomImg.width = imgageWidth;
                    imgageHeight += 50;
                    zoomImg.height = imgageHeight;
                }
            })
            $(".zoomOut-img").on("click", function () {
                if (imgageWidth > 300) {
                    imgageWidth -= 100;
                    zoomImg.width = imgageWidth;
                    imgageHeight -= 50;
                    zoomImg.height = imgageHeight;
                }
            })

        })

