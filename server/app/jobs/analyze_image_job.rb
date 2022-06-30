class AnalyzeImageJob < ApplicationJob
  queue_as :default

  def perform(snippet_id)
    snippet = Snippet.find snippet_id

    client = Aws::Rekognition::Client.new
    
    response = client.detect_labels({
      image: {
        bytes: snippet.image.download,
      }, 
      max_labels: 10, 
      min_confidence: 70, 
    })

    response.labels.each do |label|
      Label.create name: label.name, snippet: snippet
    end
  end
end
