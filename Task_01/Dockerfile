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

# Install Kotlin manually
RUN curl -LO https://github.com/JetBrains/kotlin/releases/download/v1.9.10/kotlin-compiler-1.9.10.zip && \
    apt-get install -y unzip && \
    unzip kotlin-compiler-1.9.10.zip -d /opt/kotlin && \
    ln -s /opt/kotlin/kotlinc/bin/* /usr/local/bin/