RegisterNetEvent("gs-jobcenter:config")
AddEventHandler("gs-jobcenter:config", function (config)
    SendNUIMessage({
        action = "sendConfig",
        config = json.encode(config)
    })
end)