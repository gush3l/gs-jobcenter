const jsonList = {
    "jobSlide_0": "#30D252;#00A60D",
    "jobSlide_1": "#007FFF;#318CE7",
    "jobSlide_2": "#00FF40;#03C03C",
    "jobSlide_3": "#FF00BF;#FF00FF",
    "jobSlide_4": "#FFC72C;#FFD700",
    "jobSlide_5": "#fa8100;#ee6002",
    "jobSlide_6": "#00ce77;#02eeab",
    "jobSlide_7": "#fc3d09;#ff6337",
    "jobSlide_8": "#740ee1;#b13ef2"
}

$(document).ready(function() {
    var jobSlides = document.querySelector('.jobsSlides');
    var allJobSlides = jobSlides.querySelectorAll('.jobSlide');
    var jobSlidesCount = allJobSlides.length;
    var selectedIndex = 0;
    var cellWidth = jobSlides.offsetWidth;
    var cellHeight = jobSlides.offsetHeight;
    var isHorizontal = true;
    var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    var radius, theta;

    setVisibility();
    changeCarousel();

    function rotateCarousel() {
        var angle = theta * selectedIndex * -1;
        jobSlides.style.transform = 'translateZ(' + -radius + 'px) ' +
            rotateFn + '(' + angle + 'deg)';
    }

    document.onkeyup = function(data) {
        const nextKey = isHorizontal ? "ArrowRight" : "ArrowUp"
        const prevKey = isHorizontal ? "ArrowLeft" : "ArrowDown"
        if (data.key == nextKey){
            if (selectedIndex+1 == jobSlidesCount) return;
            selectedIndex++;
            rotateCarousel();
            setVisibility();
            changeTriangleColors();
        }
        if (data.key == prevKey){
            if (selectedIndex-1 == -1) return; 
            selectedIndex--;
            rotateCarousel();
            setVisibility();
            changeTriangleColors();
        }
    };

    function changeCarousel() {
        theta = 360 / jobSlidesCount;
        var jobSlideSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round((jobSlideSize / 2) / Math.tan(Math.PI / jobSlidesCount));
        for (var i = 0; i < allJobSlides.length; i++) {
            var cell = allJobSlides[i];
            if (i < jobSlidesCount) {
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
        $("#jobSlide_"+parseInt(jobSlidesCount-1)).fadeOut(200)
        for (var i = 0; i < jobSlidesCount-1; i++){
            $("#jobSlide_"+i).fadeOut(200)
        }
        if (selectedIndex != 0) $("#jobSlide_"+parseInt(selectedIndex-1)).fadeIn(200)
        $("#jobSlide_"+parseInt(selectedIndex)).fadeIn(200)
        $("#jobSlide_"+parseInt(selectedIndex+1)).fadeIn(200)
    }

    function changeTriangleColors() {
        var colors = jsonList["jobSlide_"+selectedIndex].split(";");
        $(".triangle-down").css("border-top-color",colors[0])
        $(".triangle-up").css("border-bottom-color",colors[1])
    }

})