AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() == resourceName) then
        Wait(1000)
        TriggerClientEvent('gs-jobcenter:config', -1, Config)
    end
end)

AddEventHandler("playerJoining", function (source)
    TriggerClientEvent('gs-jobcenter:config', source, Config)
end)

RegisterNetEvent("gs-jobcenter:executeButtonFunction")
AddEventHandler("gs-jobcenter:executeButtonFunction", function (slideName)
    for jobSlide,jobSlideTable in pairs(Config.jobs) do
        if jobSlide == slideName then
            jobSlideTable.buttonClick(source)
        end
    end
end)