FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# Install Python 3.10 + base utils
RUN rm -rf /var/lib/apt/lists/* && \
    apt-get clean && \
    apt-get update -o Acquire::CompressionTypes::Order::=gz && \
    apt-get install -y --fix-missing python3 python3-pip curl gnupg2 software-properties-common unzip zip


# Install Java 8
RUN apt-get update --fix-missing && \
    apt-get install -y openjdk-8-jdk && \
    apt-get clean

# Install Kotlin
RUN curl -LO https://github.com/JetBrains/kotlin/releases/download/v1.9.10/kotlin-compiler-1.9.10.zip && \
    apt-get install -y unzip && \
    unzip kotlin-compiler-1.9.10.zip -d /opt/kotlin && \
    ln -s /opt/kotlin/kotlinc/bin/* /usr/local/bin/

# Install Gradle
COPY gradle-8.7-bin.zip /tmp/

RUN apt-get install -y unzip && \
    unzip /tmp/gradle-8.7-bin.zip -d /opt/gradle && \
    ln -s /opt/gradle/gradle-8.7/bin/gradle /usr/local/bin/gradle

COPY app /app
WORKDIR /app
