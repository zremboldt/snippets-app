module Api
  module V1
    class CollectionsController < ApplicationController
      # Access this with a GET request to: http://localhost:3000/api/v1/collections
      def index
        collections = Collection.order('created_at DESC');
        render json: {status: 'SUCCESS', message: 'Loaded collections', data: collections}, status: :ok
      end
      
      # Access this with a GET request to: http://localhost:3000/api/v1/collections/1
      def show
        collection = Collection.find(params[:id])
        associated_snippets = collection.snippets.order('created_at DESC');

        associated_snippets_with_images = associated_snippets.map do |snippet|
          {
            id: snippet.id,
            title: snippet.title,
            note: snippet.note,
            link: snippet.link,
            image_width: snippet.image_width,
            image_height: snippet.image_height,
            image: snippet.image.attached? ? url_for(snippet.image) : nil
          }
        end
        
        data = {
          collection: collection,
          snippets: associated_snippets_with_images
        }

        render json: {status: 'SUCCESS', message: 'Loaded collection', data: data}, status: :ok
      end

      # Access this with a POST request to: http://localhost:3000/api/v1/collections/
      def create
        collection = Collection.new(collection_params)
        
        if collection.save
          render json: {status: 'SUCCESS', message: 'Saved collection', data: collection}, status: :ok
        else
          render json: {status: 'ERROR', message: 'Collection not saved', data: collection.errors}, status: :unprocessable_entity
        end
      end

      # Access this with a DELETE request to: http://localhost:3000/api/v1/collections/1
      def destroy
        collection = Collection.find(params[:id])
        collection.destroy
      end

      # Access this with a PUT request to: http://localhost:3000/api/v1/collections/1
      def update
        collection = Collection.find(params[:id])
        if collection.update(collection_params)
          render json: {status: 'SUCCESS', message: 'Updated collection', data: collection}, status: :ok
        else
          render json: {status: 'ERROR', message: 'Collection not updated', data: collection.errors}, status: :unprocessable_entity
        end
      end

      private

      def collection_params
        params.permit(:name)
      end
    end
  end
end