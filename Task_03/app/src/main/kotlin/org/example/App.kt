package org.example

import java.io.File
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.Serializable
import kotlinx.coroutines.*

@Serializable
data class DiscordMessage(val content: String)

suspend fun sendDiscordMessage(token: String, channelId: String, message: String) {
    val client = HttpClient(CIO) {
        install(ContentNegotiation) {
            json()
        }
    }

    val response = client.post("https://discord.com/api/v10/channels/$channelId/messages") {
        contentType(ContentType.Application.Json)
        headers {
            append(HttpHeaders.Authorization, "Bot $token")
        }
        setBody(DiscordMessage(message))
    }

    println("Discord response: ${response.status}")
    client.close()
}

fun loadEnv(): Map<String, String> {
    val envFile = File("../.env")
    return envFile.readLines()
        .filter { it.isNotBlank() && !it.startsWith("#") }
        .associate {
            val (key, value) = it.split("=", limit = 2)
            key.trim() to value.trim()
        }
}

fun main() = runBlocking {
    val env = loadEnv()
    val token = env["DISCORD_BOT_TOKEN"]
    val channelId = env["DISCORD_CHANNEL_ID"]
    val message = "✅ Hello from the Kotlin bot"

    println("DEBUG: Token being used is → '$token'")
    println("DEBUG: Channel ID being used is → '$channelId'")

    sendDiscordMessage(token!!, channelId!!, message)
}
