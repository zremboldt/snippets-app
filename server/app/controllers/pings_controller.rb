class PingsController < ApplicationController

  # POST /pings or /pings.json
  def create
    puts 'Hello world'
  end

  private
    # Only allow a list of trusted parameters through.
    def ping_params
      params.fetch(:ping, {})
    end
end
