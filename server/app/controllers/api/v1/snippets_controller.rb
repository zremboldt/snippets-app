module Api
  module V1
    class SnippetsController < ApplicationController
      # Access this with a GET request to: http://localhost:3000/api/v1/snippets
      def index
        snippets = Snippet.order('created_at DESC');

        snippets_with_images = snippets.map do |snippet|
          {
            id: snippet.id,
            title: snippet.title,
            note: snippet.note,
            link: snippet.link,
            labels: snippet.labels,
            image_width: snippet.image_width,
            image_height: snippet.image_height,
            image: snippet.image.attached? ? url_for(snippet.image) : nil
          }
        end

        render json: {status: 'SUCCESS', message: 'Loaded snippets', data: snippets_with_images}, status: :ok
      end
      
      # Access this with a GET request to: http://localhost:3000/api/v1/snippets/1
      def show
        snippet = Snippet.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded snippet', data: snippet}, status: :ok
      end

      # Access this with a POST request to: http://localhost:3000/api/v1/snippets/
      def create
        snippet = Snippet.new(snippet_params)

        if params[:image].present?
          snippet.image.attach(params[:image])
        end
        
        if snippet.save
          AnalyzeImageJob.perform_later snippet.id

          render json: {status: 'SUCCESS', message: 'Saved snippet', data: snippet}, status: :ok
        else
          render json: {status: 'ERROR', message: 'Snippet not saved', data: snippet.errors}, status: :unprocessable_entity
        end
      end

      # Access this with a DELETE request to: http://localhost:3000/api/v1/snippets/1
      def destroy
        snippet = Snippet.find(params[:id])
        snippet.destroy
      end

      # Access this with a PUT request to: http://localhost:3000/api/v1/snippets/1
      def update
        snippet = Snippet.find(params[:id])
        if snippet.update(snippet_params)
          render json: {status: 'SUCCESS', message: 'Updated snippet', data: snippet}, status: :ok
        else
          render json: {status: 'ERROR', message: 'Snippet not updated', data: snippet.errors}, status: :unprocessable_entity
        end
      end

      private

      def snippet_params
        params.permit(:title, :note, :link, :image_width, :image_height, :image, :collection_id)
      end
    end
  end
end