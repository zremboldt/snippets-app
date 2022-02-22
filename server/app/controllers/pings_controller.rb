class PingsController < ApplicationController

  # POST /pings
  def create
    render json: {status: 'SUCCESS', message: 'Pinged', data: "Pong"}, status: :ok
  end
  
end