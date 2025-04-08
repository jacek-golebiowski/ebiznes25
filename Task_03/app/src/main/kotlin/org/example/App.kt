package org.example

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.Serializable
import kotlinx.coroutines.*
import io.github.cdimascio.dotenv.dotenv

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

fun main() = runBlocking {
    val dotenv = dotenv {
        filename = "../.env"
        ignoreIfMalformed = true
        ignoreIfMissing = false
    }


    val token = dotenv["DISCORD_BOT_TOKEN"]
    val channelId = dotenv["DISCORD_CHANNEL_ID"]
    val message = "Hello from a safe and secure Kotlin bot"

    sendDiscordMessage(token, channelId, message)
}

