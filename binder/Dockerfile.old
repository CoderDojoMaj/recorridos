FROM jupyter/base-notebook

# Install Ruby and Bundler
RUN sudo apt-get update && sudo apt-get install -y ruby-full build-essential
RUN gem install bundler

# Install IRuby and dependencies
COPY Gemfile /tmp/
WORKDIR /tmp
RUN bundle install
RUN iruby register --force

# Copy the rest of the repository content
COPY . /home/jovyan/work/
WORKDIR /home/jovyan/work/

# Make sure postBuild is executable
RUN chmod +x binder/postBuild
