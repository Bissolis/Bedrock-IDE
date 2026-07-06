// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod paths;

fn main(){
    paths::create_config().expect("erro ao criar as pastas");
    bedrockide_lib::run();
}