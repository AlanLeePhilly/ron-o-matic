require 'sinatra'
require "sinatra/reloader"
require "sinatra/json"

get '*' do
  send_file File.expand_path('index.html', settings.public_folder)
end

# get '/' do
#   send_file File.expand_path('index.html', settings.public_folder)
# end
#
# get '/greeting' do
#   send_file File.expand_path('index.html', settings.public_folder)
# end
#
# get '/goodbye' do
#   send_file File.expand_path('index.html', settings.public_folder)
# end
#
# get '/custom' do
#   send_file File.expand_path('index.html', settings.public_folder)
# end
