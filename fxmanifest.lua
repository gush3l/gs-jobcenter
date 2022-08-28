fx_version 'adamant'
game 'gta5'

author "gush3l"
description "Beautiful modern UI job center!"
version '1.1.0'
ui_page "html/main.html"

lua54 'yes'

client_scripts {
    'client.lua'
}

server_scripts {
    "@vrp/lib/utils.lua",
    'server.lua',
    'config.lua'
}

files {
    'html/main.html',
    'html/js/*.js',
    'html/css/*.css',
    'html/css/fonts/*.woff',
    'html/css/assets/*.png'

}

escrow_ignore {
  '*.lua'
}
