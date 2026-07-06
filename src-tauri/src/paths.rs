use std::fs;
use serde::{Deserialize, Serialize};
use tauri::utils::config;

#[derive(Serialize, Deserialize)]
struct Config {
    theme: String,
}

pub fn create_config() -> std::io::Result<()> {
    if let Some(home) = dirs::home_dir() {
        let config_dir = home.join("BedrockIDE").join("Config");
        fs::create_dir_all(&config_dir)?;

        let config = config_dir.join("config.json");

        if !config.exists() {
            fs::write(
                &config,
                r#"{
    "theme": "dark"
}"#,
            )?;
        }

        let conteudo = fs::read_to_string(&config)?;
        let config_json: Config = serde_json::from_str(&conteudo)?;

        println!("Tema: {}", config_json.theme);
    }

    Ok(())
}