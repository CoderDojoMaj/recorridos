# Use a base image that already has Jupyter installed
FROM jupyter/minimal-notebook:latest

# Install Ruby and build-essential without sudo
USER root
RUN apt-get update && apt-get install -y \
    libzmq5 \
    ruby-full \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

    RUN gem install bundler iruby


# Switch back to non-root user (required by the Jupyter Docker image)
USER ${NB_USER}

# Install Bundler and IRuby

# Register IRuby kernel with Jupyter
RUN iruby register --force

# Copy your repository content into the working directory
COPY . /home/jovyan/work
WORKDIR /home/jovyan/work
