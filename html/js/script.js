

// Inspired by https://codepen.io/desandro/pen/wjeBpp


$(document).ready(function() {
    var jsonList
    var jsonListLenght
    var jobSlides
    var allJobSlides
    var jobSlidesCount
    var selectedIndex = 0
    var cellWidth
    var cellHeight
    var isHorizontal = true;
    var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    var radius, theta;

    window.addEventListener('message', (event) => {
        let data = event.data
        if(data.action == 'sendConfig') {
            jsonList = data.config
            jsonListLenght = Object.keys(jsonList).length;
            initiate();
        }
    })

    function initiate(){
        createSlidesContent();
        jobSlides = document.querySelector('.jobsSlides');
        allJobSlides = jobSlides.querySelectorAll('.jobSlide');
        jobSlidesCount = jsonListLenght;
        cellWidth = jobSlides.offsetWidth;
        cellHeight = jobSlides.offsetHeight;
        setVisibility();
        changeCarousel();
    }

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
        var colors = jsonList["jobSlide_"+selectedIndex]["triangleColors"];
        $(".backgroundGradient").css("--colorUp",colors["up"])
        $(".backgroundGradient").css("--colorDown",colors["down"])
        $(".jobCenterMainText").css("--colorUp",colors["up"])
        $(".jobCenterMainText").css("--colorDown",colors["down"])
    }

    function createSlidesContent() {
        for (var i = 0; i < jsonListLenght; i++){
            var jsonObject = jsonList["jobSlide_"+i]

            var jobSlideContainer = document.createElement('div')
            jobSlideContainer.id = "jobSlide_"+i
            jobSlideContainer.className = "jobSlide"

            var jobSlideName = document.createElement('div')
            jobSlideName.id = "jobSlideName_"+i
            jobSlideName.className = "jobSlideName"
            jobSlideName.innerHTML = "<p>%jobName%</p>".replaceAll("%jobName%",marked.parse(jsonObject["jobName"]))
            jobSlideContainer.appendChild(jobSlideName)

            var jobImage = document.createElement('div')
            jobImage.id = "jobPreviewImage_"+i
            jobImage.className = "jobPreviewImage"
            jobImage.style.backgroundImage = jsonObject["jobImagePreview"]
            jobSlideContainer.appendChild(jobImage)

            var jobDescription = document.createElement('div')
            jobDescription.id = "jobDescription_"+i
            jobDescription.className = "jobDescription"
            jobDescription.innerHTML = marked.parse(jsonObject["jobDescription"])
            jobSlideContainer.appendChild(jobDescription)

            var jobJoinButton = document.createElement('button')
            jobJoinButton.id = "joinButton_"+i
            jobJoinButton.className = "joinButton"
            jobJoinButton.setAttribute("role","button")
            jobJoinButton.innerHTML = '<span>Join this job</span>'
            jobJoinButton.style.backgroundImage = 'linear-gradient(147deg, '+jsonObject["triangleColors"]["down"]+', '+jsonObject["triangleColors"]["up"]+')'
            jobSlideContainer.appendChild(jobJoinButton)

            document.getElementById("jobSlides").appendChild(jobSlideContainer)
        }
    }

})