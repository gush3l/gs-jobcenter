local display = false

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        action = "ui",
        status = bool,
    })
end

RegisterNetEvent("gs-jobcenter:config")
AddEventHandler("gs-jobcenter:config", function (config)
    SendNUIMessage({
        action = "sendConfig",
        config = json.encode(config.jobs),
        isHorizontal = config.isHorizontal
    })
end)

RegisterNUICallback("exit", function()
    TriggerScreenblurFadeOut(750)
    SetDisplay(false)
end)

RegisterNUICallback("clickedButton", function(data)
    SetDisplay(false)
    TriggerScreenblurFadeOut(750)
    TriggerServerEvent("gs-jobcenter:executeButtonFunction", data.slideName)
end)

RegisterCommand("jobcenter", function ()
    SetDisplay(not display)
    if display then
        TriggerScreenblurFadeIn(750)
    else
        TriggerScreenblurFadeOut(750)
    end
end, false)

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        DisableControlAction(0, 1, display)
        DisableControlAction(0, 2, display)
        DisableControlAction(0, 142, display)
        DisableControlAction(0, 18, display)
        DisableControlAction(0, 322, display)
        DisableControlAction(0, 106, display)
    end
end)