// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::{fs, string};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Config {
    theme: String
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn set_theme(trade_theme: &str) -> Result<(), String> {
    let config = dirs::home_dir()
        .unwrap()
        .join("BedrockIDE")
        .join("Config")
        .join("config.json");

    let view_config_json =
        fs::read_to_string(&config).map_err(|e| e.to_string())?;

    let mut config_json: Config =
        serde_json::from_str(&view_config_json).map_err(|e| e.to_string())?;

    config_json.theme = trade_theme.to_string();

    let json =
        serde_json::to_string_pretty(&config_json).map_err(|e| e.to_string())?;

    fs::write(&config, json).map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
fn get_theme() -> Result<String, String> {
    let config = dirs::home_dir()
        .unwrap()
        .join("BedrockIDE")
        .join("Config")
        .join("config.json");

    let conteudo = std::fs::read_to_string(config)
        .map_err(|e| e.to_string())?;

    let config: Config = serde_json::from_str(&conteudo)
        .map_err(|e| e.to_string())?;

    Ok(config.theme)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, set_theme, get_theme])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
