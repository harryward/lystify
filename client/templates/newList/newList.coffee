Template.newList.events
    "change input[type='file']": (e) ->
        files = e.currentTarget.files

        Cloudinary.upload files,
            folder:"mors" # optional parameters described in http://cloudinary.com/documentation/upload_images#remote_upload
            (err,res) -> #optional callback, you can catch with the Cloudinary collection as well
                console.log "Upload Error: #{err}"
                console.log {res}
                Session.set "featuredImage", {res}
