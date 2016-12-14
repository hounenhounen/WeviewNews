// JavaScript source code
var news_element;
var YOUR_APP_KEY = "YOUR_APP_KEY";
var YOUR_CLIENT_KEY = "YOUR_CLIENT_KEY";
var ncmb;


function DocumentReadyStateInteractiveFunc(e) {
    news_element = document.getElementById('content');
    ncmb = new NCMB(YOUR_APP_KEY, YOUR_CLIENT_KEY);
    ncmb.File.download("mBaaS_image.png",'blob')
        .then(function(fileData){
            var img = document.createElement('img');
            var reader = new FileReader();
            news_element.appendChild(img);
            blobToDataURL(fileData,function(dataurl){
                img.src = dataurl;
            });

        })
        .catch(function(err){
            console.log(err);
        })

}


// Wait construct DOM
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", DocumentReadyStateInteractiveFunc);
}

//**blob to dataURL**
function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}
