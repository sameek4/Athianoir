

const FeaturedProducts = [

    {
        title: '<h6 class = "CardOverlayText2">Runtime</h6><h6  class = "CardOverlayText1">FBX Import</h6>',
        src: 'Images/ThumbNails/FBXImport.png',
        OfficialSite: 'FBXImport.html',
        DownloadLink: 'https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous',
        DocumentationLink: 'Doc_FBXImport.html',
        DiscordLink: 'https://discord.gg/hsejuTW'

    },

    {
        title: '<h6  class = "CardOverlayText1" style = "margin-left:-10%; margin-top:4%;">FrameCapture</h6>',
        src: 'Images/ThumbNails/FrameCapture.png',
        OfficialSite: 'FBXImport.html',
        DownloadLink: 'https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous',
        DocumentationLink: 'Doc_FBXImport.html',
        DiscordLink: 'https://discord.gg/hsejuTW'
    },

    {
        title: '<h6  class = "CardOverlayText1" style = "margin-left:10px; margin-top:4%;">Microsoft SQL</h6><h6 class = "CardOverlayText2" style = "margin-left:-20px; margin-right:-20px;">Integration for Unreal</h6>',
        src: 'Images/ThumbNails/MSSQL.png',
        OfficialSite: 'FBXImport.html',
        DownloadLink: 'https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous',
        DocumentationLink: 'Doc_FBXImport.html',
        DiscordLink: 'https://discord.gg/hsejuTW'
    },


    {

        title: '<h6  class = "CardOverlayText2">Post Process</h6><h6 class = "CardOverlayText1">Blendables</h6>',
        src: 'Images/ThumbNails/PostProcessBlendables.png',
        OfficialSite: 'FBXImport.html',
        DownloadLink: 'https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous',
        DocumentationLink: 'Doc_FBXImport.html',
        DiscordLink: 'https://discord.gg/hsejuTW'
    },

    {
        title: '<h6  class = "CardOverlayText1" style = "margin-left:10px;  margin-top:4%;">MySQL</h6><h6 class = "CardOverlayText2" style = "margin-left:-20px; margin-right:-20px;">Integration for Unreal</h6>',
        src: 'Images/ThumbNails/MySQL.png',
        OfficialSite: 'FBXImport.html',
        DownloadLink: 'https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous',
        DocumentationLink: 'Doc_FBXImport.html',
        DiscordLink: 'https://discord.gg/hsejuTW'
    },

    {
        title: '<h6  class = "CardOverlayText2" style = "margin-left:-6%;">Minimap, Map and</h6><h6 class = "CardOverlayText1" style = "margin-left:-6%;"> Navigation</h6>',
        src: 'Images/ThumbNails/MapSystem.png',
        OfficialSite: 'FBXImport.html',
        DownloadLink: 'https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous',
        DocumentationLink: 'Doc_FBXImport.html',
        DiscordLink: 'https://discord.gg/hsejuTW'
    }

];



let parentdiv = document.getElementById('FeatureProductsDiv');
let template = document.getElementById('FeatureProducts');

FeaturedProducts.forEach(Products => {

    const node = document.importNode(template.content, true);
    node.querySelector('.title').innerHTML = Products.title;
    node.getElementById("ThumbnailImage").src = Products.src;
    node.getElementById("ImageCardLink").href = Products.OfficialSite;

    node.getElementById("DownloadLink").href = Products.DownloadLink;
    node.getElementById("DocumentationLink").href = Products.DocumentationLink;
    node.getElementById("DiscordLink").href = Products.DiscordLink;

    parentdiv.appendChild(node);

});


