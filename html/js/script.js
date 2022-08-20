const jsonList = {
    "carousel_cell_0": "#30D252;#00A60D",
    "carousel_cell_1": "#007FFF;#318CE7",
    "carousel_cell_2": "#00FF40;#03C03C",
    "carousel_cell_3": "#FF00BF;#FF00FF",
    "carousel_cell_4": "#FFC72C;#FFD700",
    "carousel_cell_5": "#fa8100;#ee6002",
    "carousel_cell_6": "#00ce77;#02eeab",
    "carousel_cell_7": "#fc3d09;#ff6337",
    "carousel_cell_8": "#740ee1;#b13ef2"
}

$(document).ready(function() {
    var carousel = document.querySelector('.carousel');
    var cells = carousel.querySelectorAll('.carousel__cell');
    var cellCount = 9;
    var selectedIndex = 0;
    var cellWidth = carousel.offsetWidth;
    var cellHeight = carousel.offsetHeight;
    var isHorizontal = true;
    var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    var radius, theta;

    setVisibility();
    changeCarousel();

    function rotateCarousel() {
        var angle = theta * selectedIndex * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
            rotateFn + '(' + angle + 'deg)';
    }

    document.onkeyup = function(data) {
        if (data.key == "ArrowRight"){
            if (selectedIndex+1 == cellCount) return;
            selectedIndex++;
            rotateCarousel();
            setVisibility();
            changeTriangleColors();
        }
        if (data.key == "ArrowLeft"){
            if (selectedIndex-1 == -1) return; 
            selectedIndex--;
            rotateCarousel();
            setVisibility();
            changeTriangleColors();
        }
    };

    function changeCarousel() {
        theta = 360 / cellCount;
        var cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            if (i < cellCount) {
                cell.style.opacity = 1;
                var cellAngle = theta * i;
                cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
            } else {
                cell.style.opacity = 0;
                cell.style.transform = 'none';
            }
        }

        rotateCarousel();
    }

    function setVisibility(){
        $("#carousel_cell_"+parseInt(cellCount-1)).fadeOut(200)
        for (var i = 0; i < cellCount-1; i++){
            $("#carousel_cell_"+i).fadeOut(200)
        }
        if (selectedIndex != 0) $("#carousel_cell_"+parseInt(selectedIndex-1)).fadeIn(200)
        $("#carousel_cell_"+parseInt(selectedIndex)).fadeIn(200)
        $("#carousel_cell_"+parseInt(selectedIndex+1)).fadeIn(200)
    }

    function changeTriangleColors() {
        var colors = jsonList["carousel_cell_"+selectedIndex].split(";");
        $(".triangle-down").css("border-top-color",colors[0])
        $(".triangle-up").css("border-bottom-color",colors[1])
    }

})