Config = {}

Config.isHorizontal = true

Config.jobs = {
    jobSlide_0 = {
        jobName = "Job Slide 1",
        jobDescription = "This is the description of **Job Slide 1** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#30D252",
            up = "#00A60D"
        },
        buttonClick = function (source)
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"Miner"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 1!", 5000, "info")
        end
    },
    jobSlide_1 = {
        jobName = "Job Slide 2",
        jobDescription = "This is the description of **Job Slide 2** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#007FFF",
            up = "#318CE7"
        },
        buttonClick = function (source)
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"smurd"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 2!", 5000, "info")
        end
    },
    jobSlide_2 = {
        jobName = "Job Slide 3",
        jobDescription = "This is the description of **Job Slide 3** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://i.ytimg.com/vi/WsYH-8EJ2Oc/maxresdefault.jpg",
        triangleColors = {
            down = "#00FF40",
            up = "#03C03C"
        },
        buttonClick = function ()
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"Curva"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 3!", 5000, "info")
        end
    },
    jobSlide_3 = {
        jobName = "Job Slide 4",
        jobDescription = "This is the description of **Job Slide 4** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#FF00BF",
            up = "#FF00FF"
        },
        buttonClick = function ()
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"McDonald"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 4!", 5000, "info")
        end
    },
    jobSlide_4 = {
        jobName = "Job Slide 5",
        jobDescription = "This is the description of **Job Slide 5** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#FFC72C",
            up = "#FFD700"
        },
        buttonClick = function ()
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"Electrician"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 5!", 5000, "info")
        end
    },
    jobSlide_5 = {
        jobName = "Job Slide 6",
        jobDescription = "This is the description of **Job Slide 6** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#fa8100",
            up = "#ee6002"
        },
        buttonClick = function ()
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"Taxi"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 6!", 5000, "info")
        end
    },
    jobSlide_6 = {
        jobName = "Job Slide 7",
        jobDescription = "This is the description of **Job Slide 7** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#00ce77",
            up = "#02eeab"
        },
        buttonClick = function ()
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"Avocat"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 7!", 5000, "info")
        end
    },
    jobSlide_7 = {
        jobName = "Job Slide 8",
        jobDescription = "This is the description of **Job Slide 8** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#fc3d09",
            up = "#ff6337"
        },
        buttonClick = function ()
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"UPS"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 8!", 5000, "info")
        end
    },
    jobSlide_8 = {
        jobName = "Job Slide 9",
        jobDescription = "This is the description of **Job Slide 1** and it's *very* very **very** # COOL!",
        jobImagePreview = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
        triangleColors = {
            down = "#740ee1",
            up = "#b13ef2"
        },
        buttonClick = function ()
            local user_id = vRP.getUserId({source})
            vRP.addUserGroup({user_id,"Somer"})
            TriggerClientEvent("gs-notify:SendNotification",tostring(source), "Info Notification", "You joined the job associated with the job slide 9!", 5000, "info")
        end
    }
}
