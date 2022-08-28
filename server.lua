AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() == resourceName) then
        Wait(1000)
        TriggerClientEvent('gs-jobcenter:config', -1, Config)
    end
end)

AddEventHandler('esx:playerLoaded', function (xPlayer)
    TriggerClientEvent('gs-jobcenter:config', xPlayer.source, Config)
end)

RegisterNetEvent("gs-jobcenter:executeButtonFunction")
AddEventHandler("gs-jobcenter:executeButtonFunction", function (slideName)
    for jobSlide,jobSlideTable in pairs(Config.jobs) do
        if jobSlide == slideName then
            jobSlideTable.buttonClick(source)
        end
    end
end)
