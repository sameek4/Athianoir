

const FeaturedProducts = [
  { title: '<h6 class = "CardOverlayText2">Runtime</h6><h6  class = "CardOverlayText1">FBX Import</h6>', src: 'Images/ThumbNails/FBXImport.png' },
  { title: '<h6  class = "CardOverlayText1" style = "margin-left:-20%; margin-top:8%;">FrameCapture</h6>', src: 'Images/ThumbNails/FrameCapture.png' },
  { title: '<h6  class = "CardOverlayText2">Post Process</h6><h6 class = "CardOverlayText1">Blendables</h6>', src: 'Images/ThumbNails/PostProcessBlendables.png' },
  { title: '<h6  class = "CardOverlayText2" style = "margin-left:-6%;">Minimap, Map and</h6><h6 class = "CardOverlayText1" style = "margin-left:-6%;"> Navigation</h6>', src: 'Images/ThumbNails/MapSystem.png' },
  { title: '<h6  class = "CardOverlayText1">MySQL</h6><h6 class = "CardOverlayText2">Integration</h6>', src: 'Images/ThumbNails/MySQL.png' },
  { title: '<h6  class = "CardOverlayText1">MSSQL</h6><h6 class = "CardOverlayText2">Integration</h6>', src: 'Images/ThumbNails/MSSQL.png' },
];



let parentdiv = document.getElementById('FBXImportDiv');
let template = document.getElementById('FeatureProducts');

FeaturedProducts.forEach(Products => {

    const node = document.importNode(template.content, true);
    node.querySelector('.title').innerHTML = Products.title;
    node.getElementById("ThumbnailImage").src = Products.src;

    parentdiv.appendChild(node);

});


document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility = "hidden";
            document.getElementById('Contents').style.visibility = "visible";
        }, 1000);
    }


}