console.log("hello world ")
const alertBox = document.getElementById('alert-box')
const imgbox = document.getElementById('image-box')
const imgform = document.getElementById('image-form')
console.log(imgform)
const confirmbtn = document.getElementById('confirm-btn')
const input = document.getElementById('id_img_file')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

input.addEventListener('change', ()=>{
    console.log('changed')

    confirmbtn.classList.remove('not-visible')
    const img_data = input.files[0]
    const url = URL.createObjectURL(img_data)
    imgbox.innerHTML = `<img src="${url}" id="image" width="400px">`

    // const image = document.getElementById('image')
    var $image = $('#image');

    // console.log('js',image)
    console.log('jquery',$image)
    $image.cropper({
    aspectRatio: 16 / 16,
    crop: function(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
    }
    });

    
    // Get the Cropper.js instance after initialized
    var cropper = $image.data('cropper');

    confirmbtn.addEventListener('click', ()=>{
        cropper.getCroppedCanvas().toBlob((blob)=>{
            const fd = new FormData()
            fd.append('csrfmiddlewaretoken', csrf[0].value)
            fd.append('img_file', blob, 'my-image.png')

            $.ajax({
                type:"POST",
                url: imgform.action,
                enctype: 'multipart/form-data',
                data:fd,
                success: function(response){
                    console.log(response)
                    alertBox.innerHTML='<div class="alert alert-success" role="alert"> cropped and saved Successfully</div>'
                },
                error:function(error) {
                    console.log(error)
                    alertBox.innerHTML='<div class="alert alert-danger" role="alert">An Error Occured</div>'
                },
                cache: false,
                contentType:false,
                processData:false,
            })
        })
    })
})





