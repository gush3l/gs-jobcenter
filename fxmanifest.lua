fx_version 'adamant'
game 'gta5'

author "gush3l"
description "Beautiful modern UI job center!"
version '1.0.0'
ui_page "html/main.html"

lua54 'yes'

shared_scripts {
    '@es_extended/imports.lua',
}

client_scripts {
    'client.lua'
}

server_scripts {
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
