class PingsController < ApplicationController

  # GET /pings
  def index
    # render json: {status: 'SUCCESS', message: 'Pinged GET', data: "Pong"}, status: :ok
  end
  
  # POST /pings
  def create
    render json: {status: 'SUCCESS', message: 'PONG', data: {}}, status: :ok
  end
end