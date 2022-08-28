AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() == resourceName) then
        TriggerClientEvent('gs-jobcenter:config', -1, Config.jobs)
    end
end)

AddEventHandler("playerJoining", function (source)
    TriggerClientEvent('gs-jobcenter:config', source, Config.jobs)
end)